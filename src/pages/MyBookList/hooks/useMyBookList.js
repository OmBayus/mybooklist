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
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredBooks(booklist.books);
  }, [booklist]);

  const filterBooks = (status) => {
    if (status === "all") {
      return booklist.books;
    }
    return booklist.books.filter((book) => book.status === status);
  };

  const addBook = (book) => {
    dispatch(booklistActions.addBook(book));
    enqueueSnackbar("Book added", { variant: "success" });
  };

  const onChangeFilterStatus = (e) => {
    setFilterStatus(e.value);
    const _filteredBooks = filterBooks(e.value);
    setFilteredBooks(_filteredBooks);
  };

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
    const _filteredBooks = filterBooks(filterStatus);
    if (e.target.value === "") {
      setFilteredBooks(_filteredBooks);
      return;
    }
    const _filteredBooksBySearch = _filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(_filteredBooksBySearch);
  };

  return {
    name: booklist.name,
    filteredBooks,
    onChangeFilterStatus,
    addBook,
    filterStatus,
    onChangeSearch,
    searchText,
  };
};
