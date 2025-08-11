export interface IGoogleDriveFolder {
  id: string;
  name: string;
  mimeType: string;
  hasThumbnail: boolean;
}

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
  files: (IGoogleDriveVideo | IGoogleDriveFolder)[];
}

export interface IGoogleDriveCategorizedVideos {
  [folderId: string]: {
    folderName: string;
    videos: IGoogleDriveVideo[];
  };
}

export interface IGoogleDriveCategory {
  id: string;
  name: string;
}
