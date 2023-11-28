import { NameSpace } from '../../consts';
import { State } from '../../types/types';

export const getActiveLocationId = (state:State) => state[NameSpace.App].activeLocationId;
export const getActiveLocationAdress = (state:State) => state[NameSpace.App].activeLocationAdress;
export const getLevelFilter = (state:State) => state[NameSpace.App].level;
export const getGenreFilter = (state:State) => state[NameSpace.App].type;
