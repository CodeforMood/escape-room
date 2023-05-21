import { Quest } from './quest';

export type CurrentQuest = Quest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
}
