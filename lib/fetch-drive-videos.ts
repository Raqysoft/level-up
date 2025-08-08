import { IGoogleDriveResponse, IGoogleDriveVideo } from "@/types/google-drive";

export const fetchGoogleDriveVideos = async (): Promise<
  IGoogleDriveVideo[]
> => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;
  const fetchConfig = { next: { revalidate: 60 * 60 } };
  const FIELDS = [
    "id",
    "name",
    "mimeType",
    "hasThumbnail",
    "thumbnailLink",
    "videoMediaMetadata",
  ];

  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(${FIELDS.join(
    ","
  )})`;

  const res = await fetch(url, fetchConfig);
  if (!res.ok) throw new Error(`Google Drive API error: ${res.status}`);

  const data: IGoogleDriveResponse = await res.json();
  return data.files.filter((f) => f.hasThumbnail);
};
