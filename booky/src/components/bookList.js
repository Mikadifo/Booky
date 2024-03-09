"use client";
import { useEffect, useState } from "react";
import BookCard from "./bookCard";
import BookModal from "./bookModal";
import { BASE_URL } from "@/constants";
import { bookFilter } from "@/utils/filters";
import TableHead from "./tableHead";
import SearchIcon from "@/resources/searchIcon";
import Button from "./button";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  const fetchAllBooks = () => {
    fetch(`${BASE_URL}/book/list`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    const searchTerm = target.value.toUpperCase();
    setFilteredBooks(bookFilter(books, searchTerm));
  };

  if (isModalActive) {
    return (
      <BookModal setIsModalActive={setIsModalActive} book={selectedBook} />
    );
  }

  return (
    <div className="relative overflow-x-auto sm:rounded-lg my-16 mx-16">
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <Button
          type="button"
          label="New"
          color="bg-green-800"
          onClick={() => {
            setSelectedBook({});
            setIsModalActive(true);
          }}
        />
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            value={search}
            onChange={handleSearch}
            placeholder="Search for books"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <TableHead />
        <tbody>
          {filteredBooks.map((book) => (
            <tr
              className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 hover:cursor-pointer"
              key={book._id}
              onClick={() => {
                setSelectedBook(book);
                setIsModalActive(true);
              }}
            >
              <BookCard book={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
