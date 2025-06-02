import React from 'react'

const Research0602 = () => {
    return (
        <div>Research0602
            <ul><li>A Comprehensive Study of Exploitable Patterns in Smart Contracts: From Vulnerability to Defense, April 2025, by Ding, Peng and Li</li>
                <li>이 논문은 스마트 컨트랙트에서 악용 가능한 패턴들을 포괄적으로 분석합니다. 특히, 재진입 공격과 정수 오버플로우 취약점에 중점을 두고 있으며, 실제 공격 시나리오와 대응 방안을 제시합니다.</li></ul>

            <ul><li>The paper analyzes key security risks in Ethereum smart contracts, focusing on two vulnerability types - reentrancy and integer overflow </li></ul>

            <p>Reentrancy Attack and the Fallback Function</p>
            <ul><li>In a reentrancy attack, the fallback function is used as a way to sneak back into the vulnerable contract.</li>
                <li>Here's how:
                    <ul><li>Suppose Contract A sends Ether to Contract B (an attacker contract).</li>
                        <li>If Contract B has a fallback function, Solidity will automatically execute it upon receiving Ether. </li>
                        <li>If this fallback function calls back into Contract A, and Contract A hasn’t finished updating its state (e.g., still thinks the balance exists), then the attacker can abuse that timing and drain funds multiple times.</li></ul>
                </li>
            </ul>

            <h4>🔐 스마트 컨트랙트 보안 설계 패턴 요약</h4>
            <p>1. Checks-Effects-Interactions 패턴 사용</p>
            <ul><li>상태 변수(예: 잔고)를 먼저 업데이트한 뒤, 외부 호출을 하세요.</li>
                <li>이렇게 하면 외부에서 다시 들어오는 공격을 막을 수 있습니다.</li></ul>

            <p>2. 락(Lock) 변수로 상태 잠금</p>
            <ul><li>bool locked 같은 변수를 이용해 함수 실행 중인지 추적합니다.</li>
                <li>함수 시작 시 locked = true, 끝나고 false로 바꾸면 재진입 공격 방지 가능.</li>
            </ul>

            <p>3. call() 대신 transfer() 사용 또는 가스 제한 걸기</p>
            <ul><li>call()은 남은 가스를 전부 보내서 해커가 복잡한 코드를 실행할 수 있음.</li>
                <li>transfer()는 2300 가스만 보내서 안전.</li>
                <li>call()을 써야 한다면 수동으로 가스 제한을 설정하세요.</li>
                <li><a href='https://my-first-blog-one.vercel.app/blog/solidity/0326'>복습</a></li></ul>

            <p>4. 출금(Withdrawal) 방식으로 이더 전송 구조 바꾸기</p>
            <ul><li>직접 이더를 보내기보다, 사용자가 스스로 출금하게 만들기</li>
                <li>상태 변경과 이더 전송을 분리해 공격 기회를 줄입니다.</li>
                <li>단점: 수신자 측 코드가 복잡해지고, 참가자가 많을수록 가스 비용 증가</li></ul>




        </div>
    )
}

export default Research0602