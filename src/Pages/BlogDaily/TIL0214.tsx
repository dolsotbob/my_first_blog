import React from 'react'

const TIL0214 = () => {
  return (
    <div className='BlogDaily'>
      <h3>Javascript (1) </h3>
      <p>2025년 2월 14일</p>

      <h4>JavaScript 설치</h4>
      <ul><li>웹 브라우저에 내장되어 있어 추가 설치 없이도 실행 가능</li>
        <li>서버 츨 개발이나 로컬 환경에서 실행하기 위해서는 Node.js를 설치해야 함</li>
        <li>설치 방법:
          <ol><li><a href='https://nodejs.org/ko'>Node.js 공식 웹사이트</a>에 접속</li>
            <li>LTS(long Term Support) 버전을 다운로드</li>
            <li>설치 후 터미널에 다음 명령어 입력해 설치 여부 확인: node -v 와 npm -v</li></ol>
        </li></ul>

      <h4>JavaScript 특징</h4>
      <ol><li>인터프리터 언어</li>
        <li>크로스 플랫폼</li>
        <li>동적 타이핑</li>
        <li>객체 지향과 함수형 프로그래밍</li>
        <li>이벤트 기반 프로그래밍</li></ol>

      <h4>자바스크립트에서 주석 다는 방법</h4>
      <ul><li>// 다음에 작성, 혹은 /*, */ 사이에 작성</li></ul>

      <h4>자바스크립트의 타입이란?</h4>
      <ul><li>컴퓨터가 데이터를 어떻게 이해하고 처리할지를 나타내는 것. 같은 타입끼리 써야 함.</li></ul>

      <h4>JavaScript의 타입</h4>
      <ol><li>원시 타입: 숫자, 문자열, 불리언, undefined(값을 아직 정의하지 않은 상태), null(값이 없음), 심볼</li>
        <li>참조 타입</li></ol>

      <p>타입을 확인하는 방법은? typeof라는 키워드 사용</p>
      <ul><li>console.log(typeof 42); // "number"</li>
        <li>console.log(typeof null); // "object"</li></ul>


      <p>Math 내장 객체의 대표적인 메서드:</p>
      <ul>
        <li>Math.floor(): 괄호 안의 숫자를 내림하여 반환.</li>
        <li>Math.ceil(): 괄호 안의 숫자를 올림하여 반환</li>
        <li>Math.round(): 괄호 안의 숫자를 반올림 하여 반환</li>
        <li>Math.abs(): 괄호 안의 숫자의 절대값을 반환</li>
        <li>Math.sqrt(): 괄호 안의 숫자의 루트값을 반환</li>
        <li>Math.pow() : 괄호 안의 첫 번째 숫자를 밑, 두 번째 숫자를 지수인 숫자를 반환</li>
      </ul>

      <p>문자열 주요 메서드</p>
      <ul><li>toLowerCase(): 문자열을 소문자로 변경</li>
        <li>toUpperCase(): 문자열을 대문자로 변경</li>
        <li>concat(): 문자열 연결 연산자 + 처럼 무자열을 이어 붙일 수 있음</li>
        <li>slice() 문자열의 일부를 자를 수 있음</li>
        <li>indexOf(): 문자열 내에 특정 문자나 문자가 몇 번째 위치하는지 확인
          <ul><li>만약 찾는 문자가 2개 이상이면 가장 앞에 있는 문자의 인덱스를 조회</li>
            <li>포함되어 있지 않으면 -1을 반환</li></ul>
        </li>
        <li>includes(): 문자열 내에 특정 문자나 문자가 포함되어 있는지 확인</li>
      </ul>

      <p>Boolean 타입의 falsy 값</p>
      <ul><li>false가 아니여도 Boolean 컨택스트에서 false로 여겨지는 값</li>
        <li>false, 0, -0, 0n, "", '', ``, null, undefined, NaN</li></ul>

      <p>변수</p>
      <ul><li>특정 데이터에 이름을 붙이는 것</li>
        <li>아무것도 할당되지 않은 변수는 undefined가 자동으로 할당됨</li>
        <li>네이밍 컨벤션: camelCase</li>
        <li>네이밍 규칙:
          <ul><li>let name, $head, _score  // 사용 가능한 변수명</li>
            <li>let 1st;  // 사용할 수 없음; 숫자를 포함할 수 있지만 숫자로 시작하면 안됨 </li>
            <li>예약어 사용 불가
              <ul><li>let, const, true, false, typeof 등 프로그래밍 언어에서 사용되고 있거나 사용될 예정인 단어</li></ul>
            </li></ul>
        </li>
        <li>변수 재할당</li>
        <pre><code>{`
        let number = 10;
        number = number + 2;
        console.log(number); // 12

        number = number * 3;
        console.log(number); // 36
        `}</code></pre>
        <li>템플릿 리터럴: 문자열 내부에 변수 삽입할 수 있는 기능
          <pre><code>{`
        let country = 'korea';
        let age = 30;
        let name = 'elice kim';
        console.log(₩{country} S{age} S{name}₩); // 'korea 30 elice kim'
        `}</code></pre>
          <ul><li>단어와 단어 사이에 공백을 삽입하기 위해 ‘ ‘를 사용하는 것보다 템플릿 리터럴을 사용하는 것이 가독성 측면에서 훨씬 우수함</li></ul>
        </li>
      </ul>

      <p>기타 강의 노트:</p>
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