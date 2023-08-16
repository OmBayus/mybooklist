import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const { booklistActions } = require("features/booklist/booklistSlice");

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.booklist);
  const [filteredBooks, setFilteredBooks] = useState(booklist.books);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    setFilteredBooks(booklist.books);
  }, [booklist]);

  const filter = (status) => {
    setFilteredBooks(booklist.books.filter((book) => book.status === status));
  };

  const addBook = (book) => {
    dispatch(booklistActions.addBook(book));
    enqueueSnackbar("Book added", { variant: "success" });
  };

  const onChangeFilterStatus = (e) => {
    setFilterStatus(e.value);
    if (e.value === "all") {
      setFilteredBooks(booklist.books);
      return
    }
      
    filter(e.value)
  }

  return { name: booklist.name, filteredBooks, onChangeFilterStatus, addBook,filterStatus };
};
