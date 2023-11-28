import { NameSpace } from '../../consts';
import { State } from '../../types/types';

export const getUserStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getIsAuthorizationComplete = (state: State) => state[NameSpace.User].isAuthorizationComplete;
