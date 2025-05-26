import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0328MappingofStructs } from './CodeExamSol'
import { TIL0328NestedMappings } from './CodeExamSol'
import { TIL0328functionReceive } from './CodeExamSol'
import { TIL0328functionFallback } from './CodeExamSol'
import { TIL0328tryCatch } from './CodeExamSol'
import { TIL0328CustomErrors } from './CodeExamSol'

const TIL0328 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 28일</p>
            <h3>Solidity - 기본 문법 5</h3>
            <ul><li>데이터 타입 심화</li>
                <li>Fallback & Receive Functions</li>
                <li>Advanced Error Handling</li></ul>

            <h4>구조체의 매핑</h4>
            <ul><li>매핑은 자바스크립트의 객체와도 같은 것</li>
                <li>Mapping과 Struct를 함께 사용해 데이터를 더 구조적으로 관리할 수 있음</li>
                <CodeBlock code={TIL0328MappingofStructs}></CodeBlock>

                <ul><li>매핑(address &rarr; Profile): 사용자 주소별로 정보를 저장</li>
                    <li>setProfile: 사용자의 정보를 입력</li>
                    <li>getProfile: 사용자의 정보를 조회</li></ul>
            </ul>

            <h4>다중 매핑 구조(Nested Mappings)</h4>
            <ul><li>매핑 안에 또 다른 매핑을 정의해 2차원 이상의 데이터 저장이 가능함</li>
                <li>주로 권한 관리와 복잡한 관계 설정에 유용함</li>
                <li>다중 매핑 구조 예시 1: </li>
                <pre><code>{`
            const permissions = {
                address: {
                    string: bool
                }
            }
            `}</code></pre>
                <li>다중 매핑 구조 예시 2:</li>
                <CodeBlock code={TIL0328NestedMappings}></CodeBlock>
            </ul>

            <h4>Receive와 Fallback</h4>
            <ul><li>스마트 계약이 이더를 수신할 때 호출하는 특별한 함수</li>
            </ul>

            <p>(function) Receive</p>
            <ul><li>이더를 직접 수신할 때 호출되는 함수</li>
                <li>계약이 명시적으로 이더를 받을 때 호출</li>
                <li>external과 payable로 선언해야 함</li>
                <CodeBlock code={TIL0328functionReceive}></CodeBlock>
            </ul>

            <p>(function) Fallback</p>
            <ul><li>정의되지 않은 함수가 호출되거나 데이터가 포함된 호출이 발생할 때 자동으로 실행</li>
                <li>external로 선언되어야 함; 이더 전송이 포함되었다면 payable도 필요</li>
                <li>Proxy 패턴에서 쓰임; 프록시 계약에서 사용자가 호출한 요청을 실제 로직을 처리하는 로직 계약으로 전달하는 역할</li>
                <CodeBlock code={TIL0328functionFallback}></CodeBlock>
            </ul>

            <h4>에러 처리 심화</h4>
            <ul><li>기본적인 에러 핸들러 require, revert, assert 외 심화적인 에러 처리 방식</li>
                <li>try/catch 문법과 Custom Errors</li></ul>

            <p>try/catch 문법</p>
            <ul><li>에러 날 경우 따로 처리하고 싶을 때 사용할 수 있음</li>
                <li>예시:</li>
                <CodeBlock code={TIL0328tryCatch}></CodeBlock>
                <ul><li>try: 성공적으로 실행될 경우 결과 반환</li>
                    <li>catch: 에러 발생 시 처리</li></ul>
            </ul>

            <p>사용자 정의 에러Custom Errors</p>
            <ul><li>특정 조건이 충족되지 않았을 때 발생할 수 있는 에러를 명확하게 정의할 수 있음</li>
                <li>string이 없어서 require, revert 보다 가스 비용 절감됨</li>
                <li>emit이 아닌 revert 키워드로 출력</li>
                <li>예시:
                    <CodeBlock code={TIL0328CustomErrors}></CodeBlock>
                    <ul><li>error: 에러 정의</li>
                        <li>revert: 에러 발생 시 실행 중단 및 에러 반환</li></ul>
                </li>
            </ul>

            <h4>과제</h4>
            <ul><li>크립토 좀비</li>
                <li>과제물: <a href='https://github.com/dolsotbob/voting_system_contract'>투표 컨트랙트</a></li></ul>

        </div>
    )
}

export default TIL0328