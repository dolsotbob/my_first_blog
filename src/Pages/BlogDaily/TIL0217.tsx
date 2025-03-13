import React from 'react'

const TIL0217 = () => {
    return (
        <div className='BlogDaily'>

            <h3>Javascript 2</h3>
            <p>2025년 2월 17일</p>
            <h4>조건문 if</h4>
            <ul><li>동치연산자 === 는 두 피연산자가 동일하면 true, 아니면 false를 반환</li>
                <li>!== 는 반대로 두 피연산자가 동일하지 않으면 true, 동일하면 false를 반환</li>
                <li>비교연산자</li>
                <li>논리연산자 &&, ||: ||은 여러 조건 중 하나만 true 여도 true로 판단함. && 은 여러 조건 중 하나라도 false면 false로 판단</li>
                <li>부정연산자 !는 조건이 true이면 false, 조건이 false이면 true를 리턴함</li>
            </ul>

            <h4>삼항 조건 연산자</h4>
            <p>if문과 else 문을 삼항 조건 연산자로 바꿔쓸 수 있음
                <ul><li>num % 2 === 0 ? console.log('짝수') : console.log('홀수');</li></ul>
            </p>

            <h4>반복문 for문</h4>
            <p>for (초기값; 조건식; 증감식) {'실행코드'} </p>

            <h4>문자열과 반복문</h4>
            <ul>let str = 'rocketboost';</ul>
            <ul>console.log(str[0]); // 'r'</ul>
            <ul>console.log(str.indexOf('c')); //2</ul>

            <h4>반복문의 중첩</h4>
            <p>반복문 내부에 또 다른 반복문을 사용할 수 있음. 단, 컴퓨터가 느려질 수 있음.</p>

            <h4>while문</h4>
            <p>언제까지 반복할 지 모를 때 사용. 예를 들어 내 폴더 안에 몇 개의 파일이 있는지 모를 때
                <ul><li>while문 작성할 때 조건식이 false로 평가되는 순간이 있는지 반드시 주의. 무한 루프 주의</li>
                    <li>do...while문: while 뒤에 오는 조건식이 true로 평가되는 동안 do 뒤에 오는 코드블록 내부의 코드를 반복해서 실행</li></ul>
            </p>


        </div>
    )
}

export default TIL0217