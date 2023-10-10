import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabIndex: 0,
};

const navTabSlice = createSlice({
  name: 'navTab',
  initialState,
  reducers: {
    // changeNavTab: (state) => {
    //     console.log("state",state)
    //   state.tabIndex = state;
    // },
    changeNavTab: (state, action) => {
        state.tabIndex = action.payload; // Update tabIndex with the new value
      },
  },
});

export const { changeNavTab } = navTabSlice.actions;
console.log("navTabSlice.actions",navTabSlice.actions)

export const selectNavTab = (state) => state.navTabIndex.tabIndex;

export default navTabSlice.reducer;
