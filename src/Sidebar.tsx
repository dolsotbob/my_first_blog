import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="SideBar">
      <Link to="/">
        <i className="fa-solid fa-house">Home</i></Link>
      <Link to="/about">Greetings</Link>
      <Link to="/blog">Today I Learned...</Link>
      <Link to="/misc">Further Studies</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/explorer">Explorer</Link>
      <Link to="/nft">NFT</Link>
    </div>
  );
}

export default Sidebar;
