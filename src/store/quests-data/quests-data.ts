import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesName } from '../../const';
import { QuestsData } from '../../types/state';
import { fetchQuestsAction } from '../api-actions';

const initialState: QuestsData = {
  isQuestsDataLoading: false,
  quests: [],
  filteredQuests: [],
  currentLevelFilter: '',
  currentTypeFilter: '',
};

export const questsData = createSlice({
  name: SlicesName.QuestsData,
  initialState,
  reducers: {
    filterQuests: (state) => {
      state.filteredQuests = state.quests.filter((quest)=> quest.type === state.currentTypeFilter).
      filter((quest)=> quest.level === state.currentLevelFilter);
    },
    setLevelFilter: (state, action: PayloadAction<string>) => {
      state.currentLevelFilter = action.payload;
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.currentTypeFilter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
  }
});

export const {filterQuests, setLevelFilter, setTypeFilter} = questsData.actions;