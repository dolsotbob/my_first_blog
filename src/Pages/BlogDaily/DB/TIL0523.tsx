import React from 'react'

const DBIntegrity = [
    {
        integrity: '개체 무결성',
        details: '기본 키는 유일하고 NULL일 수 없음',
        example: 'id는 중복 X',
    },
    {
        integrity: '참조 무결성',
        details: '외래 키가 참조하는 값이 실제 존재해야 함',
        example: '주문에 존재하지 않는 고객 ID 불가',
    },
    {
        integrity: '도메인 무결성',
        details: '특정 컬럼의 값이 유효한 범위 안에 있어야 함',
        example: '나이는 0 이상',
    },
    {
        integrity: '사용자 정의 무결성',
        details: '사용자가 정의한 조건 만족',
        example: '포인트가 음수일 수 없음 등',
    },
]

const Scalability = [
    {
        method: '수직 확장(Scale Up)',
        details: '서버의 CPU, RAM, SSD 등 하드웨어 성능 강화',
    },
    {
        method: '수평 확장(Scale Out)',
        details: '여러 DB 서버를 두고 요청을 분산 처리',
    },
    {
        method: '분할(Sharding)',
        details: '데이터를 ID나 지역별로 물리적으로 나누어 저장',
    },
    {
        method: '캐싱',
        details: '자주 조회되는 데이터를 메모리에 저장 (Redis, Memcached 등)'
    },
]

const DBcharacteristics = [
    {
        characteristic: '무결성(Integrity)',
        details: '데이터의 정확성, 일관성, 신뢰성 보장',
        why: '잘못된 정보가 저장되면 큰 피해 발생 가능',
    },
    {
        characteristic: '동시성(Concurrency)',
        details: '여러 사용자가 동시에 접근해도 충돌 없이 처리',
        why: '온라인 쇼핑몰, 은행 시스템 등에서 중요',
    },
    {
        characteristic: '확장성(Scalability)',
        details: '사용자/데이터가 늘어나도 성능 유지',
        why: '트래픽 증가에 유연하게 대응 가능',
    },
    {
        characteristic: '가용성(Availability)',
        details: 'DB가 항상 접근 가능한 상태 유지',
        why: '24시간 서비스 운영 필수',
    },
    {
        characteristic: '보안성(Security)',
        details: '접근 제어, 권한 관리, 암호화',
        why: '사용자 정보 유출, 해킹 방지',
    },
    {
        characteristic: '성능(Performance)',
        details: '쿼리 처리 속도, 응답 속도',
        why: '빠른 검색, 실시간 반응에 중요',
    },
    {
        characteristic: '회복력(Recoverability)',
        details: '장애나 에러 발생 시 복구 가능성',
        why: '백업, 트랜잭션 로그로 복구 지원',
    },
    {
        characteristic: '유지보수성(Maintainability',
        details: '관리·운영이 편한 구조',
        why: '확장/개선/오류 수정에 유리',
    },
    {
        characteristic: '일관성(Consistency)',
        details: '트랜잭션 전후 데이터 상태가 논리적으로 맞음',
        why: 'ACID의 핵심 요소 중 하나',
    },
]

const RDBMSvsNoSQL = [
    {
        element: '데이터 구조',
        RDBMS: '테이블(행/열)',
        NoSQL: '문서, 키-값, 그래프 등',
    },
    {
        element: '스키마',
        RDBMS: '고정 (사전에 정의 필요)',
        NoSQL: '유연 (필드 자유롭게 추가 가능)',
    },
    {
        element: '관계 표현',
        RDBMS: '외래 키로 표현',
        NoSQL: '일반적으로 직접 연결 관계 없음',
    },
    {
        element: '확장 방식',
        RDBMS: '수직 확장 (Scale-up)',
        NoSQL: '수평 확장 (Scale-out)',
    },
    {
        element: '쿼리 언어',
        RDBMS: 'SQL (표준화됨)',
        NoSQL: '각 DB마다 쿼리 방식 다름',
    },
    {
        element: '적합한 경우',
        RDBMS: '관계가 중요한 데이터 (예: 사용자-주문 관계)',
        NoSQL: '빠르게 바뀌는 구조, 대용량 처리 (예: 로그, 채팅)',
    },
    {
        element: '예시',
        RDBMS: 'MySQL, PostgreSQL',
        NoSQL: 'MongoDB, Redis',
    },
]



