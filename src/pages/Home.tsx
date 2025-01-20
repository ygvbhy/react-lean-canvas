import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { createCanvas, deleteCanvas, getCanvasData } from '../api/canvas';
import Button from '../components/Button';
import Error from '../components/Error';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';
import { useApiRequest } from '../hooks/useApiRequest';
import { CanvasItemProps, CanvasSearchParams } from '../types';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [canvasItemList, setCanvasItemList] = useState<CanvasItemProps[]>([]);

  const {
    isLoading,
    error,
    execute: getCanvasDataList,
  } = useApiRequest(getCanvasData);
  const { isLoading: isLoadingCreateCanvas, execute: createNewCanvas } =
    useApiRequest(createCanvas);

  const onDeleteItem = async (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return;

    try {
      await deleteCanvas(id);
      await getCanvasDataList(
        { title_like: searchText },
        {
          onSuccess: (response: AxiosResponse) =>
            setCanvasItemList(response.data),
        },
      );
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const getFetchCanvasData = async (params: CanvasSearchParams) => {
    getCanvasDataList(params, {
      onSuccess: (response: AxiosResponse) => {
        setCanvasItemList(response.data);
      },
    });
  };

  const handleCreateCanvas = async () => {
    createNewCanvas(null, {
      onSuccess: () => {
        getCanvasDataList(
          { title_like: searchText },
          {
            onSuccess: (response: AxiosResponse) =>
              setCanvasItemList(response.data),
          },
        );
      },
      onError: (err) => alert(err.message),
    });
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
