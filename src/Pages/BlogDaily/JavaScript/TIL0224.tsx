import React from 'react'

const TIL0224 = () => {
    return (
        <div className='BlogDaily'>
            <h3>Javascript 5</h3>
            <h4>고차함수</h4>
            <ul>
                <li>함수를 전달인자(arguemnt)로 받을 수 있고,함수를 리턴할 수 있는 함수</li>
                <li>콜백 함수: 다른 함수의 전달인자로 전달되는 함수</li>
                <li>요리 레시피와 비슷함</li>
                <li>모듈 개발 할 때 많이 쓰임</li>
                <li>내장 함수를 잘 쓰기 위해 필요</li>
            </ul>

            <h4>내장 함수 특징</h4>
            <ul>
                <li>for문보다 성능이 뛰어남</li>
                <li>코드가 간결해짐</li>
                <li>재사용이 가능함</li>
            </ul>

            <h4>내장 고차 함수</h4>
            <ul>
                <li>filter, reduce, map은 자주 사용됨</li>
                <li>reduce는 배열의 모든 값을 '누적해서' 결과를 도출하는 내장함수</li>
                <li>맵핑은 마치 월요일에는 다섯 쌍둥이 모두 빨간색으로 입히기로 하는 것처럼 각 요소에 똑같이 적용하는 것</li>
                <li>예: 네이버 메인 화면에서 상품 그림 구성된것은 프론트 앤드 개발자가 객체에 담긴 데이터를 맵핑한 것</li>
            </ul>

            <h4>reduce의 여러 인자</h4>
            <ul>
                <li>callback 함수</li>
                <li>accumulator: 누산기(계산이 누적된 값)</li>
                <li>currentValue: 현재 처리중인 요소의 값</li>
                <li>currentIndex: 현재 처리중인 인텍스의 값</li>
                <li>array: reduce를 호출한 배열</li>
                <li>초기값</li>
            </ul>

            <h4>filter 예시</h4>
            <p>배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴해라 <br />
                function keep(arr.keeper) <br />
            </p>

            <h4>reduce 예시</h4>
            <p>number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴해라
                <ul>return arr.reduce(실행)
                </ul>
            </p>

            <h4>map 예시</h4>
            <p>배열의 각 요소를 2배 곱한 새로운 배열을 리턴해라
                <ul>return arr.map(실행);</ul>
            </p>

            <h4>reduce의 여러 인자</h4>
            <ul><li>callback 함수</li>
                <li>accumulator: 누산기(계산이 누적된 값)</li>
                <li>currentValue: 현재 처리중인 요소의 값</li>
                <li>currentIndex: 현재 처리중인 인텍스의 값</li>
                <li>array: reduce를 호출한 배열</li>
                <li>초기값</li>
            </ul>


            <h4>고차함수의 중요성</h4>
            <ul>
                <li>추상화 = 생산성의 향상</li>
                <li>추상화: 복잡한 어떤 것을 압축해서 핵심만 추출한 상태로 만드는 것</li>

            </ul>
        </div>
    );
};


export default TIL0224
