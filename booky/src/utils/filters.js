export const bookFilter = (books, searchTerm) =>
  books.filter(
    (book) =>
      book.title.toUpperCase().includes(searchTerm) ||
      book.author.toUpperCase().includes(searchTerm) ||
      book.isbn.toUpperCase().includes(searchTerm) ||
      book.genre.toUpperCase().includes(searchTerm) ||
      book.year.toString().includes(searchTerm) ||
      book.copies.toString().includes(searchTerm)
  );
