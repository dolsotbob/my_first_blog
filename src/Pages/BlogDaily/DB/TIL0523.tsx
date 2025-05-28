import React from 'react'
import tableImg from './Images/table.png'
import foreignKey from './Images/ForeignKeyTable.png'
import postgresVsOthers from './Images/PostgresSQLvsOthers.png'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0523TableSchema } from './CodeExamDB'
import { TIL0523ForeignKey } from './CodeExamDB'
import { TIL0523UniqueKey } from './CodeExamDB'
import { TIL0523NotNull } from './CodeExamDB'

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

const RDBMSorNoSQL = [
    {
        situation: '관계가 복잡한 데이터 (ex. 쇼핑몰 주문)',
        which: 'RDBMS',
    },
    {
        situation: '정형 데이터가 많고 안정성이 중요',
        which: 'RDBMS',
    },
    {
        situation: '빠르게 변화하는 구조 (ex. 스타트업 서비스 초기)',
        which: 'NoSQL',
    },
    {
        situation: '막대한 양의 데이터를 수평 확장으로 처리',
        which: 'NoSQL',
    },
    {
        situation: '캐싱, 세션 관리 등 초고속 처리가 중요',
        which: 'NoSQL (특히 Redis)',
    },
]

const ACID = [
    {
        ACID: 'A - Atomicity (원자성)',
        detail1: '트랜잭션은 전부 성공하거나, 전부 실패해야 한다.',
        detail2: '계좌 이체: A 계좌에서 출금되고, B 계좌에 입금돼야 완료',
        detail3: '한쪽만 되면? → 시스템 오류, 돈 증발 가능',
        detail4: '"올 or Nothing” (중간은 없다)',
    },
    {
        ACID: 'C - Consistency(일관성)',
        detail1: '트랜잭션이 끝나면 데이터는 항상 정해진 규칙(제약 조건)을 만족해야 한다',
        detail2: '나이는 0 이상이어야 한다는 규칙이 있다면,',
        detail3: '트랜잭션 실행 전후에도 이 조건이 깨지면 안 됨',
        detail4: '"룰을 깨면 안 됨” (제약 조건 유지)',
    },
    {
        ACID: 'I - Isolation(격리성)',
        detail1: '동시에 실행되는 트랜잭션이 서로에게 영향을 주지 않아야 한다',
        detail2: '두 사용자가 동시에 같은 상품 주문',
        detail3: '→ 각자의 트랜잭션은 독립적이어야 함 (동시 접근 충돌 방지)',
        detail4: '“각자 자기 일만 하기” (내 트랜잭션 끝날 때까지 다른 트랜잭션이 못 끼어들게)',
    },
    {
        ACID: 'D - Durability(지속성)',
        detail1: '트랜잭션이 완료되면, 그 결과는 영구적으로 보존되어야 한다',
        detail2: '→ 전원이 나가도, 시스템이 재부팅돼도 그대로 남아 있어야 함',
        detail3: '게시글을 등록하고 “성공” 메시지를 봤다면, 그 글은 절대 사라지면 안 됨',
        detail4: '“내가 쓴 글, 꺼졌다 켜도 살아있어야 함”',
    }
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
            <div className="ml-4">
                {RDBMSvsNoSQL.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.element}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>RDBMS:</strong> {type.RDBMS}</li>
                            <li><strong>NoSQL:</strong> {type.NoSQL}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>언제 무엇을 선택할까?</p>
            <div className="ml-4">
                {RDBMSorNoSQL.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.situation}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.which}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <br />

            <p>쇼핑몰 DB 예시로 이해하기</p>
            <ul><li>RDBMS (PostgresSQL)
                <ul><li>사용자 테이블, 상품 테이블, 주문 테이블</li>
                    <li>외래 키로 테이블 간 연결</li>
                    <li>트랜잭션으로 구매 처리</li></ul>
            </li>
                <li>NoSQL (MongoDB)
                    <ul><li>하나의 문서(document)에 사용자 + 장바구니 + 결제 이력까지 함께 저장</li>
                        <li>빠르게 저장하고 읽기엔 효율적</li>
                        <li>데이터 중복이 생길 수 있음</li></ul>
                </li>
            </ul>

            <h4>테이블, 행, 열, 스키마</h4>
            <p>테이블(Table)이란?</p>
            <ul><li>데이터를 구조화된 형식으로 저장하는 그릇</li>
                <li>엑셀의 시트(sheet) 또는 서류철에 비유할 수 있음</li>
                <li>하나의 테이블은 한 종류의 정보를 저장</li>
                <li>예: 사용자 정보, 주문 내역, 상품 목록 등</li>
                <img className='TIL0523tableImg' src={tableImg} alt='Table Image'></img>
            </ul>

            <p>열(Column)이란?</p>
            <ul><li>테이블에서 데이터의 속성(항목)을 정의한 것</li>
                <li>하나의 열은 특정한 데이터 타입과 의미를 가짐</li>
                <li>예: name은 문자열, age는 숫자</li>
                <li>users 테이블의 열: id, name, email, age</li>
                <li>📌 열은 테이블의 세로축, 속성(구조)을 구성하는 요소</li>
            </ul>

            <p>행(Row)이란?</p>
            <ul><li>테이블에서 하나의 실제 데이터(레코드)를 의미함</li>
                <li>각 행은 열(Column)에 맞춰 하나의 개별 정보 묶음을 담고 있음</li>
                <li>예: Alice의 정보 한 줄 전체가 하나의 행</li>
                <li>행은 테이블의 가로축, 데이터 자체를 구성하는 요소</li></ul>

            <p>스키마(Schema)란?</p>
            <ul><li>테이블 구조, 데이터 타입, 제약 조건 등을 정의하는 설계도</li>
                <li>테이블 이름, 열 이름, 열의 데이터 타입, 제약 조건 등 포함</li>
                <li>실제 데이터를 담는 건 아니고, 데이터를 어떤 구조로 저장할지를 설계함</li></ul>
            <CodeBlock code={TIL0523TableSchema}></CodeBlock>
            <ul><li>id는 정수형, 기본키</li>
                <li>email은 중복 허용 안 됨 (UNIQUE)</li>
                <li>age는 0보다 커야 함 (CHECK)</li></ul>

            <h4>RDBMS의 핵심 용어</h4>
            <p>Primary Key (기본 키)</p>
            <ul><li>각 행(row)을 유일하게 식별할 수 있는 값</li>
                <li>즉, 테이블의 대표값이자 중복 불가능한 식별자</li>
                <li>NULL ❌</li>
                <li>위에 Schema 예시에서 id가 기본 키
                    <ul><li>id는 각각의 사용자 데이터를 유일하게 식별함</li></ul>
                </li>
            </ul>

            <p>Foreign key (외래 키)</p>
            <ul><li>다른 테이블의 기본 키를 참조하는 열</li>
                <li>두 테이블 사이에 관계를 정의하는 역할</li>
                <li>특징:
                    <ul><li>다른 테이블의 Primary Key와 연결</li>
                        <li>데이터의 일관성과 무결성 보장</li>
                        <li>사용자의 삭제/수정 시 제한 또는 연쇄 처리 가능</li></ul>
                </li>
            </ul>
            <CodeBlock code={TIL0523ForeignKey}></CodeBlock>
            <img className='TIL0523ForeignKeyImg' src={foreignKey} alt='Foreign Key Table'></img>
            <ul><li>user_id는 users 테이블의 id를 참조</li></ul>
            <br />

            <p>Index (인덱스)</p>
            <ul><li>검색 속도를 빠르게 하기 위한 데이터 구조</li>
                <li>책의 “색인(index)”처럼, 데이터를 빠르게 찾기 위한 지도 역할</li>
                <li>특징:
                    <ul><li>검색 성능 향상 (특히 WHERE, JOIN, ORDER BY 등에서)</li>
                        <li>쓰기 성능은 낮아질 수 있음 (INSERT/UPDATE 시 인덱스도 함께 갱신됨)</li></ul>
                </li>
                <li>예시:
                    <pre><code>{`
    CREATE INDEX idx_email ON users(email);
    `}</code></pre>
                    <ul><li>→ 이제 이메일 기준으로 검색할 때 빠르게 결과 조회 가능</li></ul>
                </li>
            </ul>
            <br />

            <p>Unique Key</p>
            <ul><li>중복되지 않는 값을 보장하지만, NULL은 허용
                <ul><li>NULL은 “비어 있음, 모름” 을 뜻하는 특수한 값</li></ul>
            </li>
                <li>기본 키처럼 보이지만 하나 이상의 열에 설정 가능</li>
                <CodeBlock code={TIL0523UniqueKey}></CodeBlock>
                <li>→ email은 중복 불가, 하지만 NULL은 1개 허용</li>
            </ul>
            <br />

            <p>Not Null</p>
            <ul><li>해당 열에 NULL 값이 들어오는 걸 막는 제약 조건</li>
                <CodeBlock code={TIL0523NotNull}></CodeBlock>
                <li>name은 반드시 값이 있어야 함</li>
            </ul>


            <h4>ACID</h4>
            <p>ACID란?</p>
            <ul><li>데이터베이스 트랜잭션이 정확하고 안정적으로 처리되도록 보장하는 네 가지 핵심 속성</li>
                <li>Atomicity, Consistency, Isolation, Durability</li>
                <li>트랜잭션(Transaction): → 하나의 작업 단위를 의미. 예: 은행 계좌 이체, 게시글 등록, 주문 처리</li></ul>

            <div className="ml-4">
                {ACID.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.ACID}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail1}</li>
                            <li><strong></strong> {type.detail2}</li>
                            <li><strong></strong> {type.detail3}</li>
                            <li><strong></strong> {type.detail4}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <ul><li>원자성: 돈이 A &rarr; B로 전부 이동해야 함</li>
                <li>일관성: 돈의 총합은 변하지 않아야 함</li>
                <li>격리성: 여러 고객이 동시에 송금해도 서로 방해받지 않음</li>
                <li>지속성: 전송 완료되면 서버 꺼져도 반영됨</li></ul>

            <h4>PostgreSQL</h4>
            <ul><li>객체-관계형 데이터베이스 관리 시스템(ORDBMS)</li>
                <li>SQL 표준을 충실히 따르는 정통 관계형 데이터베이스</li>
                <li>객체지향적 개념(상속, 사용자 정의 타입 등)도 일부 지원</li>
                <li>복잡한 쿼리, 트랜잭션, 확장성에 강함</li>
                <li>무료 & 오픈소스 라이선스 (상업적 사용 가능)</li></ul>

            <p>PostgresSQL은 어디에 쓰일까?</p>
            <ul><li>금융/의료 등 안정성과 정합성이 중요한 시스템</li>
                <li>Python, JavaScript, Java 등 다양한 언어와 연동</li>
                <li>NestJS, Django, Spring 등 백엔드 프레임워크와 찰떡궁합</li></ul>

            <p>PostgreSQL의 오픈소스 장점</p>
            <ul><li>비용 없음: 상용 DBMS와 달리 무료</li>
                <li>커스터마이징 가능: 필요에 따라 기능 추가 가능</li>
                <li>커뮤니티 활발: 전 세계 개발자와 협업/지원 가능</li>
                <li>​지속적인 업데이트: 최신 기능, 보안 패치 빠름</li></ul>

            <p>PostgreSQL vs MySQL vs Oracle</p>
            <img className='TIL0523PostgresVsOthersImg' src={postgresVsOthers} alt='PostgresSQL vs MySQL vs Oracle'></img>

            <h4>PostgresSQL 설치</h4>
            <span style={{ fontWeight: 'bold' }}>macOS에서 설치 (Homebrew 이용)</span>
            <ul><li>Homebrew 설치되어 있다면:</li>
                <pre><code>{`
    brew update
    brew install postgresql
    `}</code></pre>
                <li>설치 후 서비스 시작:</li>
                <pre><code>{`
    brew services start postgresql
    `}</code></pre>
                <li>버전 확인:</li>
                <pre><code>{`
    postgres --version
    `}</code></pre>
            </ul>

            <p>PostgreSQL Client(pgAdmin) 설치</p>
            <ol><li><a href='https://www.pgadmin.org/download/pgadmin-4-macos/'>홈페이지</a>들어가서 자신의 Mac 버전과 아키텍쳐에 맞는 .dmg 설치</li>
                <li>.dmg 실행하여 설치 완료</li></ol>


        </div>
    )
}

export default TIL0523