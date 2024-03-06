import { BASE_URL } from "@/constants";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

const CreateBookModal = ({ setIsModalActive }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState(1);
  const [copies, setCopies] = useState(1);
  const [availableOnline, setAvailableOnline] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const book = {
      title,
      author,
      genre,
      isbn,
      year: parseInt(year),
      copies: parseInt(copies),
      availableOnline,
    };

    const createBook = (body) => {
      fetch(`${BASE_URL}/create`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            //TODO: Show a notification
            console.log(data.error);
          } else {
            setIsModalActive(false);
          }
        });
    };

    createBook(book);
  };

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-slate-200 m-auto py-8 px-16 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-800">Create Book</h2>
          <br />

          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-md text-gray-900 font-bold"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="The Great Gatsby"
                value={title}
                required
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="author"
                className="block mb-2 text-md text-gray-900 font-bold"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Scott Fitzgeral"
                value={author}
                required
                onChange={({ target }) => setAuthor(target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="genre"
                className="block mb-2 text-md text-gray-900 font-bold"
              >
                Genre
              </label>
              <input
                type="text"
                id="genre"
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Classic Literature"
                value={genre}
                required
                onChange={({ target }) => setGenre(target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="isbn"
                className="block mb-2 text-md text-gray-900 font-bold"
              >
                ISBN
              </label>
              <input
                type="text"
                id="isbn"
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="13-digit code"
                value={isbn}
                required
                onChange={({ target }) => setIsbn(target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="year"
                className="block mb-2 text-md font-bold text-gray-800"
              >
                Year
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                type="number"
                id="year"
                aria-describedby="helper-text-explanation"
                placeholder="1"
                required
                min={1}
                max={CURRENT_YEAR}
                value={year}
                onChange={({ target }) => setYear(target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Please select a number from 1 to {CURRENT_YEAR}
              </p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="copies"
                className="block mb-2 text-md font-bold text-gray-800"
              >
                Copies
              </label>
              <input
                type="number"
                id="copies"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                min={1}
                max={35}
                placeholder="1"
                required
                value={copies}
                onChange={({ target }) => setCopies(target.value)}
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
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
              <button
                type="button"
                className="bg-red-800 text-gray-100 px-4 py-2 rounded-md"
                onClick={() => setIsModalActive(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-green-800 text-gray-100 px-4 py-2 rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateBookModal;
