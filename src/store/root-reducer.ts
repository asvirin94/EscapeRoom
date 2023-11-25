import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { dataSlice } from './data-process/data-process.slice';
import { appSlice } from './app-process/app-process.slice';
import { userSlice } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.User]: userSlice.reducer
});
