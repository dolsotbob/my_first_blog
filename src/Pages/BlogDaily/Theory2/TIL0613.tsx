import React from 'react'

const blocktimeTech = [
    {
        tech: '지분증명 기반 슬롯 타임 단축 (예: Ethereum PoS)',
        detail1: '이더리움은 PoS 전환 이후 블록 시간을 12초로 고정',
        detail2: '슬랏(Slot)마다 블록 제안자 선출',
        detail3: '→ 안정성 유지하며 짧은 주기 구현'
    },
    {
        tech: '하드웨어 병렬성 기반 고속 블록 생성 (예: Solana)',
        detail1: 'Proof of History + Tower BFT 조합',
        detail2: '시계 기능을 이용해 선형 블록 순서 고정 → 400ms 수준의 블록 타임 구현',
        detail3: '하드웨어 최적화에 의존'
    },
    {
        tech: '블록 생성자-정렬자 분리 (PBS: Proposer/Builder Separation)',
        detail1: '블록 제안자와 블록 구성자를 분리해 효율적 정렬 → 속도 향상',
        detail2: '이더리움 Danksharding 준비 과정에서 도입됨',
        detail3: '예:  Ethereum의 MEV-Boost'
    },
    {
        tech: 'DAG 기반 구조 (예: Avalanche, Fantom)',
        detail1: '블록을 선형으로 만들지 않고 DAG(비순환 그래프)로 병렬 처리',
        detail2: '다양한 경로에서 동시에 블록 생성 가능',
        detail3: '확정 속도 개선 (Finality 수초 내 확보)'
    }
]

const crosschainType = [
    {
        type: 'Trusted Bridge (신뢰 기반)',
        detail: '중앙화된 중개자가 교환 수행',
        example: 'WBTC (비트코인 → 이더리움)'
    },
    {
        type: 'Federated Bridge',
        detail: '멀티시그 그룹이 자산 잠금/해제 관리',
        example: 'Ronin Bridge (Axie)'
    },
    {
        type: 'Trustless Bridge',
        detail: '체인 간 증명 기반 자동 처리 (light client 활용)',
        example: 'Cosmos IBC, Polkadot XCM'
    },
    {
        type: 'Message Passing',
        detail: '단순 토큰이 아닌 명령, 상태 정보 전달',
        example: 'LayerZero, Wormhole'
    }
]

const crosschainExample = [
    {
        example: 'Cosmos + IBC',
        detail1: '체인 간 완전한 인터체인 구조 (ATOM, Osmosis 등)',
        detail2: '수백 개의 체인이 IBC 연결 → "인터체인 네트워크"'
    },
    {
        example: 'Polkadot + XCM',
        detail1: '패러체인 간 메시지를 XCM 프로토콜로 전달',
        detail2: '독립 체인이지만 공통 리레이어(중계 체인)를 통해 연결'
    },
    {
        example: 'LayerZero',
        detail1: '다수의 체인을 연결하는 메시지 전송 기반 크로스체인 프로토콜',
        detail2: 'dApp 간 직접 커뮤니케이션 가능 (예: Stargate, Radiant)'
    },
    {
        example: 'Chainlink CCIP',
        detail1: '크로스체인 스마트 계약 호출 표준',
        detail2: '오라클 네트워크를 활용해 메시지 전달'
    }
]

