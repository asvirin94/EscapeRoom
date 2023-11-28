import { NameSpace } from '../../consts';
import { State } from '../../types/types';

export const getQuests = (state: State) => state[NameSpace.Data].quests;
export const getBookingInfo = (state: State) => state[NameSpace.Data].bookingInfo;
export const getIsQuestsLoaded = (state: State) => state[NameSpace.Data].isQuestsLoaded;
export const getQuestForPage = (state: State) => state[NameSpace.Data].questForPage;
export const getReservations = (state: State) => state[NameSpace.Data].reservations;
export const getIsQuestForPageLoaded = (state: State) => state[NameSpace.Data].isQuestForPageLoaded;
