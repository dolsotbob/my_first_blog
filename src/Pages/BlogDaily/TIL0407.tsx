import React from 'react'

const TIL0407 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 7일</p>
            <h3>컨트랙트 호출(ABI)</h3>
            <ul><li>학습 목표: JavaScript를 사용해서 스마트 컨트랙트를 어떻게 불러오고, 그 안의 기능을 어떻게 사용할 수 있는지 배우기</li></ul>

            <h4>컨트랙트 호출(Call)</h4>
            <ul><li>뭘까?: 컨트랙트의 특정 기능(함수)를 실행하거나 데이터를 가져오는 것</li>
                <li>컨트랙트 호출 방식
                    <ol><li>트랜잭션 호출(Transaction Call)
                        <ul><li>상태 변경이 발생하는 함수 호출; 가스 비용이 듦; tx이 블록체인에 기록됨</li>
                            <li>트랜잭션 호출 예제 (Solidity)</li>
                            <pre><code>{`
                        // SPDX-License-Identifier: MIT
                        pragma solidity ^0.8.0; 

                        contract TransactionExample { 
                            uint public value; 

                            //트랜잭션 호출 
                            function setValue(uint256 _value) public { 
                                value = _value; 
                            }
                        }
                        `}</code></pre>
                            <li>트랜잭션 호출 예제 (JavaScript)</li></ul>
                        <pre><code>{`
                        const contract = new ethers.Contract(contractAddress, abi, signer); 
                        await contract.setValue(42);  // 상태 변경 -> 가스 필요 
                        `}</code></pre>
                    </li>
                        <li>조회 호출(Call)
                            <ul><li>읽기 전용 함수 호출; 가스 비용 없음; tx이 블록체인에 기록되지 않음</li>
                                <li>조회 호출 예제 (Solidity)</li>
                                <pre><code>{`
                        contract CallExample { 
                            uint256 public value = 100; 

                            // 조회 호출 (가스 없음)
                            function getValue() public view returns (uint256) { 
                                return value; 
                            }
                        }
                        `}</code></pre>
                                <li>조회 호출 예제(JavaScript)</li>
                                <pre><code>{`
                        const value = await contract.getValue();  // 가스 없이 데이터 조회 
                        console.log(value.toString());  // "100" 
                        `}</code></pre>
                            </ul>
                        </li></ol>
                </li></ul>

            <h4>ABI(Application Binary Interface)</h4>
            <ul><li>외부 애플리케이션 및 다른 스마트 컨트랙트와의 상호 작용을 가능하게 하는 인터페이스</li>
                <li>스마트 컨트랙트가 호출할 수 있는 함수 및 데이터 구조를 정의하는 인터페이스</li>
                <li>ABI 인코딩</li>
                <li>ABI 디코딩</li></ul>

        </div>
    )
}

export default TIL0407