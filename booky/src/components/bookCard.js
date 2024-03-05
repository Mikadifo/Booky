const BookCard = ({ book }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-gray-200"
      >
        {book.title}
      </th>
      <td className="px-6 py-4">{book.author}</td>
      <td className="px-6 py-4">{book.isbn}</td>
      <td className="px-6 py-4">{book.genre}</td>
      <td className="px-6 py-4">{book.year}</td>
      <td className="px-6 py-4">{book.copies}</td>
      <td className="px-6 py-4">
        {book.availableOnline ? (
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />
        ) : (
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />
        )}
      </td>
    </tr>
  );
};

export default BookCard;
