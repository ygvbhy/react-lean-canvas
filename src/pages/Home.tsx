import { useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import OriginCanvasItemData from '../data/OriginCanvasItem.json';
import { CanvasItemProps } from '../types';

const originCanvasItemList: CanvasItemProps[] = OriginCanvasItemData;

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  // debugger;
  // 해당 코드가 적힌 부분에서 웹 페이지가 멈추고 디버깅 가능하게 함
  const filteredCanvasItemList = originCanvasItemList.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      <CanvasList
        filteredCanvasItemListData={filteredCanvasItemList}
        searchText={searchText}
        isGrid={isGrid}
      />
    </div>
  );
}

export default Home;
