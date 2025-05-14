import React from 'react'

const TIL0331 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 31일</p>
            <h3>Solidity - 실습 1</h3>
            <h4>Solidity의 Getter와 Setter</h4>
            <ul><li>Getter 함수: 상태 변수를 조회하는 함수 (자동 생성 가능)</li>
                <li>Setter 함수: 상태 변수를 변경하는 함수 (수동으로 구현해야 함)
                </li></ul>

            <h4>Getter 함수 예시</h4>
            <p>Getter 예시</p>
            <pre><code>{`
            // SPDX-license-Identifier: MIT 
            pragma solidity ^0.8.0; 

            contract Example { 
                uint256 public myNumber = 100;  // public 변수 (자동 getter 생성)
            }
            `}</code></pre>

            <p>사용 방법</p>
            <pre><code>{`
            // Hardhat(ethers.js)  
            const number = await contract.myNumber();    
            console.log(number.string());  // "100"
            `}</code></pre>
            <ul><li>JavaScript/TypeScript 코드로 Hardhat 또는 ethers.js를 사용해 배포된 계약을 호출한다</li>
                <li>contract.myNymber()는 Solidity 계약 내에서 자동으로 생성된 getter 함수를 호출하는 코드 </li></ul>

            <p>자동 생성되는 Getter 코드</p>
            <pre><code>{`
            function myNumber() public view returns (uint256) {
                return myNumber; 
            }
            `}</code></pre>
            <ul><li>myNumber라는 함수가 이미 public 변수에 대해 자동으로 생성된 상태라, 이 함수는 불필요할 수 있음</li></ul>

            <h4>Setter 함수(설정 함수) 예시</h4>
            <ul><li>public이나 external로 선언되며 상태 변수 값을 변경한다</li>
                <li>tx 실행 시 가스 비용 발생</li></ul>
            <p>Setter 예시</p>
            <pre><code>{`
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.0;
            
            contract Example { 
                uint public myNumber = 100; 

                // Setter 함수 (값 변경 가능)
                function setMyNumber(uint256 _newNumber) public { 
                    myNumber = _newNumber;
                }
            }
            `}</code></pre>

            <p>사용 방법</p>
            <pre><code>{`
            // Hardhat(ethers.js)
            await contract.setMyNumber(500);  //값 변경 
            const number = await contract.myNumber(); 
            console.log(number.toString()); //  "500"
            `}</code></pre>
            <br />

            <h4>스마트 컨트랙트 테스트가 중요한 이유</h4>
            <ul><li>배포 후 수정 불가능
                <ul><li>만약 버그가 발생해 새 컨트랙트를 배포한다면 비용 증가 및 데이터 손실을 초래할 수 있음</li></ul>
            </li>
                <li>가스 비용 절감
                    <ul><li>Solidity의 연산은 가스를 소모함 &rArr; 최적화된 코드 작성으로 tx 비용 줄이는 것이 중요</li></ul>
                </li>
                <li>보안 강화
                    <ul><li>Hardhat의 테스트 기능을 활용하여 재진입 공격(Reentrancy), 오버플로우(Overflow), 접근 제어 오류 등의 보안 취약점을 사전에 발견할 수 있음</li></ul>
                </li>
                <li>예측 가능한 동작 보장
                    <ul><li>스마트 컨트랙트는 다양한 환경에서 실행될 수 있음</li>
                        <li>Hardhat 테스트를 통해 다양한 시나리오에서 컨트랙트가 올바르게 동작하는지 검증할 수 있음</li></ul>
                </li></ul>

            <h4>컨트랙트 테스트 플로우</h4>
            <ol><li>컨트랙트 작성</li>
                <li>Test 코드 작성
                    <ul><li>test 폴더에서 테스트 파일 만든다</li>
                        <li>주로 (컨트랙트 이름).test.ts 와 같이 이름 지음</li>
                        <li>테스트 코드 작성 시 사용되는 라이브러리: chai, ethers
                            <ul><li>Hardhat 프레임워크에서는 ethers를 기본 블록체인 라이브러리로 ethers를 사용한다</li></ul>
                        </li></ul>
                </li>
                <li>Test 실행 명령어: npx hardhat test</li>
            </ol>

            <p>참고자료</p>
            <ul><li><a href='https://hardhat.org/tutorial/testing-contracts'>Hardhat 튜토리얼</a></li>
                <li><a href='https://docs.ethers.org/v5/'>Ethers</a></li></ul>
            <li><a href='https://github.com/dolsotbob/DataType'>내 DataType 과제</a></li>

        </div>
    )
}

export default TIL0331