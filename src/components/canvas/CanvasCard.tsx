import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
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
  const handleAddNote = () => {
    const newNote: NoteType = {
      id: uuidv4(),
      content: '',
      color: '',
    };
    onNotesChange([...notes, newNote]);
  };

  const handleRemoveNote = (id: string) => {
    onNotesChange(notes.filter((note) => note.id !== id));
  };

  const handleUpdateNote = (id: string, content: string, color: string) => {
    onNotesChange(
      notes.map((note) =>
        note.id === id ? { ...note, content, color } : note,
      ),
    );
  };
  return (
    <div className="row-span-1 min-h-48 border-collapse border border-gray-300 bg-white">
      <div
        className={`${!isSubTitle && 'border-b border-b-gray-300 bg-gray-100'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${!isSubTitle && 'font-bold'}`}>{title}</h3>
        <button
          onClick={handleAddNote}
          className="rounded-md bg-blue-400 p-1.5 text-xs text-white"
        >
          <FaPlus />
        </button>
      </div>
      <div className="min-h-32 space-y-3 p-3">
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
