import Dexie from "dexie";

var db = new Dexie("MyBookList");
db.version(1).stores({
  booklist: "++id,name",
  book: "++id,name,author,rate,status,review,isDeleted",
});
export default db;