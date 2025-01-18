import { Link } from 'react-router-dom';
import { CanvasItemProps } from '../types';

const CanvasItem = ({ CanvasItem }: { CanvasItem: CanvasItemProps }) => {
  return (
    <Link
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      to={CanvasItem.to}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {CanvasItem.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{CanvasItem.date}</p>
        {CanvasItem.tags.map((item, index) => {
          return (
            <span
              key={index}
              className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            >
              {item}
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default CanvasItem;
