import React from 'react'

const TIL0214 = () => {
  return (
    <div className='BlogDaily'>
      <h3>Javascript (1) </h3>
      <p>2025년 2월 14일</p>
      <h4>자바스크립트에서 주석 다는 방법</h4>
      <p>// 다음에 작성, 혹은 /*, */ 사이에 작성</p>

      <h4>자바스크립트의 타입이란?</h4>
      <p>컴퓨터가 데이터를 어떻게 이해하고 처리할지를 나타내는 것. 같은 타입끼리 써야 함.</p>

      <h4>타입을 확인하는 방법은?</h4>
      <p>typeof라는 키워드 사용.
        <br />console.log(typeof 42); // "number"
        <br />console.log(typeof null); // "object"
      </p>

      <h4>Math 내장 객체의 대표적은 메서드는?</h4>
      <ul>
        <li>Math.floor(): 괄호 안의 숫자를 내림하여 반환.</li>
        <li>Math.ceil(): 괄호 안의 숫자를 올림하여 반환</li>
        <li>Math.round(): 괄호 안의 숫자를 반올림 하여 반환.</li>
      </ul>

      <br />
      <ul><li>문자열 주요 메서드: 지갑 주소 확인, 비교할 때 유용함</li>
        <li>논리 부정 연산자(!) 주로 언제 쓰이는지: 값이 없으면 오류를 내보내줘 할 때. 오류가 날 경우 다른 방식으로 할 수 있도록.</li>
        <li>변수: 재사용 가능</li>
        <li>변수 선언 - 메모리에 공간 확보</li>
        <li>할당 - 값을 메모리 공간에 저장</li>
        <li>템플릿 리터럴: 문자의 내부에 변수를 삽입할 수 있는 기능. 정말 많이 쓰임</li></ul>

    </div>
  )
}

export default TIL0214