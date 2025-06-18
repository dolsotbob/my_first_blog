import React from 'react'

const standardVsFIFOqueue = [
    {
        category: '메시지 순서 보장',
        standard: '없음 (최대 노력 기준 Best-effort)',
        FIFO: '있음 (정확한 순서 보장)'
    },
    {
        category: '메시지 중복',
        standard: '가능성 있음',
        FIFO: '없음 (중복 방지 ID 기반)'
    },
    {
        category: '처리량',
        standard: '무제한 (초당 수천만 메시지 가능)',
        FIFO: '제한적 (초당 약 300~3000 메시지)'
    },
    {
        category: '사용 시점',
        standard: '빠른 처리, 순서 중요하지 않을 때',
        FIFO: '순서, 정확성 중요할 때 (결제, 거래 등)'
    }
]

const TIL0618 = () => {
    return (
        <div className='BlogDaily'>
            <span>2025.6.18</span>
            <h3>Message Queue(MQ)</h3>
            <ul><li>애플리케이션 간에 메시지를 비동기적으로 전달할 수 있도록 중간에서 중개하는 메시지 지향 미들웨어(Message-Oriented Middleware)
                <ul><li>Message: 하나의 데이터 단위 (예: JSON, 문자열 등)</li>
                    <li>Queue: 메시지를 순서대로 저장하는 FIFO(First-In-First-Out) 방식의 데이터 구조</li></ul>
            </li>
                <li>즉, 하나의 시스템이 다른 시스템에게 직접 호출하지 않고, 메시지를 중간에 "큐"에 넣어두고 나중에 처리하게 하는 방식</li></ul>

            <p>Why Use a Message Queue?</p>
            <span>오프체인 컴포넌트나 외부 API와 연결될 때 Queue 없이는 다음과 같은 문제가 발생할 수 있다.</span><br />
            <span style={{ fontWeight: 'bold' }}>예시 : 지갑 시스템에서의 Nonce 충돌</span><br />
            <ul><li>여러 사용자가 동시에 토큰을 전송하거나 거래소에서 출금을 요청하는 상황</li></ul>

            <span style={{ fontWeight: 'bold' }}>문제 상황 (Queue 없음)</span>
            <ul><li>Ethereum에서 각 트랜잭션은 고유 nonce를 필요로 함</li>
                <li>동시에 여러 트랜잭션을 보내면, nonce 중복으로 일부 트랜잭션이 실패하고 오류 발생
                    <pre><code>{`
    the tx doesn't have the correct nonce. account has nonce of: 15 tx has nonce of: 14
    `}</code></pre>
                </li>
                <li>트랜잭션이 블록에 포함되지 못해 자산 전송 실패나 사용자 불만 발생</li></ul>

            <span style={{ fontWeight: 'bold' }}>Queue 도입 시</span>
            <ul><li>트랜잭션 전송 요청을 Message Queue에 넣고, 하나씩 순차적으로 처리 → Nonce 충돌 방지</li>
                <li>안정적인 트랜잭션 흐름 유지 + 사용자 경험 개선</li></ul>
            <br />

            <p>MQ의 동작 방식</p>
            <ol><li>Producer(생산자): 메시지를 생성하여 큐에 보냄</li>
                <li>Queue(중간 저장소): 메시지를 순서대로 저장</li>
                <li>Consumer(소비자): 큐에서 메시지를 꺼내 처리</li>
                <li>Ack(확인 응답): 메시지를 잘 처리했음을 큐에 알림</li>
                <li>DLQ(Dead Letter Queue): 처리 실패한 메시지 저장</li></ol>
            <br />

            <p>Message Queue를 사용한 비동기 처리의 이점</p>
            <span style={{ fontWeight: 'bold' }}>전통적인 방식 (동기 호출)</span>
            <ul>[서비스 A] &rarr; 직접 요청 &rarr; [서비스 B]</ul>
            <ul><li>서비스 B가 응답을 줄 때까지 A는 대기해야 함</li>
                <li>B가 느리거나 장애가 나면 A도 영향받음</li></ul>
            <span style={{ fontWeight: 'bold' }}>MQ 방식 (비동기 메시징)</span>
            <ul>[서비스 A] &rarr; [Queue] &rarr; (나중에) &rarr; [서비스 B]</ul>
            <ul><li>서비스 A는 메시지를 Queue에 넣고 바로 응답을 반환</li>
                <li>서비스 B는 나중에 큐에서 메시지를 가져와 처리</li>
                <li>서비스 간 느슨한 결합(Loosely Coupled) 실현</li></ul>
            <span style={{ fontStyle: 'italic' }}>느슨한 결합은 시스템의 구성 요소(예: 서비스, 모듈, 클래스)들이 서로 최소한의 정보만 공유하며 독립적으로 동작하도록 설계된 상태를 말합니다.</span>

            <p>MQ의 예시 시스템 - 브로커</p>
            <ul><li>Apache Kafka - 대용량 로그 스트리밍에 강력
                <ul><li>처리 속도로 1위</li>
                    <li>무겁고 구현이 어려움 &rarr; 작은 기업에서 굳이 안함; 링크드인 같은 큰 기업이 씀</li></ul>
            </li>
                <li>RabbitMQ - AMQP 기반, 경량 메시지 처리에 적합
                    <ul><li>코빗에서 사용</li></ul>
                </li>
                <li>Amazon SQS - 완전 관리형 클라우드 MQ</li>
                <li>Redis Streams - Redis 기반의 메시지 큐 대안</li></ul>


            <h4>Message Queue 주요 용어 정리</h4>
            <p>1. Producer(생산자)</p>
            <span>메시지를 생성하고 Queue에 보내는 주체</span>
            <ul><li>실제 작업 요청을 시작하는 서비스 또는 애플리케이션</li>
                <li>메시지의 내용(예: 주문 정보, 알림 요청 등)을 생성</li></ul>
            <ul>예시: 유저가 결제하면 결제 서비스(Producer)가 “결제 완료” 메시지를 큐에 전송</ul>

            <p>2. Consumer (소비자)</p>
            <span>Queue에서 메시지를 꺼내어 처리하는 주체</span>
            <ul><li>메시지를 수신하고 처리하는 백엔드 프로세스</li>
                <li>예: 이메일 발송, 재고 감소, 데이터 저장 등</li></ul>
            <ul>예시: 이메일 서비스(Consumer)는 큐에 쌓인 “가입 완료 메시지”를 받아 이메일을 보냄</ul>

            <p>3. Message (메시지)</p>
            <span>Producer가 큐에 넣은 단위 데이터</span>
            <ul><li>본문(Body): 실제 데이터 (예: JSON)</li>
                <li>속성(Properties): 전송자, 시간, 메시지 ID 등</li>
                <li>메타정보(Headers): 처리에 필요한 부가 정보</li></ul>

            <p>4. Queue (큐)</p>
            <span>메시지를 저장하고 순서대로 소비자에게 전달하는 공간</span>
            <ul><li>기본적으로 FIFO(First-In-First-Out)</li>
                <li>여러 Producer가 메시지를 넣고, 여러 Consumer가 메시지를 꺼낼 수 있음</li></ul>

            <p>5. Visibility Timeout</p>
            <span>메시지가 Consumer에 전달된 이후, 다시 큐에서 보이지 않게 되는 시간</span>
            <ul><li>메시지를 처리하는 동안 다른 Consumer가 같은 메시지를 가져가지 않도록 함</li>
                <li>만약 Timeout 내에 처리 실패하면, 메시지는 다시 큐에 등장 (재시도)</li></ul>

            <p>6. Acknowledgment (Ack)</p>
            <span>Consumer가 메시지를 정상적으로 처리했음을 큐에 알리는 신호</span>
            <ul><li>Ack가 오면 메시지는 큐에서 삭제됨</li>
                <li>Ack가 없으면 Visibility Timeout 후 다시 처리 대상이 됨</li></ul>

            <p>7. Dead Letter Queue(DLQ)</p>
            <span>여러 번 처리 실패한 메시지를 따로 저장하는 큐</span>
            <ul><li>문제 있는 메시지를 격리하여 손실 없이 확인 가능</li>
                <li>운영자가 수동으로 확인 및 재처리할 수 있음</li></ul>
            <ul>조건 예시:
                <ul><li>3회 이상 처리 실패</li>
                    <li>메시지 TTL(Time To Live) 만료</li></ul>
            </ul>

            <p>8. Retry Policy</p>
            <span>메시지 처리 실패 시 얼마나, 언제, 어떻게 재시도할지에 대한 정책</span>
            <ul><li>최대 재시도 횟수</li>
                <li>재시도 간격</li>
                <li>백오프(Backoff) 전략</li></ul>

            <p>9. FIFO Queue</p>
            <span>메시지를 정해진 순서(First-In-First-Out) 대로 정확히 처리하는 큐</span>
            <ul><li>순서가 중요한 작업에 적합 (예: 금융 트랜잭션)</li>
                <li>메시지 중복 방지 기능 (deduplication ID 사용)</li></ul>

            <p>10. Delay Queue / Message Delay</p>
            <span>특정 메시지를 일정 시간 뒤에 처리하도록 지연시키는 기능</span>
            <ul>예시: 회원가입 후 5분 뒤에 리마인더 알림 메시지 발송</ul>

            <p>11. Polling (Short vs Long Polling)</p>
            <span>Short Polling</span>
            <ul><li>Consumer가 큐를 주기적으로 확인 (짧은 응답 시간)</li>
                <li>실시간성이 낮고 리소스 낭비 가능</li></ul>
            <span>Long Polling</span>
            <ul><li>Consumer가 일정 시간 큐의 응답을 기다림 (더 효율적)</li>
                <li>메세지가 생기면 바로 응답을 줌</li>
                <li>AWS SQS에서는 기본적으로 Long Polling 권장</li>
                <li>장점:
                    <ul><li>리소스 절약: 불필요한 반복 요청 없음</li>
                        <li>반응성 높음: 메세지가 생기면 즉시 전달 가능</li></ul>
                </li>
            </ul>


            <h4>Amazon SQS</h4>
            <ul><li>Amazon SQS(Simple Queue Service): AWS에서 제공하는 완전관리형 메시지 큐 서비스</li>
                <li>분산 시스템, 마이크로서비스, 이벤트 기반 아키텍처에서 비동기 메시지 처리를 쉽게 구현할 수 있도록 도움</li>
                <li>특징:
                    <ul><li><strong>서버 관리 불필요</strong>: 운영, 확장, 장애 처리 자동</li>
                        <li><strong>높은 확장성</strong>: 초당 수천만 개 메시지 처리 가능</li>
                        <li><strong>보안 및 접근 제어</strong>: IAM, VPC 엔드포인트 지원</li>
                        <li><strong>다른 AWS 서비스와의 통합 용이</strong>: Lambda, SNS, CloudWatch 등</li></ul>
                </li>
            </ul>

            <p>SQS 아키텍처 구조</p>
            <ol><li>Producer: 메시지를 큐에 보냄</li>
                <li>Queue: 메시지를 저장 (Standard 또는 FIFO)</li>
                <li>Consumer: 메시지를 꺼내서 처리</li>
                <li>Visibility Timeout: 처리 중인 메시지 잠금 시간</li>
                <li>DLQ(Dead Letter Queue): 실패한 메시지를 분리 저장</li></ol>
            <br />

            <p>Standard Queue vs FIFO Queue</p>
            <div className="ml-4">
                {standardVsFIFOqueue.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.standard}</li>
                            <li><strong></strong> {type.FIFO}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <br />

            <span>FIFO Queue의 추가 기능</span>
            <ul><li>Message Group ID: 순서를 보장할 메시지 그룹 식별자</li>
                <li>Deduplication ID: 중복 메시지 방지를 위한 식별자</li></ul>

            <p>가격 정책</p>
            <pre><code>{`
    항목             - 비용 (2025 기준, 서울 리전)
    첫 100만 건 / 월  -  비용: 무료
    이후 메시지 요금    -  비용: 약 $0.40 / 백만 건 (Standard)
    FIFO 메시지 요금   -  비용: 약 $0.50 / 백만 건 (전송 + 수신 포함)
    데이터 전송        -  비용: 같은 리전 내 무료 / VPC 엔드포인트 유료
    `}</code></pre>

            <p>한계 및 주의사항</p>
            <ul><li>Standard Queue는 중복 허용이므로 Idempotent 처리가 필요</li>
                <li>FIFO Queue는 처리량이 제한적이므로 트래픽이 많은 경우 병렬 처리 전략이 필요</li>
                <li>메시지 순서가 중요한 경우에는 반드시 FIFO Queue를 명시적으로 생성해야 함</li>
                <li>TTL(Time To Live)이 지나면 메시지가 자동 삭제됨 → DLQ 설정 중요</li></ul>


            <h4>AWS SQS 생성</h4>
            <span>AWS에서 SQS 대기열(Queue) 생성 해보기</span>
            <ol><li>SQS 대시보드 입장</li>
                <li>Simple Queue Service에서 '대기열 생성' 클릭
                    <ul><li>FIFO의 경우 대기열 이름에 000.fifo 라고 해줘야 함</li></ul>
                </li>
                <li>'구성' 설정
                    <ul><li>구성 세부 내용: 표시 제한 시간, 메시지 보존 기간, 전송 지연, 최대 메시지 크기, 메시지 수신 대기 기간, 콘텐츠 기반 중복 제거, 높은 처리량 FIFO 대기열</li></ul>
                </li>
                <li>'암호화' 설정</li>
                <li>'액세스 정책' 설정</li>
                <li>리드라이브 허용 정책 & 배달 못한 편지 대기열</li>
                <li>대기열 확인
                    <ul><li>여기서 URL 값을 프로젝트에 써야 함</li></ul>
                </li>
            </ol>


        </div>
    )
}

export default TIL0618