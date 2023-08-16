import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import useMyBookList from "./hooks/useMyBookList";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { name, filteredBooks, addBook, onChangeFilterStatus, filterStatus,onChangeSearch,searchText } =
    useMyBookList();
  return (
    <div>
      <Header name={name} addBook={addBook} />
      <div className="surface-0 p-4 shadow-2 border-round m-5">
        <Filter
          filterStatus={filterStatus}
          onChangeFilterStatus={onChangeFilterStatus}
          onChangeSearch={onChangeSearch}
          searchText={searchText}
        />
        <List books={filteredBooks} />
      </div>
    </div>
  );
};
