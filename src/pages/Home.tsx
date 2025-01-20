import { useEffect, useState } from 'react';
import { createCanvas, deleteCanvas, getCanvasData } from '../api/canvas';
import Button from '../components/Button';
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
  const [isLoadingCreateCanvas, setIsLoadingCreateCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onDeleteItem = async (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return;

    try {
      setIsLoading(true);
      await deleteCanvas(id);
      await getFetchCanvasData({ title_like: searchText });
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
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

  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreateCanvas(true);
      const response = await createCanvas();
      await getFetchCanvasData({ title_like: searchText });
      console.log(response);
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoadingCreateCanvas(false);
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
      <div className="flex justify-end mb-6">
        <Button
          loading={isLoadingCreateCanvas}
          className=""
          onClick={handleCreateCanvas}
        >
          새로운 캔버스 생성
        </Button>
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
