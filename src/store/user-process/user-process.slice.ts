import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { checkAuthAction } from '../api-actions';

type InitialState = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});
