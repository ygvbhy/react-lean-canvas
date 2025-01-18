import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';
import OriginCanvasItemData from '../data/OriginCanvasItem.json';
import { CanvasItemProps } from '../types';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [canvasItemList, setCanvasItemList] =
    useState<CanvasItemProps[]>(OriginCanvasItemData);
  // debugger;
  // 해당 코드가 적힌 부분에서 웹 페이지가 멈추고 디버깅 가능하게 함
  const filteredCanvasItemList = canvasItemList.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const onDeleteItem = (id: number) => {
    setCanvasItemList(canvasItemList.filter((item) => item.id !== id));
  };

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
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default Home;
