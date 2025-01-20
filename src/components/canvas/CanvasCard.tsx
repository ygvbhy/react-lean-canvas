import { FaPlus } from 'react-icons/fa';
import { NoteType } from '../../types';
import CanvasNote from './CanvasNote';

const CanvasCard = ({
  title,
  isSubTitle = false,
  notes = [],
  onNotesChange,
}: {
  title: string;
  isSubTitle?: boolean;
  notes: NoteType[];
  onNotesChange: (notes: NoteType[]) => void;
}) => {
  const handleAddNote = () => {};

  const handleRemoveNote = (id: string) => {
    console.log(id);
  };

  const handleUpdateNote = (id: string, content: string, color: string) => {
    onNotesChange(
      notes.map((note) =>
        note.id === id ? { ...note, content, color } : note,
      ),
    );
  };
  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${!isSubTitle && 'bg-gray-100 border-b border-b-gray-300'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${!isSubTitle && 'font-bold'}`}>{title}</h3>
        <button
          onClick={handleAddNote}
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {notes.map((note) => (
          <CanvasNote
            key={note.id}
            content={note.content}
            id={note.id}
            color={note.color}
            removeNote={handleRemoveNote}
            onUpdateNote={handleUpdateNote}
          />
        ))}
      </div>
    </div>
  );
};

export default CanvasCard;
