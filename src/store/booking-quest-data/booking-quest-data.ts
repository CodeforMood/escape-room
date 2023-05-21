import { createSlice } from '@reduxjs/toolkit';
import { SlicesName } from '../../const';

const initialState: BookingData = {
  quest: null,
  isQuestDataLoading: false,
};

export const bookingQuestData = createSlice({
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
