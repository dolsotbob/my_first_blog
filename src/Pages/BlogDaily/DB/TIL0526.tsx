import React from 'react'

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
                <pre><code>{`
    SELECT name, age FROM users; 
    or 
    SELECT * FROM users;  -- 전체 조회 
    `}</code></pre>
                <li>WHERE 조건을 붙이면?
                    <ul><li>WHERE은 SELECT, UPDATE, DELETE 쿼리에서 "어떤 행(Row)을 대상으로 할지" 정하는 필터 조건</li></ul>
                </li>
                <pre><code>{`
    SELECT * FROM users WHERE age > 20;
    `}</code></pre>
            </ul>

            <p>2. INSERT - 데이터 추가하기</p>


            <p>3. UPDATE - 데이터 수정하기</p>
            <p>4. DELETE - 데이터 삭제하기</p>



        </div>
    )
}

export default TIL0526