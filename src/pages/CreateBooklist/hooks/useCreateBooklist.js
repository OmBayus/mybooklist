import { useState } from "react"
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
const { booklistActions } = require("features/booklist/booklistSlice");

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [name,setName] = useState("");
    const [loading,setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch();
    const onChange = (e) => {
        setName(e.target.value);
    }
    const submit = () => {
        setLoading(true);
        localStorage.setItem("booklist-name",name);
        dispatch(booklistActions.setName(name));
        enqueueSnackbar("Booklist created successfully!", { variant: "success" });
        setLoading(false);
    }
    return {name,setName,onChange,submit,loading};
}