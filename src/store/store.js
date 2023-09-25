// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import snackbarSlice from './slices/snackbarSlice';
import drawerSlices from './slices/drawerSlices';
import authSlices from './slices/authSlices';


export const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
    drawer: drawerSlices,
    auth: authSlices
  },
});

