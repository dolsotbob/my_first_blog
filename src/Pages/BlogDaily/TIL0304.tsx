import React from 'react';

const TIL0304 = () => {
  return (
    <div className='BlogDaily'>
                <h3>심화 - React State & Props</h3>
                <p>장바구니에 옷을 담고 결제 하려다 마음이 바뀌었다. 그 옷을 빼고 새 옷을 담아 결제를 했다.
                    이 때 장바구니의 상태(State)가 변했고, 결제 페이지에 변경된 장바구니의 상태를 전달(Props)해야 했다.
                </p>

                <h4>State</h4>
                <p>React에서는 state를 다루는 방법 중 하나로 useState라는 특별한 함수를 제공함
                <ul>
                    <li>import ... from "react";</li>
                    <li>useState를 컴포넌트 안에서 호출</li>
                    <li>const [stete 저장 변수, state 갱신 함수] = useState(상태 초기 값);</li>
                    <li>이 state 변수에 저장된 값을 쓰려면 JSX 엘리먼트 안에 직접 불러 사용하면 됨.
                    </li>
                </ul>
                </p>

                <p>state 갱신하기
                <ul><li>React에서는 state(상태)를 업데이트하려면 setState 함수 같은 것을 사용해야 함</li>
                <li>isChecked라는 상태가 있을 때, 이 값을 업데이트하려면 setIsChecked라는 함수를 호출야 함</li>
                <li>체크박스를 클릭하면 handleChecked 함수가 호출되고, 이 함수에서 setIsChecked를 사용해 isChecked 값을 갱신</li>
                <li>그러면 React가 그 새로운 값을 바탕으로 컴포넌트를 다시 렌더링하는 방식</li></ul>
                </p>
                
                <p>주의점
                <ul>
                    <li>React 컴포넌트는 state가 변경되면 새롭게 호출되고 리렌더링 됨</li>
                    <li>React state는 상태 변경 함수 호출로 변경해야 함</li>
                </ul>
                </p>

                <h4>Props</h4>
                <p>Props 특징:
                <ul>
                    <li>부모 컴포넌트에서 자식 컴포넌트로 전달하는 값</li>
                    <li>객체 형태</li>
                    <li>읽기 전용</li>
                </ul>
                </p>

                <p>Props 사용 방법:
                <ol>
                    <li>하위 컴포넌트에 전달하고자 하는 값(data)과 속성을 정의한다</li>
                    <li>props를 이용하여 정의된 값과 속성을 전달한다</li>
                    <li>전달받은 props를 렌더링한다</li>
                </ol>
                </p>

                <h4>이벤트 처리</h4>
                <p>이벤트 처리 방법은 DOM의 이벤트 처리 방식과 유사하지만 몇 가지 문법 차이가 있음
                <ul>
                    <li>React에서 이벤트는 소문자 대신 카멜 케이스를 사용</li>
                    <li>JSX를 사용해 문자열이 아닌 함수로 이벤트 처리 함수(Event handler)를 전달함
                    </li>
                </ul>
                </p>

                <h4>Controlled Component</h4>
                <p>편지봉투에 보내는 사람, 받는 사람 정보를 쓰는 것과 비슷. 변경되는 값들이 상태로 관리됨</p>

                <h4>React 데이터 흐름</h4>
                <p>단방향 데이터 흐름<br/>
                    상태는 최소화 하는 것이 가장 좋음<br/>
                    만약 지갑을 만ㅡ다면 유의 지갑 주와 발란스는 무조건 상태로 관리 <br/>
                    다음 세 질문을 통해 어떤 데이터를 상태로 두어야 할지 판단해보자
                <ul>
                    <li>부모로부터 props를 통해 전달됩니까? ... 그렇다면 state가 아님</li>
                    <li>시간이 지나도 변하지 않나요? ... 그렇다면 state가 아님</li>
                    <li>컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? ... 그렇다면 state가 아님</li>
                </ul>
                </p>

                <h4>상태 위치 정하기</h4>
                <p>두 개의 서로 다른 컴포넌트가 하나의 특정 상태에 접근하고자 할 때 두 자식의 공통 부모 컴포넌트에 상태를 위치해야 함</p>

                <h4>과제 하면서</h4>
                <ul><li>npm use 16.20.2 (무조건 업뎃하지 말고 내게 필요한 버전 확인하고 사용)</li>
                    <li>시멘틱 엘리먼트: 씨멘틱 태그는 태그 자체에 의미가 있다. 해더나 푸터 처럼. </li>
                    <li>링크는 리모콘과 같다고 보면 됨</li>
                    <li>잘 모를 때 console.log 해보기</li></ul>

                </div>

);
};

export default TIL0304;


