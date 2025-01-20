export interface CanvasItemProps {
  id: number;
  to: string;
  title: string;
  date: string;
  tag: string;
  problem?: Note;
  customerSegments?: Note;
  valueProposition?: Note;
  uniqeSellingProposition?: Note;
  channels?: Note;
  customerRelationships?: Note;
  revenueStreams?: Note;
  costStructure?: Note;
  keyMetrics?: Note;
  highLevelConcept?: Note;
  customerPathways?: Note;
  existingAlternatives?: Note;
  solution?: Note;
  unfairAdvantage?: Note;
  earlyAdopters?: Note;
}

export interface Note {
  notes: NoteType[];
}

export interface NoteType {
  id: string;
  content: string;
  color: string;
}

// 검색 조건 타입
// 유틸리티 타입으로 각 캔버스의 항목에 _like 키를 추가 한 타입
export type CanvasSearchParams = {
  [K in keyof CanvasItemProps as `${K}_like`]?: string;
};
