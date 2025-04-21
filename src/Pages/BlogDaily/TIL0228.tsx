import React from 'react'
import CodeBlock from '../../components/CodeBlock';
import { til0228reactRouterExample } from '../codeExamples';

const TIL0228 = () => {
    return (
        <div className='BlogDaily'>
            <h3>심화 - ReactSPA</h3>
            <ul><li>SPA(Simple Page Application): 페이지 갱신에 필요한 데이터만 받아 업데이트 함으로써 사용자와 소통하는 웹 어플리케이션이나 웹사이트 </li>
                <li>HTML 문서 전체가 아니라 업데이트가 필요한 데이터만 받아 JavaScript가 이 데이터를 조작하여 HTML 요소를 생성하여 화면에 보여주는 방식</li>
                <li>SPA 방식으로 만들어진 대표적인 서비스: Youtube, facebook, Gmail, Neflix, airbnb... </li>
            </ul>

            <p>SPA 장점</p>
            <ul><li>전체 페이지가 아니라 필요한 부분의 데이터만 받아서 화면을 업데이트 하면 되기 대문에 사용자와의 interaction에 빠르게 반응한다</li>
            <li>서버에서는 요청 받은 데이터만 넘겨주면 되기 때문에 서버 과부하 문제가 현저하게 줄어든다</li>
            <li>전체 페이지를 렌더링 할 필요가 없기 때문에 더 나은 유저경험을 제공한다</li></ul>

            <p>SPA 단점</p>
            <ol>
                <li>긴 로딩 시간
                    <ul><li>첫 로딩 시 HTML 파일을 읽어드린 후 그 안의 JavaScript 파일을 다시 받아오는 과정을 거치기 때문에</li></ul>
                </li>
                <li>부족한 검색 엔진 최적화
                    <ul><li>검색 엔진 작동 방식: 검색 로봇이 웹 페이지에 있는 정보 수집 및 분석 &rarr; 그 결과값에 인덱스를 만들어 보관 &rarr; 사용자가 검색어를 입력하면 인덱스에서 검색어와 가장 연관성이 높은 웹 페이지들을 순서대로 보여줌</li>
                    <li>SPA의 경우 HTML 파일은 별다른 자료가 없어서 검색 엔진이 적절히 동작하지 못함; SPA에서도 검색 엔진 최적화에 대응할 수 있도록 검색 엔진 발전하는 중임</li>
                    </ul>
                </li>
            </ol>

            <h4>Wireframe & Mockup</h4>
            <ul>
                <li>Wireframe: 디자인 들어가기 전 단계로 선(wire)으로 윤곽선(frame)을 잡는 것
                    <ul><li>이 작업을 통해 개발자는 디자인 컨셉과 사이트 기능에 대한 이해를 할 수 있다</li></ul>
                </li>
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
                    <ol><li>react-router 라이브러리 설치</li>
                    <pre><code>{`
                    npx craete-react-app example
                    cd example 

                    npm install react-router-dom
                    `}</code></pre>
                    <li>App.js로 react-router 컴포넌트 꺼내오기</li>
                    <pre><code>{`
                    import React from "react";
                    import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
                    
                    export default function App() {
                        return (...)
                    }
                    `}</code></pre>
                    <li>React Router 설정
                    <CodeBlock code={til0228reactRouterExample}></CodeBlock>
                    </li>
                    </ol>
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