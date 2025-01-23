import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const CanvasNote = ({
  content,
  id,
  color,
  removeNote,
  onUpdateNote,
}: {
  content: string;
  id: string;
  color: string;
  removeNote: (id: string) => void;
  onUpdateNote: (id: string, content: string, color: string) => void;
}) => {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [localContent, setLocalContent] = useState(content);
  const [noteColor, setNoteColor] = useState(() => {
    if (color) return color;

    const randomColor = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomColor];
  });

  const handleContentChange = () => {
    onUpdateNote(id, localContent, noteColor);
  };

  const handleColorChange = (color: string) => {
    setNoteColor(color);
    onUpdateNote(id, content, color);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`p-4 ${noteColor} relative max-h-[32rem] overflow-hidden`}
    >
      <div className="absolute right-2 top-2">
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
        value={localContent}
        onChange={(e) => setLocalContent(e.target.value)}
        onBlur={handleContentChange}
        className={`h-auto min-h-[8rem] w-full resize-none overflow-hidden border-none bg-transparent text-gray-900 focus:outline-none`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`h-6 w-6 cursor-pointer rounded-full outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
              onClick={() => handleColorChange(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CanvasNote;
