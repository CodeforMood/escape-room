import {SlicesName} from '../../const';
import { Quest } from '../../types/quest';
import {State} from '../../types/state';

export const getQuestsData = (state: State): Quest[] => state[SlicesName.QuestsData].quests;
export const getQuestsDataLoadingStatus = (state: State): boolean => state[SlicesName.QuestsData].isQuestsDataLoading;
export const getFilteredQuests = (state: State): Quest[] => state[SlicesName.QuestsData].filteredQuests;
