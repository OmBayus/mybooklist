import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { booklistActions } from "features/booklist/booklistSlice";
import Book from "db/models/book";

const initialBook = {
  id: "",
  name: "",
  author: "",
  rate: 1,
  status: "not-started",
  review: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [showDia, setShowDia] = useState(false);
  const [book, setBook] = useState(initialBook);
  const [loading, setLoading] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isEdit) {
      const _book = { ...book };
      const id = _book.id;
      delete _book.id;

      Book.updateBook(id, _book)
        .then((_) => {
          dispatch(booklistActions.updateBook({ id, ..._book }));
          enqueueSnackbar("Book Updated Successfully", { variant: "success" });
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar("Book Updated Failed", { variant: "error" });
        });
    } else {
      const _book = { ...book };
      delete _book.id;
      Book.addBook(_book)
        .then((id) => {
          console.log(id);
          dispatch(booklistActions.addBook({ ..._book, id: id }));
          enqueueSnackbar("Book Added Successfully", { variant: "success" });
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar("Book Added Failed", { variant: "error" });
        });
    }
    setLoading(false);
    onHide();
  };

  const onChangeForm = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onHide = () => {
    setShowDia(false);
    setBook(initialBook);
  };

  const edit = (book) => {
    setIsEdit(true);
    setBook(book);
    setShowDia(true);
  };

  const addBook = () => {
    setIsEdit(false);
    setShowDia(true);
  };

  const deleteBook = (e, id) => {
    confirmPopup({
      target: e.currentTarget,
      message: "Are you sure you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        Book.deleteBook(id)
          .then((_) => {
            dispatch(booklistActions.deleteBook({ id }));
            enqueueSnackbar("Book Deleted Successfully", {
              variant: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            enqueueSnackbar("Book Deleted Failed", { variant: "error" });
          });
      },
    });
  };

  return {
    isEdit,
    book,
    setBook,
    loading,
    submit,
    onChangeForm,
    showDia,
    onHide,
    edit,
    addBook,
    deleteBook,
  };
};
