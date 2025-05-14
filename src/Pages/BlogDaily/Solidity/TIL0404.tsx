import React from 'react'

const TIL0404 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 4일</p>
            <h3>Solidity - 실습 5</h3>
            <ul><li>Solidity에서 string은 가변 길이 데이터라서 메모리 내에서 직접 비교(==) 하기 어렵다</li>
                <li>keccak256(abi.encodePacked(string))을 사용하여 문자열을 비교
                    <ul><li>abi.encodePacked(...) → 문자열을 바이트(bytes)로 변환</li>
                        <li>keccak256(...) → 변환된 바이트 데이터를 해싱(hash)하여 고정된 크기의 값 생성</li></ul>
                </li></ul>

            <h4>과제: 계산기 컨트랙트 구현</h4>
            <ul><li>Solidity - 기본 문법4의 문법 개념을 이용하여 계산 기능을 가지고 있는 계산기 컨트랙트 개발하기</li>
                <li>계산기 컨트랙트 구조
                    <ul><li>인터페이스 (ICalculator): 모든 계산기가 따라야 할 함수 정의. 이미 구현이 되어 있음</li>
                        <li>라이브러리(MathLibrary): 실질적인 계산 로직이 들어있는 라이브러리. 이미 구현이 되어 있음</li>
                        <li>추상 컨트랙트 (AbstractCalculator): ICalculator 인터페이스를 기반으로 공통 로직 구현, MathLibrary를 활용하여 연산 수행</li>
                        <li>컨트랙트 (Calculator): 모든 기능을 상속 받아서 실제 계산기를 구현</li></ul>
                </li>
                <li>참고: <a href='https://github.com/dolsotbob/SolidityConcepts3'>계산기 컨트랙트 만들기 과제</a></li>
            </ul>

            <h4>복습</h4>
            <p>abi.encode가 권장될 때</p>
            <ul><li>길이 값이 있는 데이터를 바이트로 바꿀 때</li>
                <li>안전한 해시 생성, 스마트 계약과의 상호작용, 데이터 저장 &rarr; abi.encode</li>
                <li>가볍고 짧은 데이터 해시 생성, 단순한 문자열 연결 &rarr; abi.encodePacked</li></ul>

            <p>calldata와 memory 차이</p>
            <ul><li>상태변수에 덮어 씌우는 로직일 때 &rarr; memory 사용</li>
                <li>상태변수 건드리지 않을 때 &rarr; calldata 사용. external, public 과만 쓸 수 있음</li></ul>

            <p>CA 와 EOA의 차이</p>
            <ul><li>CA에는 프라이빗 키가 없어서 tx 생성할 수 없다</li></ul>

            <p>require, revert, assert의 차이</p>
            <ul><li>require, revert: 오류 방출 방식. 로직을 안전하고 끊고 싶을 때. require에는 조건이 있음</li>
                <li>assert: assert가 실행되면 모든 가스를 다 태우고 로직이 끊김. 이건 절대로 틀리면 안 되는 코드가 있을 때, 가령 오너가 배포자의 주소여야만 한다던가 할 때 사용된다고 함. 하지만 실재로 배포할 때는 require 로 변경해서 사용</li></ul>

            <p>receive와 fallback</p>
            <ul><li>둘 다 external payable과 함께 쓰기</li>
                <li>receive()는 순수 이더 전송 시 호출, fallback()은 이더와 함께 데이터가 전송되거나 함수가 없을 때 호출</li>
                <li>fallback이 쓰일 때 예시: 나중에 우리 upgradable contract 만들 때 쓰게될 것
                    <ul><li>얼굴 마담인 프록시 컨트랙트에는 함수가 없으니까 fallback 실행시킴. 그러면 fallback이 call을 실행시킴</li></ul>
                </li></ul>

            <p>abstract contract에서 virtual과 override사용할 때</p>
            <ul><li>abstract contract에서의 함수가 child contract 에서 덮어쓰기해서 사용될 수 있어서 일단 virtual 넣어주는걸 권장</li>
                <li>override는 abstract contract를 상속받은 계약에서 virtual 함수를 가져와 구현할 때/overriding 할 때 사용</li></ul>
            <pre><code>{`
            // abstract contract 에서 아래와 같은 virtual 함수가 있을 때 
            function makeSound() public view virtual returns (string memory); 

            // 상속 받은 컨트랙트에서 해당 함수를 가져와 구현할 때 아래와 같이 override 씀
            function makeSound()  public pure override returns (string memory) { 
                return "Meow";
            } 
            `}</code></pre>

        </div>
    )
}

export default TIL0404