import {SlicesName} from '../../const';
import { BookingQuestData } from '../../types/booking-quest-data';
import {State} from '../../types/state';

export const getBookingQuestData = (state: State): BookingQuestData[] => state[SlicesName.BookingQuestData].bookingQuestData;
export const getBookingQuestDataLoadingStatus = (state: State): boolean => state[SlicesName.BookingQuestData].isBookingQuestDataLoading;
export const getCurrentBookingQuestId = (state: State): string | null => state[SlicesName.BookingQuestData].currentBookingQuestId;
