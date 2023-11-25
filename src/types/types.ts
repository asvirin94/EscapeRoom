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
