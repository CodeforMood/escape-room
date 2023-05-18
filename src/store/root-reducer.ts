import {combineReducers} from '@reduxjs/toolkit';
import {SlicesName} from '../const';
import { authorizationUserProcess } from './authoriztion-user-process/authoriztion-user-process';


export const rootReducer = combineReducers({
  [SlicesName.User]: authorizationUserProcess.reducer,
  [SlicesName.QuestsData]: questsData.reducer,
  [SlicesName.CurrentQuestData]: currentQuestData.reducer,

});
