import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { til0304onClickExample, til0304useStateExample } from '../codeExamples';
import { til0304onChangeExample } from '../codeExamples';
import cartimage from '../../assets/til0304shoppingcart.png'

const TIL0304 = () => {
    return (
        <div className='BlogDaily'>
            <h3>심화 - React State & Props</h3>
            <ul><li>장바구니에 옷을 담고 결제 하려다 마음이 바뀌었다. 그 옷을 빼고 새 옷을 담아 결제를 했다</li>
                <li>이 때 장바구니의 상태(State)가 변했고, 결제 페이지에 변경된 장바구니의 상태를 전달(Props)해야 했다</li></ul>

            <h4>State</h4>
            <ul><li>상태는 컴포넌트 내에서 변경될 수 있는 데이터다. 컴포넌트의 상태가 변경되면 자동으로 리렌더링이 발생한다</li>
                <li>State의 특징:
                    <ul><li>컴포넌트 내부에서 관리됨 (Private)</li>
                        <li>변경될 수 있는 동적인 데이터(Mutable)</li>
                        <li>useState 등을 사용하여 관리</li>
                        <li>값이 변경되면 해당 컴포넌트와 하위 컴포넌트가 리렌더링 됨</li></ul>
                </li>
            </ul>
            <img className="til0304cart" src={cartimage} alt='shopping-cart-image'></img>
            <CodeBlock code={til0304useStateExample}></CodeBlock>
            <ul><li>노트 1:
                <ul><li>const [state 저장 변수, state 갱신 함수] = useState(state 초깃값);</li>
                    <li>isChecked는 state를 저장하는 변수, setIsChecked는 상태 isChecked를 변경하는 함수;</li>
                    <li>useState는 state hook; false는 상태 초깃값 </li>
                </ul>
            </li>
                <li>노트 2:
                    <ul><li>input[type=checkbox] JSX 엘리먼트의 값 변경에 따라서 isChecked가 변경되어야 함
                        <ol>
                            <li>사용자가 체크박스 값 변경</li>
                            <li>onChange 이벤트가 이벤트 핸들러 함수인 handleChecked를 호출</li>
                            <li>handleChecked 함수가 setIsChecked를 호출</li>
                            <li>setIsChecked가 호출되면 호출된 결과에 따라 isChecked 변수가 갱신됨</li>
                            <li>React는 새로운 isChecked 변수를 CheckboxExample 컴포넌트에 넘겨 해당 컴포넌트를 다시 렌더링 함</li>
                        </ol>
                    </li></ul>
                </li>
                <li>노트 3:
                    <ul><li>이 상태 변수에 저장된 값을 사용하려면 JSX 엘리먼트 안에 직접 불러서 사용하면 됨</li>
                        <li>여기서는 isChecked가 boolean 값을 가지기 때문에 true or false 여부에 따라 다른 결과가 보이도록 삼항연산자 사용 </li></ul>
                </li>
            </ul>

            <p>State hook, useState</p>
            <ul><li>useState란, React에서 State를 관리하기 위한 Hook
                <ul><li>Hook: 함수형 컴포넌트에서 상태 관리, 생명주기 메서드, 기타 React 기능을 사용할 수 있게 해주는 함수. 예: useState, useEffect...</li></ul>
            </li>
                <li>React에서는 state를 다루는 방법 중 하나로 useState라는 특별한 함수를 제공함</li>
                <li>state hook 사용 시 주의점:
                    <ul><li>React 컴포넌트 state가 변경되면 새롭게 호출되고 리렌더링 됨</li>
                        <li>즉 컴포넌트의 상태가 변경될 때마다 새롭게 호출되고 리렌더링 됨</li>
                        <li>React state는 상태 변경 함수 호출로 변경해야 함. 강제로 변경시도 하면 안됨</li></ul>
                </li>
            </ul>


            <ul>
                <li>import ... from "react";</li>
                <li>useState를 컴포넌트 안에서 호출</li>
                <li>const [stete 저장 변수, state 갱신 함수] = useState(상태 초기 값);</li>
                <li>이 state 변수에 저장된 값을 쓰려면 JSX 엘리먼트 안에 직접 불러 사용하면 됨.
                </li>
            </ul>


            <p>state 갱신하기</p>
            <ul><li>React에서는 state(상태)를 업데이트하려면 setState 함수 같은 것을 사용해야 함</li>
                <li>isChecked라는 상태가 있을 때, 이 값을 업데이트하려면 setIsChecked라는 함수를 호출야 함</li>
                <li>체크박스를 클릭하면 handleChecked 함수가 호출되고, 이 함수에서 setIsChecked를 사용해 isChecked 값을 갱신</li>
                <li>그러면 React가 그 새로운 값을 바탕으로 컴포넌트를 다시 렌더링하는 방식</li></ul>


            <p>주의점</p>
            <ul>
                <li>React 컴포넌트는 state가 변경되면 새롭게 호출되고 리렌더링 됨</li>
                <li>React state는 상태 변경 함수 호출로 변경해야 함</li>
            </ul>


            <h4>Props</h4>
            <ul><li>Props(속성, Properties)는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 값</li>
                <li>Props는 변경할 수 없으며(Read-only), 부모가 변경해야 함</li>
                <li>객체 형태</li>
                <li>특징: </li>
            </ul>

            <p>Props 사용 방법:</p>
            <ol>
                <li>하위 컴포넌트에 전달하고자 하는 값(data)과 속성을 정의한다</li>
                <li>props를 이용하여 정의된 값과 속성을 전달한다</li>
                <li>전달받은 props를 렌더링한다</li>
            </ol>


            <h4>이벤트 처리</h4>
            <p>이벤트 처리 방법은 DOM의 이벤트 처리 방식과 유사하지만 몇 가지 문법 차이가 있음</p>
            <ul>
                <li>React에서 이벤트는 소문자 대신 카멜 케이스를 사용</li>
                <li>JSX를 사용해 문자열이 아닌 함수로 이벤트 처리 함수(Event handler)를 전달함
                    <ul><li>HTML 이벤트 처리 방식:
                        <pre><code>{`<button onclick="handleEvent()">Event</button>`}</code></pre>
                    </li>
                        <li>React의 이벤트 처리 방식:
                            <pre><code>{`<button onClick={handleEvent}>Event</button>`}</code></pre>
                        </li></ul>
                </li>
            </ul>

            <p>이벤트 처리 예시 1: onChange</p>
            <ul><li>input, textarea, select와 같은 폼(Form) 엘리먼트는 사용자의 입력값을 제어하는 데 사용됨</li>
                <li>React에서는 이러한 변경될 수 있는 입력값을 일반적으로 컴포넌트의 state로 관리하고 업데이트한다</li>
                <li>onChange 이벤트 발생 &rarr; e.target.value를 통해 이벤트 객체에 담겨있는 input 값을 읽어올 수 있다 </li>
                <li>컴포넌트 return 문 안의 input 태그에 value와 onChange를 넣었다</li>
                <li>onChange는 input의 텍스트가 바뀔 때마다 발생하는 이벤트</li>
                <li>이벤트가 발생하면 handleChange 함수가 작동하며, 이벤트 객체에 담긴 input 값을 setState를 통해 새로운 state로 변경한다</li>
                <CodeBlock code={til0304onChangeExample}></CodeBlock>
            </ul>

            <p>이벤트 처리 예시 2: onClick</p>
            <ul><li>사용자가 클릭할 때 발생하는 이벤트</li>
                <li>onChange 예시에 버튼을 추가하여 버튼 클릭 시 input tag에 입력한 이름이 alert을 통해 알림 창이 팝업 되도록 코드 추가한 예시</li>
                <CodeBlock code={til0304onClickExample}></CodeBlock>
            </ul>


            <h4>Controlled Component</h4>
            <ul><li>편지봉투에 보내는 사람, 받는 사람 정보를 쓰는 것과 비슷. 변경되는 값들이 상태로 관리됨</li>
                <li>참고: <a href='https://reactwithhooks.netlify.app/docs/forms.html'>리액트 공식 문서의 내용</a></li></ul>

            <h4>React 데이터 흐름</h4>
            <ul><li>단방향 데이터 흐름</li>
                <li>상태는 최소화 하는 것이 가장 좋음</li>
                <li>만약 지갑을 만든다면 유의 지갑 주소와 발란스는 무조건 상태로 관리</li>
                <li>다음 세 질문을 통해 어떤 데이터를 상태로 두어야 할지 판단해보자
                    <ul>
                        <li>부모로부터 props를 통해 전달됩니까? ... 그렇다면 state가 아님</li>
                        <li>시간이 지나도 변하지 않나요? ... 그렇다면 state가 아님</li>
                        <li>컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? ... 그렇다면 state가 아님</li>
                    </ul></li>
            </ul>

            <h4>상태 위치 정하기</h4>
            <ul><li>두 개의 서로 다른 컴포넌트가 하나의 특정 상태에 접근하고자 할 때 두 자식의 공통 부모 컴포넌트에 상태를 위치해야 함</li></ul>

            <h4>과제 하면서</h4>
            <ul><li>npm use 16.20.2 (무조건 업뎃하지 말고 내게 필요한 버전 확인하고 사용)</li>
                <li>시멘틱 엘리먼트: 씨멘틱 태그는 태그 자체에 의미가 있다. 해더나 푸터 처럼. </li>
                <li>링크는 리모콘과 같다고 보면 됨</li>
                <li>잘 모를 때 console.log 해보기</li></ul>

        </div>

    );
};

export default TIL0304;


