import React from "react";
import { ConfirmPopup } from 'primereact/confirmpopup';
import Header from "./components/Header";
import Filter from "./components/Filter";
import List from "./components/List";
import useMyBookList from "./hooks/useMyBookList";
import Dia from "components/Dia";
import BookForm from "./forms/BookForm";
import content from "./constants/content";
import useBookForm from "./hooks/useBookForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const {
    name,
    filteredBooks,
    onChangeFilterStatus,
    filterStatus,
    onChangeSearch,
    searchText,
  } = useMyBookList();

  const { isEdit, loading, submit, book, onChangeForm, showDia,onHide,edit,addBook,deleteBook } =
    useBookForm();
  return (
    <div>
      <ConfirmPopup />
      <Header name={name} addBook={addBook} />
      <div className="surface-0 p-4 shadow-2 border-round m-5">
        <Filter
          filterStatus={filterStatus}
          onChangeFilterStatus={onChangeFilterStatus}
          onChangeSearch={onChangeSearch}
          searchText={searchText}
        />
        <List books={filteredBooks} edit={edit} deleteBook={deleteBook} />
      </div>
      <Dia
        showDia={showDia}
        submit={submit}
        headerText={content.dialog.header(isEdit)}
        submitLabel={content.dialog.submitLabel(isEdit)}
        loading={loading}
        closable
        onHide={onHide}
        isForm
      >
        <BookForm book={book} onChangeForm={onChangeForm} />
      </Dia>
    </div>
  );
};
