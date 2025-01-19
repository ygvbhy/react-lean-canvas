import { useEffect, useState } from 'react';
import { getCanvasData } from '../api/canvas';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';
import { CanvasItemProps } from '../types';
function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [canvasItemList, setCanvasItemList] = useState<CanvasItemProps[]>([]);

  const filteredCanvasItemList = canvasItemList.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const onDeleteItem = (id: number) => {
    setCanvasItemList(canvasItemList.filter((item) => item.id !== id));
  };

  const getFetchCanvasData = async () => {
    const response = await getCanvasData();
    setCanvasItemList(response.data);
  };

  useEffect(() => {
    getFetchCanvasData();
  }, []);

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
