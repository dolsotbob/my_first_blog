import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0526SELECT } from './CodeExamDB'
import { TIL0526INSERT } from './CodeExamDB'
import { TIL0526UPDATE } from './CodeExamDB'
import { TIL0526DELETE } from './CodeExamDB'
import { TIL0526OrderBy } from './CodeExamDB'
import { TIL0526LIMIT } from './CodeExamDB'
import { TIL0526OrderByLIMIT } from './CodeExamDB'
import { TIL0526GROUPBY } from './CodeExamDB'

const JOIN = [
    {
        type: 'INNER JOIN',
        details: '두 테이블에 공통되는 데이터만 조회',
        scope: '교집합',
    },
    {
        type: 'LEFT JOIN',
        details: '왼쪽 테이블의 데이터는 전부 + 일치하는 오른쪽 데이터',
        scope: '왼쪽 전체 + 겹치는 오른쪽',
    },
    {
        type: 'RIGHT JOIN',
        details: '오른쪽 테이블의 데이터는 전부 + 일치하는 왼쪽 데이터',
        scope: '오른쪽 전체 + 겹치는 왼쪽',
    },
    {
        type: 'FULL JOIN',
        details: '양쪽 모두의 모든 데이터',
        scope: '합집합 (지원 여부는 DBMS마다 다름)',
    }
]

