import { DifficultLevel, Genre } from '../consts';
import { store } from '../store';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof DifficultLevel;
  type: keyof typeof Genre;
  peopleMinMax: number[];
}

export type QuestForPage = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof DifficultLevel;
  type: keyof typeof Genre;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Id = {
  id: string;
}

export type AuthData = {
  email: string;
  token: string;
};

export type UserData = {
  email: string;
  password: string;
}

export type LocationState = {
  from: string;
}

export type BookingInfo = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  slots: {
    today: [{
      time: string;
      isAvailable: boolean;
      }];
    tomorrow: [{
      time: string;
      isAvailable: boolean;
      }];
  };
}

export type Locations = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
}[]

export type BookingData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingDataWithId = BookingData & Id;

export type Reservation = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  quest: {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: keyof typeof DifficultLevel;
    Allowed: string;
    type: string;
    peopleMinMax: number[];
  };
}

