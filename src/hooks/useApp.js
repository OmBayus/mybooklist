import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [hasBooklist, setHasBooklist] = useState(false);
  const booklist = useSelector((state) => state.booklist);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (booklist.name) {
      setHasBooklist(true);
    }
    setLoading(false);
  }, [booklist, dispatch]);
  return { hasBooklist, loading };
};
