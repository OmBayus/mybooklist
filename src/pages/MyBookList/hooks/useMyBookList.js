import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
    filteredBooks: filteredBooks.filter((book) => !book.isDeleted),
    onChangeFilterStatus,
    filterStatus,
    onChangeSearch,
    searchText,
  };
};
