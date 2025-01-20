import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCanvasById, updateCanvasTitle } from '../api/canvas';
import LeanCanvas from '../components/LeanCanvas';
import CanvasTitle from '../components/canvas/CanvasTitle';
import { CanvasItemProps } from '../types';

const CanvasDetail = () => {
  const { id } = useParams();
  const [canvasData, setCanvasData] = useState<CanvasItemProps | null>(null);

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id!);
      setCanvasData(data);
    };
    fetchCanvas();
  }, [id]);

  const handleChangeTitle = async (title: string) => {
    try {
      await updateCanvasTitle(id!, title);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CanvasTitle
        titleValue={canvasData?.title}
        onChangeTitle={handleChangeTitle}
      />
      <LeanCanvas />
    </>
  );
};

export default CanvasDetail;
