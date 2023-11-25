import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GenreFilterName, LevelFilterName, NameSpace } from '../../consts';

type InitialState = {
    level: string;
    type: string;
}

const initialState: InitialState = {
  level: LevelFilterName.any,
  type: GenreFilterName.any
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
    }
  }
});

export const {setGenreFilter, setLevelFilter} = appSlice.actions;
