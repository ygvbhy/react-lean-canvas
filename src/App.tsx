import './App.css';
// 링크 이동 컴포넌트 - Link
// Outlet 컴포넌트 - Outlet
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
