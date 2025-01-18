import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <Link to={`/canvas/1`}>Canvas 1</Link>
        </li>
        <li>
          <Link to={`/canvas/2?keyword=canvas2`}>Canvas 2</Link>
        </li>
        <li>
          <Link to={`/canvas/3`}>Canvas 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
