
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

import BCTheory from './Pages/BlogDaily/BCTheory/BCTheory';
import TIL0203 from './Pages/BlogDaily/BCTheory/TIL0203';
import TIL0204 from './Pages/BlogDaily/BCTheory/TIL0204';
import TIL0205 from './Pages/BlogDaily/BCTheory/TIL0205';
import TIL0206 from './Pages/BlogDaily/BCTheory/TIL0206';
import TIL0207 from './Pages/BlogDaily/BCTheory/TIL0207';

import Web from './Pages/BlogDaily/Web/Web';
import TIL0210 from './Pages/BlogDaily/Web/TIL0210';
import TIL0211 from './Pages/BlogDaily/Web/TIL0211';
import TIL0212 from './Pages/BlogDaily/Web/TIL0212';
import TIL0213 from './Pages/BlogDaily/Web/TIL0213';

import JavaScript from './Pages/BlogDaily/JavaScript/JavaScript';
import TIL0214 from './Pages/BlogDaily/JavaScript/TIL0214';
import TIL0217 from './Pages/BlogDaily/JavaScript/TIL0217';
import TIL0218 from './Pages/BlogDaily/JavaScript/TIL0218';
import TIL0219 from './Pages/BlogDaily/JavaScript/TIL0219';
import TIL0220 from './Pages/BlogDaily/JavaScript/TIL0220';
import TIL0221 from './Pages/BlogDaily/JavaScript/TIL0221';
import TIL0224 from './Pages/BlogDaily/JavaScript/TIL0224';
import ReactPage from './Pages/BlogDaily/React/React';
import TIL0225 from './Pages/BlogDaily/React/TIL2025';
import TIL0226 from './Pages/BlogDaily/React/TIL0226';
import TIL0227 from './Pages/BlogDaily/React/TIL0227';
import TIL0228 from './Pages/BlogDaily/React/TIL0228';
import TIL0304 from './Pages/BlogDaily/React/TIL0304';
import TIL0305 from './Pages/BlogDaily/React/TIL0305';
import TIL0306 from './Pages/BlogDaily/React/TIL0306';
import Server from './Pages/BlogDaily/Server/Server';
import TIL0509 from './Pages/BlogDaily/Server/TIL0509';
import TIL0512 from './Pages/BlogDaily/Server/TIL0512';
import TIL0513 from './Pages/BlogDaily/Server/TIL0513';
import TIL0514 from './Pages/BlogDaily/Server/TIL0514';
import TIL0515 from './Pages/BlogDaily/Server/TIL0515';



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
            {/* //리액트 다이내믹 루틴  */}
            <Route path="/blog/:blogId" element={<Blogpage />} />

            <Route path="/" element={<div>Welcome to TeaHeeHouse!</div>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>

            <Route path="/blog/theory" element={<BCTheory></BCTheory>}></Route>
            <Route path="/blog/theory/0203" element={<TIL0203></TIL0203>}></Route>
            <Route path="/blog/theory/0204" element={<TIL0204></TIL0204>}></Route>
            <Route path="/blog/theory/0205" element={<TIL0205></TIL0205>}></Route>
            <Route path="/blog/theory/0206" element={<TIL0206></TIL0206>}></Route>
            <Route path="/blog/theory/0207" element={<TIL0207></TIL0207>}></Route>

            <Route path="/blog/web" element={<Web></Web>}></Route>
            <Route path="/blog/web/0210" element={<TIL0210></TIL0210>}></Route>
            <Route path="/blog/web/0211" element={<TIL0211></TIL0211>}></Route>
            <Route path="/blog/web/0212" element={<TIL0212></TIL0212>}></Route>
            <Route path="/blog/web/0213" element={<TIL0213></TIL0213>}></Route>

            <Route path="/blog/js" element={<JavaScript></JavaScript>}></Route>
            <Route path="/blog/js/0214" element={<TIL0214></TIL0214>}></Route>
            <Route path="/blog/js/0217" element={<TIL0217></TIL0217>}></Route>
            <Route path="/blog/js/0218" element={<TIL0218></TIL0218>}></Route>
            <Route path="/blog/js/0219" element={<TIL0219></TIL0219>}></Route>
            <Route path="/blog/js/0220" element={<TIL0220></TIL0220>}></Route>
            <Route path="/blog/js/0221" element={<TIL0221></TIL0221>}></Route>
            <Route path="/blog/js/0224" element={<TIL0224></TIL0224>}></Route>

            <Route path="/blog/react" element={<ReactPage></ReactPage>}></Route>
            <Route path="/blog/react/0225" element={<TIL0225></TIL0225>}></Route>
            <Route path="/blog/react/0226" element={<TIL0226></TIL0226>}></Route>
            <Route path="/blog/react/0227" element={<TIL0227></TIL0227>}></Route>
            <Route path="/blog/react/0228" element={<TIL0228></TIL0228>}></Route>
            <Route path="/blog/react/0304" element={<TIL0304></TIL0304>}></Route>
            <Route path="/blog/react/0305" element={<TIL0305></TIL0305>}></Route>
            <Route path="/blog/react/0306" element={<TIL0306></TIL0306>}></Route>

            <Route path="/blog/server" element={<Server></Server>}></Route>
            <Route path="/blog/server/0509" element={<TIL0509></TIL0509>}></Route>
            <Route path="/blog/server/0512" element={<TIL0512></TIL0512>}></Route>
            <Route path="/blog/server/0513" element={<TIL0513></TIL0513>}></Route>
            <Route path="/blog/server/0514" element={<TIL0514></TIL0514>}></Route>
            <Route path="/blog/server/0515" element={<TIL0515></TIL0515>}></Route>

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
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </div>
    </div >
  );
}


export default App;
