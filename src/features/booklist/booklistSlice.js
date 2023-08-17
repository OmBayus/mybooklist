import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const booklistSlice = createSlice({
  name: "booklist",
  initialState: {
    name: "",
    books: [
      // example book data
      // {
      //   id: 1,
      //   name: "Book1",
      //   author: "Author1",
      //   rate: 3,
      //   status: "reading",
      //   review: "review",
      //   isDeleted: false,
      // },
    ],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addBook: (state, action) => {
      // add book to first index
      state.books.unshift({
        ...action.payload,
        id: uuidv4(),
        isDeleted: false,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
    },
    deleteBook: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload) {
          book.isDeleted = true;
        }
        return book;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const booklistActions = booklistSlice.actions;

export default booklistSlice.reducer;
