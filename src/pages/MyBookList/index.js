import React from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const booklist = useSelector((state) => state.booklist);
  return (
    <div>
      <h1>{booklist.name}</h1>
    </div>
  );
};
