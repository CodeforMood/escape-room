import { store } from '../store';
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

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
