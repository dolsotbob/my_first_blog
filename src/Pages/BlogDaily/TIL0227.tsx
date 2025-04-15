import React from 'react'

const TIL0227 = () => {
    return (
        <div className='BlogDaily'>
            <h3>리액트 기초</h3>
            <ul>
                <li>자바스크립트 프레임워크로 UI 구축 위해 사용됨</li>
                <li>특히 단일 페이지 애플리케이션(SPA) 만들 때 유용</li>
                <li>데이트 변경 시 효율적으로 UI 업데이트 하는데 강점</li>
                <li>컴포넌트 기반(구조 자체 클러스터링 가능); 가상 DOM; 풍부한 생태계(오픈소스)
                    <ul>
                        <li>신입 때는 공용 컴포넌트 만지지 말기.</li>
                    </ul>
                </li>
            </ul>

            <p>리액트를 사용하는 이유는?</p>
            <ul>
                <li>SPA(Single Page Application) 지원: 유튜브처럼 페이지 전환 없이 동적으로 콘텐츠 업데이트 가능</li>
                <li>커뮤니티 지원</li>
                <li>유연성: 다른 라이브러리나 프레임워크와 쉽게 통합할 수 있음. ex: Recoil 상태 관리 라이브러리.</li>
            </ul>


            <h4>JSX</h4>
            <p>JavaScript XML </p>
            JSX란? 자바스크립트로 HTML 문법을 사용하는 것. <br />
            리액트에서는 JSX를 사용해 컴포넌트의 구조를 직관적으로 표현할 수 있음.
            <ul>
                <li>JSX는 HTML처럼 보이지만 실제로는 자바스크립트로 변환됨 (HTML과 달리 class 대신 className을 사용)</li>
                <li>{ } 안의 값을 동적으로 변화시킬 수 있음</li>
            </ul>


            <h4>컴포넌트</h4>
            <p>함수형 컴포넌트</p>
            <p>간단한 함수로 정의되며 Hooks를 사용해 상태 관리</p>

            <ul>
                <li>함수 이름은 대문자로 시작해야 함</li>
                <li>상태: 컴퓨터가 어떤 값을 기억하는 것. DB에 저장되는 것은 아님.</li>
                <li>Hooks: 리액트에서 기억하고 저장할 때 도와주는 도구들</li>
            </ul>

            <p>클래스형 컴포넌트</p>
            클래스로 정의되며 생명주기 메서드를 사용할 수 있다.
            <ul>class Welcome extends React.Component </ul>

            <p>어떤 방식을 쓰는지는 회사마다 다를 것</p>

            <h4>Props와 State</h4>
            <ul><li>Props: 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달할 때 사용. 키워드가 아님
                <ul><li>Props는 외부에서 전달되며 읽기 전용임</li></ul>
            </li>
                <li>State: 컴포넌트 내부에서 관리되는 상태. 상태가 변경되면 컴포넌트가 다시 렌더링됨
                    <ul><li>스테이트는 컴퓨터가 기억하는 값이고 { } 안에는 변수 쓸 수 있음</li>
                        <li>컴포넌트 내부에서 관리되며 변경 가능</li>
                        <li>이벤트 핸들러를 통해 State 업데이트 가능</li></ul>
                </li></ul>

            <h4>JSX(Javascript XML)</h4>
            <ul><li>JavaScript로 HTML 문법을 사용한다고 이해하기 </li>
                <li>React에서 UI를 구성할 때 사용하는 문법으로 JavaScript를 확장한 문법. 이 문법을 통해 React 엘리먼트를 만들 수 있다</li>
                <li>Babel은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일한다</li>
            </ul>

            <p>JSX 규칙</p>
            <ul>
                <li>하나의 엘리먼트 안에 모든 엘리먼트가 포함</li>
                <li>CSS class 속성을 지정하려면 "className"으로 표기(만약 class로 작성하면 React에서 이를 html속성 대신 자바스크립트 클래스로 받아들임)</li>
                <li>중괄호{ } 이용</li>
                <li>사용자 정의 컴포넌트는 대문자로 시작. 예: function Hello()</li>
                <li>조건부 렌더링에 삼항연사자 사용</li>
                <li>여러 개의 HTML 엘리먼트를 표시할 때 map() 함수 이용
                    <ul>
                        <li>반드시 "key" JSX 속성을 넣어햐 함</li>
                    </ul>
                </li>
            </ul>


            <h4>Component로 생각하기기</h4>
            <ul><li>하나의 기능을 구현하기 위한 여러 종류의 코드 묶음; UI를 구성하는 필수 요소</li>
                <li>root 컴포넌트는 자식 컴포넌트를 가질 수 있고 이 계층적 구조(hierarchy)를 트리 구조로 형상화 할 수 있다</li>
                <li>function 이름은 대문자로 시작</li>
                <li>함수형 쓸지 클래스형 쓸지는 회사마다 다를 것 </li>
            </ul>

            <h4>과제</h4>
            <ul><li>과제: <a href='https://github.com/dolsotbob/react-twittler-intro'>twittler-intro</a></li></ul>

        </div>

    );
};

export default TIL0227