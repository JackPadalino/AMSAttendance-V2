import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date:'',
    allAbsences: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setDate: (state, action) => {
        state.date = action.payload;
    },
    setDay: (state, action) => {
        state.day = action.payload;
    },
    setAllAbsences: (state, action) => {
      state.allAbsences = action.payload;
    },
  },
});

export const {
    setDate,
    setDay,
    setAllAbsences
} = adminSlice.actions;

export default adminSlice.reducer;