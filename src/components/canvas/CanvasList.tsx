import { CanvasItemProps } from '../../types';
import CanvasItem from './CanvasItem';

const CanvasList = ({
  filteredCanvasItemListData,
  searchText = '',
  isGrid,
  onDeleteItem,
}: {
  filteredCanvasItemListData: CanvasItemProps[];
  searchText: string;
  isGrid: boolean;
  onDeleteItem: (id: string) => void;
}) => {
  return (
    <>
      {filteredCanvasItemListData.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-xl text-gray-600">
            {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${isGrid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
        >
          {filteredCanvasItemListData.map((item) => {
            return (
              <CanvasItem
                key={item.id}
                canvasItem={item}
                onDelete={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault(); // 기본 동작을 막는 메서드
                  // e.stopPropagation(); // 이벤트 전파를 막는 메서드
                  onDeleteItem(item.id.toString());
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CanvasList;
