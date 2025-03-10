import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          정아님 여기에요.
        </p>
        <a
          className="App-link"  //<나>이 링크에 App-link라는 CSS 클래스를 적용합니다.
          href="https://reactjs.org"
          target="_blank"   //<나>이 속성은 링크를 새 브라우저 탭에서 열도록 지정합니다. 
          rel="noopener noreferrer" // <나>새 탭에서 링크를 열 때, 원래 페이지의 URL 정보가 새 페이지로 전달되지 않도록 합니다.
        >
          Learn React
        </a>
        <a>
          소개
        </a>
        <a>
          블로그
        </a>
        <a>
          기타
        </a>
      </header>
    </div>
  );
}

export default App;
