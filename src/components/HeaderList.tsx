import { NavLink } from 'react-router-dom';
const HeaderList = () => {
  // 라우터 이동 함수
  // 라우터 설정 말고 일반 페이지에서 이동 해야 할때 넣으면 됨
  // 함수에서 과정 진행 이후 페이지를 이동해야 할때
  // const navigate = useNavigate();

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderList;
