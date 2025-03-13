
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Misc from './Pages/Misc';
import Introduction from './Pages/BlogDaily/Introduction';
import Signature from './Pages/BlogDaily/Signature';
import Blogpage from './Pages/Blogpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/my_first_blog">
        <header className="App-header">
          <p>
            My First Blog
          </p>
          {/* <Sidebar></Sidebar> */}
          <Sidebar />
        </header>
        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/blog/:slug" element={<Blogpage></Blogpage>}></Route>
          <Route path="/misc" element={<Misc></Misc>}></Route>
          {/* Wallet, Explorer, NFT도 넣어야 함  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
