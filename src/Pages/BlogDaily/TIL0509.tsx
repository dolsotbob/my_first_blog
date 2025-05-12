import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { TIL0509MiddlewareExample } from '../codeExamples';
import { TIL0509RoutingExample } from '../codeExamples';
import { TIL0509RoutingExample2 } from '../codeExamples';

const ServersSupportingMiddleware = [
    {
        server: 'Express(Node.js)',
        availability: '있음',
        details: '가장 대표적인 미들웨어 체인 구조 (next()로 연결)'
    },
    {
        server: 'NestJS(Node.js)',
        availability: '있음',
        details: 'Express 기반이며 @Middleware 또는 Interceptor 사용 가능'
    },
    {
        server: 'Django (Python)',
        availability: '있음',
        details: 'MIDDLEWARE 설정으로 요청/응답 가로채는 클래스 등록'
    },
    {
        server: 'Flask (Python)',
        availability: '있음(약한 형태)',
        details: 'WSGI 미들웨어로 wrapping하거나 데코레이터로 유사하게 구현 가능'
    },
    {
        server: 'Spring Boot (Java)',
        availability: '있음',
        details: 'Filter, Interceptor 통해 HTTP 요청 흐름 제어'
    },
    {
        server: 'ASP.NET Core (C#)',
        availability: '있음',
        details: 'UseMiddleware() 체인으로 구성, 미들웨어 파이프라인 명확함'
    },
    {
        server: 'Go net/http',
        availability: '있음 (명시적으로 구현해야 함)',
        details: '기본적으로는 체인 없음, but 핸들러 체인 방식으로 구현 가능 (func(next http.Handler) http.Handler)'
    },
    {
        server: 'Low-level 서버 (C, nginx 등)',
        availability: '❌ 없음',
        details: '개념적으로는 없음, 직접 요청 흐름을 구현해야 함'
    },
];

const HTTPmethod = [
    {
        method: 'GET',
        meaning: '조회',
        path: '/users',
        details: '모든 사용자 목록 조회'
    },
    {
        method: 'GET',
        meaning: '조회',
        path: '/users/1',
        details: 'ID가 1인 사용자 조회'
    },
    {
        method: 'POST',
        meaning: '생성',
        path: '/users',
        details: '새로운 사용자 생성'
    },
    {
        method: 'PUT',
        meaning: '전체 수정',
        path: '/users/1',
        details: 'ID가 1인 사용자 정보 전체 수정'
    },
    {
        method: 'PATCH',
        meaning: '부분 수정',
        path: '/users/1',
        details: '일부 필드만 수정'
    },
    {
        method: 'DELETE',
        meaning: '삭제',
        path: '/users/1',
        details: 'ID가 1인 사용자 삭제'
    },
];

