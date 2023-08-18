import { configureStore } from "@reduxjs/toolkit";
import booklistSlice from "features/booklist/booklistSlice";
import historySlice, { historyActions } from "features/history/historySlice";

//MIDDLEWARE
const middleware = (store) => (next) => (action) => {
  const result = next(action);
  // localStorageMiddleware(store);
  historyMiddleware(store, action);
  return result;
};

// const localStorageMiddleware = (store) => {
//   localStorage.setItem("applicationState", JSON.stringify(store.getState()));
// };

const historyMiddleware = (store, action) => {
  if (action.type.startsWith("booklist/")) {
    if (
      action.type === "booklist/setBooks" ||
      action.type === "booklist/setName" ||
      action.type === "booklist/setBooklist"
    ) {
      store.dispatch(historyActions.set(store.getState().booklist));
      return;
    }
    const history = {
      action: action,
      data: store
        .getState()
        .history.present.books.find((book) => book.id === action.payload.id),
    };
    store.dispatch(historyActions.set(store.getState().booklist));
    store.dispatch(historyActions.add(history));
  }
};

// const reHydrateStore = () => {
//   if (localStorage.getItem("applicationState") !== null) {
//     return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
//   }
// };

export default configureStore({
  reducer: {
    booklist: booklistSlice,
    history: historySlice,
  },
  // preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
