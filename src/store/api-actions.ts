import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { BookingQuestData } from '../types/booking-quest-data';
import { CurrentQuest } from '../types/current-quest';
import { Quest } from '../types/quest';
import { AppDispatch } from '../types/state';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { setCurrentBookingQuestId } from './booking-quest-data/booking-quest-data';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchCurrentQuestDataAction = createAsyncThunk<CurrentQuest, string, {
  extra: AxiosInstance;
}>(
  'fetchCurrentQuestData',
  async(id, {extra: api}) => {
    const {data} = await api.get<CurrentQuest>(APIRoute.Quest + id);

    return data;
  },
);

export const fetchBookingQuestDataAction = createAsyncThunk<BookingQuestData[], string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchBookingQuestData',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<BookingQuestData[]>(APIRoute.Quest + id + APIRoute.Booking);
    dispatch(setCurrentBookingQuestId(data[0].id));

    return data;
  },
);

export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  extra: AxiosInstance;
}>(
  'fetchQuests',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<Quest[]>(APIRoute.Quest);

    return data;
  },
);
