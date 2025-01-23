import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CanvasItemProps } from '../../types';

const CanvasItem = ({
  canvasItem,
  onDelete,
}: {
  canvasItem: CanvasItemProps;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Link
      className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
      to={`/canvases/${canvasItem.id}`}
    >
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          {canvasItem.title}
        </h2>
        <p className="mb-4 text-sm text-gray-600">{canvasItem.date}</p>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {canvasItem.tag}
        </span>
      </div>
      <button
        className="absolute right-2 top-2 rounded-full p-2 text-red-500"
        aria-label="Delete"
        onClick={onDelete}
      >
        <FaTrash />
      </button>
    </Link>
  );
};

export default CanvasItem;
