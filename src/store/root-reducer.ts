import {combineReducers} from '@reduxjs/toolkit';
import {SlicesName} from '../const';
import { authorizationUserProcess } from './authoriztion-user-process/authoriztion-user-process';
import { bookingQuestData } from './booking-quest-data/booking-quest-data';
import { currentQuestData } from './current-quest-data/current-quest-data';
import { questsData } from './quests-data/quests-data';


export const rootReducer = combineReducers({
  [SlicesName.User]: authorizationUserProcess.reducer,
  [SlicesName.QuestsData]: questsData.reducer,
  [SlicesName.CurrentQuestData]: currentQuestData.reducer,
  [SlicesName.BookingQuestData]: bookingQuestData.reducer,
});
