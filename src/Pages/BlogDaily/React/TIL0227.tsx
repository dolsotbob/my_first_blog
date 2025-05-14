import React from 'react'
import { til0227stateExample } from '../../codeExamples'
import { til0227eventHandlerExample } from '../../codeExamples';
import CodeBlock from '../../../components/CodeBlock';


const TIL0227 = () => {
    return (
        <div className='BlogDaily'>
            <h3>리액트 기초</h3>
            <h4>리액트란? </h4>
            <ul>
                <li>자바스크립트 프레임워크로 UI를 구축하기 위해 사용됨</li>
                <li>특히 단일 페이지 애플리케이션(SPA) 만들 때 유용</li>
                <li>데이터 변경 시 효율적으로 UI 업데이트 하는데 강점</li>
            </ul>

            <p>리액트의 정의와 목적</p>
            <ul><li>리액트는 컴포넌트 기반 아키텍처를 채택하여 UI를 작은 단위로 나누어 관리한다</li>
                <li>주로 프론트엔드 개발에서 사용되며, 동적이고 반응형 웹 애플리케이션을 만들기 위해 설계되었다</li></ul>

            <p>리액트의 장점</p>
            <ul>
                <li>컴포넌트 기반(구조 자체 클러스터링 가능): UI를 독립적인 컴포넌트로 나누어 재사용성이 높음
                    <ul><li>신입 때는 공용 컴포넌트 만지지 말기</li></ul>
                </li>
                <li>가상 DOM: 실제 DOM 대신 가상 DOM을 사용해 성능을 최적화함</li>
                <li>풍부한 생태계(오픈소스): 다양한 라이브러리와 도구를 지원하며 커뮤니티가 활성화되어 있음</li>
            </ul>

            <p>리액트를 사용하는 이유는?</p>
            <ul>
                <li>SPA(Single Page Application) 지원: 유튜브처럼 페이지 전환 없이 동적으로 콘텐츠 업데이트 가능</li>
                <li>커뮤니티 지원</li>
                <li>유연성: 다른 라이브러리나 프레임워크와 쉽게 통합할 수 있음. ex: Recoil 상태 관리 라이브러리.</li>
            </ul>


            <h4>JSX(JavaScript XML)</h4>
            <ul><li>JSX란? 자바스크립트로 HTML 문법을 사용하는 것</li>
                <li>리액트에서는 JSX를 사용해 컴포넌트의 구조를 직관적으로 표현할 수 있음</li>
                <li>JSX는 HTML처럼 보이지만 실제로는 자바스크립트로 변환됨 (HTML과 달리 class 대신 className을 사용)</li>
                <li>{ } 안의 값을 동적으로 변화시킬 수 있음</li>
            </ul>

            <h4>컴포넌트</h4>
            <ul><li>함수형 컴포넌트와 클래스형 컴포넌트
                <ul><li>함수형 컴포넌트: 간단한 함수로 정의되며 Hooks를 사용해 상태를 관리함
                    <ul><li>함수 이름은 대문자로 시작해야 함</li>
                        <li>상태: 컴퓨터가 어떤 값을 기억하는 것. DB에 저장되는 것은 아님.</li>
                        <li>Hooks: 리액트에서 기억하고 저장할 때 도와주는 도구들</li>
                        <li>예:
                            <pre><code>{`
                function Welcome() {
                    return <h1>Hello, React!</h1>;
                }
                `}</code></pre>
                        </li></ul>
                </li>
                    <li>클래스형 컴포넌트: 클래스로 정의되며 생명주기 매서드를 사용할 수 있음</li>
                    <li>예:
                        <pre><code>{`
                class Welcome extends React.Component { 
                    render() { 
                        return <h1>Hello, React!</h1>;
                    }
                }
                `}</code></pre>
                    </li>
                </ul>
            </li>
                <li>컴포넌트의 재사용성과 조합:
                    <ul><li>컴포넌트는 독립적이며, 여러 컴포넌트를 조합해 복잡한 UI를 만들 수 있음 </li>
                        <li>예:</li>
                        <pre><code>{`
                function App() {
                    return (
                        <div>
                            <Welcome />
                            <Welcome />
                        </div>
                    );
                }
                `}</code></pre>
                    </ul>
                </li>
            </ul>

            <p><span style={{ fontStyle: 'italic' }}>어떤 방식을 쓰는지는 회사마다 다를 것</span></p>

            <h4>Props와 State</h4>
            <ul><li>Props: 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달할 때 사용. 키워드가 아님
                <ul><li>Props는 외부에서 전달되며 읽기 전용임</li>
                    <li>예시: </li>
                    <pre><code>{`
                function Welcome(props) { 
                    return <h1>Hello, {props.name}!</h1>
                }

                function App() {
                    return <Welcome name = "React" />   // Hello, React!
                }
                `}</code></pre>
                </ul>
            </li>
                <li>State: 컴포넌트 내부에서 관리되는 상태. 상태가 변경되면 컴포넌트가 다시 렌더링됨
                    <ul><li>스테이트는 컴퓨터가 기억하는 값이고 { } 안에는 변수 쓸 수 있음</li>
                        <li>컴포넌트 내부에서 관리되며 변경 가능</li>
                        <li>이벤트 핸들러를 통해 State 업데이트 가능</li>
                        <li>예시:</li>
                        <CodeBlock code={til0227stateExample}></CodeBlock>
                    </ul>
                </li>
                <li>Props와 State의 차이점:
                    <ul><li>Props: 외부에서 전달되며 읽기 전용임</li>
                        <li>State: 컴포넌트 내부에서 관리되며 변경 가능함</li></ul>
                </li>
            </ul>

            <h4>이벤트 처리</h4>
            <ul><li>리액트에서는 이벤트 핸들러를 camelCase로 작성</li>
                <li>이벤트 핸들러를 통해 State를 업데이트할 수 있음</li>
                <li>예시:</li>
                <CodeBlock code={til0227eventHandlerExample}></CodeBlock>
            </ul>

            <h3>JSX(Javascript XML)</h3>
            <ul><li>JavaScript로 HTML 문법을 사용한다고 이해하기 </li>
                <li>React에서 UI를 구성할 때 사용하는 문법. 이 문법을 통해 React 엘리먼트를 만들 수 있다</li>
                <li>Babel은 JSX를 브라우저가 이해할 수 있는 JavaScript로 컴파일한다</li>
                <li>JSX &rarr; Babel &rarr; JS &rarr; Browser</li>
            </ul>

            <p>JSX 규칙</p>
            <ul>
                <li>하나의 엘리먼트 안에 모든 엘리먼트가 포함</li>
                <li>CSS class 속성을 지정하려면 "className"으로 표기</li>
                <li>표현식 사용 시 중괄호{ } 이용</li>
                <li>사용자 정의 컴포넌트는 대문자로 시작. 예: function Hello()</li>
                <li>조건부 렌더링에 삼항연사자 사용
                    <pre><code>{`
                (1+1 === 2) ? (<p>정답</p>) : (<p>탈락</p>)
                `}</code></pre>
                </li>
                <li>여러 개의 HTML 엘리먼트를 표시할 때 map() 함수 이용
                    <pre><code>{`
                const posts = [
                    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'}, 
                    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
                ];

                function Blog() {
                    const content = posts.map((post) => 
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    );

                    return (
                        <div>
                            {content}
                        </div>
                    );
                }
                `}</code></pre>
                    <ul><li>posts 배열을 반복문으로 순회하여 각 블로그 글을 JSX로 만들어 하나의 컴포넌트(Blog)로 렌더링 하는 예제</li>
                        <li>posts.map(...)를 사용해서 배열의 각 요소를 JSX 형태로 변환함함</li>
                        <li>반드시 "key" JSX 속성을 넣어햐 함</li>
                        <li>이 Blog 컴포넌트를 렌더링하면 다음과 같은 HTML 구조가 나옴
                            <pre><code>{`
                <div>
                    <div>
                        <h3>Hello World</h3>
                        <p>Welcome to learning React!</p>
                    </div>
                    <div>
                        <h3>Installation</h3>
                        <p>You can install React from npm.</p>
                    </div>
                </div>
                `}</code></pre>
                        </li>
                    </ul>
                </li>
            </ul>

            <h4>Component로 생각하기기</h4>
            <ul><li>하나의 기능을 구현하기 위한 여러 종류의 코드 묶음; UI를 구성하는 필수 요소</li>
                <li>root 컴포넌트는 자식 컴포넌트를 가질 수 있고 이 계층적 구조(hierarchy)를 트리 구조로 형상화 할 수 있다</li>
                <li>각각의 컴포넌트는 각자 고유한 기능을 가지고 있다. 이들을 모아 복잡한 UI를 구성하거나 앱을 만들 수 있다</li>
                <li>function 이름은 대문자로 시작</li>
                <li>함수형 쓸지 클래스형 쓸지는 회사마다 다를 것 </li>
            </ul>

            <h4>과제</h4>
            <ul><li>과제: <a href='https://github.com/dolsotbob/react-twittler-intro'>twittler-intro</a></li></ul>

        </div>

    );
};

export default TIL0227