// drawerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: true,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.open = true;
    },
    closeDrawer: (state) => {
      state.open = false;
    },
    toggleDrawer: (state) => {
      state.open = !state.open;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer } = drawerSlice.actions;

export const selectDrawerOpen = (state) => state.drawer.open;

export default drawerSlice.reducer;
