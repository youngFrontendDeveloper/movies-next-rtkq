import { createSlice } from "@reduxjs/toolkit";

export const foundedResultsSlice = createSlice( {
  name: "foundedResults",
  initialState: {
    results: []
  },

  reducers: {
    foundedResults: (state, action) => {
      state.results = action.payload;
    }
  }
} );



export const { foundedResults } = foundedResultsSlice.actions;

export default foundedResultsSlice.reducer;