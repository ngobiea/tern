import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isDarkMode: boolean;
}

const initialState: AppState = {
  isDarkMode: false,
};

const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    toggleDarkMode(state: AppState) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
