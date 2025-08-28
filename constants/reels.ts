import { getThumbnailUrl, ICloudinaryVid } from "@/lib/fetch-cloudinary-videos";

const URLS = [
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370562/Copy_of_acai_ibtxqh.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370537/Copy_of_acai_m9gqkd.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370488/Copy_of_gaming_12-8_ngjago.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370488/Copy_of_You_have_to_subscribe_ltwteo.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370488/Copy_of_Priority_e7wnit.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370487/Copy_of_Top_3_super_hero_games_rlfva1.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370126/Copy_of_cafe_v70u4h.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756370125/Copy_of_cafe_ohvl1u.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369910/Copy_of_acai_ydwlyg.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369910/Copy_of_3_ylvofy.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369909/Copy_of_4_fqug64.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369908/Copy_of_cafe_1_efbaqr.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369868/Copy_of_Copy_of_ROUSE_ib6inw.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369868/Copy_of_Copy_of_mount_g4klkh.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369868/Copy_of_Copy_of_sultan_ecfldd.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369868/Copy_of_flower_1_zgpypl.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369868/Copy_of_Copy_of_sultan_ckbbzu.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369866/Copy_of_Copy_of_rouse_hymtyx.mp4",
  "https://res.cloudinary.com/drjmcqioi/video/upload/v1756369771/Copy_of_Copy_of_kebab_waw7xj.mp4",
];

export interface IReal {
  cover: string;
  videoId: string;
}

export const REELS: ICloudinaryVid[] = URLS.map((url, ix) => ({
  id: ix + url.split("/")[url.length - 2],
  displayName: url.split(".")[url.length - 2],
  thumbnail: getThumbnailUrl(url),
  video: url,
}));
