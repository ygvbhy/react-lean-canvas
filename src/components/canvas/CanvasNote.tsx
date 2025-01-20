import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const CanvasNote = ({
  content,
  id,
  color,
  removeNote,
}: {
  content: string;
  id: string;
  color: string;
  removeNote: (id: string) => void;
}) => {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaContent, setTextareaContent] = useState(content);
  const [noteColor, setNoteColor] = useState(() => {
    if (color) return color;

    const randomColor = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomColor];
  });

  useEffect(() => {
    if (textareaContent === '') {
      if (textareaRef.current) {
        textareaRef.current.style.height = '128px';
      }
    }
    if (textareaRef.current) {
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [textareaContent]);

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`p-4 ${noteColor} relative max-h-[32rem] overflow-hidden`}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            aria-label="Check Note"
            className="text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(false);
            }}
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              removeNote(id);
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={textareaContent}
        onChange={(e) => setTextareaContent(e.target.value)}
        className={`w-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden h-auto min-h-[8rem]`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
              onClick={() => setNoteColor(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CanvasNote;
