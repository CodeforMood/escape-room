import { createSlice } from '@reduxjs/toolkit';
import { SlicesName } from '../../const';
import { MyQuestsData } from '../../types/state';
import { fetchMyQuestsAction } from '../api-actions';

const initialState: MyQuestsData = {
  isMyQuestsDataLoading: false,
  myQuests: [],
};

export const myQuestsData = createSlice({
  name: SlicesName.MyQuestsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyQuestsAction.pending, (state) => {
        state.isMyQuestsDataLoading = true;
      })
      .addCase(fetchMyQuestsAction.fulfilled, (state, action) => {
        state.myQuests = action.payload;
        state.isMyQuestsDataLoading = false;
      });
  }
});
