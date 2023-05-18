import { Quest } from "./quest";

export interface QuestInfo extends Quest {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
