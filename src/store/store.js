// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import snackbarSlice from './slices/snackbarSlice';
import drawerSlices from './slices/drawerSlices';
import navTabSlices from './slices/NavTabsSlices';


export const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    drawer: drawerSlices,
    navTabIndex:navTabSlices
  },
});

