import React from 'react'
import usersTableImg from './usersTable.png'
import normalizationImg from './NormalizationExample.png'

const SubqueryAt = [
    {
        location: 'SELECT 안',
        example: '(SELECT AVG(age) FROM users)',
        details: '특정 컬럼을 계산해서 가져옴',
    },
    {
        location: 'WHERE 안',
        example: '(WHERE age > (SELECT AVG(age) FROM users)',
        details: '조건으로 사용',
    },
    {
        location: 'FROM 안',
        example: 'FROM (SELECT * FROM users) AS temp',
        details: '임시 테이블처럼 사용',
    },
]

const IndexNote = [
    {
        caution: '모든 컬럼에 인덱스를 만들면 안 됨',
        reason: '인덱스도 저장 공간을 차지하고, INSERT/UPDATE 성능이 느려짐',
    },
    {
        caution: '자주 변경되는 컬럼에 인덱스 주의',
        reason: '수정될 때마다 인덱스도 갱신돼야 함',
    },
    {
        caution: '읽기(Read) 위주 테이블에 특히 유리',
        reason: '조회가 많은 경우 인덱스 효과가 큼',
    }
]

const whyNormalization = [
    {
        reason: '데이터 중복 제거',
        details: '똑같은 데이터를 여러 번 저장하지 않게 함',
        details2: 'users 테이블과 orders 테이블에서 겹치는 데이터 제거',
    },
    {
        reason: '데이터 무결성 강화',
        details: '데이터 오류를 줄임 (한 곳만 수정하면 됨)',
        details2: 'users 테이블에서 데이터가 변경되면 orders에서도 당연히 변경되어야',
    },
    {
        reason: '유지보수 용이',
        details: '구조가 명확해서 관리하기 쉬움',
        details2: '',
    }
]

const NormalizationSteps = [
    {
        step: '1NF (제1정규형)',
        meaning: '테이블의 각 컬럼이 원자값(atomic value)만 갖는다',
        example: '리스트 형태 X, 하나의 값만 저장, 특정 유저 핸드폰 2개여도 2개 번호를 phone 에 모두 저장 못함',
    },
    {
        step: '2NF (제2정규형)',
        meaning: '부분적 종속 제거',
        example: '기본 키의 일부에만 종속되는 컬럼 제거',
    },
    {
        step: '3NF (제3정규형)',
        meaning: '이행적 종속 제거',
        example: '기본 키가 아닌 컬럼에 또 다른 컬럼이 종속되지 않게',
    },
]

const whyDenormalization = [
    {
        reason: '성능 최적화',
        details: '조인(JOIN)이 많으면 느려지기 때문',
    },
    {
        reason: '조회 속도 향상',
        details: '테이블 합치지 않고 한 번에 읽게 함'
    },
    {
        reason: '단순화',
        details: '복잡한 테이블 구조를 단순하게',
    }
]

