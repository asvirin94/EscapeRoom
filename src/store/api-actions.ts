import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, QuestForPage, Id, UserData, AuthData, BookingInfo, BookingDataWithId, BookingData, Reservation, AppDispatch } from '../types/types';
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

export const getBookingInfoAction = createAsyncThunk<
  BookingInfo[],
  Id,
  {
    extra: AxiosInstance;
  }
>('getBookingInfo', async({id}, {extra: api}) => {
  const {data} = await api.get<BookingInfo[]>(`quest/${id}/booking`);
  return data;
});

export const sendBookingDataAction = createAsyncThunk<
  void,
  BookingDataWithId,
  {
    extra: AxiosInstance;
  }
>('sendBookingData', async ({date, time, contactPerson, phone, withChildren, peopleCount, placeId, id}, {extra: api}) => {
  await api.post<BookingData>(`quest/${id}/booking`, {date, time, contactPerson, phone, withChildren, peopleCount, placeId});
});

export const getReservationsAction = createAsyncThunk<
  Reservation[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('getReservations', async (_arg, {extra: api}) => {
  const {data} = await api.get<Reservation[]>('/reservation');
  return data;
});

export const removeFromReservationAction = createAsyncThunk<
  void,
  Id,
  {
    extra: AxiosInstance;
    dispatch: AppDispatch;
  }
>('removeFromReservation', async ({id}, {dispatch, extra: api}) => {
  await api.delete(`/reservation/${id}`);
  dispatch(getReservationsAction());
});
