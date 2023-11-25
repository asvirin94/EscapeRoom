import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, QuestForPage, Id, UserData, AuthData } from '../types/types';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';

export const loadQuestsAction = createAsyncThunk<
  Quest[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('loadQuests', async(_arg, {extra: api}) => {
  const {data} = await api.get<Quest[]>('quest');
  return data;
});

export const loadQuestForPageAction = createAsyncThunk<
  QuestForPage,
  Id,
  {
    extra: AxiosInstance;
  }
>('loadQuestForPage', async({id}, {extra: api}) => {
  const {data} = await api.get<QuestForPage>(`quest/${id}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('checkAuth', async(_arg, {extra: api}) => {
  await api.get('/login');
});

export const loginAction = createAsyncThunk<
  void,
  UserData,
  {
    extra: AxiosInstance;
  }
>('login', async({email, password}, {extra: api}) => {
  const {data: { token }} = await api.post<AuthData>('/login', {email, password});
  saveToken(token);
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('logout', async (_arg, {extra: api}) => {
  await api.delete('/logout');
  dropToken();
});
