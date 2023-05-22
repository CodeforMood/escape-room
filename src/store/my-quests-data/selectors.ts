import {SlicesName} from '../../const';
import { MyQuest } from '../../types/my-quest';
import {State} from '../../types/state';

export const getMyQuestsData = (state: State): MyQuest[] => state[SlicesName.MyQuestsData].myQuests;
export const myQuestsDataLoadingStatus = (state: State): boolean => state[SlicesName.MyQuestsData].isMyQuestsDataLoading;
