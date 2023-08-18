import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { booklistActions } from "features/booklist/booklistSlice";

export const undoAsync = createAsyncThunk(
  "history/undoAsync",
  async (_, { getState, dispatch }) => {
    const state = getState();

    dispatch(historyActions.undo());
    const updatedBooks = state.history.present.books
      .map((book) => {
        if (book.id === state.history.past[0].action.payload.id) {
          return state.history.past[0].data;
        }
        return book;
      })
      .filter((book) => book);
    dispatch(booklistActions.setBooks({ books: updatedBooks }));
  }
);


export const redoAsync = createAsyncThunk(
  "history/redoAsync",
  async (_, { getState, dispatch }) => {
    const state = getState();

    dispatch(historyActions.redo());
    let updatedBooks = state.history.present.books;
    updatedBooks = updatedBooks.map(book => {
      if (book.id === state.history.future[0].action.payload.id) {
        return state.history.future[0].data;
      }
      return book;
    }).filter(book => book);
    if(updatedBooks.find(book => book.id === state.history.future[0].action.payload.id) === undefined) {
      updatedBooks.unshift(state.history.future[0].data);
    }

    dispatch(booklistActions.setBooks({ books: updatedBooks }));
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    past: [],
    present: {},
    future: [],
  },
  reducers: {
    set: (state, action) => {
      state.present = action.payload;
    },
    add: (state, action) => {
      state.past.unshift({
        ...action.payload,
      });
      state.future = [];
    },
    undo: (state) => {
      if (state.past.length > 0) {
        state.future.unshift({
          action: state.past[0].action,
          data: state.present.books.find(
            (book) => book.id === state.past[0].action.payload.id
          ),
        });
        state.present.books = state.present.books
          .map((book) => {
            if (book.id === state.past[0].action.payload.id) {
              return state.past[0].data;
            }
            return book;
          })
          .filter((book) => book);
        state.past.shift();
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.present.books = state.present.books.map(book => {
          if (book.id === state.future[0].action.payload.id) {
            state.past.unshift({
              action: state.future[0].action,
              data: book
            });
            return state.future[0].data;
          }
          return book;
        }).filter(book => book);
        if(state.present.books.find(book => book.id === state.future[0].action.payload.id) === undefined) {
          state.past.unshift({
            action: state.future[0].action,
            data: undefined
          });
          state.present.books.unshift(state.future[0].data);
        }
        state.future.shift();
      }
    },
    clear: (state) => {
      state.past = [];
      state.future = [];
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(undoAsync.fulfilled, (state) => {});
  //   builder.addCase(redoAsync.fulfilled, (state) => {});
  // },
});

// Action creators are generated for each case reducer function
export const historyActions = historySlice.actions;

export default historySlice.reducer;
