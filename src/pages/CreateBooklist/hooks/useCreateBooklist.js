import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import BookList from "db/models/booklist";
import { booklistActions } from "features/booklist/booklistSlice";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setName(e.target.value);
  };
  const submit = () => {
    setLoading(true);
    BookList.addBookList({ name }).then((res) => {
      dispatch(booklistActions.setName(name));
      enqueueSnackbar("Booklist created successfully!", { variant: "success" });
    }).catch((err) => {
        console.log(err);
        enqueueSnackbar("Booklist created failed!", { variant: "error" });
    });
    setLoading(false);
  };
  return { name, setName, onChange, submit, loading };
};
