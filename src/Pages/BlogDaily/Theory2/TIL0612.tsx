import React from 'react'

const celestiaVsEthDanksharding = [
    {
        category: '구조 철학',
        celestia: '- 완전한 모듈형 체인',
        danksharding: '- 롤업 중심 Layer 1 구조'
    },
    {
        category: '처리 역할',
        celestia: '- 데이터 + 합의',
        danksharding: '- 데이터 + 보안 + 정산'
    },
    {
        category: '실행 계층',
        celestia: '- 없음 (Rollup 의존)',
        danksharding: '- 없음 (Rollup 의존)'
    },
    {
        category: 'Rollup 연동성',
        celestia: '- 체인 외부 개발자에 개방',
        danksharding: '- 이더리움 생태계 내부 집중'
    },
    {
        category: '샤딩 적용 방식',
        celestia: '- 체인 자체가 샤딩됨',
        danksharding: '- 블롭을 통한 데이터 샤딩'
    },
    {
        category: '목표',
        celestia: '- 다양한 모듈형 체인 인프라',
        danksharding: '- 이더리움 생태계 내 Rollup 지원'
    },
]

const TIL0612 = () => {
    return (
        <div className='BlogDaily'>
            <h3>샤딩과 모듈형 블록체인</h3>
            <ul><li>샤딩은 블록체인 데이터를 분산 저장·처리하여, 전체 네트워크의 처리량(TPS)을 향상시키고 노드의 부담을 줄이는 확장 전략으로,
                데이터 샤딩, 트랜잭션 샤딩, 상태 샤딩으로 세분화되어 설명됩니다.</li>
                <li>모듈형 블록체인은 기존의 모놀리식(monolithic) 구조. 즉, 데이터 저장, 합의, 실행을 모두 한 체인이 담당하던 방식과 비교하여,
                    역할을 나누고 전문화함으로써 확장성과 유연성을 높이는 새로운 아키텍처 모델입니다.</li></ul>

            <h4>샤딩(Sharding)</h4>
            <span>블록체인 데이터를 여러 개의 “조각(Shard)”으로 나누어, 병렬로 저장하고 처리하는 방식</span>
            <ul><li>중앙화 DB에서 이미 오래된 확장 기술</li>
                <li>블록체인에 도입되면, 모든 노드가 모든 데이터를 처리할 필요가 없음</li>
                <li>→ 확장성 향상, 노드 부담 감소, 속도 증가</li></ul>

            <p>왜 샤딩이 필요할까?</p>
            <ul><li>기존 블록체인의 한계 (모놀리식 구조)</li>
                <li>블록체인이 커질수록 속도 느려지고 노드 운영 어려워짐</li></ul>

            <p>샤딩의 핵심 아이디어</p>
            <ul><li>Shard (샤드) - 하나의 데이터 조각. 독립된 체인처럼 동작할 수도 있음</li>
                <li>Shard Chain - 여러 개의 샤드 체인이 병렬로 존재</li>
                <li>Beacon Chain - 샤드 체인을 조율하고 정렬하는 상위 체인 (이더리움의 경우)</li></ul>
            <span style={{ fontStyle: 'italic' }}>블록체인이 하나의 거대한 엑셀 파일이라면, 샤딩은 그걸 탭(Tab)으로 나누어서 여러 사람이 동시에 처리하는 구조이다.</span>

            <p>샤딩의 종류</p>
            <ul><li>데이터 샤딩 - 블록체인 데이터(블록, 트랜잭션 로그)를 나누어 저장</li>
                <li>트랜잭션 샤딩 - 사용자들의 트랜잭션을 샤드별로 분산 처리</li>
                <li>상태 샤딩 - 계정, 스마트 계약 상태(state)를 분리하여 유지</li>
                <li>종합 샤딩 - 여러 샤딩 방식이 결합될 수 있음</li></ul>

            <p>샤딩 구조의 작동 방식 (이더리움 예시)</p>
            <ol><li>사용자 A가 트랜잭션을 전송함</li>
                <li>해당 트랜잭션은 샤드 #3에서 처리됨</li>
                <li>샤드 #3은 자체 블록을 생성함</li>
                <li>Beacon Chain이 이 블록의 해시와 정합성 정보만 정리</li>
                <li>Layer 1 체인은 최종 상태만 확인하고 유지</li></ol>

            <p>샤딩의 장점</p>
            <ul><li>TPS 향상 - 여러 샤드가 병렬로 처리 → 수천 TPS 가능</li>
                <li>저장 효율 - 한 노드가 전체 데이터 대신 일부만 저장 가능</li>
                <li>확장성 확보 - 노드 증가해도 전체 부하가 선형 증가하지 않음</li>
                <li>구조적 유연성 - 샤드마다 독립적 애플리케이션 운영 가능</li></ul>

            <p>샤딩의 도전 과제</p>
            <ul><li>보안 분산  - 샤드가 쪼개지면 각 샤드의 보안도 분산됨</li>
                <li>샤드 간 통신 - 서로 다른 샤드 간 데이터 전달과 동기화가 어려움</li>
                <li>설계 복잡성 - Beacon Chain 등 조율 메커니즘이 필수</li>
                <li>탈중앙화 보존 - 노드 수 적은 샤드에 대한 공격 가능성</li></ul>

            <p>대표 사례</p>
            <ul><li>Ethereum (Danksharding)	- 데이터 샤딩 기반. Rollup을 위한 공간 제공</li>
                <li>NEAR Protocol - Nightshade 샤딩 구조 사용</li>
                <li>Polkadot - 패러체인 구조로 유사한 분산 처리</li>
                <li>Zilliqa	- 트랜잭션 샤딩 기반의 퍼블릭 체인</li></ul>
            <span style={{ fontStyle: 'italic' }}>샤딩은 블록체인을 여러 개의 조각으로 나누어 병렬로 처리함으로써, 속도와 확장성을 획기적으로 개선하는 구조적 솔루션이다.</span>


            <h4>데이터, 트랜잭션, 샹태 샤딩</h4>
            <ul><li>샤딩은 블록체인을 여러 개의 샤드로 나누어 병렬로 처리하는 기술</li>
                <li>무엇을 나누느냐에 따라 다음 세 가지로 분류됨
                    <ol><li>데이터 샤딩</li>
                        <li>트랜잭션 샤딩</li>
                        <li>상태 샤딩</li></ol>
                </li>
            </ul>

            <p>1. 데이터 샤딩</p>
            <span>블록체인에 저장되는 데이터(블록, 트랜잭션 기록) 자체를 여러 샤드에 나누어 저장하는 방식</span>
            <ul><li>모든 노드가 전체 데이터를 저장하지 않음</li>
                <li>노드는 일부 샤드 데이터만 저장하고 검증</li></ul>

            <span>예시:</span>
            <ul><li>이더리움의 Danksharding</li>
                <li>Celestia (모듈형 블록체인): 데이터 가용성 전용 체인</li></ul>

            <span>장점:</span>
            <ul><li>저장 공간 부담 감소</li>
                <li>데이터 가용성 레이어로서 Rollup 등 Layer 2 확장성 보조</li></ul>

            <span style={{ fontStyle: 'italic' }}>키워드: 저장 최적화, 데이터 분산</span>

            <p>2. 트랜잭션 샤딩</p>
            <span>사용자들의 트랜잭션을 분산된 샤드에서 병렬로 처리하는 방식</span>
            <ul><li>트랜잭션 실행 자체가 샤드별로 나뉨</li>
                <li>각 샤드는 독립적으로 블록을 생성할 수 있음</li></ul>

            <span>예시:</span>
            <ul><li>Zilliqa: 대표적인 트랜잭션 샤딩 기반 체인</li></ul>

            <span>장점:</span>
            <ul><li>처리 속도 향상 (TPS 증가)</li>
                <li>동시에 여러 트랜잭션을 병렬 처리 가능</li></ul>

            <span>과제:</span>
            <ul><li>샤드 간 트랜잭션(예: A 샤드 → B 샤드 송금) 처리 복잡</li>
                <li>샤드 간 메시지 전달 구조 필요</li></ul>

            <span style={{ fontStyle: 'italic' }}>키워드: 병렬 처리, 성능 향상</span>

            <p>3. 상태 샤딩</p>
            <span>블록체인의 전체 상태(state,예: 계정 잔액, 스마트 계약 등)을 샤드별로 나누는 방식</span>
            <ul><li>각 샤드는 자기 상태만 알고 있음</li>
                <li>특정 상태 정보(예: 계정)와 상호작용하려면 해당 샤드에 접속</li></ul>

            <span>예시:</span>
            <ul><li>NEAR Protocol의 Nightshade</li>
                <li>이더리움의 미래 계획 중 일부에서 고려</li></ul>

            <span>장점:</span>
            <ul><li>전체 네트워크 상태 저장 부담 감소</li>
                <li>대규모 DApp 실행 가능</li></ul>

            <span>과제:</span>
            <ul><li>상태 정합성 유지가 매우 복잡함
                <ul><li>여러 개의 샤드로 나눠진 블록체인의 상태를 ‘논리적으로 하나인 것처럼’ 일관되게 유지하는 것이 어렵다</li></ul>
            </li>
                <li>크로스샤드 상태 업데이트 동기화 문제</li></ul>

            <span style={{ fontStyle: 'italic' }}>키워드: 스마트 계약 확장성, 상태 분산</span>


            <h4>모듈형 블록체인 vs 모놀리식 블록체인</h4>
            <p>블록체인의 구성 요소 4가지</p>
            <ul><li>실행 (Execution) - 트랜잭션 처리, 스마트 계약 실행</li>
                <li>데이터 가용성 (Data Availability) - 트랜잭션 데이터를 네트워크에 안전하게 게시</li>
                <li>합의 (Consensus) - 노드 간 어떤 블록이 유효한지 결정</li>
                <li>정리 (Settlement) - 체인의 상태를 기록하고, 최종 상태를 확정</li></ul>

            <p>모놀리식 블록체인(Monolithic Blockchain)</p>
            <span>모놀리식 블록체인은 위의 모든 기능을 하나의 체인에서 동시에 수행하는 구조</span>
            <ul><li>단일 체인이 실행 + 합의 + 데이터 저장 모두 처리</li>
                <li>구조는 단순하지만 확장성과 처리 성능에 한계</li></ul>

            <span>장점:</span>
            <ul><li>아키텍처가 단순</li>
                <li>모든 기능을 자체적으로 수행 → 독립성</li></ul>

            <span>단점:</span>
            <ul><li>TPS 제한 (확장성 낮음)</li>
                <li>모든 노드에 많은 연산과 저장 부담</li>
                <li>블록체인 "비대화" 문제 발생</li></ul>

            <p>모듈형 블록체인(Modular Blockchain)</p>
            <span>모듈형 블록체인은 위 기능들을 분리하여, 각 기능에 특화된 체인이 협력하는 구조</span>
            <ul><li>예: Celestia, Ethereum 2.0 + Rollups 조합</li>
                <li>구조 예시:
                    <ul><li>Rollup (실행)</li>
                        <li>Celestia (데이터 가용성 + 합의)</li>
                        <li>Ethereum (합의 + 정산)</li></ul>
                </li>
            </ul>

            <span>장점:</span>
            <ul><li>각 기능을 전문화 → 더 높은 확장성</li>
                <li>Rollup 등 Layer 2 확장성과 자연스럽게 연결</li>
                <li>리소스 분산 → 노드 부담 감소</li></ul>

            <span>단점:</span>
            <ul><li>구조가 복잡해짐</li>
                <li>체인 간 통신 및 신뢰 문제 발생 가능</li>
                <li>초기 학습 곡선 높음</li></ul>

            <h4>샤딩과 모듈형 블록체인 개념을 실제로 구현한 대표적인 사례 - Celestia, Ethereum Danksharding</h4>
            <ul><li>Celestia는 모든 기능을 분산시켜 Rollup에게 실행을 맡기는 “모듈형 블록체인”의 대표</li>
                <li>Ethereum Danksharding은 이더리움이 Rollup을 위해 샤딩 구조를 도입하는 진화된 “롤업 친화형 구조”</li></ul>

            <p>Celestia: 세계 최초의 모듈형 블록체인</p>
            <ul><li>Celestia는 블록체인의 “데이터 가용성”과 “합의”만을 담당하는 모듈형 블록체인이다.</li>
                <li>실행은 Rollup 등 외부 시스템이 담당하며, 모든 기능을 한 체인에 몰지 않는 설계 철학을 따른다.</li></ul>

            <span>핵심 기능:</span>
            <ul><li>데이터 가용성 - Rollup이 만든 트랜잭션 데이터를 블록체인에 안전하게 게시</li>
                <li>합의 - 어떤 데이터가 유효한지를 네트워크 합의로 결정</li>
                <li>실행 - 트랜잭션 처리나 스마트 계약 실행은 하지 않음</li>
                <li>상태 저장 - 상태(state)는 외부에서 관리됨</li></ul>

            <span>특징:</span>
            <ul><li>모듈형 블록체인의 대표 사례</li>
                <li>실행 계층과 완전히 분리 → 다양한 Rollup과 연동 가능</li>
                <li>블록체인을 쉽게 “빌드”할 수 있게 해줌 (Rollup SDK 제공)</li></ul>

            <span>장점:</span>
            <ul><li>높은 확장성 (TPS 수천 단위 가능)</li>
                <li>체인 간 유연한 상호 운용성</li>
                <li>노드 부담 적음 (Data Availability Sampling 활용)</li></ul>

            <span>Celestia를 어디서 사용할까?</span>
            <ul><li>Rollup 개발 프로젝트들: Eclipse, Dymension, Sovereign SDK 등</li></ul>

            <p>Ethereum Danksharding: 롤업을 위한 데이터 샤딩</p>
            <ul><li>Danksharding은 이더리움이 Rollup 중심 로드맵을 지원하기 위해 개발 중인 차세대 샤딩 구조</li>
                <li>실행은 Rollup에게 맡기고, 이더리움은 데이터 게시판 역할에 집중함</li></ul>

            <span>발전 과정:</span>
            <ol><li>이더리움 1.0: 모놀리식 구조 (모든 기능 직접 수행)</li>
                <li>Ethereum 2.0: 지분증명(PoS) 도입, Beacon Chain 출현</li>
                <li>Proto-Danksharding (EIP-4844): Rollup 전용 데이터 저장 공간(Blob) 제공</li>
                <li>Danksharding (진화형): 진짜 데이터 샤딩 구현 → Rollup 성능 극대화</li></ol>

            <span>Danksharding의 구조 특징:</span>
            <ul><li>Blob - Rollup 데이터 저장을 위한 특수 슬롯 (일시적 데이터)</li>
                <li>Proposer/Builder 분리 - 블록 생성과 수집을 나누어 효율화</li>
                <li>데이터 샤딩	- 다수의 샤드에 Rollup 데이터를 분산 저장 (확장성 극대화)</li></ul>

            <span>장점:</span>
            <ul><li>Rollup 성능 비약적 향상 (저렴한 수수료, 빠른 처리)</li>
                <li>이더리움은 보안과 정산만 집중 → Layer 2 확장과의 조화</li>
                <li>점진적 도입 가능 (EIP-4844 → Danksharding)</li></ul>

            <span>현재 상태 (2025 기준)</span>
            <ul><li>Proto-Danksharding(EIP-4844)은 메인넷 적용</li>
                <li>Danksharding은 개발 중, Celestia와 철학적으로 유사</li></ul>

            <p>Celestia, Ethereum Danksharding 요약</p>
            <div className="ml-4">
                {celestiaVsEthDanksharding.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Celestia</strong> {type.celestia}</li>
                            <li><strong>Ethereum Danksharding</strong> {type.danksharding}</li>
                        </ul>
                    </details>
                ))}
            </div>


        </div >
    )
}

export default TIL0612