const TIL0523 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 23일</p>
            <h3>Database</h3>
            <p>데이터베이스란?</p>
            <ul><li>여러 사람이 사용할 목적으로 데이터를 구조화하여 저장한 '정보의 집합'</li>
                <li>"도서관의 책장"처럼 많은 정보(책)를 잘 정리된 기준(제목, 저자, 분류 등)으로 관리하는 곳</li>
                <li>컴퓨터가 쉽게 읽고 쓸 수 있도록 정리된 데이터</li>
                <li>여러 사람이 동시에 접근하고 수정할 수 있는 체계적인 시스템</li></ul>

            <p>파일 저장에 비해 데이터베이스는...</p>
            <ul><li>검색 속도: 빠름(인덱스 활용)</li>
                <li>데이터 무결성: 제약 조건으로 보장 가능</li>
                <li>동시성 처리: DBMS가 처리함</li>
                <li>확장성 좋음</li></ul>

            <p>데이터베이스 구성 요소</p>
            <ul><li>데이터: 저장된 정보</li>
                <li>스키마(Schema): 데이터 구조 정의 (예: 어떤 테이블에 어떤 열이 있는지)</li>
                <li>DBMS: 데이터베이스를 관리해주는 소프트웨어 (MySQL, PostgreSQL 등)</li></ul>

            <h4>데이터베이스의 핵심 품질 속성</h4>
            <p>데이터 무결성(Data Integrity)</p>
            <ul><li>데이터가 정확하고 일관되게 유지되는 것</li>
                <li>예시:
                    <ul><li>이메일이 꼭 @를 포함해야 한다</li>
                        <li>나이는 음수가 될 수 없다</li>
                        <li>사용자 ID는 중복될 수 없다</li></ul>
                </li>
            </ul>

            <span>DB가 어떻게 보장할까?</span>
            <div className="ml-4">
                {DBIntegrity.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.integrity}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                            <li><strong>예시:</strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <br />

            <p>동시성 처리(Concurrency Control)</p>
            <ul><li>여러 사용자가 동시에 DB에 접근해도 데이터 충돌 없이 일관성 있게 처리되도록 관리하는 것</li>
                <li>예시:
                    <ul><li>두 사람이 동시에 같은 상품을 구매 → 재고 -1을 동시에 적용하면 오류</li>
                        <li>은행 계좌에서 동시에 인출하면 → 잔고 마이너스 발생 가능</li></ul>
                </li>
            </ul>

            <span>DB가 어떻게 해결할까?</span>
            <ul><li>트랜젝션: 작업 단위를 묶어서 원자성 보장 (BEGIN ~ COMMIT)</li>
                <li>잠금(Lock): 데이터를 수정하는 동안 다른 트랜잭션이 접근 못하게 막음 (Row-level lock 등)</li>
                <li>격리 수준(Isolation Level): 동시성 제어의 강도 설정 (READ COMMITTED, SERIALIZABLE 등)</li></ul>
            <span style={{ fontStyle: 'italic' }}>요약: DBMS는 내부적으로 잠금(Locking)과 트랜잭션 격리 수준으로 충돌 방지와 일관성 보장을 자동 처리함</span>

            <p>확장성(Scalability)</p>
            <ul><li>데이터나 요청이 많아졌을 때, 성능 저하 없이 시스템을 확장할 수 있는 능력</li>
                <li>데이터가 1GB → 10TB가 되어도 검색 가능해야 함</li></ul>

            <span>DB에서 확장성을 확보하는 방법</span>
            <div className="ml-4">
                {Scalability.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.method}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <ul><li>요약: DB 구조 설계 + 인프라 아키텍처가 확장성에 직접적인 영향</li></ul>

            <p>그 외 데이터베이스의 주요 품질 속성들</p>
            <div className="ml-4">
                {DBcharacteristics.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.characteristic}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                            <li><strong>왜 중요한가?:</strong> {type.why}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <h4>RDBMS vs NoSQL</h4>
            <p>RDBMS란?</p>
            <ul><li>Relational Database Management System의 약자</li>
                <li>관계형 데이터베이스 관리 시스템</li></ul>

            <ul><li>특징:
                <ul><li>데이터를 표(테이블)로 관리</li>
                    <li>각 테이블은 행(Row)과 열(Column)로 구성</li>
                    <li>테이블 간 관계는 외래 키(Foreign Key)로 연결</li></ul>
            </li>
            </ul>

            <ul><li>대표적인 RDBMS:
                <ul><li>MySQL, PostgreSQL, Oracle, Microsoft SQL Server</li></ul>
            </li>
            </ul>

            <p>NoSQL이란?</p>
            <ul><li>Not Only SQL의 약자</li>
                <li>관계형 이외의 구조로 데이터를 저장하는 DB 시스템</li></ul>

            <ul><li>특징:
                <ul><li>비정형/반정형 데이터 저장에 유리</li>
                    <li>테이블 대신 문서, 키-값, 그래프, 컬럼 등 다양한 구조 사용</li>
                    <li>스키마 유연성, 수평 확장성에 강점</li></ul>
            </li>
            </ul>

            <ul><li>대표적인 NoSQL DB:
                <ul><li>MongoDB (문서 기반)</li>
                    <li>Redis (키-값 저장소)</li>
                    <li>Cassandra (컬럼형)</li>
                    <li>Neo4j (그래프형)</li></ul>
            </li>
            </ul>

            <p>RDBMS vs NoSQL 비교</p>
            {/* <p>그 외 데이터베이스의 주요 품질 속성들</p>
            <div className="ml-4">
                {DBcharacteristics.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.characteristic}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                            <li><strong>왜 중요한가?:</strong> {type.why}</li>
                        </ul>
                    </details>
                ))}
            </div> */}

        </div>
    )
}

export default TIL0523