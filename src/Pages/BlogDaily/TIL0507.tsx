import React from 'react'

const oracleTypes = [
    {
        title: '중앙화 오라클',
        points: [
            '하나의 데이터 제공자 또는 서버가 정보 전달',
            '예: A 회사 서버가 환율 정보를 API로 제공',
            '빠르고 간단하며 구현 쉬움',
            '단점: 단일 실패 지점; 조작 가능성 있음; 탈중앙 철학과는 거리 있음'
        ]
    },
    {
        title: '탈중앙화 오라클',
        points: [
            '여러 노드가 데이터를 수집하고, 다수의 합의를 통해 결과 제공',
            '예: 21개 노드가 ETH/USD를 수집하고, 평균값을 제출',
            '합의 알고리즘을 통해 신뢰도 확보',
            '장점: 조작에 강함; 검증 가능성 높음',
            '단점: 구현 복잡; 비용 높음; 느릴 수도 있음'
        ]
    }
];

const oracleExamples = [
    {
        name: 'Chainlink',
        method: '탈중앙, 푸시, 풀',
        notes: '가장 널리 사용됨, 다양한 피드, VRF 지원'
    },
    {
        name: 'Band Protocol',
        method: '탈중앙, 푸시',
        notes: 'Cosmos 기반, 빠른 처리, IBC 호환'
    },
    {
        name: 'Tellor',
        method: '탈중앙, 풀',
        notes: '채굴형 오라클, 값 요청에 따라 데이터 제공'
    },
    {
        name: 'UMA',
        method: '탈중앙, 풀',
        notes: '진위 판단을 위한 분쟁 해결 시스템(Optimistic Oracle)'
    }
];


