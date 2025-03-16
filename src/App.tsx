
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Misc from './Pages/Misc';
import Blogpage from './Pages/Blogpage';

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
              <Route path="/misc" element={<Misc></Misc>}></Route>
              {/* Wallet, Explorer, NFT도 넣어야 함  */}
            </Routes>
          </div>
        </div>
    </div>
  );
}


export default App;