const TIL0613 = () => {
    return (
        <div className='BlogDaily'>
            <h3>미래의 확장성 기술과 전망</h3>

            <h4>블록 생성 시간 단축 기술</h4>
            <ul><li>블록 생성 시간(Block Time): 블록체인에서 새로운 블록이 생성되는 시간 간격</li>
                <li>블록 생성 시간이 짧을수록 → 더 많은 트랜잭션을 처리할 수 있음</li></ul>

            <span>블록 생성 시간을 줄이면 다음과 같은 이점이 있다:</span>
            <ul><li>트랜잭션 처리 속도 향상 - 블록을 더 자주 만들면, 더 많은 트랜잭션을 빠르게 포함 가능</li>
                <li>지연 시간 감소 - 사용자 입장에서 “확정된 거래”까지 걸리는 시간이 짧아짐</li>
                <li>실시간 서비스 가능성 증가 - 게임, 결제, 소셜 앱 등에 적합한 반응성 확보</li></ul>

            <p>대표적인 블록 생성 단축 기술</p>
            <div className="ml-4">
                {blocktimeTech.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.tech}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail1}</li>
                            <li><strong></strong> {type.detail2}</li>
                            <li><strong></strong> {type.detail3}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>기술적 도전 과제</p>
            <ul><li>포크 빈도 증가
                <ul><li>너무 빠르게 블록을 만들면 충돌이 자주 발생 (포크 발생률 ↑)</li></ul>
            </li>
                <li>네트워크 동기화 부담
                    <ul><li>노드 간 데이터 전파가 완료되기 전에 다음 블록 생성될 수 있음</li></ul>
                </li>
                <li>보안성과 탈중앙화 간 균형
                    <ul><li>빠른 생성 속도 → 검증 집중화 위험 → 탈중앙성 저하 우려</li></ul>
                </li>
            </ul>

            <p>블록 생성 시간 vs 트랜잭션 속도는 다르다?</p>
            <ul><li>블록 생성 시간은 단순한 “포장 빈도”</li>
                <li>TPS (초당 트랜잭션 수)는 블록 크기 + 블록 생성 속도에 따라 결정됨
                    <ul><li>→ 블록을 빨리 만들어도 블록당 처리량이 작으면 TPS는 낮을 수 있음</li></ul>
                </li></ul>

            <p>블록 생성 단축의 대표 프로젝트 비교</p>
            <pre><code>{`
    체인            | 블록 생성 시간 |  관련 기술 
    Bitcoin          약 10분         PoW
    Ethereum (PoS)   12초           Beacon Chain + 슬롯 
    Solana           약 0.4초        PoH + Tower BFT 
    Avalanche        수 초           DAG 기반 블록 생성
    Aptos / Sui      1초 내외         병렬 실행 + 고속 합의 
    `}</code></pre>

            <h4>병렬 실행(Parallel Execution)</h4>
            <ul><li>병렬 실행은 트랜잭션 간 의존성을 분석해 동시에 처리할 수 있는 구조로, 블록체인의 TPS 한계를 뛰어넘고 실시간 앱에 적합한 차세대 실행 방식이다.</li></ul>

            <p>병렬 실행이 필요한 이유</p>
            <ul><li>TPS 한계 극복 - 순차 처리 방식은 CPU 코어 수와 무관하게 속도 제한</li>
                <li>멀티코어 활용 - 현대 컴퓨터의 다중 코어를 활용하지 못하면 낭비</li>
                <li>실시간 앱 대응 - 게임, 소셜, 금융 앱은 초고속 응답이 필요함</li>
                <li>차세대 블록체인 경쟁력 확보 - Aptos, Sui, Solana 등은 병렬 실행으로 고성능 구현 중</li></ul>

            <p>어떻게 병렬 실행이 가능할까?</p>
            <span>병렬 실행을 위해선 <strong>트랜잭션 간 의존성(Conflict)</strong>을 분석해야 한다.</span><br />
            <span>→ 독립적인 트랜잭션끼리는 동시에 실행, 충돌이 나는 트랜잭션은 순차로 처리한다.</span>
            <ul><li>핵심 알고리즘: Static Analysis, Conflict Detection Graph, Scheduler</li></ul>

            <p>병렬 실행 구현 사례</p>
            <pre><code>{`
    프로젝트  - 방식                     -  특징 
    Solana  - Runtime-level 병렬 실행   -  계정 단위 병렬 처리. 실핼 성능 높지만 복잡성 존재 
    Aptos   - BlockSTM(병렬 상태 머신)   -  실행 전 의존성 분석, 충돌 없는 트랜잭션만 병렬 실행
    Sui     - 개체 기반 모델             -  독립 개체(object)를 기준으로 병렬성 판단. NFT, 게임에 유리
    Fuel    - UTXO 기반 → 병렬 처리 최적화 - 입출력 모델이 명확해 병렬성 추론 용이
    `}</code></pre>

            <p>병렬 실행의 장점</p>
            <ul><li>처리량 향상 - CPU 코어를 병렬 활용 → 수천~수만 TPS 가능</li>
                <li>비용 절감 - 블록당 처리량 증가 → 사용자당 수수료 낮아짐</li>
                <li>다양한 DApp 확장 가능 - 게임, 금융, 대량 메시징 등에 적합</li></ul>

            <p>도전 과제 및 한계</p>
            <ul><li>상태 충돌 분석의 복잡성 - 트랜잭션 간 충돌 여부를 정확히 판단해야 함</li>
                <li>개발 난이도 ↑ - 트랜잭션을 병렬화하기 위한 구조 설계 필요</li>
                <li>보안성 - 상태 정합성을 유지하며 병렬 처리하는 기술적 어려움</li>
                <li>중복 실행 리스크 - 동시성 제어 실패 시 논리적 오류 발생 가능</li></ul>

            <h4>블록체인 인터체인(IBC) 및 크로스체인 확장</h4>
            <span style={{ fontStyle: 'italic' }}>서로 다른 블록체인 간 자산, 정보, 명령을 안전하게 교환할 수 있어야 진정한 블록체인 생태계 확장성과 상호운용성이 실현될 수 있다.</span>

            <p>크로스체인(Cross-Chain) vs 인터체인(Interchain)</p>
            <ul><li>크로스체인: 두 블록체인 간 자산, 메시지, 상태를 직접 연결하거나 중개체(브리지)를 통해 연결</li>
                <li>인터체인: 여러 체인을 네트워크처럼 묶어 상호운용 가능하게 만드는 구조. 표준화된 통신 프로토콜 사용</li></ul>

            <p>IBC(Inter-Blockchain Communication)란?</p>
            <span>IBC는 Cosmos 생태계에서 개발한 블록체인 간 통신 표준 프로토콜이다.</span>
            <ul><li>IBC는 "블록체인 간의 TCP/IP"라고 불림</li>
                <li>체인 간 메시지를 안전하게 전달할 수 있게 해줌</li>
                <li>주로 Cosmos SDK 기반 체인들 간에 사용됨</li></ul>

            <span>IBC 구조 요약:</span>
            <ol><li>체인 A와 체인 B는 서로 IBC 채널을 설정</li>
                <li>메시지 전송 시 블록헤더 증명을 포함해 전송</li>
                <li>상대 체인이 이를 검증 → 처리</li></ol>

            <p>크로스체인 기술 유형</p>
            <div className="ml-4">
                {crosschainType.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.type}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail}</li>
                            <li><strong>예시:</strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>대표 사례</p>
            <div className="ml-4">
                {crosschainExample.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.example}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail1}</li>
                            <li><strong></strong> {type.detail2}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>장점</p>
            <ul><li>블록체인 상호운용성 확보 - 이더리움, 솔라나, BNB 등 이질적 체인도 연결 가능</li>
                <li>다양한 체인 간 자유로운 자산 전송</li>
                <li>메시지 공유 - 체인 간 스마트 계약 상태 전달 → dApp 연결</li>
                <li>단일 체인 한계를 넘는 멀티체인 앱 가능</li></ul>

            <p>보안 고려사항</p>
            <ul><li>브리지 해킹 - 자산을 담고 있는 브리지가 해킹당하면 대규모 피해</li>
                <li>증명 위조 - 체인 간 검증 로직이 약하면 위조 메시지 처리 가능</li>
                <li>가용성 - 메시지 유실, 처리 지연 가능성</li>
                <li>모니터링 - 체인 간 상태 추적이 어려움</li></ul>

            <p>향후 전망</p>
            <ul><li>IBC 기반 메시지 중심의 확장이 일반화될 전망</li>
                <li>"하나의 체인이 모든 걸 처리" → "서로 연결된 체인이 기능 분담"</li>
                <li>모듈형 블록체인 + 크로스체인 메시지 구조 확산</li></ul>

            <h4>확장성과 탈중앙화의 균형점 모색</h4>
            {/* 여기 할 차례 */}

        </div>
    )
}

export default TIL0613