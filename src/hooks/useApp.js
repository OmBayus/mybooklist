import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booklistActions } from "features/booklist/booklistSlice";
import BookList from "db/models/booklist";
import Book from "db/models/book";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [hasBooklist, setHasBooklist] = useState(false);
  const booklist = useSelector((state) => state.booklist);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    BookList.getBookList().then((booklist) => {
      if (booklist.length === 0) {
        return;
      }
      Book.getBooks().then((books) => {
        dispatch(
          booklistActions.setBooklist({ name: booklist[0].name, books: books })
        );
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    if (booklist.name) {
      setHasBooklist(true);
    }
    setLoading(false);
  }, [booklist, dispatch]);
  return { hasBooklist, loading };
};
