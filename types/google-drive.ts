export interface IGoogleDriveVideo {
  id: string;
  name: string;
  mimeType: string;
  previewLink: string;
  hasThumbnail: boolean;
  thumbnailLink?: string;
  videoMediaMetadata: {
    width: number;
    height: number;
    durationMillis: string;
  };
}

export interface IGoogleDriveResponse {
  files: IGoogleDriveVideo[];
}
