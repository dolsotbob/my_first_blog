import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0602ReentrancyExample, TIL0602UnderflowExample, TIL0602UnderflowExplited } from './CodeExamSecurity'
import { TIL0602ReentrancyPrevention1 } from './CodeExamSecurity'
import { TIL0602ReentrancyPrevention2 } from './CodeExamSecurity'
import { TIL0602TimestampExample } from './CodeExamSecurity'
import { TIL0602TimestampExplited } from './CodeExamSecurity'

const TIL0602 = () => {
    return (
        <div className='BlogDaily'>
            <h3>스마트 컨트랙트 보안</h3>
            <h4>스마트 컨트랙트의 위험성과 수정 불가능성</h4>

            <h4>재진입 공격 (Reentrancy)</h4>
            <ul><li>외부에서 호출된 계약(또는 주소)이 스마트 컨트랙트로 다시 돌아와 원래 함수가 끝나기 전에 반복해서 실행되도록 조작하는 공격</li>
                <li>쉽게 말해, 돈을 인출하는 도중에 다시 호출이 들어와서 돈을 여러 번 빼가는 방식입니다.</li></ul>

            <p>왜 발생할까?</p>
            <ul><li>보통 스마트 컨트랙트에서 다음과 같은 순서로 작동합니다:</li>
                <CodeBlock code={TIL0602ReentrancyExample}></CodeBlock>
                <li>이 코드에서 생기는 문제는?
                    <ul><li>돈을 먼저 보낸 다음</li>
                        <li>잔고를 0으로 초기화 하기 때문</li>
                        <li>공격자가 돈을 받는 순간 다시 withdraw()를 호출하면,
                            <ul><li>잔고는 아직 남아 있고, 여러 번 출금이 가능하다.</li></ul>
                        </li></ul>
                </li>
            </ul>

            <p>어떻게 막을 수 있을까?</p>
            <span style={{ fontWeight: 'bold' }}>해결 방법 1: 상태 먼저 바꾸기</span>
            <ul><li>잔고를 먼저 0으로 만들고 나서 돈을 보내야 합니다.</li>
                <CodeBlock code={TIL0602ReentrancyPrevention1}></CodeBlock>
            </ul>

            <span style={{ fontWeight: 'bold' }}>해결 방법 2: 재진입 방지 락 사용</span>
            <ul><li>함수에 잠금(lock)을 걸어 중복 실행을 방지합니다.</li>
                <CodeBlock code={TIL0602ReentrancyPrevention2}></CodeBlock>
            </ul>

            <h4>오버플로우 / 언더플롤우</h4>
            <p>스마트 컨트랙트에서의 위험</p>
            <ul><li>예시 코드:</li>
                <CodeBlock code={TIL0602UnderflowExample}></CodeBlock>
                <li>공격자가 아래처럼 악용할 수 있다:</li>
                <CodeBlock code={TIL0602UnderflowExplited}></CodeBlock>
            </ul>

            <p>예방 방법</p>
            <ul><li>최신 컴파일러 사용 (Solidity 0.8.0 이상)</li>
                <li>require 쓰기 </li>
                <li>(0.8 미만인 경우) SafeMath 사용</li></ul>

            <h4>프론트러닝(Frontrunning)</h4>
            <ul><li>다른 사람의 거래를 몰래 보고, 그보다 먼저 같은 거래를 제출해서 이익을 취하는 행위</li>
                <li>쉽게 말해, “누군가 물건을 사려고 할 때, 옆에서 그걸 먼저 가로채서 더 비싼 값에 팔아버리는 행위”</li></ul>

            <h4>DelegateCall 취약성: 스마트 컨트랙트 내부의 숨겨진 위험</h4>

            <p>어떤 문제가 발생할 수 있을까?</p>
            <ul><li>delegatecall은 실행되는 외부 코드의 권한을 내 컨트랙트의 저장 공간을 조작하는 권한까지 줘버린다.</li>
                <li>취약점 예시
                    <ul><li>공격자는 악의적인 컨트랙트(Malicious Contract)를 배포함</li>
                        <li>내 컨트랙트가 이 주소를 delegatecall로 호출함</li>
                        <li>공격자의 코드가 내 컨트랙트의 소유자(owner) 정보를 변경해버림</li></ul>
                </li>
            </ul >


            <h4>Timestamp 의존성: 시간이 가져올 예기치 못한 위험</h4>
            <p>예시로 이해하기</p>
            <CodeBlock code={TIL0602TimestampExample}></CodeBlock>
            <span style={{ fontWeight: 'bold' }}>공격 시나리오</span>
            <ul><li>예: 블록 타임 기반 복권 시스템</li>
                <CodeBlock code={TIL0602TimestampExplited}></CodeBlock>
            </ul>

            <p>권장 대안</p>


            <h4>Access Control 설정 미비</h4>


        </div >
    )
}

export default TIL0602