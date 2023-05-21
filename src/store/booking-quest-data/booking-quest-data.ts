import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesName } from '../../const';
import { BookingData } from '../../types/state';
import { fetchBookingQuestDataAction } from '../api-actions';

const initialState: BookingData = {
  bookingQuestData: [],
  isBookingQuestDataLoading: false,
  currentBookingQuestId: null,
};

export const bookingQuestData = createSlice({
  name: SlicesName.BookingQuestData,
  initialState,
  reducers: {
    setCurrentBookingQuestId: (state, action: PayloadAction<string | null>) => {
      state.currentBookingQuestId = action.payload;
    },
  },
  extraReducers (builder) {
    builder
      .addCase(fetchBookingQuestDataAction.pending, (state) => {
        state.isBookingQuestDataLoading = true;
      })
      .addCase(fetchBookingQuestDataAction.fulfilled, (state, action) => {
        state.bookingQuestData = action.payload;
        state.isBookingQuestDataLoading = false;
      });
  }
});

export const {setCurrentBookingQuestId} = bookingQuestData.actions;
