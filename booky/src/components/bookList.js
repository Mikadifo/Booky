"use client";
import { useEffect, useState } from "react";
import BookCard from "./bookCard";

//TODO: move this to its own file
const BASE_URL = "http://localhost:8000/book";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = () => {
      fetch(BASE_URL + "/list")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    };

    fetchAllBooks();
  }, []);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg my-16 mx-16">
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
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
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead />
        <tbody>
          {books.map((book) => (
            <BookCard book={book} key={book._id} />
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
