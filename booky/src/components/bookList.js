"use client";
import { useEffect, useState } from "react";
import BookCard from "./bookCard";
import BookModal from "./bookModal";
import { BASE_URL } from "@/constants";
import { bookFilter } from "@/utils/filters";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    const fetchAllBooks = () => {
      fetch(`${BASE_URL}/list`)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setFilteredBooks(data);
        });
    };

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
        <button
          className="bg-green-900 text-gray-200 font-bold py-2 px-6 rounded-lg"
          onClick={() => {
            setSelectedBook({});
            setIsModalActive(true);
          }}
          type="button"
        >
          New
        </button>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gay-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={search}
            onChange={handleSearch}
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead />
        <tbody>
          {filteredBooks.map((book) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer"
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

const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Author
        </th>
        <th scope="col" className="px-6 py-3">
          ISBN
        </th>
        <th scope="col" className="px-6 py-3">
          Genre
        </th>
        <th scope="col" className="px-6 py-3">
          Year
        </th>
        <th scope="col" className="px-3 py-3">
          Copies
        </th>
        <th scope="col" className="px-3 py-3">
          Online
        </th>
      </tr>
    </thead>
  );
};

export default BookList;
