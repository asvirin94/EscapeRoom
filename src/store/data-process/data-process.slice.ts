import { createSlice } from '@reduxjs/toolkit';
import { Quest, QuestForPage } from '../../types/types';
import { NameSpace } from '../../consts';
import { loadQuestForPageAction, loadQuestsAction } from '../api-actions';

type InitialState = {
  quests: Quest[];
  questForPage: QuestForPage | undefined;
  isQuestsLoaded: boolean;
  isQuestForPageLoaded: boolean;
}

const initialState: InitialState = {
  quests: [],
  questForPage: undefined,
  isQuestsLoaded: false,
  isQuestForPageLoaded: false
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
      });
  },
});

export const {dropQuestOnPage} = dataSlice.actions;