const TIL0526 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 26일</p>
            <h3>SQL 기본 문법</h3>
            <p>Query란?</p>
            <ul><li>데이터베이스에게 요청하는 질문이나 명령</li>
                <li>주로 데이터의 조회, 삽입, 수정, 삭제를 위해 사용됨</li></ul>

            <h4>SQL 문법</h4>
            <p>SQL이란?</p>
            <ul><li>SQL: Structured Query Language</li>
                <li>SQL은 데이터베이스에 정보를 요청하거나 조작하기 위한 언어</li>
                <li>SQL은 데이터베이스에게 말하듯이 쿼리를 던져서 다음과 같은 작업을 할 수 있다.
                    <ul><li>데이터를 가져오고(SELECT)</li>
                        <li>넣고(INSERT)</li>
                        <li>수정하고(UPDATE)</li>
                        <li>지우기(DELETE)</li>
                    </ul>
                </li></ul>

            <p>기본 SQL 문법 구조</p>
            <pre><code>{`
    SELECT 컬럼명 FROM 테이블명 WHERE 조건;
    `}</code></pre>
            <ul><li>→ 이 구조는 데이터를 조회할 때 가장 기본이 되는 문장이다</li></ul>


            <h4>SQL 기본 명령어 - SELECT, INSERT, UPDATE, DELETE</h4>
            <p>1. SELECT - 데이터 조회하기</p>
            <ul><li>SELECT 컬럼명 FROM 테이블명;</li>
                <li>예시:</li>
                <CodeBlock code={TIL0526SELECT}></CodeBlock>

                <li>WHERE 조건을 붙이면?
                    <ul><li>WHERE은 SELECT, UPDATE, DELETE 쿼리에서 "어떤 행(Row)을 대상으로 할지" 정하는 필터 조건</li></ul>
                </li>
                <pre><code>{`
    SELECT * FROM users WHERE age > 20;
    `}</code></pre>
            </ul>

            <p>2. INSERT - 데이터 추가하기</p>
            <ul><li>테이블에 새로운 행(Row)을 삽입할 때 사용</li>
                <pre><code>{`
    INSERT INTO 테이블명 (컬럼1, 컬럼2)
    VALUES (값1, 값2);
    `}</code></pre>
                <li>예시:</li>
                <CodeBlock code={TIL0526INSERT}></CodeBlock>
            </ul>

            <p>3. UPDATE - 데이터 수정하기</p>
            <ul><li>기존 데이터를 변경할 때 사용</li>
                <li><span style={{ fontWeight: 'bold', color: 'palevioletred' }}>주의! 꼭 꼭 WHERE와 함께 쓰기</span></li>
                <pre><code>{`
    UPDATE 테이블명
    SET 컬럼1 = 값1, 컬럼2 = 값2
    WHERE 조건;            
    `}</code></pre>
                <li>예시:</li>
                <CodeBlock code={TIL0526UPDATE}></CodeBlock>
            </ul>

            <p>4. DELETE - 데이터 삭제하기</p>
            <ul><li>특정 조건에 해당하는 데이터를 지울 때 사용</li>
                <pre><code>{`
    DELETE FROM 테이블명 WHERE 조건;
    `}</code></pre>
                <li>예시:</li>
                <CodeBlock code={TIL0526DELETE}></CodeBlock>
                <li><span style={{ fontWeight: 'bold', color: 'palevioletred' }}>주의! 꼭 꼭 WHERE와 함께 쓰기</span></li>
                <li>WHERE 없이 쓰면 테이블의 모든 데이터가 삭제됨!</li>
            </ul>

            <h4>SQL 조건문 - WHERE, AND, OR, LIKE</h4>
            <p>1. WHERE - 조건을 걸어 데이터를 필터링하기</p>
            <ul><li>WHERE은 "이 조건을 만족하는 데이터만" 이라는 뜻</li>
                <li>SELECT * FROM 테이블명 WHERE 조건;</li>
                <li>예시:
                    <pre><code>{`
    SELECT * FROM users WHERE age > 20; 
    `}</code></pre>
                    <ul><li>→ users 테이블에서 age가 20보다 큰 사용자만 조회</li></ul>
                </li>
            </ul>

            <p>2. AND, OR – 여러 조건 결합하기</p>
            <ul><li>AND: 모든 조건을 동시에 만족
                <pre><code>{`
    SELECT * FROM users WHERE age > 20 AND city = 'Seoul';
    `}</code></pre>
                <ul><li>→ 나이가 20 초과이고, 도시가 서울인 사용자만</li></ul>
            </li><br />
                <li>OR: 하나라도 만족하면 포함
                    <pre><code>{`
    SELECT * FROM users WHERE age < 18 OR city = 'Busan';
    `}</code></pre>
                    <ul><li>→ 나이가 18 미만이거나 도시가 부산이면 조회됨</li></ul>
                </li>
            </ul>

            <p>3. LIKE – 패턴으로 문자열 검색하기</p>
            <ul><li>LIKE는 문자열이 어떤 형태를 가질 때 찾는 도구</li>
                <li>예:
                    <ul><li>'A%': A로 시작하는 값</li>
                        <li>'%son': ~son으로 끝나는 값</li>
                        <li>'%lee%': lee를 포함하는 값</li></ul>
                </li>
                <li>예시:
                    <pre><code>{`
    SELECT * FROM users WHERE name LIKE 'J%';
    `}</code></pre>
                    <ul><li>→ 이름이 J로 시작하는 사용자 조회 (예: John, Jane)</li></ul>
                    <pre><code>{`
    SELECT * FROM products WHERE name LIKE '%phone'; 
    `}</code></pre>
                    <ul><li>→ 이름이 ~phone으로 끝나는 제품 조회 (예: iPhone, smartphone)</li></ul>
                </li>
            </ul>

            <h4>SQL 결과를 정돈하는 법 - ORDER BY와 LIMIT</h4>
            <p>1. ORDER BY - 결과 정렬하기</p>
            <ul><li>쿼리 결과를 특정 열(column)을 기준으로 정렬해주는 명령어</li>
                <li>ASC: 오름차순(작은 &rarr; 큰 값); 기본값</li>
                <li>DESC: 내림차순(큰 &rarr; 작은 값); 명시해야 함</li>
                <CodeBlock code={TIL0526OrderBy}></CodeBlock>
            </ul>

            <p>2. LIMIT - 결과 행 수 제한하기</p>
            <ul><li>조회 결과 중 몇 개만 보고 싶을 때 사용하는 기능</li>
                <CodeBlock code={TIL0526LIMIT}></CodeBlock>
            </ul>

            <p>3. ORDER BY + LIMIT 함께 쓰기</p>
            <ul><li>정렬에서 가장 많이 쓰이는 조합</li>
                <CodeBlock code={TIL0526OrderByLIMIT}></CodeBlock>
            </ul>

            <h4>JOIN</h4>
            <ul><li>SQL에서 두 개 이상의 테이블을 연결해 하나의 결과처럼 보여주는 기능</li>
                <li>데이터베이스는 테이블을 분리해서 저장하므로, 관련 있는 정보는 JOIN을 통해 함께 조회해야 한다.</li>
                <li>JOIN의 기본 구조:
                    <pre><code>{`
    SELECT * 
    FROM A 
    JOIN B ON A. 공통컬럼 = B. 공통컬럼;         
    `}</code></pre>
                </li>
            </ul>

            <p>JOIN의 종류와 차이점</p>
            <div className="ml-4">
                {JOIN.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.type}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.details}</li>
                            <li><strong>포함 범위:</strong> {type.scope}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <h4>SQL 집계 함수와 GROUP BY - 데이터를 요약하고 통계내기</h4>
            <ul><li>집계 함수(Aggregate Functions)란? 여러 행(row)의 값을 계산하여 하나의 결과 값을 만들어주는 함수</li>
                <li>주로 데이터를 요약하거나 통계 낼 때 사용됨</li>
            </ul>

            <p>대표적인 집계 함수</p>
            <ul><li>COUNT(): 행의 개수 세기; COUNT(*); COUNT(age)</li>
                <li>AVG(): 평균값 계산; AVG(age)</li>
                <li>MAX(): 최대값; MAX(age)</li>
                <li>MIN(): 최소값; MIN(age)</li>
                <li>SUM(): 합계; SUM(price)</li></ul>

            <p>예시</p>
            <ul><li>SELECT COUNT(*) FROM users;</li>
                <li>SELECT COUNT(*) FROM users WHERE city = 'Busan';</li>
                <li>SELECT AVG(age) FROM users;</li>
                <li>SELECT MAX(age), MIN(age) FROM users;</li></ul>

            <p>GROUP BY - 그룹별로 나눠서 요약</p>
            <ul><li>같은 값을 가진 데이터들을 묶어서 그룹별로 집계할 때 사용</li></ul>
            <CodeBlock code={TIL0526GROUPBY}></CodeBlock>

        </div>
    )
}

export default TIL0526