import './App.css';
// 링크 이동 컴포넌트 - Link
// Outlet 컴포넌트 - Outlet
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
