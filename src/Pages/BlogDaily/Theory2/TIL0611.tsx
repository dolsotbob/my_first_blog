import React from 'react'

const rollupData = [
    {
        type: 'Optimistic Rollup',
        advantages: [
            '빠르고 효율적',
            '복잡한 연산 처리 가능 (EVM 호환성 높음)',
        ],
        disadvantages: [
            '확정에 시간이 오래 걸림 (7일 지연 등)',
            '악의적 트랜잭션이 일시적으로 반영될 수 있음',
        ],
        examples: [
            { name: 'Optimism', url: 'https://optimism.io' },
            { name: 'Arbitrum', url: 'https://arbitrum.io' },
        ],
    },
    {
        type: 'ZK Rollup',
        advantages: [
            '확정(Finality) 빠름 (수 분 내)',
            '데이터 조작 어려움 → 높은 보안성',
        ],
        disadvantages: [
            '복잡한 연산 처리 어려움 (EVM 완전 호환 어려움)',
            '생성 비용이 높음 (ZK proof 생성 비용)',
        ],
        examples: [
            { name: 'zkSync', url: 'https://zksync.io' },
            { name: 'StarkNet', url: 'https://www.starknet.io' },
        ],
    },
];

const rollupVSstateChannel = [
    {
        category: '거래 참여자',
        rollup: ': 누구나 참여 가능',
        channel: ': 채널 참가자만'
    },
    {
        category: '거래 확정',
        rollup: ': Layer 1에 정기적으로 기록',
        channel: ': 마지막에 한 번만 기록'
    },
    {
        category: '사용성',
        rollup: ': 스마트 계약, DApp 호환',
        channel: ': 주로 송금, 간단한 상태 변경에 적합'
    }
]

const validiumVsZKRollup = [
    {
        category: '증명방식',
        zkrollup: ': ZK Proof',
        validium: ': ZK Proof'
    },
    {
        category: '데이터 저장 위치',
        zkrollup: ': Layer 1 (온체인)',
        validium: ': 오프체인'
    },
    {
        category: '데이터 가용성',
        zkrollup: ': 완전 보장',
        validium: ': 외부 의존 (중앙화 위험 있음)'
    },
    {
        category: '가스비',
        zkrollup: ': 중간',
        validium: ': 매우 낮음'
    },
    {
        category: '사용 사례',
        zkrollup: ': 일반 DeFi, 스마트 계약 등',
        validium: ': 대규모 게임, NFT, 소셜 데이터 등'
    },
]

