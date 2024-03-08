import { BASE_URL } from "@/constants";
import { useState } from "react";
import Input from "./input";
import Button from "./button";

const CURRENT_YEAR = new Date().getFullYear();

const BookModal = ({ setIsModalActive, book }) => {
  const [title, setTitle] = useState(book.title || "");
  const [author, setAuthor] = useState(book.author || "");
  const [genre, setGenre] = useState(book.genre || "");
  const [isbn, setIsbn] = useState(book.isbn || "");
  const [year, setYear] = useState(book.year || 1);
  const [copies, setCopies] = useState(book.copies || 1);
  const [availableOnline, setAvailableOnline] = useState(
    book.availableOnline || false
  );

  const saveBook = (body, url) => {
    fetch(url, {
      method: book._id ? "PUT" : "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          console.log(data.error);
        } else {
          setIsModalActive(false);
        }
      });
  };

  const deleteBook = () => {
    fetch(`${BASE_URL}/delete/${book._id}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          console.log(data.error);
        } else {
          setIsModalActive(false);
        }
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      isbn,
      year: parseInt(year),
      copies: parseInt(copies),
      availableOnline,
    };

    if (book._id) {
      saveBook(newBook, `${BASE_URL}/update/${book._id}`);
    } else {
      saveBook(newBook, `${BASE_URL}/create`);
    }
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    const confirmation = confirm(`Delete ${book.title}?`);
    if (confirmation) deleteBook();
  };

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-slate-200 m-auto py-8 px-16 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-800 mb-6">
            {book._id ? "Edit Book" : "Create Book"}
          </h2>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <Input
                type="text"
                label="Title"
                id="title"
                value={title}
                placeholder="The Great Gatsby"
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                label="Author"
                id="author"
                value={author}
                placeholder="Scott Fitzgeral"
                onChange={({ target }) => setAuthor(target.value)}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                label="Genre"
                id="genre"
                value={genre}
                placeholder="Classic Literature"
                onChange={({ target }) => setGenre(target.value)}
              />
            </div>
            <div className="mb-5">
              <Input
                type="text"
                label="ISBN"
                id="isbn"
                value={isbn}
                placeholder="13-digit code"
                onChange={({ target }) => setIsbn(target.value)}
              />
            </div>
            <div className="mb-5">
              <Input
                type="number"
                label="Year"
                id="year"
                value={year}
                placeholder="2012"
                min={1}
                max={CURRENT_YEAR}
                onChange={({ target }) => setYear(target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-400"
              >
                Please select a number from 1 to {CURRENT_YEAR}
              </p>
            </div>
            <div className="mb-5">
              <Input
                type="number"
                label="Copies"
                id="copies"
                value={copies}
                placeholder="15"
                min={1}
                max={35}
                onChange={({ target }) => setCopies(target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-400"
              >
                Please select a number from 1 to 35
              </p>
            </div>
            <div className="mb-5">
              <label className="inline-flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availableOnline}
                  className="sr-only peer"
                  onChange={({ target }) => setAvailableOnline(target.checked)}
                />
                <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black-300 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600" />
                <span className="ms-3 text-md font-bold text-gray-800">
                  Available Online
                </span>
              </label>
            </div>
            <div className="flex justify-around mt-8">
              <Button
                type="button"
                label="Close"
                color="red-800"
                onClick={() => {
                  setIsModalActive(false);
                }}
              />
              {book._id ? (
                <>
                  <Button type="button" label="Delete" color="orange-700" />
                  <Button type="submit" label="Save" color="green-800" />
                </>
              ) : (
                <Button type="submit" label="Create" color="green-800" />
              )}
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BookModal;
