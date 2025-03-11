import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="SideBar">
      <Link to="/about">소개</Link>
      <Link to="/blog">블로그</Link>
      <Link to="/misc">기타</Link>
      <Link to="/wallet">지갑</Link>
      <Link to="/explorer">익스플로러</Link>
      <Link to="/nft">NFT</Link>
    </div>
  );
}

export default Sidebar;
