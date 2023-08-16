import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Filter from "./components/Filter";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const booklist = useSelector((state) => state.booklist);
  return (
    <div>
      <Header />
      <div className="surface-0 p-4 shadow-2 border-round m-5">
        <Filter />
      </div>
    </div>
  );
};
