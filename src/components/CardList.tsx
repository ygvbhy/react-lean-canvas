import { Link } from 'react-router-dom';
import { CardListProps } from '../types';

const CardList = ({ cardList }: { cardList: CardListProps }) => {
  return (
    <Link
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      to={cardList.to}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {cardList.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">{cardList.date}</p>
        {cardList.tags.map((item, index) => {
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

export default CardList;