const TIL0507 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 7일</p>
            <h3>오라클</h3>
            <ul><li>블록체인은 외부 네트워크나 API에 접속할 수 없도록 설계되었다</li>
                <li>오라클은 스마트 컨트랙트에게 블록체인 바깥의 정보를 안전하게 전달해주는 역할을 함</li></ul>

            <h4>오라클의 종류와 비교</h4>
            <p>오라클의 데이터 전달 방식</p>
            <ul><li>Push 방식
                <ul><li>오라클이 스스로 주기적으로 데이터를 블록체인에 올린다</li>
                    <li>블록체인에 항상 최신 정보가 존재하고 스마트 컨트랙트는 필요할 때 바로 참조 가능</li>
                    <li>장점: 빠른 응답; 반복 요청 없이 참조 가능</li>
                    <li>단점: 쓸모없는 데이터도 계속 올라감 → 비용 발생 증가 </li></ul>
            </li>
                <li>Pull 방식: 스마트 컨트랙트가 직접 요청을 보내고, 오라클이 그때 데이터를 응답한다
                    <li>필요한 시점에만 요청 → 효율적</li>
                    <li>장점: 불필요한 데이터 전송 X; 요청 중심이라 유연함</li>
                    <li>단점: 오라클 응답 지연 시 계약 실행도 지연; 트랜잭션이 2개 이상 필요할 수 있음 (요청 → 응답)</li>

                </li>
            </ul>

            <section>
                <p>오라클의 신뢰 방식</p>
                {oracleTypes.map((type, index) => (
                    <details key={index} className="ml-4">
                        <summary className="cursor-pointer font-medium">{type.title}</summary>
                        <ul className="list-disc list-inside ml-4">
                            {type.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </details>
                ))}
            </section>

            <section>
                <h4 className="text-md font-semibold">오라클 예시</h4>
                <ul className="ml-4 space-y-2">
                    {oracleExamples.map((oracle, idx) => (
                        <li key={idx} className="border p-2 rounded-md">
                            <strong>{oracle.name}</strong> ({oracle.method})<br />
                            <span>{oracle.notes}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <h4>오라클 사용 사례</h4>
            <ol><li>가격 정보
                <ul><li>스마트 컨트랙트가 실시간 시장 가격을 알아야 하는 경우</li>
                    <li>사용 예시:
                        <ul><li>DeFi에서 ETH/USDT 교환 시 정확한 환율 필요</li>
                            <li>담보 대출(예: AAVE, MakerDAO): 담보가치 평가를 위해 가격 필수</li>
                            <li>탈중앙 거래소(DEX): 스왑 비율 산정
                            </li></ul>
                    </li>
                    <li>오라클 활용:
                        <ul><li>Chainlink Price Feeds &rarr; ETH/USD, BTC/ETH 등 지원</li>
                            <li>자동 청산, 이자율 조정 등 가격 기반 로직 구현 가능</li></ul>
                    </li>
                </ul>
            </li>

                <li>날씨 데이터
                    <ul><li>날씨에 따라 조건부 계약이 자동 실행되는 경우</li>
                        <li>사용 예시:
                            <ul><li>농업 보험: "비가 30mm 이상 내리면 자동 보상"</li>
                                <li>해양 운송 보험: "기상 악화 시 자동 보장"
                                </li></ul>
                        </li>
                        <li>오라클 활용: 외부 API(OpenWeather 등) + Chainlink External Adapter</li></ul>
                </li>

                <li>스포츠 경기 결과
                    <ul><li>경기 결과에 따라 토큰 지급, 베팅 정산 등 자동 처리</li>
                        <li>사용 예시:
                            <ul><li>스포츠 베팅 플랫폼: 승자에 따라 자동 정산</li>
                                <li>경기 결과에 따라 NFT 발행</li>
                                <li>팬 참여 이벤트: 이긴 팀 팬에게 리워드</li>
                            </ul>
                        </li>
                        <li>오라클 활용: Sports API + Tellor/UMA
                            <ul><li>스포츠 결과 API &rarr; 오라클을 통해 온체인 전송</li>
                                <li>Optimistic Oracle(UMA)로도 진위 검증 가능</li></ul>
                        </li>
                    </ul>
                </li>

                <li>무작위값 - VRF
                    <ul><li>공정한 랜덤성이 필요한 경우</li>
                        <li>사용 예시:
                            <ul><li>NFT 민팅 시 랜덤 속성 부여</li>
                                <li>온체인 게임: 주사위, 카드 뽑기 등</li>
                                <li>추첨 시스템: 에어드랍, 추첨 이벤트</li></ul>
                        </li>
                        <li>오라클 활용:
                            <ul><li>Chainlink VRF(Verifiable Random Function): 조작 불가능한 암호학적 랜덤</li>
                                <li>사용자가 요청 → 오라클이 랜덤값 응답 → 결과는 증명 가능</li>
                                <pre><code>{`
    requestRandomness() → 오라클 응답 → fulfillRandomWords()
    `}</code></pre>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>외부 API 연결
                    <ul><li>일반적인 웹 API의 데이터를 스마트 컨트랙트에서 활용하고 싶을 때</li>
                        <li>사용 예시:
                            <ul><li>항공 지연 보상 보험: 실제 항공편 상태 API 연결</li>
                                <li>물류 상태 기반 결제: 물품 배송 완료 → 결제 트리거</li>
                                <li>주차, 교통, 의료 등 다양한 IoT 서비스 연동
                                </li></ul>
                        </li>
                        <li>오라클 활용:
                            <ul><li>Chainlink External Adapter 사용</li>
                                <li>백엔드(Node.js 등)에서 API → 오라클 노드로 전달 → 온체인 기록
                                </li></ul>
                        </li>
                    </ul>
                </li>
            </ol>

            <h4>오라클 문제</h4>
            <ul><li>스마트 컨트랙트는 블록체인 위에서 결정적으로(Deterministically) 실행되며 매우 안전하지만,</li>
                <li>외부 데이터를 가져오는 오라클은 블록체인 외부에서 작동한다.</li>
                <li>즉, 스마트 컨트랙트의 핵심 로직이 신뢰할 수 없는 외부 데이터에 의존하게 된다.</li>
                <li>이로 인해 오라클 자체가 취약하거나 잘못된 정보를 주면, 아무리 안전한 스마트 컨트랙트라도 잘못된 결과를 낼 수 있습니다.
                </li></ul>

            <p>주요 위협 요소</p>
            <ul><li>조작 가능성
                <ul><li>예시:
                    <ul><li>가격 조작: 공격자가 오라클에 ETH 가격을 낮게 보내 담보를 강제로 청산</li>
                        <li>게임 조작: 무작위 결과를 컨트롤해 NFT 민팅 겨로가 조작, 추첨 조작</li></ul>
                </li>
                    <details>
                        <li>왜 랜덤 값을 오라클로 받아야 할까?
                            <ul><li>스마트 컨트랙트는 결정적인 환경에서 실행되므로, </li>
                                <li>block.timestamp, block.number, keccak256() 같은 방식으로 랜덤 값을 만들려고 하면 누구든 예측하거나 조작할 수 있다
                                    <pre><code>{`
        // 보안상 취약한 방식
        uint rand = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        `}</code></pre>
                                    <ul><li>&rarr; 공격자는 블록 생성 타이밍이나 입력값을 조절하여 원하는 결과를 만들 수 있음</li>
                                        <li>그래서 Chainlink VRF(Verifiable Random Function) 같은 외부 오라클 기반 무작위 생성이 필요하다</li>
                                        <li>Chainlink VRF는 오라클이 생성한 랜덤 값을 서명과 함께 전달하기 때문에, 컨트랙트가 그 값을 검증하고 신뢰할 수 있게 됨</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </details>
                </ul>
            </li>
                <li>시간 지연
                    <ul><li>오라클이 외부 데이터를 가져오는 데 시간이 걸릴 수 있다</li>
                        <li>원인: 네트워크 지연, 블록체인 혼잡, 오라클 노드 오프라인 등</li>
                        <li>결과:
                            <ul><li>오래된 데이터로 트랜잭션 처리</li>
                                <li>스왑 시점 가격이 맞지 않아 실패</li>
                                <li>시간 제한 있는 서비스에서 응답 지연</li>
                            </ul>
                        </li>
                    </ul>

                </li>

                <li>가용성 문제(Availability)
                    <ul><li>오라클이 다운되거나 작동하지 않으면, 스마트 컨트랙트는 데이터를 받지 못하고 멈춰버릴 수 있다.</li>
                        <li>결과:
                            <ul><li>DeFi 거래 중단</li>
                                <li>보험 서비스 작동 불가</li>
                                <li>게임 중 응답 없음 상태 발생</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul >

            <p>해결 전략</p>
            <ul><li>다중 오라클 사용 (Multiple Oracles)
                <ul><li>여러 데이터 제공자(오라클)를 사용하여, 단일 실패에 의존하지 않도록 설계한다</li>
                    <li>예시: Chainlink는 7~31개 노드의 데이터를 가져와 집계한다</li>
                </ul>
            </li>
                <li>Aggregation(집계)
                    <ul><li>다수의 오라클을 사용하는 것에 더해, 중앙값/평균값/합의 알고리즘 등을 이용해 신뢰도를 높인다</li>
                        <li>예: 오라클 노드 5개 중 1개가 잘못된 값을 줘도, 중앙값을 취하면 안전</li>
                    </ul>
                </li>
                <li>탈중앙화된 오라클 네트워크 사용
                    <ul><li>오픈 네트워크에서 노드들이 경제적 인센티브를 갖고 데이터 제공에 참여한다</li>
                        <li>→ 신뢰 기반이 아닌 게임 이론 기반의 보안 모델
                            <ul><li>게임 이론 기반 모델은 "거짓말하면 손해, 정직하면 이익"이라는 식으로 행동 자체를 통제</li></ul>
                        </li>
                        <li>예시: Chainlink, Tellor, UMA</li>
                    </ul>
                </li>
            </ul>


            <h4>Chainlink VRF(Verifiable Random Function)</h4>
            <ul><li>스마트 컨트랙트에서 안전하고 검증 가능한 무작위 값(randomness)을 생성할 수 있게 해주는 오라클 솔루션</li>
                <li>게임, NFT, 추첨 시스템 등에서 매우 자주 사용되는 기능입니다</li>
            </ul>

            <p>왜 스마트 컨트랙트에서 랜덤 값이 어려울까?</p>
            <ul><li>블록체인은 결정적(deterministic)인 시스템이기 때문</li>
                <li>즉 모든 노드가 같은 입력에 대해 항상 같은 결과를 계산해야 하기 때문에 값을 미리 예측 할 수도 있고 조작할 수도 있다</li>
                <li>이런 코드는 보안상 매우 취약</li>
                <pre><code>{`
    // ❌ 절대 사용하면 안 되는 방식
    uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
    `}</code></pre>
                <li>👆 이런 값은 누구나 미리 예측할 수 있고, 블록 생성자(채굴자 또는 밸리데이터)는 원하는 결과를 만들 수도 있다</li>
            </ul>

            <p>그럼, block.prevrandao 같은 값을 이용하면 되지 않을까? </p>
            <ul><li>아니요. block.prevrandao도 온전히 신뢰할 수 있는 난수는 아니다</li>
                <li>블록 생성자는 prevrandao에 부분적으로 영향을 줄 수 있고,</li>
                <li>결과적으로 스마트 컨트랙트에서 이를 기반으로 보상이나 추첨을 하면</li>
                <li>공정성/조작 방지 보장이 어렵습니다.
                </li>
            </ul>

            <p>Chainlink VRF(Verifiable Random Function)란?</p>
            <ul><li>예측 불가능하고, 조작 불가능하며, 검증 가능한 무작위 값을 제공하는 오라클 시스템</li>
                <li>VRF는 사용자가 무작위값을 요청하면, Chainlink 노드가 무작위값을 생성하고, 암호학적으로 서명된 증거와 함께 스마트 컨트랙트에 전달
                    <ul><li>→ 이 값은 누구도 미리 알 수 없고, 컨트랙트는 값의 정당성까지 검증할 수 있다</li></ul>
                </li>
                <li>동작 흐름:
                    <ol><li>스마트 컨트랙트가 VRF에 랜덤 값을 요청</li>
                        <li>Chainlink 노드가 무작위값 + 암호학적 증명을 생성</li>
                        <li>fulfillRandomWords() 함수로 무작위값을 컨트랙트에 전달</li>
                        <li>컨트랙트는 값을 수신하고, 자동으로 검증</li>
                    </ol>
                </li>
            </ul>

            <p>Chainlink VRF의 보안적 특징</p>
            <ul><li>예측 불가성: 요청 전에 아무도 값을 알 수 없음</li>
                <li>조작 방지: 노드가 값을 바꿀 수 없음 (바꾸면 서명 검증 실패)</li>
                <li>검증 가능: 컨트랙트에서 증명을 자동으로 확인</li>
                <li>탈중앙 보장: 여러 노드에서 무작위 값을 생성 (V2에서는 더 강화됨)</li></ul>

            <p>활용 예시</p>
            <ul><li>NFT 민팅: 무작위 속성 부여</li>
                <li>온체인 게임: 카드 뽑기, 보상 상자, 전투 결과</li>
                <li>추첨 시스템: 랜덤 당첨자 선택</li>
                <li>로또</li></ul>


            <p>Chainlink VRF의 Pull 방식</p>


        </div >
    )
}

export default TIL0507