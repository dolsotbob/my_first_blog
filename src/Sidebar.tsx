import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faFaceSmileBeam, faPen, faBuildingColumns, 
  faImages, faMagnifyingGlass
  } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <div className="SideBar">
      <Link to="/">
          <FontAwesomeIcon icon={faHome} /> Home</Link>
      <Link to="/about">
          <FontAwesomeIcon icon={faFaceSmileBeam} /> Greetings</Link>
      <Link to="/blog">
          <FontAwesomeIcon icon={faPen} /> Today I Learned...</Link>
      <Link to="/misc">
          <FontAwesomeIcon icon={faBuildingColumns} /> Further Studies</Link>
      <Link to="/wallet">
          <FontAwesomeIcon icon={faWallet} /> Wallet</Link>
      <Link to="/explorer">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Explorer</Link>
      <Link to="/nft">
          <FontAwesomeIcon icon={faImages} /> NFT</Link>
    </div>
  );
}

export default Sidebar;
