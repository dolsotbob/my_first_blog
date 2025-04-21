
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Misc from './Pages/FurtherStudies';
import Blogpage from './Pages/Blogpage';
import Wallet from './Pages/Wallet';
import 'font-awesome/css/font-awesome.min.css';
import Explorer from './Pages/Explorer';
import BlockDetail from './Pages/Explorer/explorerPages/BlockDetails';
import TransactionDetail from './Pages/Explorer/explorerPages/TransactionDetails';
import TxFurtherDetails from './Pages/Explorer/explorerPages/TxFurtherDetails';
import TxFurtherDetails_2 from './Pages/Explorer/explorerPages/TxFurtherDetails_2';
import FurtherStudies from './Pages/FurtherStudies';
import Furtherpage from './Pages/Furtherpage';
import NFT from './Pages/NFT';
import Mint from './Pages/NFTPlatform/NFTpages/Mint';
import Viewer from './Pages/NFTPlatform/NFTpages/Viewer';
import NFTHeader from './Pages/NFTPlatform/components/NFTHeader';


function App() {
  const location = useLocation(); //현재 경로 확인 

  // location.pathname이 hideHeaderPaths의 경로와 일치하는지 확인
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* 헤더를 숨길 경로가 아닌 경우에만 표시 */}
      {isHomePage && (
        <header className="App-header">
          <p>TeaHeeHouse</p>
        </header>
      )}

      {/* /* /* Sidebar와 MainContent를 감싸는 컨테이너 */}
      <div className={`Container ${isHomePage ? 'has-header' : ''}`}>
        <Sidebar />

        <div className='MainContent'>
          <Routes>
            <Route path="/" element={<div>Welcome to TeaHeeHouse!</div>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/blog/:slug" element={<Blogpage></Blogpage>}></Route>
            <Route path="/furtherstudies" element={<FurtherStudies></FurtherStudies>}></Route>
            <Route path="/furtherstudies/:slug" element={<Furtherpage></Furtherpage>}></Route>
            <Route path="/wallet" element={<Wallet></Wallet>}></Route>
            <Route path="/explorer" element={<Explorer></Explorer>}></Route>
            {/* <Route path="/explorerhome" element={<ExplorerHome />} /> */}
            <Route path="/block/:blockNumber" element={<BlockDetail />} />
            <Route path="/transaction/:txHash" element={<TransactionDetail />} />
            <Route path="/furtherdetails/:address" element={<TxFurtherDetails />} />
            <Route path="/furtherdetails/:address" element={<TxFurtherDetails_2 />} />
            <Route path="/nft" element={<NFT></NFT>}></Route>
            <Route path="/nft/viewer" element={<Viewer></Viewer>}></Route>
            <Route path="/nft/mint" element={<Mint></Mint>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
