import { v2 as cloudinary } from "cloudinary";

export function getThumbnailUrl(videoUrl: string, second = 1, width = null) {
  try {
    // Replace video format (.mp4, .webm, etc.) with .jpg
    let thumbnailUrl = videoUrl
      .replace(/\/video\/upload\//, `/video/upload/so_${second}/`)
      .replace(/\.[a-zA-Z0-9]+$/, ".jpg");

    // Add optional width transformation
    if (width) {
      thumbnailUrl = thumbnailUrl.replace(
        `/so_${second}/`,
        `/so_${second},w_${width}/`
      );
    }

    return thumbnailUrl;
  } catch (error) {
    console.error("Invalid Cloudinary video URL");
    return "";
  }
}

cloudinary.config({
  cloud_name: "drjmcqioi",
  api_key: "274684926872611",
  api_secret: "fnwXVADW1lxfGuyPSWnoO2tjoAY",
});

interface ICloudinaryRes {
  asset_id: string;
  public_id: string;
  format: "mp4";
  version: number;
  resource_type: "video";
  type: "upload";
  created_at: Date;
  bytes: number;
  width: number;
  height: number;
  asset_folder: string;
  display_name: string;
  url: string;
  secure_url: string;
}

export interface ICloudinaryVid {
  id: string;
  displayName: string;
  thumbnail: string;
  video: string;
}

// List assets
export const fetchCloudinaryVideos = async (): Promise<ICloudinaryVid[]> => {
  try {
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.api.resources(
        { resource_type: "video", type: "upload", max_results: 10 },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });

    return (result.resources as ICloudinaryRes[]).map((r) => ({
      id: r.asset_id + r.public_id + r.asset_folder,
      displayName: r.display_name,
      thumbnail: getThumbnailUrl(r.url),
      video: r.url,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
