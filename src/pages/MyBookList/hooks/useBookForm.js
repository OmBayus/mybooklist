import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { v4 as uuidv4 } from "uuid";
import { booklistActions } from "features/booklist/booklistSlice";

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
      dispatch(booklistActions.updateBook(book));
      enqueueSnackbar("Book Updated Successfully", { variant: "success" });
    } else {
      dispatch(booklistActions.addBook({ ...book, id: uuidv4() }));
      enqueueSnackbar("Book Added Successfully", { variant: "success" });
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
        dispatch(booklistActions.deleteBook({ id }));
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
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
