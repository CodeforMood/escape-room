import { store } from '../store';
import { BookingQuestData } from './booking-quest-data';
import { CurrentQuest } from './current-quest';
import { MyQuest } from './my-quest';
import { Quest } from './quest';

export type AuthorizationUserProcess = {
  authorizationStatus: string;
}

export type QuestsData = {
  isQuestsDataLoading: boolean;
  quests: Quest[];
  filteredQuests: Quest[];
  currentTypeFilter: string;
  currentLevelFilter: string;
}

export type MyQuestsData = {
  isMyQuestsDataLoading: boolean;
  myQuests: MyQuest[];
}

export type CurrentQuestData = {
  quest: CurrentQuest | null;
  isQuestDataLoading: boolean;
}

export type BookingData = {
  bookingQuestData: BookingQuestData[];
  isBookingQuestDataLoading: boolean;
  currentBookingQuestId: string | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
