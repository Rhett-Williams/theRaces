import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type SnackbarInitialState = {
  isSnackbarVisible: boolean
}

const initialSnackbarState: SnackbarInitialState = {
    isSnackbarVisible: false
}

export const appSlice = createSlice({
    name: 'snackbar',
    initialState: initialSnackbarState,
    reducers: {
      displaySnackbar: (state, action: PayloadAction<boolean>) => {
        state.isSnackbarVisible = action.payload
      },
    },

  });

  export const getSnackbarState = (state: RootState): boolean => {
    return state.app.isSnackbarVisible
  }
  
  export const { displaySnackbar } = appSlice.actions;
  
  export default appSlice.reducer;