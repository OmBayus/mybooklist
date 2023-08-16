import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const booklist = useSelector((state) => state.booklist);
  return (
    <div>
      <Header />
    </div>
  );
};
