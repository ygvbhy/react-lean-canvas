import { useEffect, useState } from 'react';
import { getCanvasData } from '../api/canvas';
import Error from '../components/Error';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';
import { CanvasItemProps, CanvasSearchParams } from '../types';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [canvasItemList, setCanvasItemList] = useState<CanvasItemProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onDeleteItem = (id: number) => {
    setCanvasItemList(canvasItemList.filter((item) => item.id !== id));
  };

  const getFetchCanvasData = async (params: CanvasSearchParams) => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await getCanvasData(params);
      setCanvasItemList(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFetchCanvasData({ title_like: searchText });
  }, [searchText]);

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => getFetchCanvasData({ title_like: searchText })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filteredCanvasItemListData={canvasItemList}
          searchText={searchText}
          isGrid={isGrid}
          onDeleteItem={onDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
