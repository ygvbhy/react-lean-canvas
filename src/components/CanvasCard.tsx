import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { NoteType } from '../types';
import CanvasNote from './CanvasNote';

const CanvasCard = ({
  title,
  isSubTitle = false,
}: {
  title: string;
  isSubTitle?: boolean;
}) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const handleAddNote = () => {
    setNotes([...notes, { id: uuidv4(), content: '' }]);
  };

  const handleRemoveNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
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
            removeNote={handleRemoveNote}
          />
        ))}
      </div>
    </div>
  );
};

export default CanvasCard;
