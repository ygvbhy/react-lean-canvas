import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  searchText,
  onSearch,
}: {
  searchText: string;
  onSearch: (text: string) => void;
}) => {
  const [localSearchText, setLocalSearchText] = useState(searchText);

  return (
    <div className="relative w-full sm:w-64">
      <input
        type="text"
        placeholder="검색"
        value={localSearchText}
        onChange={(e) => setLocalSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(localSearchText);
          }
        }}
        className="w-full rounded-lg border py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="검색"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;
