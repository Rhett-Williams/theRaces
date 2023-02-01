import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type RacesInitialState = {
  races: any
}

const initialRacesState: RacesInitialState = {
    races: undefined
}

export const racesSlice = createSlice({
    name: 'races',
    initialState: initialRacesState,
    reducers: {
      setRaces: (state, action: PayloadAction<any>) => {
        state.races = action.payload
      },
    },
  });

  export const currentRaceSelector = (state: RootState): any => {

  }

  export const nextRaceSelector = (state: RootState): any => {

  }
  
  export const { setRaces } = racesSlice.actions;
  
  export default racesSlice.reducer;