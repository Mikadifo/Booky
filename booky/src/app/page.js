import BookList from "@/components/bookList";

//TODO: get this from the db
const book = {
  id: "1",
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "432439432947f3aa",
  genre: "Drama",
  year: 1942,
  copies: 22,
  availableOnline: true,
};
const book2 = {
  id: "2",
  title: "TEDT 2",
  author: "Leeman CORD",
  isbn: "893478932u49u",
  genre: "Fiction",
  year: 1845,
  copies: 3,
  availableOnline: false,
};
const books = [book, book2];

export default function Home() {
  return (
    <main>
      <BookList books={books} />
    </main>
  );
}