const TIL0611 = () => {
    return (
        <div className='BlogDaily'>
            <h3>레이어 2 확장 솔루션</h3>

            <h4>레이어 2란? </h4>
            <ul><li>기본 체인(Layer 1) 바깥에서 작동하면서, 트랜잭션을 더 빠르고 효율적으로 처리하기 위한 보조 처리 계층</li>
                <li>즉, 블록체인의 교통 체증을 줄이는 우회도로 같은 역할을 함
                    <ul><li>기본 체인(예: 이더리움)은 그대로 두고</li>
                        <li>부가적인 네트워크나 프로토콜이 일부 기능을 대신 처리한 후</li>
                        <li>필요한 정보만 요약해서 Layer 1에 기록</li></ul>
                </li></ul>

            <p>레이어 2가 해결하는 방식</p>
            <ul><li>트랜잭션을 Layer 2에서 빠르게 처리</li>
                <li>이후 요약본(혹은 증명 정보)만 Layer 1에 기록</li>
                <li>결과적으로,
                    <ul><li>TPS 대폭 증가</li>
                        <li>수수료 절감</li>
                        <li>보안은 여전히 Layer 1이 보장</li></ul>
                </li></ul>

            <h4>대표적인 Layer 2: 롤업</h4>
            <span>여러 트랜잭션을 하나로 묶어(Roll-up) 처리하고, 요약된 데이터만 Layer 1에 기록하는 방식</span><br />
            <span>롤업의 두 가지 종류</span>
            <ul><li>Optimistic Rollup
                <ul><li>특징: “정상이라고 가정하고 기록, 이상하면 나중에 증명”</li>
                    <li>일정 시간 동안 문제 제기(Challenge) 가능</li>
                </ul>
            </li>
                <li>ZK Rollup
                    <ul><li>특징: “처음부터 계산 결과의 증명(영지식 증명)을 함께 기록”</li>
                    </ul>
                </li>
            </ul>

            <p>Optimistic과 ZK 롤업 비교</p>
            <table className="table-auto border border-gray-400 w-full text-left mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 w-1/5">Rollup 종류</th>
                        <th className="border px-4 py-2 w-1/5">항목</th>
                        <th className="border px-4 py-2">내용</th>
                    </tr>
                </thead>
                <tbody>
                    {rollupData.map((rollup, idx) => (
                        <React.Fragment key={`rollup-${idx}`}>
                            <tr>
                                <td className="border px-4 py-2 font-semibold" rowSpan={3}>
                                    {rollup.type}
                                </td>
                                <td className="border px-4 py-2 font-medium">장점</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.advantages.map((adv, i) => (
                                            <li key={`adv-${idx}-${i}`}>{adv}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">단점</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.disadvantages.map((disadv, i) => (
                                            <li key={`disadv-${idx}-${i}`}>{disadv}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">예시</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.examples.map((ex, i) => (
                                            <li key={`ex-${idx}-${i}`}>
                                                <a
                                                    href={ex.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {ex.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <h4>대표적인 Layer 2: 플라즈마</h4>
            <ul><li>이더리움의 확장성을 높이기 위해 제안된 레이어 2 솔루션</li>
                <li>메인 체인(Layer 1) 바깥에 하위 체인(Plasma 체인)을 만들고,</li>
                <li>대부분의 트랜잭션을 그 하위 체인에서 처리한 뒤,</li>
                <li>요약된 결과만 메인 체인에 기록하는 방식
                </li></ul>

            <p>작동 방식 요약</p>
            <ol><li>하위 체인(Plasma 체인) 생성</li>
                <li>사용자는 자산을 Plasma 체인으로 전송</li>
                <li>트랜잭션은 Plasma 체인에서 오프체인 처리</li>
                <li>정기적으로 요약 정보(상태 루트 등)를 메인 체인에 제출</li>
                <li>문제가 있을 경우 “이의 제기(Challenge)” 가능</li>
                <li>사용자가 자산을 다시 인출(Withdraw)하려면 일정 기간 “이상 없음”을 증명해야 완료됨</li></ol>

            <p>플라즈마의 장점</p>
            <ul><li>처리 속도 매우 빠름</li>
                <li>가스비 절감</li>
                <li>보안 유지 - Layer 1의 스마트 계약과 증명 구조를 통해 보안 확보</li>
                <li>구조 유연성 - 체인마다 다양한 구조 설계 가능 (Plasma Cash, Plasma MVP 등)</li></ul>

            <p>플라즈마의 한계</p>
            <ul><li>스마트 계약 처리 불가</li>
                <li>인출 지연 - 자산 인출 시 수 일의 대기 시간이 필요 (Challenge 기간)</li>
                <li>이의제기, 증명 제출 등 복잡한 사용자 흐름</li>
                <li>탈중앙화 미흡 - 운영자가 있는 체인 구조는 중앙화 위험 존재</li></ul>

            <p>플라즈마는 지금도 쓰일까?</p>
            <ul><li>현재는 Rollup(Rollup-centric) 구조가 주류로 떠오르면서 플라즈마는 거의 쓰이지 않음</li>
                <li>과거에는 OMG Network, Matic Network (초기 Polygon) 등에서 사용</li>
                <li>하지만 Rollup이 더 강력하고 범용적인 구조로 평가되며 대부분 전환됨</li></ul>


            <h4>대표적인 Layer 2: 채널(State Channel)</h4>
            <ul><li>블록체인 외부에서(off-chain) 여러 번의 트랜잭션을 빠르게 주고받고, 마지막 결과만 블록체인에 기록하는 레이어 2 확장 기술</li>
                <li>즉, “잠깐 블록체인을 벗어나서 둘이 계산 다 하고, 마지막에 정산만 블록체인에 올리자”는 방식
                </li></ul>

            <p>작동 방식 요약</p>
            <span>예: Alice와 Bob이 자주 송금한다고 가정</span>
            <ol><li>채널 열기
                <ul><li>Alice와 Bob이 양쪽에서 이더(ETH)를 예치해 채널을 엶</li>
                    <li>이 작업은 블록체인에 기록됨 (on-chain)</li></ul>
            </li>
                <li>오프체인 거래 진행
                    <ul><li>Alice ↔ Bob 간 송금, 상호작용 등을 서명 기반 메시지로 교환</li>
                        <li>이 모든 트랜잭션은 블록체인에 기록되지 않음 (빠르고 무료)</li></ul>
                </li>
                <li>채널 닫기
                    <ul><li>둘이 합의한 최종 상태만 블록체인에 기록</li>
                        <li>이로써 블록체인 리소스를 크게 절약</li></ul>
                </li>
            </ol>

            <p>장점</p>
            <ul><li>빠름 - 블록 생성 기다릴 필요 없이 즉시 처리</li>
                <li>수수료 없음 - 블록에 기록 안 되니 가스비 없음</li>
                <li>오프라인 상태에서도 가능 - 서명 메시지로 교환만 하면 됨</li>
                <li>보안 - 분쟁 시 언제든 블록체인에 증거 제출 가능 (스마트 계약 보증)</li></ul>

            <p>단점 및 한계</p>
            <ul><li>실시간 참여자 필요 - 거래 양쪽이 모두 온라인이어야 함 (특히 결제 채널)</li>
                <li>참여자 수 제한 - 주로 1:1 구조 (N:N은 복잡함)</li>
                <li>정산 전에는 상태 반영이 블록체인에 없음 - 완전히 탈중앙화된 서비스에 적용은 어려움</li>
                <li>분쟁 해결 구조 복잡 - 일방이 잘못된 서명을 제출하면 대응해야 함</li></ul>


            <p>대표 사례</p>
            <ul><li>Lightning Network</li>
                <li>Raiden Network - 이더리움 기반의 State Channel 프로젝트 (현재는 비활성화 상태)</li></ul>

            <p>Rollup과의 차이</p>
            <div className="ml-4">
                {rollupVSstateChannel.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Rollup</strong> {type.rollup}</li>
                            <li><strong>State Channel</strong> {type.channel}</li>
                        </ul>
                    </details>
                ))}
            </div>


            <h4>대표적인 Layer 2: Validium</h4>
            <span>ZK Rollup과 유사하게 영지식 증명(ZK Proof)을 사용하는 Layer 2 기술</span><br />
            <span>트랜잭션 데이터를 Layer 1이 아닌, 오프체인에 보관</span>
            <ul><li>ZK Rollup: 증명 + 데이터 모두 Layer 1에 기록</li>
                <li>Validium: 증명은 L1에 기록, 데이터는 L1 밖(off-chain)에 저장</li></ul>

            <p>왜 등장했을까?</p>
            <span>ZK Rollup은 데이터와 증명을 모두 Layer 1에 기록하므로</span>
            <ul><li>보안은 뛰어나지만</li>
                <li>Layer 1 저장소를 많이 차지함</li>
                <li>가스비가 줄어들긴 해도 완전히 낮지는 않음</li></ul>
            <span style={{ fontStyle: 'italic' }}>그래서 데이터까지 오프체인으로 내보내서 속도와 비용을 극단적으로 줄이자는 발상 → Validium 탄생</span>

            <p>작동 방식 요약</p>
            <ol><li>트랜잭션은 Validium Layer 2에서 처리됨</li>
                <li>처리된 결과를 ZK Proof로 압축</li>
                <li>Proof만 Layer 1에 기록 (데이터는 저장하지 않음)</li>
                <li>사용자는 상태를 오프체인 저장소에서 읽고, 증명 검증은 온체인에서 수행</li></ol>

            <p>장점</p>
            <ul><li>매우 빠름 - 데이터 저장이 오프체인이므로 지연 거의 없음</li>
                <li>가스비 절감 - Layer 1에 데이터 안 올리니 저장 비용 거의 없음</li>
                <li>대용량 처리 - NFT, 게임 등 대규모 데이터 사용에 적합</li>
                <li>ZK Proof 기반 - 데이터는 오프체인이지만, 정확성은 암호학적으로 보장</li></ul>

            <p>단점 및 주의점</p>
            <ul><li>데이터 가용성 문제- Layer 1에 데이터가 없으므로 오프체인 저장소가 다운되면 복구 어려움</li>
                <li>탈중앙화 낮음 - 데이터 저장소가 중앙화되면 위험 가능</li>
                <li>자산 출금 지연 - L1에 데이터가 없기 때문에 상태 동기화가 복잡함</li>
            </ul>
            <span style={{ fontStyle: 'italic' }}>→ ZK Rollup보다 보안 수준이 떨어질 수 있음 (특히 데이터 가용성 측면에서)</span>

            <p>Validium vs ZK Rollup 비교</p>
            <div className="ml-4">
                {validiumVsZKRollup.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>ZK Rollup</strong> {type.zkrollup}</li>
                            <li><strong>Validium</strong> {type.validium}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>실제 사례</p>
            <ul><li>StarkEx (by StarkWare) - ZK STARK 기반 Validium 기술 적용</li>
                <li>Immutable X	- StarkEx 위에 구축된 NFT 특화 Validium</li>
                <li>DeversiFi - 거래소 속도의 유동성과 프라이버시를 위한 Validium 채택</li></ul>

            <h4>이더리움의 확장 전략과 롤업 중심 로드맵</h4>
            <p>롤업 중심 로드맵(Rollup-Centric Roadmap)이란?</p>
            <ul><li>이더리움은 Layer 1은 ‘보안과 합의의 역할’만 수행하고, 실질적인 확장은 Layer 2(Rollup)에서 이루어진다는 전략</li>
                <li>이 전략은 2020년 이후 비탈릭 부테린이 지속적으로 강조하며, 이더리움 커뮤니티의 공식 로드맵으로 자리 잡았다.</li></ul>

            <p>롤업 중심 구조의 철학</p>
            <ul><li>Layer 1 (이더리움 본체)
                <ul><li>역할: 보안, 데이터 기록, 최종 합의</li>
                    <li>예시: Beacon Chain, Danksharding 등</li></ul>
            </li>
                <li>Layer 2 (롤업)
                    <ul><li>역할: 빠른 트랜잭션 처리, 수수료 절감</li>
                        <li>예시: Arbitrum, Optimism, zkSync 등</li></ul>
                </li>
            </ul>
            <span style={{ fontStyle: "italic" }}>Layer 1은 “법원”, Layer 2는 “실생활 공간”처럼 구분됨</span>

            <p>기술 로드맵 단계(2024~)</p>
            <ul><li>이더리움의 확장 로드맵은 종종 "S.C.O.U.R.G.E"라는 키워드로 요약되며,</li>
                <li>여기서 확장성 관련 핵심 단계는 아래와 같습니다.
                    <ul><li>The Surge – 롤업 활성화를 위한 기반 다지기</li>
                        <li>Danksharding 준비 (샤딩 기반 데이터 블롭 제공)</li>
                        <li>Proto-Danksharding (EIP-4844): Rollup 전용 공간 제공 (2024 상반기 도입)</li></ul>
                </li>
                <li>The Scourge 이후 – 더 나은 블록 생산, 롤업 간 상호운용성</li></ul>

            <p>Proto-Danksharding과 Rollup의 관계</p>
            <ul><li>Danksharding - 이더리움이 롤업을 위한 데이터 저장소로 진화하는 샤딩 전략</li>
                <li>Blob (데이터 블롭) - Rollup이 Layer 1에 제출할 수 있는 대용량 데이터 공간</li>
                <li>Proto-Danksharding (EIP-4844) - Rollup 확장을 위한 임시 블롭 지원안 (이미 테스트넷 적용 중)</li></ul>
            <span style={{ fontStyle: 'italic' }}>이더리움은 자신을 “Rollup의 데이터 게시판”으로 바꾸는 중입니다.</span>

            <p>주의할 점</p>
            <ul><li>Layer 2마다 UX, 보안, 비용이 다름 (사용자가 직접 선택해야 함)</li>
                <li>Rollup 간 호환성과 통합성은 여전히 과제</li>
                <li>Layer 2는 탈중앙화 수준이 프로젝트마다 다름</li></ul>

        </div>
    )
}

export default TIL0611