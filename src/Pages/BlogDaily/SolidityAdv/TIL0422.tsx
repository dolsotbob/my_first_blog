import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { til0422eip712SigningExample } from '../../codeExamples';
import { TIL0422SendTxGas } from './CodeExamSolAdv';
import { TIL0422ContractGas } from './CodeExamSolAdv';
import { TIL0422DomainSeparator } from './CodeExamSolAdv';

const TIL0422 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 22일</p>
            <h3>Gas less - EIP 2612I(Permit)</h3>
            <ul><li>학습 목표: 다음 문제를 Gassless(가스비 없는 트랜잭션) 솔류션을 통해 해결해보자
                <ul><li>Ethereum은 튜링 완전한 프로그래머블 블록체인을 구현하기 위해 "Gas" 라는 개념을 도입했다</li>
                    <li>Web2 사용자에게는 자신의 코인을 소모해 가스비를 지불하는 개념이 낯설 수 있다 &rarr; 서비스 접근성 낮추고 신규 사용자의 유입을 어렵게 만든다</li></ul>
            </li></ul>

            <h4>가스를 소모하는 트랜잭션</h4>
            <p>기본 트랜잭션 (ETH 전송)</p>
            <ul><li>예제: Alice &rarr; Bob 에게 1 ETH 전송</li>
                <li>가스 소모: 약 21,000 Gas (가장 기본적인 트랜잭션)</li>
                <CodeBlock code={TIL0422SendTxGas}></CodeBlock>
            </ul>

            <p>스마트 컨트랙트 실행 트랜잭션</p>
            <ul><li>스마트 컨트랙트와 상호작용하는 모든 트랜잭션은 Gas를 소모함</li>
                <li>세터 함수 실행되면 가스비 소모됨</li>
                <li>가스 소모: 40,000 ~ 65,000 Gas </li>
                <li>ETH 전송보다 더 많은 Gas가 소모됨 &rarr; 컨트랜트 상태 변경 필요</li>
                <CodeBlock code={TIL0422ContractGas}></CodeBlock>
            </ul>

            <h4>되짚어보는 ERC20</h4>
            <p>ERC-20의 기본 전송 메커니즘</p>
            <ol><li>기본 전송(transfer) &rarr; 직접 송신자가 수신자에게 토큰을 전송</li>
                <li>승인 후 대리 전송(approve + transferFrom) &rarr; 제3자가 송신자를 대신해 토큰을 전송
                    <ul><li>approve 및 transferFrom을 사용하면 스마트 컨트랙트나 다른 사용자가 일정량의 토큰을 대신 사용할 수 있도록 허가할 수 있다
                        <ul><li>approve와 transferFrom 모두 세터 함수고 가스비 소모한다</li></ul>
                    </li></ul>
                </li></ol>

            <p>approve: 토큰 사용 권한 부여</p>
            <ul><li>함수 정의:
                <pre><code>{`function approve(address spender, uint256 amount) public returns (bool)`}</code></pre>
            </li>
                <li>approve 함수는 지정된 spender(위임받을 주소)가 amount 만큼의 토큰을 사용하도록 허가하는 역할을 한다</li>
            </ul>

            <p>transferFrom: 위임받은 토큰 전송</p>
            <ul><li>함수 정의:
                <pre><code>{`function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)`}</code></pre>
            </li>
                <li>transferFrom은 미리 approve를 받은 토큰을 spender가 송신자를 대신해 전송할 때 사용된다</li>
            </ul>

            <p>transferFrom의 주요 요건</p>
            <ol><li>소유자(Owner)가 먼저 approve를 실행해야 함
                <ul><li>이 때 사용자에게서 가스비가 소모됨</li></ul>
            </li>
                <li>스마트 컨트랙트가 transferFrom을 실행할 때 approve한 금액 내에서만 전송 가능</li>
                <li>성공적인 실행 후 Approval 이벤트가 발생하여 허용된 금액이 업데이트 됨</li></ol>

            <p>approve와 transferFrom을 활용하는 이유</p>
            <ul><li>스마트 컨트랙트를 통한 자동 결제 시스템
                <ul><li>사용자가 서비스에 가입할 때, 일정량의 토큰을 컨트랙트에 위임하여 자동 결제가 가능하도록 설정할 수 있음</li>
                    <li>예시: 구독 서비스, 게임 내 결제, 스테이킹 및 리워드 시스템</li></ul>
            </li>
                <li>Dapp에서의 토큰 거래
                    <ul><li>Uniswap 같은 DEX or Dapp에서 ERC-20 토큰을 거래할 때, DEX 컨트랙트에 먼저 approve를 호출하여 토큰을 사용할 권한을 부여해야 한다</li>
                        <li>예시:
                            <ol><li>사용자 지갑이 approve()를 호출하여 Uniswap 컨트랙트에 “DAI 100개까지 써도 돼”라고 허락함</li>
                                <pre><code>{`
                daiToken.approve(uniswapAddress, 100);
                `}</code></pre>
                                <li>Uniswap 컨트랙트가 transferFrom()을 호출해서 사용자의 DAI 100개를 가져감</li>
                                <pre><code>{`
                 daiToken.transferFrom(userAddress, uniswapAddress, 100);
                 `}</code></pre>
                            </ol>
                        </li></ul>
                </li>
            </ul>

            <h4>EIP-712: Typed Structured Data Signing</h4>
            <ul><li>Typed Structured Data Signing: 타입이 지정된 구조화된 데이터 서명</li>
                <li>EIP-712는 Ethereum 서명 방식의 표준으로, Typed Structured Data Signing을 지원하는 EIP (Ethereum Improvement Proposal)이다</li>
                <li>기존의 일반적인 Ethereum 서명 방식에서는 단순히 메시지를 서명(sign)하지만,</li>
                <li>EIP-712를 사용하면 타입과 구조가 정의된 데이터를 보다 안전하고 직관적으로 서명할 수 있습니다.
                </li></ul>

            <p>Ethereum 서명 방식</p>
            <ul><li>1️⃣ 메시지를 먼저 Keccak256 해싱</li>
                <pre><code>{`
    const hashedMessage = ethers.hashMessage("Allow 100 tokens for Spender");
    console.log(hashedMessage);
    // "0x4e07408562bedb8b60ce05c1decfe3ad16b7223091b5eae9f07759b7c6e01c6f"
    `}</code></pre>
                <li>2️⃣ 이 해시 값(0x4e07...6e01c6f)을 사용자의 프라이빗 키로 서명</li>
                <pre><code>{`
    const signature = await wallet.signMessage(hashedMessage);
    console.log(signature);
    // "0x6b3a55e29d63a73978...f74a80e5a94b3a727"
    `}</code></pre>
                <li>3️⃣ ECDSA(Elliptic Curve Digital Signature Algorithm)를 사용하여 서명 검증</li>
                <pre><code>{`
    const recoveredAddress = ethers.verifyMessage(message, signature);
    console.log(recoveredAddress === wallet.address); // true
    `}</code></pre>

                <ul><li>서명된 signature와 원본 메시지를 사용하여 공개 키(주소)를 복원</li>
                    <li>복원된 주소가 원래 서명자의 주소와 일치하는지 확인</li>
                    <li>일치하면 서명이 유효한 것!
                    </li></ul>
            </ul>

            <p>EIP-712가 왜 필요할까?</p>
            <ul><li>문제: 기존 서명방식(EIP-191)의 signMessage()는 원본 메시지가 아니라, 해싱된 데이터를 서명한다
                <ul><li>보안문제(Phising 공격): 악의적인 스마트 컨트랙트가 사용자가 서명한 메세지를 재사용(replay attack)하여 악용할 가능성</li>
                </ul>
            </li>
                <li>해결: EIP-712의 signTypedData()를 사용하면 원본 메세지를 확인할 수 있다
                    <ul><li>EIP-712에서는 데이터의 구조를 명확하게 정의한 후 서명할 수 있도록 함</li>
                        <li>즉, 사용자가 정확히 무엇을 서명하는지 사람이 읽을 수 있는 방식으로 변환 가능!</li></ul>
                </li></ul>

            <p>EIP-712 방식의 서명 예시</p>
            <CodeBlock code={til0422eip712SigningExample}></CodeBlock>

            <p>EIP-712의 핵심 요소</p>
            <ol><li>도메인: 어떤 컨트랙트와 체인에서 서명이 이루어지는지 지정
                <ul><li>chainId나 verifyingContract 값을 포함하여 다른 체인에서 서명이 재사용되지 않도록 방지.</li></ul>
            </li>
                <li>데이터 타입
                    <ul><li>Permit 타입을 정의하여 어떤 데이터를 서명하는지 명확하게 만듦</li></ul>
                </li>
                <li>메시지: 실제 서명할 데이터
                    <ul><li>서명할 데이터를 Permit 타입의 구조에 맞게 정의 </li>
                        <li>사용자가 어떤 값을 서명하는지 명확하게 알 수 있음</li></ul>
                </li></ol>

            <p>EIP-712의 장점</p>
            <ul><li>사람이 읽을 수 있는 서명 데이터 제공</li>
                <li>Replay Attack(리플레이 공격) 방지</li>
                <li>도메인(네트워크, 컨트랙트) 바인딩으로 보안 강화</li>
                <li>Gasless 트랜잭션(ERC-2612 Permit) 가능</li></ul>

            <h4>EIP-2612: Permit - Gasless Transactions</h4>
            <ul><li>EIP-2612는 ERC-20 토큰에서 approve를 가스 없이 서명만으로 수행할 수 있도록 확장하는 표준</li>
                <li>문제: 기존 approve는 직접적인 트랜잭션이 필요하여 사용자가 가스를 지불해야 하는 문제</li>
                <li>해결: EIP-2612를 적용하면, MetaTransaction 방식으로 approve를 처리하여 사용자의 가스비 부담을 줄일 수 있다</li>
            </ul>

            <p>기존 ERC-20 approve의 문제점</p>
            <ul><li>일반적인 ERC-20 approve의 흐름:
                <ol><li>사용자가 approve(spender, amount)를 실행 → 트랜잭션을 생성해야 함(setter 함수)으로 가스비 필요</li>
                    <li>이후 spender가 transferFrom을 실행하여 토큰 전송</li></ol>
            </li>
                <li>문제점:
                    <ul><li>사용자의 가스비 부담 증가</li>
                        <li>프론트엔드 UX가 불편함 (사용자가 먼저 approve를 해야 하는 문제)</li>
                        <li>가스 없는 지갑(Gasless Wallet) 지원 어려움
                        </li></ul>
                </li></ul>


            <p>EIP-2612 permit 동작 방식</p>
            <ul><li>트랜잭션을 직접 실행하지 않고, 사용자의 서명만으로 허가 가능</li>
                <li>Permit 흐름(Gasless Approve)
                    <ol><li>사용자가 permit()을 위한 서명 생성 (EIP-712 구조체 서명)</li>
                        <li>가스 지불자가 서명을 permit() 함수로 제출하여 approve 실행 (사용자가스 없음)</li>
                        <li>spender가 transferFrom()을 실행하여 토큰 전송</li></ol>
                </li>
            </ul>

            <ul><li>함수 정의
                <ul><li>ERC-2612를 준수하는 컨트랙트는 기존 ERC-20 표준에 3개의 새로운 함수를 추가해야 한다</li></ul>
            </li></ul>
            <h5>Permit</h5>
            <pre><code>{`
        function permit(
            address owner,      // 토큰 소유자의 주소 
            address spender,    // 토큰을 사용할 주소 
            uint256 value,      // 허가할 토큰 수량 
            uint256 deadline,   // 서명이 유효한 기간(타임스탬프)
            uint8 v,
            bytes32 r,
            bytes32 s
        ) external;
        `}</code></pre>
            <ul><li>v, r, s: EIP-712 서명 데이터
                <ul><li>r: 서명의 첫 번째 32바이트 조각</li>
                    <li>s: 서명의 두 번째 32바이트 조각</li>
                    <li>v: 복구 파라미터(서명자가 누구인지 알아내는데 사용됨)</li>
                    <li>사용자가 프라이빗 키로 오프체인에서 서명을 하면, 이 스마트 계약은 그 서명이 진짜인지 v, r, s 값을 이용해 검증함</li>
                    <li>사용자가 토큰 사용 권한을 서명만으로 위임할 수 있게 해줌</li></ul>
            </li></ul>
            <ul><li>동작 방식
                <ol><li>사용자는 permit()을 호출하지 않고, EIP-712 형식으로 서명(signature)을 생성</li>
                    <li>이 서명을 permit() 함수에 전달하여, 스마트 컨트랙트가 approve() 없이 직접 승인 처리</li>
                    <li>spender는 transferFrom()을 호출하여 토큰을 사용할 수 있음</li>
                    <li>이  과정에서 msg.sender는 필요 없음! (즉, Gas가 필요하지 않음)</li>
                </ol>
            </li>
            </ul>

            <span>Permit() 조건</span>
            <ul><li>현재 블록 시간이 deadline보다 작아야 함 (즉, 만료되지 않아야 함)</li>
                <li>owner가 0x0이 아니어야 함</li>
                <li>nonce 값이 현재 nonces[owner]와 같아야 함 (Replay Attack 방지)</li>
                <li>r, s, v 값이 secp256k1 서명 검증을 통과해야 함</li></ul>

            <h5>nonces</h5>
            <pre><code>{`
            function nonces(address owner) external view returns (uint);
            `}</code></pre>
            <ul><li>각 owner 주소별로 서명이 사용된 횟수를 관리하는 Nonce 카운터</li>
                <li>permit()이 호출될 때마다 nonces[owner]가 증가하며, 같은 서명이 반복 사용되지 않도록 방지
                </li></ul>

            <h5>DOMAIN_SEPARATOR</h5>
            <pre><code>{`
            function DOMAIN_SEPARATOR() external view returns (bytes32);
            `}</code></pre>
            <ul><li>EIP-712에서 사용되는 도메인 분리자(Domain Separator) 값을 반환</li>
                <li>도메인 분리자는 네트워크, 컨트랙트 주소 등을 포함하여 서명이 특정 컨트랙트에서만 유효하도록 보장</li>
                <li>체인 간 리플레이 공격(Replay Attack) 방지 기능을 수행</li>
                <li>예제:
                    <CodeBlock code={TIL0422DomainSeparator}></CodeBlock>
                </li>
            </ul>

            <p>참고 자료</p>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-2612'>EIP-2612 공식 자료</a></li>
                <li>과제: <a href='https://github.com/dolsotbob/permit'>permit</a>
                    <ul><li>utils/ethers.ts 파일 구현하기</li>
                        <li>ethers.js를 이용하여 permit을 실행시킬 수 있어야 한다.</li></ul>
                </li></ul>

        </div>
    )
}

export default TIL0422