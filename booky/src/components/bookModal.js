import { BASE_URL } from "@/constants";
import { useState } from "react";
import BookForm from "./bookForm";
import CustomerModal from "./customerModal";

const BookModal = ({ setIsModalActive, book }) => {
  const [title, setTitle] = useState(book.title || "");
  const [author, setAuthor] = useState(book.author || "");
  const [genre, setGenre] = useState(book.genre || "");
  const [isbn, setIsbn] = useState(book.isbn || "");
  const [year, setYear] = useState(book.year || 1);
  const [copies, setCopies] = useState(book.copies || 0);
  const [availableOnline, setAvailableOnline] = useState(
    book.availableOnline || false
  );
  const [isCustomerModalActive, setIsCustomerModalActive] = useState(false);

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
    fetch(`${BASE_URL}/book/delete/${book._id}`, {
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
      saveBook(newBook, `${BASE_URL}/book/update/${book._id}`);
    } else {
      saveBook(newBook, `${BASE_URL}/book/create`);
    }
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    const confirmation = confirm(`Delete ${book.title}?`);
    if (confirmation) deleteBook();
  };

  if (isCustomerModalActive) {
    return (
      <CustomerModal
        setIsCustomerModalActive={setIsCustomerModalActive}
        bookID={book._id}
      />
    );
  }

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-slate-200 m-auto py-8 px-16 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-800 mb-6">
            {book._id ? "Edit Book" : "Create Book"}
          </h2>
          <BookForm
            onSubmit={handleSubmit}
            handleDelete={handleDelete}
            title={title}
            author={author}
            isbn={isbn}
            copies={copies}
            year={year}
            genre={genre}
            availableOnline={availableOnline}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setGenre={setGenre}
            setIsbn={setIsbn}
            setYear={setYear}
            setCopies={setCopies}
            setAvailableOnline={setAvailableOnline}
            newBook={!book._id}
            setIsModalActive={setIsModalActive}
            setIsCustomerModalActive={setIsCustomerModalActive}
          />
        </div>
      </div>
    </dialog>
  );
};

export default BookModal;
