import React from 'react'

const TIL0307 = () => {
  return (
    <div className='BlogDaily'>TIL0307
    <p>2025년 3월 7일</p>
    <h3>Python</h3>
    <p>Python의 특징은? 
        <ul><li>인터프리터 언어: 별도의 컴파일 과정 없이 즉시 실행할 수 있습니다.</li>
        <li>크로스 플랫폼: Windows, Mac, Linux 등 다양한 환경에서 실행 가능합니다.</li>
        <li>동적 타이핑: 변수의 타입을 명시할 필요 없이 자동으로 결정됩니다.</li>
        <li>OOP 및 FP 지원</li>
        <li>풍부한 라이브러리 지원: 다양한 내장 라이브러리와 외부 패키지를 활용할 수 있습니다.</li></ul>
    </p>

    <p>Python으로 할 수 있는 일은?
        <ul><li>웹 개발, 데이터 분석 및 시각화, 인공지능 및 머신러닝, 자동화 및 스크립트 작성, 네트워크 프로그래밍, 게임 개발, IoT 및 임베디드 시스템</li></ul>
    </p>

    <p>파이썬 코드 실행 방식은?
        <ul><li>파이썬 인터프리터가 코드를 위에서 아래로 한 줄씩 해석하고 실행한다</li>
        <li>만약 코드에 오류가 발생하면 해당 지점에서 실행이 중단된다</li></ul>   
    </p>

    <p>파이썬의 데이터 타입이란?
        <ol><li>불변 타입: 숫자, 문자열, 튜플, 불리언, None 등</li>
        <li>가변 타입: 리스트, 딕셔너리, 집합 등</li></ol>
        " type() 함수"로 숫자 확인할 수 있음 
    </p>
    
    
    <h3>TypeScript</h3>
    <p>TypeScript 프로젝트 환경 구성하기 
      <ol><li>프로젝트 폴더 생성</li>
      <li>npm init -y 실행해 새 프로젝트 초기화</li>
      <li>pm install typescript --save-dev 실행해 TypeScript 설치</li>
      <li>npm install -g ts-node 설치 - 타입스크립트 파일 실행</li>
      </ol>
    </p>

    <p>깨끗한 코딩을 위해 설치하면 좋은 것: 
      <ul><li>TypeScript ESLint와 Prettier</li></ul>
    </p>
    
    </div>
  )
}

export default TIL0307;
