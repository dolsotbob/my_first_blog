import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="SideBar">
      <Link to="/about">소개</Link>
      <Link to="/blog">블로그</Link>
      <Link to="/misc">기타</Link>
    </div>
  );
}

export default Sidebar;
