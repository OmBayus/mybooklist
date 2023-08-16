import ListItem from "./ListItem";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ books,edit }) => {
  return (
    <ul className="list-none py-3 px-5 m-0">
      {books.map((book) => (
        <ListItem key={book.id} book={book} edit={edit} />
      ))}
    </ul>
  );
};
