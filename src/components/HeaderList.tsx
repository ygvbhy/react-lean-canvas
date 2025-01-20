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
    <header className="bg-gray-800 text-white px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-14">
        <div>
          <NavLink to="/" className="text-xl font-bold">
            Lean Canvas
          </NavLink>
        </div>
        <nav className="hidden md:flex space-x-4">
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
          로그인
        </Button>
      </div>
      {/* 모바일 버전 메뉴 버튼 */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 md:hidden transfoem transition-transform duration-300 ease-in-out ${isMenuOpen ? 'tranlate-x-0' : '-translate-x-full'}`}
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
