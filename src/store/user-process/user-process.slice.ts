import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type InitialState = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  isAuthorizationComplete: boolean;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthorizationComplete: true
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isAuthorizationComplete = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorizationComplete = true;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthorizationComplete = true;
      })
      .addCase(loginAction.pending, (state) => {
        state.isAuthorizationComplete = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthorizationComplete = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthorizationComplete = true;
      });
  },
});
