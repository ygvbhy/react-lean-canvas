import { useState } from 'react';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';
import CardList from '../components/CardList';
import originCardListData from '../data/originCardList.json';
import { CardListProps } from '../types';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const originCardList: CardListProps[] = originCardListData;
  // debugger;
  // 해당 코드가 적힌 부분에서 웹 페이지가 멈추고 디버깅 가능하게 함
  const filteredCarList = originCardList.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="검색"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsGrid(true)}
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isGrid ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            aria-label="Grid view"
          >
            <FaTh />
          </button>
          <button
            onClick={() => setIsGrid(false)}
            className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isGrid ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
            aria-label="List view"
          >
            <FaList />
          </button>
        </div>
      </div>

      {filteredCarList.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">
            {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${isGrid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
        >
          {filteredCarList.map((item) => {
            return <CardList key={item.id} cardList={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
