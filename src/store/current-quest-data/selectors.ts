import {SlicesName} from '../../const';
import { CurrentQuest } from '../../types/current-quest';
import {State} from '../../types/state';

export const getCurrentQuestData = (state: State): CurrentQuest | null => state[SlicesName.CurrentQuestData].quest;
export const getCurrentQuestDataLoadingStatus = (state: State): boolean => state[SlicesName.CurrentQuestData].isQuestDataLoading;
