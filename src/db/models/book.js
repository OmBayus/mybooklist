import db from "../db";

export default class Book {
  static async getBooks() {
    return await db.book.toArray();
  }

  static async addBook(book) {
    return await db.book.add(book);
  }

  static async updateBook(book) {
    return await db.book.put(book);
  }

  static async deleteBook(id) {
    return await db.book.where({ id }).put({ isDeleted: true });
  }
}
