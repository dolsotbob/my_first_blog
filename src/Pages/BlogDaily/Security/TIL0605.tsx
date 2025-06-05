import React from 'react'

const PQCalgorithm = [
    {
        algorithm: 'Latice-based',
        method: '격자 문제 기반',
        explanation: '가장 유력한 후보 중 하나'
    },
    {
        algorithm: 'Hash-based',
        method: '해시 함수만 사용',
        explanation: '속도는 느리지만 검증 용도로 안전'
    },
    {
        algorithm: 'Multivariate',
        method: '다항식 방정식 기반',
        explanation: '서명 쪽에서 연구됨'
    }
]

const ZKPusage = [
    {
        usage: '프라이버시 강화 암호화폐',
        explanation: 'Zcash(tx 가리고 유효성 검증), Tornado Cash(이더리움 tx 익명화; 단 제재 문제)'
    },
    {
        usage: '신원 증명(KYC)',
        explanation: '사용자가 정부에 모든 정보를 제공하지 않고도 "성인임"을 증명할 수 있음'
    },
    {
        usage: '투표 시스템',
        explanation: '누가 어떤 후보에 투표했는지 알 수 없지만, 집계는 신뢰 가능'
    }
]

const ZKPtech = [
    {
        type: 'zk-SNARK',
        details: '짧고 빠른 증명, 스마트 컨트랙트 적용에 적합',
        example: 'Zcash, Aztec'
    },
    {
        type: 'zk-STARK',
        details: '양자 내성 있음, 더 큰 증명 데이터 필요',
        example: 'StarkNet'
    },
    {
        type: 'Bulletproofs',
        details: '중간 속도와 보안성',
        example: 'Monero'
    },
]

const ZKPlimits = [
    {
        limits: '연산 비용',
        details: '증명 생성 및 검증에 많은 계산 자원 필요'
    },
    {
        limits: '개발 복잡도',
        details: 'ZKP 회로 작성은 매우 복잡한 수학적 지식 필요'
    },
    {
        limits: '정부 규제와 충돌 가능성',
        details: '프라이버시가 너무 강하면 범죄 악용 우려 → Tornado 사례 등'
    },
]

const MEVwho = [
    {
        role: '봇 운영자',
        explanation: '블록체인 거래를 모니터링하며 빠르게 수익성 있는 트랜잭션을 감지'
    },
    {
        role: '블록 생성자',
        explanation: '수수료를 더 많이 주는 트랜잭션을 우선적으로 포함시키거나, 자신의 거래를 앞세워 직접 수익을 얻음'
    },
    {
        role: '검열 가능 노드',
        explanation: '특정 거래를 제외하거나, 조건부로 순서를 바꾸는 식의 검열도 가능'
    },
]

const MEVtype = [
    {
        type: '프론트러닝',
        details: '누군가의 거래보다 먼저 거래를 넣어 이득을 챙김'
    },
    {
        type: '백러닝',
        details: '누군가의 거래 결과를 본 후 바로 따라가는 방식'
    },
    {
        type: '샌드위치 공격',
        details: '사용자의 거래 앞뒤에 봇의 거래를 넣어 가격 조작'
    }
]

const MEVproblems = [
    {
        problem: '일반 사용자 피해',
        details: '사용자는 예정보다 비싼 가격에 거래하게 되거나, 슬리피지를 심하게 겪을 수 있음'
    },
    {
        problem: '탈중앙성 훼손',
        details: '검열 가능성과 특정 노드의 권력 집중 가능성'
    },
    {
        problem: '공정성 저하',
        details: '부당한 정보 우위를 가진 자가 이익을 가져감'
    }
]

const MEVaddressed = [
    {
        measures: '프라이빗 메모리풀 (Private Mempool)',
        details: '거래를 공개되지 않은 경로로 제출하여 MEV 봇의 감지 회피'
    },
    {
        measures: 'Flashbots',
        details: 'MEV를 사용자에게 유리하게 재분배할 수 있는 오픈 플랫폼'
    },
    {
        measures: '순서 고정 방식 (Fair Ordering)',
        details: '트랜잭션의 순서를 자동 또는 무작위로 정해 조작 불가하게 함'
    },
    {
        measures: 'Rollup의 시퀀서 규칙 강화',
        details: 'L2에서는 시퀀서(정렬자)의 역할이 중요함 → 규칙으로 제한'
    }
]

