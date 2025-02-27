import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CanvasItemProps } from '../types';

const About = () => {
  // const queryClient = useQueryClient();
  const { isLoading, data, error } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases/').then((res) => res.data),
    initialData: [],
  });

  // const { mutate: createCanvas, isPending: isLoadingCreateCanvas } =
  //   useMutation({
  //     mutationFn: (newCanvas) =>
  //       axios.post('http://localhost:8000/canvases/', newCanvas),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ['canvases'] });
  //     },
  //   });

  // const handleCreate = () => {
  //   createCanvas({ title: 'new Canvas' });
  // };

  return (
    <>
      <h2 className="text-3xl font-bold">useQuery</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.map((item: CanvasItemProps) => (
        <li key={item.id}>{item.title}</li>
      ))}

      <h2 className="mt-10 text-3xl font-bold">useMutation</h2>
      {/* {isLoadingCreateCanvas && <p>Loading...</p>} */}
      <button
        // onClick={handleCreate}
        className="mt-5"
        // loading={isLoadingCreateCanvas}
      >
        Create Canvas
      </button>
    </>
  );
};

export default About;
