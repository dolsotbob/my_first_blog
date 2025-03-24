import React from 'react'
import contractStructure from '../../assets/smartContractStructure.png'

const TIL0324 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 24일</p>
            <h3>Solidity - 기본 문법 1</h3>
            <p><ul><li>Solidity: 이더리움 스마트 컨트랙트를 작성하기 위한 프로그래밍 언어</li>
                <li>EVM에서 실행됨</li>
                <li>Binance Smart Chain, Polygon 등 EVM 호환 네트워크에서도 활용됨</li>
                <li>Hardhat, Truffle, Remix IDE 사용할 수 있음</li></ul>
            </p>

            <p>Solidity의 특징
                <ol><li>스마트 컨트랙트 기반</li>
                    <li>정적 타입 언어: 변수 타입을 명확히 선언해야 함</li>
                    <li>EVM에서 실행 가능</li>
                    <li>이벤트 기반 프로그래밍: 블록체인 데이터 쉽게 추적 가능</li>
                    <li>보안 중심 개발: modifier, require, assert 등을 활용한 보안 강화 기능 제공</li></ol>
            </p>

            <h4>Remix</h4>
            <p><ul><li>웹 기반 IDE(Integrated Development Environment, 통합 개발 환경)</li>
                <li>remix.ethereum.org</li></ul>
            </p>

            <h4>Solidity 코드 실행 흐름</h4>
            <ol><li>변수를 선언하고 초기화</li>
                <li>함수 실행</li>
                <li>트랜잭션 처리
                    <ul><li>콘솔 출력: 자바스크립트의 console.log와 달리 Solidity는 블록체인 상에서 로그를 기록할 수 있도록 이벤트(event) 기능을 제공함</li>
                        <li>Solidity 코드의 오류 처리: 트랜잭션이 롤백되며 특정 지점에서 실행이 멈춤</li></ul>
                </li></ol>

            <h4>스마트 컨트랙트 구조</h4>
            <img className='contractStructure' src={contractStructure} alt="smart-contract-img"></img>

            <h4>Solidity 데이터 타입</h4>
            <p>값 타입과 참조 타입</p>
            <p>값 타입: 변수가 직접 데이터를 저장하는 유형</p>
            <ul><li>정수형: uint8 ~ uint256, int8 ~ int256</li>
                <li>불리언</li>
                <li>주소: address payable 은 이더를 송금할 수 있는 주소</li>
                <li>바이트: 고정 크기의 바이트 배열을 저장하는 타입</li>
                <li>열거형(Enum): 특정 값들 중 하나를 선택할 때 사용</li></ul>

            <h4>데이터 타입을 올바르게 사용하는 이유</h4>
            <ul><li>블록체인에서 저장 비용을 절감(가변 크기보다는 고정 크기 타입 사용 추천)</li>
                <li>불필요한 연산 방지(최적화된 데이터 타입 사용)</li>
                <li>코드 오류 예방(정적 타입 선언으로 실수 방지)</li></ul>

            <h4>Solidity에서의 숫자 연산</h4>
            <ul><li>0으로 나누는 연산은 require을 사용해 방지해야 함</li>
                <li>uint와 int 타입이 혼합되면 컴파일 오류 발생 가능</li>
                <li>제곱 연산 (** 연산자 사용)</li>
                <li>삼항 연산자(condition ? true : false)를 활용하여 최소/최대값 비교 가능</li>
                <li>오버플로우 및 언더플로우 방지 기본 적용</li>
                <li>Solidity 0.8.x 이전 버전에서는 SafeMath 라이브러리를 사용해야 했지만, 이제는 필요 없음</li>
            </ul>

        </div>
    )
}

export default TIL0324