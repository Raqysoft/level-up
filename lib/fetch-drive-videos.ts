import {
  IGoogleDriveResponse,
  IGoogleDriveVideo,
  IGoogleDriveFolder,
  IGoogleDriveCategorizedVideos,
} from "@/types/google-drive";

export const fetchGoogleDriveFolders = async (): Promise<
  IGoogleDriveFolder[]
> => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

    if (!API_KEY || !FOLDER_ID) {
      throw new Error("Missing required environment variables");
    }

    const fetchConfig = { next: { revalidate: 60 * 60 } };
    const FIELDS = ["id", "name", "mimeType", "hasThumbnail"];

    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(${FIELDS.join(
      ","
    )})`;

    const res = await fetch(url, fetchConfig);
    if (!res.ok) throw new Error(`Google Drive API error: ${res.status}`);

    const data: IGoogleDriveResponse = await res.json();
    return data.files as IGoogleDriveFolder[];
  } catch (error) {
    console.error("Error fetching folders:", error);
    return [];
  }
};

export const fetchFolderVideos = async (
  folderId: string
): Promise<IGoogleDriveVideo[]> => {
  try {
    if (!folderId) {
      throw new Error("Folder ID is required");
    }

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    if (!API_KEY) {
      throw new Error("Missing API key");
    }

    const fetchConfig = { next: { revalidate: 60 * 60 } };
    const FIELDS = [
      "id",
      "name",
      "mimeType",
      "hasThumbnail",
      "thumbnailLink",
      "videoMediaMetadata",
    ];

    // First check if the folder exists and is actually a folder
    const folderCheckUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(${FIELDS.join(
      ","
    )})`;
    const folderRes = await fetch(folderCheckUrl, fetchConfig);

    const folderData: IGoogleDriveResponse = await folderRes.json();

    return (folderData.files || []) as IGoogleDriveVideo[];
  } catch (error) {
    console.error(`Error fetching videos from folder ${folderId}:`, error);
    return [];
  }
};

export const fetchAllVideos = async (): Promise<IGoogleDriveVideo[]> => {
  try {
    const folders = await fetchGoogleDriveFolders();
    if (!folders.length) {
      return [];
    }

    const videoPromises = folders.map(async (folder) => {
      const videos = await fetchFolderVideos(folder.id);
      return videos;
    });

    const videosArrays = await Promise.all(videoPromises);
    return videosArrays.flat();
  } catch (error) {
    console.error("Error fetching all videos:", error);
    return [];
  }
};

export const fetchCategorizedVideos =
  async (): Promise<IGoogleDriveCategorizedVideos> => {
    try {
      const folders = await fetchGoogleDriveFolders();
      if (!folders.length) {
        return {};
      }

      const videoPromises = folders.map(async (folder) => {
        const videos = await fetchFolderVideos(folder.id);
        return { folder, videos };
      });

      const results = await Promise.all(videoPromises);

      return results.reduce((acc, { folder, videos }) => {
        if (videos.length > 0) {
          acc[folder.id] = {
            folderName: folder.name,
            videos,
          };
        }
        return acc;
      }, {} as IGoogleDriveCategorizedVideos);
    } catch (error) {
      console.error("Error fetching categorized videos:", error);
      return {};
    }
  };
