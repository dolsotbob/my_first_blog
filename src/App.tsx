
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Misc from './Pages/FurtherStudies';
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
import Solidity from './Pages/BlogDaily/Solidity/Solidity';
import TIL0324 from './Pages/BlogDaily/Solidity/TIL0324';
import TIL0325 from './Pages/BlogDaily/Solidity/TIL0325';
import TIL0326 from './Pages/BlogDaily/Solidity/TIL0326';
import TIL0327 from './Pages/BlogDaily/Solidity/TIL0327';
import TIL0328 from './Pages/BlogDaily/Solidity/TIL0328';

import TIL0401 from './Pages/BlogDaily/Solidity/TIL0401';
import TIL0402 from './Pages/BlogDaily/Solidity/TIL0402';
import TIL0403 from './Pages/BlogDaily/Solidity/TIL0403';
import TIL0404 from './Pages/BlogDaily/Solidity/TIL0404';
import TIL0331 from './Pages/BlogDaily/Solidity/TIL0331';
import TIL0516 from './Pages/BlogDaily/Server/TIL0516';
import TIL0519 from './Pages/BlogDaily/Server/TIL0519';
import TIL0520 from './Pages/BlogDaily/Server/TIL0520';
import TIL0521 from './Pages/BlogDaily/Server/TIL0521';
import TIL0522 from './Pages/BlogDaily/Server/TIL0522';
import TIL0523 from './Pages/BlogDaily/DB/TIL0523';
import Database from './Pages/BlogDaily/DB/Database';
import SolidityAdv from './Pages/BlogDaily/SolidityAdv/SolidityAdv';
import TIL0407 from './Pages/BlogDaily/SolidityAdv/TIL0407';
import TIL0408 from './Pages/BlogDaily/SolidityAdv/TIL0408';
import TIL0410 from './Pages/BlogDaily/SolidityAdv/TIL0410';
import TIL0414 from './Pages/BlogDaily/SolidityAdv/TIL0414';
import TIL0421 from './Pages/BlogDaily/SolidityAdv/TIL0421';
import TIL0422 from './Pages/BlogDaily/SolidityAdv/TIL0422';
import TIL0423 from './Pages/BlogDaily/SolidityAdv/TIL0423';
import TIL0429 from './Pages/BlogDaily/SolidityAdv/TIL0429';
import TIL0430 from './Pages/BlogDaily/SolidityAdv/TIL0430';
import TIL0507 from './Pages/BlogDaily/SolidityAdv/TIL0507';
import TIL0526 from './Pages/BlogDaily/DB/TIL0526';
import DevTools from './Pages/BlogDaily/DevTools/DevTools';
import TIL0307 from './Pages/BlogDaily/DevTools/TIL0307';
import TIL0312 from './Pages/BlogDaily/DevTools/TIL0312';
import TIL0313 from './Pages/BlogDaily/DevTools/TIL0313';
import TIL0314 from './Pages/BlogDaily/DevTools/TIL0314';
import TIL0318 from './Pages/BlogDaily/DevTools/TIL0318';
import TIL0321 from './Pages/BlogDaily/DevTools/TIL0321';




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

            <Route path="/blog/tool" element={<DevTools></DevTools>}></Route>
            <Route path="/blog/tool/0307" element={<TIL0307></TIL0307>}></Route>
            <Route path="/blog/tool/0312" element={<TIL0312></TIL0312>}></Route>
            <Route path="/blog/tool/0313" element={<TIL0313></TIL0313>}></Route>
            <Route path="/blog/tool/0314" element={<TIL0314></TIL0314>}></Route>
            <Route path="/blog/tool/0318" element={<TIL0318></TIL0318>}></Route>
            <Route path="/blog/tool/0321" element={<TIL0321></TIL0321>}></Route>

            <Route path="/blog/solidity" element={<Solidity></Solidity>}></Route>
            <Route path="/blog/solidity/0324" element={<TIL0324></TIL0324>}></Route>
            <Route path="/blog/solidity/0325" element={<TIL0325></TIL0325>}></Route>
            <Route path="/blog/solidity/0326" element={<TIL0326></TIL0326>}></Route>
            <Route path="/blog/solidity/0327" element={<TIL0327></TIL0327>}></Route>
            <Route path="/blog/solidity/0328" element={<TIL0328></TIL0328>}></Route>
            <Route path="/blog/solidity/0331" element={<TIL0331></TIL0331>}></Route>
            <Route path="/blog/solidity/0401" element={<TIL0401></TIL0401>}></Route>
            <Route path="/blog/solidity/0402" element={<TIL0402></TIL0402>}></Route>
            <Route path="/blog/solidity/0403" element={<TIL0403></TIL0403>}></Route>
            <Route path="/blog/solidity/0404" element={<TIL0404></TIL0404>}></Route>

            <Route path="/blog/solidityadv" element={<SolidityAdv></SolidityAdv>}></Route>
            <Route path="/blog/solidityadv/0407" element={<TIL0407></TIL0407>}></Route>
            <Route path="/blog/solidityadv/0408" element={<TIL0408></TIL0408>}></Route>
            <Route path="/blog/solidityadv/0410" element={<TIL0410></TIL0410>}></Route>
            <Route path="/blog/solidityadv/0414" element={<TIL0414></TIL0414>}></Route>
            <Route path="/blog/solidityadv/0421" element={<TIL0421></TIL0421>}></Route>
            <Route path="/blog/solidityadv/0422" element={<TIL0422></TIL0422>}></Route>
            <Route path="/blog/solidityadv/0423" element={<TIL0423></TIL0423>}></Route>
            <Route path="/blog/solidityadv/0429" element={<TIL0429></TIL0429>}></Route>
            <Route path="/blog/solidityadv/0430" element={<TIL0430></TIL0430>}></Route>
            <Route path="/blog/solidityadv/0507" element={<TIL0507></TIL0507>}></Route>

            <Route path="/blog/server" element={<Server></Server>}></Route>
            <Route path="/blog/server/0509" element={<TIL0509></TIL0509>}></Route>
            <Route path="/blog/server/0512" element={<TIL0512></TIL0512>}></Route>
            <Route path="/blog/server/0513" element={<TIL0513></TIL0513>}></Route>
            <Route path="/blog/server/0514" element={<TIL0514></TIL0514>}></Route>
            <Route path="/blog/server/0515" element={<TIL0515></TIL0515>}></Route>
            <Route path="/blog/server/0516" element={<TIL0516></TIL0516>}></Route>
            <Route path="/blog/server/0519" element={<TIL0519></TIL0519>}></Route>
            <Route path="/blog/server/0520" element={<TIL0520></TIL0520>}></Route>
            <Route path="/blog/server/0521" element={<TIL0521></TIL0521>}></Route>
            <Route path="/blog/server/0522" element={<TIL0522></TIL0522>}></Route>

            <Route path="/blog/db" element={<Database></Database>}></Route>
            <Route path="/blog/db/0523" element={<TIL0523></TIL0523>}></Route>
            <Route path="/blog/db/0526" element={<TIL0526></TIL0526>}></Route>

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
