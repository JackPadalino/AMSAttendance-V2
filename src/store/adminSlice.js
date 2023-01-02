import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date:'',
    letterDay:'',
    allAbsentUsers: [],
    coveredClasses:[]
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setDate: (state, action) => {
        state.date = action.payload;
    },
    setLetterDay: (state, action) => {
      state.letterDay = action.payload;
  },
    setDay: (state, action) => {
        state.day = action.payload;
    },
    setAllAbsentUsers: (state, action) => {
      state.allAbsentUsers = action.payload;
    },
    setCoveredClasses: (state, action) => {
      state.coveredClasses = action.payload;
    }
  },
});

export const {
    setDate,
    setLetterDay,
    setDay,
    setAllAbsentUsers,
    setCoveredClasses
} = adminSlice.actions;

export default adminSlice.reducer;