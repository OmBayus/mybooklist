import { createSlice } from "@reduxjs/toolkit";

export const booklistSlice = createSlice({
  name: "booklist",
  initialState: {
    name: "",
    books: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const booklistActions = booklistSlice.actions;

export default booklistSlice.reducer;