const TIL0509 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 9일</p>
            <h3>Server Intro</h3>
            <ul><li>스마트 컨트랙트는 단순하고 명확한 규칙을 자동화하는 데는 강력하지만 다음과 같은 한계가 있다:</li>
                <ul><li>외부 세계의 정보를 알 수 없다.</li>
                    <li>복잡한 연산이나 데이터 저장에 부적합하다.</li>
                    <li>사용자 인증, 접근 제어 등 UI 중심 기능을 직접 처리하기 어렵다.
                    </li></ul>
                <li>이 빈틈을 채워주는 것이 바로 서버!</li>
            </ul>

            <p>서버가 필요한 대표적인 이유</p>
            <ol><li>사용자 인증과 보안 처리</li>
                <li>데이터 저장 및 조회 최적화</li>
                <li>외부 API 연동</li>
                <li>트랜잭션 전처리 및 중계</li>
                <li>로그 기록 및 분석</li>
            </ol>

            <p>서버는 블록체인의 '조력자'</p>
            <ul><li>블록체인 = 데이터의 신뢰성과 투명성을 보장</li>
                <li>서버 = 외부 세계와 연결하고, 사용자 경험을 향상시키는 도구</li>
            </ul>

            <h4>서버</h4>
            <ul><li>서버란?
                <ul><li>사용자의 요청을 받아서, 그에 대한 응답을 보내주는 컴퓨터 또는 프로그램</li></ul>
            </li></ul>

            <p>서버 = 컴퓨터 + 프로그램</p>
            <ul><li>서버는 단순한 컴퓨터가 아니라, 특정 요청을 받고 응답하는 프로그램이 설치된 컴퓨터이다.</li>
                <li>서버는 요청이 들어오면 필요한 정보를 찾아서 보내주는 일꾼이다.</li></ul>

            <p>서버는 요청과 응답을 처리하는 역할</p>
            <ul><li>사용자 → 서버에게 "이 페이지 보여줘!" 요청</li>
                <li>서버 → 사용자에게 HTML 코드 응답</li>
            </ul>

            <p>어떤 종류의 서버가 있을까?</p>
            <ol><li>웹 서버</li>
                <li>API 서버 (Back-end Server)</li>
                <li>파일 서버</li>
                <li>데이터베이스 서버</li></ol>

            <h4>Node.js</h4>
            <ul><li>브라우저 밖에서 JavaScript를 실행할 수 있게 해주는 런타임 환경</li></ul>

            <p>Node.js의 장점</p>
            <ul><li>자바스크립트 풀스택 개발 가능 (프론트엔드 + 백엔드 모두 JS로 개발)</li>
                <li>비동기 I/O 처리로 고성능 서버 구축에 유리 (예: 실시간 채팅, 스트리밍)</li>
                <li>NPM (Node Package Manager)을 통해 다양한 오픈소스 패키지 활용 가능</li>
            </ul>

            <h4>웹에서 정보가 오가는 흐름</h4>
            <p>웹의 기본 구조는 요청과 응답</p>
            <ol><li>사용자가 브라우저에 주소 입력 &rarr; www.example.com</li>
                <li>브라우저는 해당 주소의 서버에 요청(Request)를 보낸다</li>
                <li>서버는 요청에 맞는 응답(Response)을 만들어서 보낸다</li>
                <li>브라우저가 그 응답을 해석해서 화면에 보여준다</li></ol>

            <p>주요 개념 정리</p>
            <ul><li>클라이언트: 요청을 보내는 쪽 (예: 브라우저, 앱)</li>
                <li>서버: 요청을 받아서 처리하고 응답을 보내는 쪽</li>
                <li>인터넷: 클라이언트와 서버가 통신하는 통로</li>
                <li>HTTP: 요청과 응답이 오갈 때 사용하는 약속 (프로토콜)</li>
                <li>URL: 요청이 어떤 자원을 가리키는지 표현하는 주소</li></ul>

            <p>HTTP 요청과 응답의 구성</p>
            <ul><li>요청(Request)의 구성 요소
                <ul><li>메서드: GET, POST, PUT, DELETE 등</li>
                    <li>URL: 어떤 자원에 대한 요청인지</li>
                    <li>헤더(Header): 브라우저, 인증정보, 형식 등 부가 정보</li>
                    <li>본문(Body): (주로 POST에서) 서버에 보낼 데이터</li>
                </ul>
            </li>
                <li>응답(Response)의 구성 요소
                    <ul><li>상태 코드: 200(성공), 404(없음), 500(서버 에러) 등</li>
                        <li>헤더: 응답의 형식, 길이, 캐시 정보 등</li>
                        <li>본문(Body): 사용자에게 보여줄 실제 내용 (HTML, JSON 등)</li></ul>
                </li>
            </ul>

            <h4>미들웨어</h4>
            <ul><li>요청이 서버에 도착했을 때, 최종 응답을 생성하기 전까지 거쳐가는 중간 처리 함수
                <ul><li>요청과 응답 사이에서 무언가를 검사, 수정, 기록, 인증 등의 작업을 할 수 있다.</li>
                    <li>여러 개의 미들웨어를 순차적으로 연결(chain) 할 수 있다.</li>
                </ul>
            </li>
            </ul>

            <p>요청 처리 흐름(Express 기준)</p>
            <ul><li>[사용자 요청] → [미들웨어1] → [미들웨어2] → ... → [라우터 핸들러] → [응답 전송]</li>
                <li>예시 코드:
                    <CodeBlock code={TIL0509MiddlewareExample}></CodeBlock>
                </li>
            </ul>

            <p>미들웨어의 특징</p>
            <ul><li>체인 구조: 여러 개를 순서대로 연결 가능(app.use(...))</li>
                <li>next() 함수: 다음 미들웨어로 넘기기 위해 호출해야 함</li>
                <li>요청 검사/응답 조작: 인증, 로깅, 에러 처리 등에 많이 사용</li>
                <li>특정 경로에만 적용: app.use('/api', ...) 처럼 특정 URL만 처리 가능</li></ul>

            <p>미들웨어의 대표적인 용도</p>
            <ul><li>로그 기록: 누가 언제 무엇을 요청했는지 출력</li>
                <li>인증/권한 확인: 로그인 여부, 토큰 유효성 검사</li>
                <li>에러 처리: 문제가 생기면 사용자에게 알맞은 메시지 전달</li>
                <li>요청 데이터 가공: JSON 파싱, 폼 데이터 처리 등</li>
                <li>보안 처리: CORS, Helmet 등 보안 설정 미들웨어 적용
                </li></ul>

            <p>미들웨어를 지원하는 서버/프레임워크</p>
            <div className="ml-4">
                {ServersSupportingMiddleware.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.server}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>지원 여부:</strong> {type.availability}</li>
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <h4>다시보는 REST API와 라우팅 구조</h4>
            <p>REST API란?</p>
            <ul><li>REST는 "REpresentational State Transfer"의 약자</li>
                <li>REST API는 웹에서 자원(Resource)을 다루는 일종의 설계 규칙</li>
                <li>클라이언트가 서버에 요청을 보낼 때, URL과 HTTP 메서드를 조합하여 어떤 "행동"을 할지 표현한다</li>
                <li>서버는 이 요청을 보고 어떤 자원에 어떤 처리를 할지 결정한다</li>
            </ul>

            <p>REST API의 예시</p>
            <div className="ml-4">
                {HTTPmethod.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.method}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>의미:</strong> {type.meaning}</li>
                            <li><strong>예시 경로:</strong> {type.path}</li>
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>라우팅이란?</p>
            <ul><li>어떤 URL로 요청이 들어왔을 때 어떤 코드가 실행될지를 결정하는 과정</li>
                <li>Express 예시:
                    <CodeBlock code={TIL0509RoutingExample}></CodeBlock>
                    <ul><li>→ /hello 경로로 GET 요청이 오면 "Hello, world!" 응답 → /users 경로로 POST 요청이 오면 "New user created" 응답</li></ul>
                </li>
            </ul>

            <p>URL과 메서드를 조합해 표현력 높이기</p>
            <CodeBlock code={TIL0509RoutingExample2}></CodeBlock>
            <ul><li>:id는 URL 파라미터로, 경로 내에 동적인 값을 받을 수 있게 해줌</li>
                <li>예: /products/7 요청이 오면 id = 7</li></ul>

            <h4>과제</h4>
            <ul><li><a href='https://github.com/dolsotbob/express'>express</a></li>
                <li>Postman으로 API 요청 해보기</li>
            </ul>

        </div>
    )
}

export default TIL0509