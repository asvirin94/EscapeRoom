import { createSlice } from '@reduxjs/toolkit';
import { BookingInfo, Quest, QuestForPage } from '../../types/types';
import { NameSpace } from '../../consts';
import { getBookingInfoAction, loadQuestForPageAction, loadQuestsAction } from '../api-actions';

type InitialState = {
  quests: Quest[];
  questForPage: QuestForPage | undefined;
  bookingInfo: BookingInfo[] | undefined;
  isQuestsLoaded: boolean;
  isQuestForPageLoaded: boolean;
  isBookingInfoLoaded: boolean;
}

const initialState: InitialState = {
  quests: [],
  questForPage: undefined,
  bookingInfo: undefined,
  isQuestsLoaded: false,
  isQuestForPageLoaded: false,
  isBookingInfoLoaded: false
};

export const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropQuestOnPage: (state) => {
      state.questForPage = undefined;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadQuestsAction.pending, (state) => {
        state.isQuestsLoaded = false;
      })
      .addCase(loadQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsLoaded = true;
      })
      .addCase(loadQuestForPageAction.pending, (state) => {
        state.isQuestForPageLoaded = false;
      })
      .addCase(loadQuestForPageAction.fulfilled, (state, action) => {
        state.questForPage = action.payload;
        state.isQuestForPageLoaded = true;
      })
      .addCase(getBookingInfoAction.pending, (state) => {
        state.isBookingInfoLoaded = false;
      })
      .addCase(getBookingInfoAction.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
      });
  },
});

export const {dropQuestOnPage} = dataSlice.actions;
