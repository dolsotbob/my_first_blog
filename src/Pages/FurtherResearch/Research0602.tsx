import React from 'react'
import './Research.css';
import CodeBlock from '../../components/CodeBlock';
import { R0602AttackerSol } from './CodeExampFS';
import transferPatternImg from './R0602TransferPattern.png'
import receivePatternImg from './R0602ReceiverPattern.png'
import BECOverflowImg from './R0602BECOverflowAttack.png'
import SMTOverflowImg from './R0602SMTOverflowAttack.png'
import SafeMathImg from './R0602SafeMath.png'
import VulnerableCodeImg from './R0602VulnerableCode.png'
import CEIPatternImg from './R0602CEIPattern.png'

const Research0602 = () => {
    return (
        <div>Research0602
            <ul><li>A Comprehensive Study of Exploitable Patterns in Smart Contracts: From Vulnerability to Defense, April 2025, by Ding, Peng and Li</li>
                <li>목록 중 3번째 논문인 이 논문은 스마트 컨트랙트에서 악용 가능한 패턴들을 포괄적으로 분석합니다. 특히, 재진입 공격과 정수 오버플로우 취약점에 중점을 두고 있으며, 실제 공격 시나리오와 대응 방안을 제시합니다.</li></ul>

            <ul><li>The paper analyzes key security risks in Ethereum smart contracts, focusing on two vulnerability types - reentrancy and integer overflow </li></ul>

            <ul><li>재진입 공격에서 fallback 함수는 취약한 컨트랙트로 다시 몰래 침투하는 수단으로 사용됩니다.</li>
                <li>방법:
                    <ul><li>계약 A가 계약 B(공격자 컨트랙트)에게 이더를 보낸다고 가정해봅시다.</li>
                        <li>계약 B에 fallback 함수가 있다면, Solidity는 이더를 받을 때 이 함수를 자동으로 실행합니다.</li>
                        <li>이 fallback 함수가 다시 계약 A를 호출하면,
                            <ul><li>계약 A가 아직 상태(예: 잔고 초기화 등)를 완전히 업데이트하기 전에</li>
                                <li>공격자가 그 타이밍을 악용해 여러 번 돈을 인출할 수 있습니다.</li></ul>
                        </li></ul>
                </li>
            </ul>


            <h4>🔐 스마트 컨트랙트 보안 설계 패턴 요약</h4>
            <p>1. Checks-Effects-Interactions 패턴 사용</p>
            <ul><li>상태 변수(예: 잔고)를 먼저 업데이트한 뒤, 외부 호출을 하세요.</li>
                <li>이렇게 하면 외부에서 다시 들어오는 공격을 막을 수 있습니다.</li>
                <li><a href='https://my-first-blog-one.vercel.app/blog/security/0602'>복습</a></li></ul>

            <p>2. 락(Lock) 변수로 상태 잠금</p>
            <ul><li>bool locked 같은 변수를 이용해 함수 실행 중인지 추적합니다.</li>
                <li>함수 시작 시 locked = true, 끝나고 false로 바꾸면 재진입 공격 방지 가능.</li>
                <li><a href='https://my-first-blog-one.vercel.app/blog/security/0602'>복습</a></li>
            </ul>

            <p>3. call() 대신 transfer() 사용 또는 가스 제한 걸기</p>
            <ul><li>call()은 남은 가스를 전부 보내서 해커가 복잡한 코드를 실행할 수 있음.</li>
                <li>transfer()는 2300 가스만 보내서 안전.</li>
                <li>call()을 써야 한다면 수동으로 가스 제한을 설정하세요.</li>
                <li><a href='https://my-first-blog-one.vercel.app/blog/solidity/0326'>복습</a></li></ul>

            <p>4. 출금(Withdrawal) 방식으로 이더 전송 구조 바꾸기</p>
            <ul><li>직접 이더를 보내기보다, 사용자가 스스로 출금하게 만들기</li>
                <li>상태 변경과 이더 전송을 분리해 공격 기회를 줄입니다.</li>
                <li>단점: 수신자 측 코드가 복잡해지고, 참가자가 많을수록 가스 비용 증가</li>
                <img className='R0602TransferImage' src={transferPatternImg} alt='Transfer Pattern Image'></img>
                <img className='R0602ReceiveImage' src={receivePatternImg} alt='Receive Pattern Image'></img>
                <img></img>
            </ul>

            <p>정수 오버플로우(Overflow) 취약점</p>
            <ul><li>Solidity에서는 uint8부터 uint256까지의 정수형 타입이 있으며, 각 타입은 정해진 범위의 수만 저장할 수 있습니다.</li>
                <li>이처럼 고정된 크기 때문에 덧셈, 곱셈, 뺄셈 중 범위를 넘거나 벗어나면 오버플로우(Overflow) 또는 언더플로우(Underflow)가 발생합니다.</li>
                <li>악의적인 사용자가 숫자를 일부러 감돌게(wrap around) 만들어 로직을 교란시킬 수 있습니다.</li></ul>

            <p>BEC 및 SMT 오버플로우 공격 사례</p>
            <span>✅ (1) BEC 오버플로우 공격</span>
            <ul><li>BEC(BeautyChain) 토큰에서 발생한 실제 공격 사례</li>
                <li>공격자는 cnt = 2, _value = 2^255 값을 입력으로 줘서,</li>
                <li>amount = uint256(cnt) * _value;</li>
                <li>이 곱셈에서 오버플로우가 발생해 amount가 0이 됩니다.</li>
                <li>그 결과 require() 조건이 우회되고, 보내는 사람의 잔고는 줄지 않은 채로 대량 전송이 이뤄집니다.</li>
                <li>결국 토큰이 무한 생성된 것처럼 되어, 큰 경제적 피해가 발생했지만 컨트랙트는 공격을 인식하지 못했습니다.</li>
                <img className='R0602BECOverflowImg' src={BECOverflowImg} alt='BEC Overflow Attack Code'></img>
            </ul>

            <span>✅ (2) SMT 오버플로우 공격</span>
            <ul><li>SMT(SmartMesh Token)에서는 _value + _feeSmt가 보내는 사람의 잔고보다 큰지를 검사하는 로직이 있습니다.</li>
                <li>하지만 공격자는 다음과 같이 입력값을 조작해, _value + _feeSmt = 2^256</li>
                <li>즉, 오버플로우가 발생하여 합계가 0처럼 계산되게 만들 수 있습니다.</li>
                <li>이로 인해 조건문이 우회되고, 디지털 서명 검증 및 토큰 분배 로직이 실행됩니다.</li>
                <li>특히 공격자가 보낸 주소와 받은 주소를 동일하게 설정하면, 실제로는 전송이 없었는데도 잔고가 갑자기 증가하는 일이 발생합니다.</li>
                <img className='R0602SMTOverflowImg' src={SMTOverflowImg} alt='SMT Overflow Attack Code'></img>
            </ul>

            <h4>🔐 정수 오버플로우 방지 방법 요약</h4>
            <ul><li>정수 오버플로우 취약점을 막기 위해서는 산술 연산 전에 입력값 검증, 연산 후에는 결과 검증이 필요합니다.</li>
                <li>이를 위해 OpenZeppelin에서 제공하는 SafeMath 라이브러리를 사용하는 것이 대표적인 방법입니다.</li></ul>

            <p>SafeMath 특징</p>
            <ul><li>덧셈, 뺄셈, 곱셈, 나눗셈 연산을 감싸면서 내부적으로 **검증(assert)**을 수행합니다.</li>
                <li>조건이 맞지 않으면 연산을 중단하고 에러를 발생시켜, 오버플로우를 원천적으로 차단합니다.</li>
                <li>SafeMath의 연산 함수를 사용하면 개발자가 직접 오버플로우 검사를 구현할 필요 없이, 안전한 연산이 가능합니다.</li>
                <img className='R0602SafeMathImg' src={SafeMathImg} alt='Code of SafeMath'></img>
                <li>예를 들어 위 코드에서 a + b를 계산한 결과가 a 보다 작다면 &rarr; 오버플로우 발생</li>
                <li>assert는 이런 상황에서 즉시 실행을 중단하고 오류를 발생시킨다.</li>
            </ul>

            <h4>Reentrancy Vulnerability</h4>
            <p>Vulnerable Mode</p>
            <img className='R0602VulnerableCodeImg' src={VulnerableCodeImg} alt='Deployment of Vulnerable Contract for Reentrancy Attack'></img>
            <span>위 코드 설명</span>
            <CodeBlock code={R0602AttackerSol}></CodeBlock>
            <ul><li>재진입 공격이 가능한 이유:
                <ul><li>Bank 컨트랙트 내부가 이런 순서로 작성되어 있을 경우:</li>
                    <pre><code>{`
        msg.sender.call.value(amount)(); // 먼저 돈 보냄
        balances[msg.sender] = 0;        // 나중에 잔고 0으로 설정
        `}</code></pre>
                    <li>→ 공격자가 돈을 받는 중에 잔고가 아직 줄지 않았기 때문에, 다시 withdraw()를 호출하면 계속 인출 가능.</li></ul>
            </li>
            </ul>

            <p>CEI 패턴, 재진입 공격을 방지하기 위한 보안 패턴</p>
            <img className='' src={CEIPatternImg} alt='CEI Pattern Image'></img>
            <ol><li>Check (검사): 요구 조건들을 먼저 확인</li>
                <li>Effects (상태 변경): 잔고 등 내부 상태를 먼저 변경</li>
                <li>Interactions (외부 호출): 외부로 이더 전송 등 마지막에 실행</li></ol>
            <span style={{ fontStyle: 'italic' }}>위 순서를 지키면 재진입 공격을 막을 수 있다.</span>



        </div >
    )
}

export default Research0602