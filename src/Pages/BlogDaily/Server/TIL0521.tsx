import React from 'react'

const restfulUrlPrinciples = [
    {
        principle: '명사 기반의 리소스 표현',
        details: 'URL은 동사보다는 명사를 사용해야 한다.',
        example1: '올바른 방식: GET /users/1',
        example2: '잘못된 방식: GET /getUserById?id=1'
    },
    {
        principle: '복수형 명사 사용',
        details: '일반적으로 리소스는 복수형 명사로 표현한다.',
        example1: 'GET /books',
        example2: 'POST /books'
    },
]

const APICalculator = [
    {
        element: '계산 실행',
        URL: 'POST /calculations',
        details: 'body: { "a": 5, "b": 3, "operation": "add" }'
    },
    {
        element: '마지막 계산 결과 조회',
        URL: 'GET /calculations/last?user=0x123...',
    },
    {
        element: '히스토리 길이 조회',
        URL: 'GET /calculations/history/length?user=0x123...',
    },
    {
        element: '전체 히스토리 조회',
        URL: 'GET /calculations/history?user=0x123...',
    },
]

const TIL0521 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 21일</p>
            <h3>NestJS - 컨트랙트 요청 API 5</h3>

            <h4>RESTful하게 API를 설계하는 방법</h4>
            <p>REST(Representational State Transfer)란?</p>
            <ul><li>웹의 리소스를 정의하고 리소스에 대한 주소(URI)를 지정해 접근하도록 하는 아키텍처 스타일</li>
                <li>핵심 원칙:
                    <ul><li>클라이언트-서버 구조</li>
                        <li>무상태(Stateless)</li>
                        <li>일관된 인터페이스(Uniform Interface)</li>
                        <li>캐시 가능(Cacheable)</li>
                        <li>계층화된 시스템</li></ul>
                </li>
            </ul>

            <p>RESTful한 URL 설계 원칙</p>
            <div className="ml-4">
                {restfulUrlPrinciples.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.principle}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.details}</li>
                            <li><strong>예시1:</strong> {type.example1}</li>
                            <li><strong>예시2:</strong> {type.example2}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>HTTP 메서드 활용</p>
            <ul><li>GET: 리소스 조회</li>
                <li>POST: 리소스 생성</li>
                <li>PUT: 리소스 전체 수정</li>
                <li>PATCH: 리소스 일부 수정</li>
                <li>DELETE: 리소스 삭제</li></ul>

            <span style={{ fontStyle: 'italic' }}>HTTP 메서드 활용 예시</span>
            <ul><li>GET /users/1</li>
                <li>POST /users</li>
                <li>PUT /users/1</li>
                <li>PATCH /users/1</li>
                <li>DELETE /users/1</li></ul>

            <p>계층적 자원 구조 설계</p>
            <ul><li>부모-자식 관계를 URI에 표현</li>
                <li>예시:
                    <ul><li>GET /users/1/posts → 특정 유저의 게시글</li>
                        <li>GET /users/1/posts/5 → 특정 유저의 특정 게시글</li></ul>
                </li>
            </ul>

            <p>쿼리 파라미터의 사용</p>
            <ul><li>검색이나 필터링에 사용</li>
                <li>예시:
                    <ul><li>GET /books?author=tolkien&sort=desc</li></ul>
                </li>
            </ul>

            <p>상태 코드의 의미 있는 반환</p>
            <ul><li>200 OK: 정상 처리</li>
                <li>201 Created: 리소스 생성 성공</li>
                <li>204 No Content: 성공했지만 리턴할 데이터 없음</li>
                <li>400 Bad Request: 요청 오류 (잘못된 파라미터 등)</li>
                <li>404 Not Found: 리소스 없음</li>
                <li>500 Internal Server Error: 서버 오류</li></ul>

            <p>예시 API 설계 (계산기 서비스)</p>
            <div className="ml-4">
                {APICalculator.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.element}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.URL}</li>
                            <li><strong></strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>RESTful하게 만들지 말아야 할 예</p>
            <ul><li>GET /createCalculation?a=5&b=3&operation=add ❌</li>
                <li>POST /calculation/do ❌</li></ul>

            <h4>Param, Query, Body는 언제 쓰일까?</h4>
            <p>@Param(): 경로(주소)에서 값을 추출할 때</p>
            <p>@Query(): URL 뒤의 ?key=value 형식의 값을 추출할 때</p>
            <p>@Body(): 요청 본문(Body)에서 JSON 데이터 추출</p>

        </div>
    )
}

export default TIL0521