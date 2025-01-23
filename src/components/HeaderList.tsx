import { useState } from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const HeaderList = () => {
  // 라우터 이동 함수
  // 라우터 설정 말고 일반 페이지에서 이동 해야 할때 넣으면 됨
  // 함수에서 과정 진행 이후 페이지를 이동해야 할때
  // const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
    { id: 'about', label: 'About', icon: <FaInfoCircle />, to: '/about' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 px-4 text-white">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div>
          <NavLink to="/" className="text-xl font-bold">
            Lean Canvas
          </NavLink>
        </div>
        <nav className="hidden space-x-4 md:flex">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.id}
                className="hover:text-gray-300"
                to={item.to}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
        <Button loading={false} className="hidden md:block">
          버튼 디자인
        </Button>
      </div>
      {/* 모바일 버전 메뉴 버튼 */}
      <aside
        className={`transfoem fixed left-0 top-0 z-50 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'tranlate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button className="focus:outline-none" aria-label="Close Menu">
            <FaTimes className="h-6 w-6" onClick={toggleMenu} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.id}
                className="hover:text-gray-300"
                to={item.to}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </header>
  );
};

export default HeaderList;
