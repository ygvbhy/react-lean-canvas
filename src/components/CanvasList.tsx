import { CanvasItemProps } from '../types';
import CanvasItem from './CanvasItem';

const CanvasList = ({
  filteredCanvasItemListData,
  searchText,
  isGrid,
  onDeleteItem,
}: {
  filteredCanvasItemListData: CanvasItemProps[];
  searchText: string;
  isGrid: boolean;
  onDeleteItem: (id: number) => void;
}) => {
  return (
    <>
      {filteredCanvasItemListData.length === 0 ? (
        <div className="text-center py-10">
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
                CanvasItem={item}
                onDelete={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  onDeleteItem(item.id);
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