const TIL0527 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 27일</p>
            <h3>고급 SQL과 성능</h3>
            <h4>Subquery</h4>
            <ul><li>서브쿼리는 SQL을 더 강력하고 유연하게 만들어주는 핵심 기능 중 하나</li>
                <li>"하나의 쿼리 안에 또 다른 쿼리"를 작성하는 것</li>
                <li>메인 쿼리(Main Query)를 도와서 중간 결과를 만들거나, 필터링을 도와주는 역할</li></ul>

            <p>서브쿼리 기본 구조</p>
            <pre><code>{`
    SELECT 컬럼명 
    FROM (서브쿼리) AS 별칭 
    WHERE 조건; 
    `}</code></pre>
            <ul><li>서브쿼리는 항상 () 소괄호 안에 작성</li>
                <li>서브쿼리는 메인쿼리에 값을 제공하거나 조건을 만든다.</li></ul>

            <p>서브쿼리 사용 위치 3가지</p>
            <div className="ml-4">
                {SubqueryAt.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.location}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>예시:</strong> {type.example}</li>
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>예시 테이블: users</p>
            <img className='TIL0527usersTableImg' src={usersTableImg} alt='Table users Image'></img>

            <p>WHERE 안에 서브쿼리 쓰기</p>
            <ul><li>예: 평균 나이보다 나이가 많은 사용자 조회</li>
                <pre><code>{`
    SELECT * FROM users
    WHERE age > (SELECT AVG(age) FROM users);
    `}</code></pre>
                <li>(SELECT AVG(age) FROM users) 이 부분이 먼저 실행</li>
                <li>그 결과를 이용해 메인 쿼리가 조건을 걸게 된다.</li>
            </ul>

            <p>SELECT 안에 서브쿼리 쓰기</p>
            <ul><li>예: 모든 사용자와 평균 나이를 함께 보여주기</li>
                <pre><code>{`
    SELECT name, age (SELECT AVG(age) FROM users) AS avg_age
    FROM users;
    `}</code></pre>
                <li>각 행마다 평균 나이를 같이 출력</li>
            </ul>

            <p>FROM 안에 서브쿼리 쓰기</p>
            <ul><li>예: 평균 나이 이상인 사용자만 모은 임시 테이블 만들기</li>
                <pre><code>{`
    SELECT * 
    FROM (
        SELECT * FROM users WHERE age >= (SELECT AVG(age) FROM users) 
    ) AS older_users; 
    `}</code></pre>
                <li>older_users는 평균 이상 사용자만 모은 가상의 테이블</li>
            </ul>


            <h4>View, Transaction, Commit/Rollback</h4>
            <p>View(뷰) - 가상의 테이블</p>
            <ul><li>실제 데이터를 저장하지 않고, SELECT 쿼리 결과를 마치 테이블처럼 보여주는 가상의 테이블</li>
                <pre><code>{`
    CREATE VIEW 뷰이름 AS 
    SELECT ... FROM ... WHERE ...;
    `}</code></pre>
                <li>예시:
                    <pre><code>{`
    CREATE VIEW seoul_users AS 
    SELECT name, age 
    FROM users 
    WHERE city = 'Seoul';
    `}</code></pre>
                    <ul><li>이제 seoul_users를 테이블처럼 조회할 수 있다.</li>
                        <pre><code>{`
        SELECT * FROM seoul_users;
        `}</code></pre>
                    </ul>
                </li>
            </ul>

            <ul><li>뷰의 특징:
                <ul><li>가볍다 (데이터를 별도로 저장하지 않음)</li>
                    <li>복잡한 쿼리를 쉽게 재사용할 수 있다</li>
                    <li>단점: 뷰를 갱신하는 건 일부 제한이 있음 (특히 복잡한 경우)</li></ul>
            </li>
            </ul><br />

            <p>Transaction - 작업을 하나처럼 묶기</p>
            <ul><li>트랜잭션은 데이터베이스에서 여러 작업을 하나의 단위로 묶는 것</li>
                <li>모두 성공해야 하고, 하나라도 실패하면 전부 취소해야 함</li>
                <pre><code>{`
    BEGIN;  -- 트랜잭션 시작 

    UPDATE accounts SET balance = balance - 100 WHERE id = 1; 
    UPDATE accounts SET balance = balance + 100 WHERE id = 2; 

    COMMIT; -- 성공하면 확정 
    -- 또는 
    ROLLBACK; -- 문제 생기면 취소 
    `}</code></pre>
            </ul>

            <p>Commit / Rollback - 결과 확정 또는 취소</p>
            <ul><li>COMMIT: 트랜잭션의 모든 변경 사항을 확정하고 저장</li>
                <li>ROLLBACK: 트랜잭션 중 발생한 변경 사항을 모두 취소</li></ul>


            <h4>인덱스</h4>
            <ul><li>인덱스란? 데이터베이스 테이블에서 필요한 데이터를 빠르게 찾기 위한 일종의 "목차" 같은 것</li></ul>

            <p>인덱스를 쓰지 않으면?</p>
            <ul><li>테이블 전체를 처음부터 끝까지 하나하나 찾아야 한다. (풀 스캔, Full Table Scan)</li>
                <li>데이터가 많을수록 검색 속도가 급격히 느려짐</li>
                <pre><code>{`
    CREATE INDEX 인덱스명 ON 테이블명 (컬럼명);
    `}</code></pre>
                <li>예시:
                    <pre><code>{`
    CREATE INDEX idx_users_name ON users (name);
    `}</code></pre>
                    <ul><li>→ 이제 WHERE name = 'Alice' 같은 쿼리가 훨씬 빨라집니다.</li></ul>
                </li>
            </ul>


            <p>인덱스가 필요한 상황</p>
            <ul><li>WHERE로 특정 값을 자주 검색할 때; 빠른 조건 검색 가능</li>
                <li>JOIN에 사용하는 컬럼일 때(조인하면 느려짐); 조인 성능 향상</li>
                <li>ORDER BY나 GROUP BY에 쓰이는 컬럼일 때; 정렬 성능 향상</li>
                <li>페이지네이션 할 때</li></ul>

            <p>주의사항</p>
            <div className="ml-4">
                {IndexNote.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.caution}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>이유:</strong> {type.reason}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>복합 인덱스 (Composite Index)</p>
            <ul><li>여러 컬럼을 조합해 하나의 인덱스를 만드는 것도 가능함</li>
                <pre><code>{`
    CREATE INDEX idx_users_name_age ON users (name, age);
    `}</code></pre>
                <li>WHERE name = 'Alice' AND age = 25 같은 쿼리에 최적화</li>
                <li>(하지만 순서 주의: 인덱스는 왼쪽 컬럼부터 최우선 적용됩니다.)</li></ul>

            <p>생성한 인덱스 목록 조회하기</p>
            <span>이러한 인덱스를 생성했다고 쳤을 때,</span>
            <pre><code>{`
CREATE INDEX idx_products_category ON products (category);
`}</code></pre>

            <ol><li>products 테이블에 존재하는 인덱스 전체 조회</li>
                <pre><code>{`
    SELECT
        indexname, 
        indexdef
    FROM 
        pg_indexes
    WHERE
        tablename = 'products';
    `}</code></pre>
                <li>전체 테이블에 존재하는 인덱스 조회</li>
                <pre><code>{`
    SELECT
        tablename, 
        indexname, 
        indexdef
    FROM 
        pg_indexes
    WHERE
        schemaname = 'public';
    `}</code></pre>
            </ol>

            <h4>정규화와 비정규화</h4>
            <span>정규화와 비정규화는 데이터를 다루는 이론적인 설계 개념이다.</span>

            <p><span style={{ color: 'blueviolet' }}>정규화(Normalization)</span></p>
            <ul><li>정규화는 "데이터 중복을 줄이고, 일관성을 높이기 위해 테이블을 쪼개는 것"</li>
                <li>특징:
                    <ul><li>데이터를 최소한으로만 저장</li>
                        <li>중복을 제거하고</li>
                        <li>변경(update)할 때 문제가 생기지 않도록 만든다</li></ul>
                </li>
            </ul>


            <p>정규화가 필요한 이유</p>
            <div className="ml-4">
                {whyNormalization.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.reason}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                            <li><strong></strong> {type.details2}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>정규화 단계 (간단 버전)</p>
            <div className="ml-4">
                {NormalizationSteps.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.step}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>의미:</strong> {type.meaning}</li>
                            <li><strong>예시:</strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>정규화 예시</p>
            <img className='TIL0527normalizationImg' src={normalizationImg} alt='Normalization Example'></img>
            <br />

            <p><span style={{ color: 'blueviolet' }}>비정규화(Denormalization)</span></p>
            <ul><li>비정규화란? 속도나 편의성을 위해 일부러 정규화를 깨고 중복을 허용하는 것</li></ul>

            <p>비정규화를 쓰는 이유</p>
            <div className="ml-4">
                {whyDenormalization.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.reason}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>비정규화 예시</p>
            <ul><li>고객 테이블과 주소 테이블을 따로 분리하는 대신,</li>
                <li>고객 테이블에 주소 컬럼을 그냥 중복 저장하는 경우
                    <pre><code>{`
    고객ID| 고객명 | 고객주소
    -----|------|-------
    1    | Alice| Seoul
    2    | Bob  | Busan
    `}</code></pre>
                    <ul><li>→ 조회할 때 JOIN 안 해도 빠르게 가져올 수 있음</li></ul>
                </li>
            </ul>



            <pre><code>{``}</code></pre>

        </div >
    )
}

export default TIL0527