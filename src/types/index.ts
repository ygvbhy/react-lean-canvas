export interface CanvasItemProps {
  id: number;
  to: string;
  title: string;
  date: string;
  tags: string[];
}

export interface NoteType {
  id: string;
  content: string;
}

// 검색 조건 타입
// 제네릭으로 타입으로 각 캔버스의 항목에 _like 키를 추가 한 타입
export type CanvasSearchParams = {
  [K in keyof CanvasItemProps as `${K}_like`]?: string;
};
