import db from "../db";

export default class BookList {
  static async getBookList() {
    return await db.booklist.toArray();
  }

  static async addBookList(booklist) {
    return await db.booklist.add(booklist);
  }

}
