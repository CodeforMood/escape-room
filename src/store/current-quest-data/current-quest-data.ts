import { createSlice } from '@reduxjs/toolkit';
import { SlicesName } from '../../const';
import { CurrentQuestData } from '../../types/state';
import { fetchCurrentQuestDataAction } from '../api-actions';

const initialState: CurrentQuestData = {
  quest: null,
  isQuestDataLoading: false,
};

export const currentQuestData = createSlice({
  name: SlicesName.CurrentQuestData,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchCurrentQuestDataAction.pending, (state) => {
        state.isQuestDataLoading = true;
      })
      .addCase(fetchCurrentQuestDataAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.isQuestDataLoading = false;
      });
  }
});
