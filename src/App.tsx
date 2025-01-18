import './App.css';
// 링크 이동 컴포넌트 - Link
// Outlet 컴포넌트 - Outlet
import { Outlet } from 'react-router-dom';
import HeaderList from './components/HeaderList';
function App() {
  return (
    <>
      <HeaderList />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