const TIL0605 = () => {
    return (
        <div className='BlogDaily'>
            <h3>향후 보안 이슈와 대응</h3>
            <p>블록체인 트렐리마(Scalability Trilemma)</p>
            <ul><li>확장성, 보안성, 탈중앙화의 균형 문제</li></ul>

            <h4>양자 컴퓨팅 대비</h4>
            <p>양자 컴퓨팅이란?</p>
            <ul><li>기존 컴퓨터의 0과 1이 아닌, 양자 비트(Qubit)를 이용해 동시에 여러 계산을 수행할 수 있는 강력한 계산 장치</li>
                <li>병렬성과 얽힘(entanglement)을 이용해 특정 문제에 대해 기존 컴퓨터보다 훨씬 빠른 속도로 계산</li></ul>

            <p>왜 블록체인에 위협이 되는가?</p>
            <ul><li>블록체인의 보안은 대부분 공개키 암호화에 기반하기 때문이다.
                <ul><li>ECDSA: 지갑 주소, 서명 생성</li>
                    <li>SHA256: 블록 해시, 트랜잭션 ID</li></ul>
            </li>
                <li>양자 컴퓨터는 다음 알고리즘을 통해 이를 깨뜨릴 수 있다.
                    <ul><li>Shor’s Algorithm → ECDSA와 같은 공개키 암호 깨기 가능</li>
                        <li>Grover’s Algorithm → SHA256을 빠르게 역산 가능</li></ul>
                </li>
                <li>결과적으로,
                    <ul><li>사용자의 지갑 주소가 노출되면 서명을 위조당할 수 있고,</li>
                        <li>블록체인의 불변성 자체가 위협받을 수 있음</li></ul>
                </li>
            </ul>

            <p>양자 내성 암호(Post-Quantum Cryptography, PQC)</p>
            <span>양자 컴퓨터에 대비한 새로운 암호 체계들이 개발되고 있습다. 대표적인 양자 내성 알고리즘:</span>
            <div className="ml-4">
                {PQCalgorithm.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.algorithm}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>방식:</strong> {type.method}</li>
                            <li><strong>설명:</strong> {type.explanation}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <span style={{ fontStyle: 'italic' }}>미국 NIST에서는 2022년부터 표준화를 진행 중이며, 블록체인에서도 실험적 적용 사례가 나타나고 있다.</span>

            <p>블록체인의 대응 전략</p>
            <ul><li>양자 내성 지갑: 일부 프로젝트는 이미 PQC 기반 주소 생성 실험 중 (ex. Ethereum PQ wallet, QRL 등) </li>
                <li>업그레이드 가능한 컨트랙트를 통해 향후 PQC 적용을 유연하게 준비</li>
                <li>하이브리드 서명 방식: 기존 알고리즘 + PQC 방식 병행 사용</li>
                <li>시점 선택이 중요: 실제 상용 양자 컴퓨터는 아직 제한적 → 성급한 전환은 오히려 리스크</li></ul>

            <h4>Zero-Knowledge Proof와 프라이버시 보호</h4>
            <ul><li>프라이버시 문제: 블록체인의 아이러니</li>
                <li>이를 해결하기 위해 등장한 개념이 바로 영지식 증명</li></ul>

            <p>ZKP란 무엇인가?</p>
            <ul><li>내가 어떤 정보를 알고 있다는 사실을 증명하되, 그 정보 자체는 공개하지 않는 방법</li>
                <li>나는 20살 이상이다’라는 사실을 증명하고 싶을 때, 주민등록번호를 보여줄 필요 없이 '20살 이상'임을 증명해주는 증명서만 보여주는 방식</li>
                <li>즉, 결과만 공개하고 내용은 비공개</li>
                <li>마치 쌤이 같은 층 여자분에게 비번 보여주지 않고 같은 층 사람이란 것을 보여준 것과 같음</li></ul>

            <p>ZKP의 핵심 속성</p>
            <ul><li>완전성: 거짓이 아니면 항상 참이라고 증명할 수 있어야 함</li>
                <li>정당성: 거짓을 참이라고 속일 수 없어야 함</li>
                <li>영지식성: 아무런 추가 정보도 공개되지 않아야 함</li></ul>

            <p>ZKP는 어디에 쓰일까?</p>
            <div className="ml-4">
                {ZKPusage.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.usage}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.explanation}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>ZKP 기술 종류</p>
            <div className="ml-4">
                {ZKPtech.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.type}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                            <li><strong>예시 프로젝트:</strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>한계와 과제</p>
            <div className="ml-4">
                {ZKPlimits.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.limits}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <ul><li>ZKP는 투명성과 프라이버시의 균형을 가능하게 하는 핵심 기술임</li>
                <li>탈중앙화 사회에서 프라이버시 보호는 선택이 아닌 필수 요건이 되고 있다.</li>
                <li>ZKP 기술은 아직 발전 중이며, 앞으로 더 다양한 분야에 프라이버시 강화 도구로 사용될 것</li></ul>


            <h4>MEV와 거래 순서 조작 문제</h4>
            <ul><li>Maximal Extractable Value</li>
                <li>블록체인에서 트랜잭션의 순서를 조작하여 얻을 수 있는 이익을 의미함</li>
                <li>블록 생성자가 "어떤 트랜잭션을 먼저 실행할지" 결정할 수 있기 때문에, 자신에게 유리한 순서로 트랜잭션을 배치해 수익을 뽑아낼 수 있는 구조이다.</li></ul>

            <p>예시로 이해하는 MEV</p>
            <ol><li>Alice가 Uniswap에서 큰 금액으로 ETH를 DAI로 바꾸는 거래를 요청</li>
                <li>이걸 Bob이라는 봇(또는 채굴자)이 먼저 감지</li>
                <li>Bob은 Alice보다 먼저 ETH를 사서 가격을 올림 (프론트러닝)</li>
                <li>Alice의 거래는 비싸게 체결됨</li>
                <li>Bob은 다시 ETH를 팔아 차익을 챙김</li></ol>
            <span style={{ fontStyle: 'italic' }}>Bob은 단순히 ‘순서’만 바꿔서 수익을 얻은 것이고, 이게 바로 MEV이다.</span>

            <p>MEV는 누가 발생 시키나?</p>
            <div className="ml-4">
                {MEVwho.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.role}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.explanation}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>MEV 종류</p>
            <div className="ml-4">
                {MEVtype.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.type}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>왜 문제인가?</p>
            <div className="ml-4">
                {MEVproblems.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.problem}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>대응 방법</p>
            <div className="ml-4">
                {MEVaddressed.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.measures}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

        </div>
    )
}

export default TIL0605