import { useState, useLayoutEffect, useEffect } from "react";
import { 
  useSelector, 
  useDispatch } from "react-redux";
import { booklistActions } from "features/booklist/booklistSlice";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [hasBooklist, setHasBooklist] = useState(false);
  const booklist = useSelector(state => state.booklist)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    (async () => {
      setLoading(true);
      const booklistName = await localStorage.getItem("booklist-name");
      if (booklistName) {
        setHasBooklist(true);
        dispatch(booklistActions.setName(booklistName));
        setHasBooklist(true);
      } else {
        setHasBooklist(false);
      }
      setLoading(false);
    })();
  }, [dispatch]);

  useEffect(()=>{
    if(booklist.name){
      setHasBooklist(true);
    }
  },[booklist])
  return { hasBooklist, loading };
};
