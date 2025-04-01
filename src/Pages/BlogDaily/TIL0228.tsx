import React from 'react'

const TIL0228 = () => {
    return (
        <div className='BlogDaily'>
            <h3>심화 - ReactSPA</h3>
            <ul><li>SPA(Simple Page Application): 페이지 갱신에 필요한 데이터만 받아 업데이트 함으로써 사용자와 소통하는 웹 어플리케이션이나 웹사이트 </li>
                <li>HTML 문서 전체가 아니라 업데이트가 필요한 데이터만 받아 JavaScript가 이 데이터를 조작하여 HTML 요소를 생성하여 화면에 보여주는 방식</li>
            </ul>

            <h4>SPA 단점</h4>
            <ol>
                <li>긴 로딩 시간
                    <ul>
                        <li>첫 로딩 시 JavaScript 파일을 기다리는 시간 때문에</li>
                    </ul>
                </li>
                <li>부족한 검색 엔진 최적화</li>
            </ol>

            <h4>Wireframe & Mockup</h4>
            <ul>
                <li>Wireframe: 디자인 들어가기 전 단계로 선으로 윤곽선을 잡는 것</li>
                <li>Mockup: 데스크톱, 스마트폰의 프레임을 덧씌워 직관적으로 이해하기 쉽게 디자인한 것</li>
            </ul>

            <h4>React Router</h4>
            <ul><li>리액트 애플리케이션에서 클라이언트 사이드 라우팅을 구현하기 위해 사용되는 가장 인기 있는 라이브러리</li>
                <li>SPA에서 페이지 전환 없이 URL에 따라 다른 컴포넌트 렌더링할 수 있음</li>
                <li>라우팅: 다른 주소에 따라 다른 뷰를 보여주는는데 "경로에 따라 변경한다"라는 의미로 라우팅이라고 함</li>
                <li>리액트 라우터의 주요 컴포넌트:
                    <ul><li>BrowserRouter: 라우터 역할</li>
                        <li>Routes와 Route: 경로 매칭</li>
                        <li>Link: 경로 변경</li>
                    </ul></li>
                <li>이 컴포넌트를 사용하기 위해서는 React Router 라이브러리에서 따로 불러와야 한다
                    <pre><code>{`import { } from "react-router-dom";`}</code></pre>
                </li>
            </ul>

            <h4>과제 하면서</h4>
            <ul><li>리액트 라우터 - 주소로 페이지화</li>
                <li>App.js가 루트인 경우가 많음</li>
                <li>어떤 회사는 라우팅 해주는 파일을 따로 만듬 (관심사 분리)</li>
                <li>client에서는 import from을 많이씀. { }로 테스트 할 것을 가져옴</li></ul>

        </div>

    );
};

export default TIL0228