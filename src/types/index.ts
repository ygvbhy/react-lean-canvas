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

export interface CanvasSearchParams {
  title_like: string;
}
