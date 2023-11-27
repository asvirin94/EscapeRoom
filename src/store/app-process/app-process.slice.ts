import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GenreFilterName, LevelFilterName, NameSpace } from '../../consts';

type InitialState = {
    level: string;
    type: string;
    activeLocationId: string | null;
    activeLocationAdress: string | null;
}

const initialState: InitialState = {
  level: LevelFilterName.any,
  type: GenreFilterName.any,
  activeLocationId: null,
  activeLocationAdress: null
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setLevelFilter: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setActiveLocationId: (state, action: PayloadAction<string | null>) => {
      state.activeLocationId = action.payload;
    },
    setActiveLocationAdress: (state, action: PayloadAction<string | null>) => {
      state.activeLocationAdress = action.payload;
    }
  }
});

export const {setGenreFilter, setLevelFilter, setActiveLocationId, setActiveLocationAdress} = appSlice.actions;
