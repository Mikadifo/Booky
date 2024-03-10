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

export default TableHead;
