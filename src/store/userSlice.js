import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  allUsers:[],
  selectedUser:{},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state, action) => {
      state.user = {};
    },
    setAllUsers:(state,action)=>{
      state.allUsers=action.payload;
    },
    addNewUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateSelectedUser: (state, action) => {
      const updatedSelectedUser = action.payload;
      const oldSelectedUser = state.selectedUser;
      state.campus = {
          ...oldSelectedUser,
          ...updatedSelectedUser
      };
    },
  }
});

export const {
  setUser,
  resetUser,
  setAllUsers,
  addNewUser,
  setSelectedUser,
  updateSelectedUser
} = userSlice.actions;

export default userSlice.reducer;