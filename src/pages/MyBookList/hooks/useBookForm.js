import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
const { booklistActions } = require("features/booklist/booklistSlice");

const initialBook = {
  name: "",
  author: "",
  rate: 1,
  status: "",
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
    dispatch(booklistActions.addBook(book));
    enqueueSnackbar("Book Added Successfully", { variant: "success" });
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

  return {
    isEdit,
    book,
    setBook,
    loading,
    submit,
    onChangeForm,
    showDia,
    setShowDia,
    onHide,
  };
};
