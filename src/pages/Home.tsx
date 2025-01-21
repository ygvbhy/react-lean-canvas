import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createCanvas, deleteCanvas, getCanvasData } from '../api/canvas';
import Button from '../components/Button';
import CategoryFilter from '../components/CategoryFilter';
import Error from '../components/Error';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import CanvasList from '../components/canvas/CanvasList';

function Home() {
  const [isGrid, setIsGrid] = useState(true);
  const [filter, setFilter] = useState({
    searchText: '',
    category: '',
  });
  const handleFilter = (key: string, value: string) =>
    setFilter((prev) => ({ ...prev, [key]: value }));

  const queryClient = useQueryClient();

  // 데이터 조회
  const {
    data: canvasItemList,
    isLoading,
    error,
    refetch: refetchCanvasItemList,
  } = useQuery({
    queryKey: ['canvases', filter.searchText, filter.category],
    queryFn: () => {
      console.log(123);
      return getCanvasData({
        title_like: filter.searchText,
        tag_like: filter.category,
      });
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
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
        <div className="flex gap-2 flex-col sm:flex-row w-full mb-4 sm:mb-0">
          <SearchBar
            searchText={filter.searchText}
            onSearch={(value) => handleFilter('searchText', value)}
          />
          <CategoryFilter
            category={filter.category}
            onCategoryChange={(value) => handleFilter('category', value)}
          />
        </div>
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
          searchText={filter.searchText}
          isGrid={isGrid}
          onDeleteItem={onDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
