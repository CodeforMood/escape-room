import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { APIRoute, AppRoute } from "../const";
import { dropToken, saveToken } from "../services/token";
import { AuthData } from "../types/auth-data";
import { Quest } from "../types/quest";
import { QuestInfo } from "../types/quest-info";
import { AppDispatch } from "../types/state";
import { UserData } from "../types/user-data";
import { redirectToRoute } from "./action";

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));

    return data.email;
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

export const fetchQuestInfoAction = createAsyncThunk<QuestInfo, string, {
  extra: AxiosInstance;
}>(
  'fetchQuestInfo',
  async(id, {extra: api}) => {
    const {data} = await api.get<QuestInfo>(APIRoute.Quest + id);

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
