import {SlicesName} from '../../const';
import { Quest } from '../../types/quest';
import {State} from '../../types/state';

export const getQuestsData = (state: State): Quest[] => state[SlicesName.QuestsData].quests;
export const myQuestsDataLoadingStatus = (state: State): boolean => state[SlicesName.QuestsData].isQuestsDataLoading;