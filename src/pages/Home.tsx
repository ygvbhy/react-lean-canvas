import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createCanvas, deleteCanvas, getCanvasData } from '../api/canvas';
import Button from '../components/Button';
import Error from '../components/Error';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [searchText, setSearchText] = useState('');

  const queryClient = useQueryClient();

  // 데이터 조회
  const {
    data: canvasItemList,
    isLoading,
    error,
    refetch: refetchCanvasItemList,
  } = useQuery({
    queryKey: ['canvases', searchText],
    queryFn: () => getCanvasData({ title_like: searchText }),
    initialData: [],
  });

  // 등록
  const { mutate: createNewCanvas, isPending: isLoadingCreateCanvas } =
    useMutation({
      mutationFn: createCanvas,
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ['canvases'] }),
      onError: (error) => alert(error.message),
    });

  // 삭제
  const { mutate: deleteCanvasItem } = useMutation({
    mutationFn: deleteCanvas,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['canvases'] }),
    onError: (error) => alert(error.message),
  });

  const onDeleteItem = async (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return;

    deleteCanvasItem(id);
  };

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
          onClick={createNewCanvas}
        >
          새로운 캔버스 생성
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error message={error.message} onRetry={refetchCanvasItemList} />
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
