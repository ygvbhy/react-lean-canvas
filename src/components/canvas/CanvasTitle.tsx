import { useEffect, useState } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';

const CanvasTitle = ({
  titleValue,
  onChangeTitle,
}: {
  titleValue: string | undefined;
  onChangeTitle: (title: string) => void;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(titleValue);

  useEffect(() => {
    setTitle(titleValue);
  }, [titleValue]);

  const handleEditingTitleChange = () => {
    setIsEdit(false);
    onChangeTitle(title!);
  };

  return (
    <div className="mb-10 flex items-center justify-center">
      {isEdit ? (
        <div className="flex items-center">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-b-2 border-blue-600 bg-transparent text-center text-4xl font-bold text-blue-600 focus:outline-none"
          />
          <button
            className="ml-2 rounded-full bg-green-500 p-2 text-white transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
            onClick={handleEditingTitleChange}
          >
            <FaCheck />
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-center text-4xl font-bold">{title}</h1>
          <button
            className="ml-2 rounded-full bg-yellow-500 p-2 text-white transition duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Edit title"
            onClick={() => setIsEdit(true)}
          >
            <FaEdit />
          </button>
        </>
      )}
    </div>
  );
};

export default CanvasTitle;
