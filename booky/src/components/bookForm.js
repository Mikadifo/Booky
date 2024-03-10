import Input from "./input";
import Button from "./button";
import { CURRENT_YEAR } from "@/constants";

const BookForm = ({
  onSubmit,
  handleDelete,
  setIsCustomerModalActive,
  title,
  author,
  isbn,
  copies,
  year,
  genre,
  availableOnline,
  setTitle,
  newBook,
  setAuthor,
  setGenre,
  setIsbn,
  setYear,
  setCopies,
  setAvailableOnline,
  setIsModalActive,
}) => {
  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
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
      <div className="flex gap-8">
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
            min={0}
            max={35}
            onChange={({ target }) => setCopies(target.value)}
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-400"
          >
            Please select a number from 0 to 35
          </p>
        </div>
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
          color="bg-red-800"
          onClick={() => {
            setIsModalActive(false);
          }}
        />
        {newBook ? (
          <Button type="submit" label="Create" color="bg-green-800" />
        ) : (
          <>
            <Button
              type="button"
              label="Delete"
              color="bg-orange-700"
              onClick={handleDelete}
            />
            <Button
              type="button"
              label="Borrow"
              color="bg-blue-700"
              onClick={() => {
                if (copies >= 1) {
                  setIsCustomerModalActive(true);
                } else {
                  alert(`There are not enough copies of ${title}`);
                }
              }}
            />
            <Button type="submit" label="Save" color="bg-green-800" />
          </>
        )}
      </div>
    </form>
  );
};

export default BookForm;
