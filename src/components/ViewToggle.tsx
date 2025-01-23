// main page toggle button
import { FaList, FaTh } from 'react-icons/fa';

const ViewToggle = ({
  isGrid,
  setIsGrid,
}: {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setIsGrid(true)}
        className={`rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        aria-label="Grid view"
      >
        <FaTh />
      </button>
      <button
        onClick={() => setIsGrid(false)}
        className={`rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isGrid ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
        aria-label="List view"
      >
        <FaList />
      </button>
    </div>
  );
};

export default ViewToggle;
