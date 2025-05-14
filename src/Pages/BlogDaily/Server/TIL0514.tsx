import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0514ControllerExample } from './CodeExamServer'
import { TIL0514ServiceExample } from './CodeExamServer'
import { TIL0514ModuleExample } from './CodeExamServer'
import { TIL0514BuiltinPipe } from './CodeExamServer'
import { TIL0514CustomPipe } from './CodeExamServer'
import { TIL0514MiddleExam1 } from './CodeExamServer'
import { TIL0514MiddleExam2 } from './CodeExamServer'
import { TIL0514AuthModuleSetting } from './CodeExamServer'
import { TIL0514JwtStrategy } from './CodeExamServer'
import { TIL0514GuardExample } from './CodeExamServer'

const TIL0514 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 14일</p>
            <h3>NestJS</h3>
            <ul><li>Express는 간단하게 웹 서버를 만들고 실행할 수 있다는 장점이 있지만 프로젝트의 규모가 커질수록 구조가 복잡해지고 유지보수가 어려워지는 한계점이 있음
                <ul><li>기능별로 파일이나 역할이 명확히 구분되지 않기 때문에 여러 명이 함께 협업할 때 충돌이 발생하기 쉽다.</li>
                    <li>각 기능(예: 인증, 요청 유효성 검사, 서비스 분리 등)을 직접 구현해야 하는 경우가 많다. </li>
                    <li>또한, 테스트 코드 작성이나 기능 확장 측면에서도 구조적 지원이 부족한 편이다.</li></ul>
            </li>
                <li>반면에 NestJS는 Express를 기반으로 동작하면서도, 더 체계적이고 구조화된 백엔드 프레임워크다.
                    <ul><li>코드를 모듈 단위로 나눌 수 있으며,</li>
                        <li>컨트롤러(요청 처리)와 서비스(비즈니스 로직)를 명확하게 분리할 수 있어 유지보수와 협업에 매우 유리하다.</li>
                        <li>또한, 의존성 주입(DI)을 기반으로 하여 필요한 기능을 효율적으로 불러오고 관리할 수 있으며,</li>
                        <li>미들웨어, 가드, 파이프 등 다양한 고급 기능들을 기본적으로 제공합니다.</li></ul>
                </li>
            </ul>
            <ul><li>NestJS는 Express뿐만 아니라 Fastify와 같은 다른 백엔드 서버도 선택적으로 사용할 수 있고,</li>
                <li>기본적으로 TypeScript를 적극 지원하여 자동완성, 타입 체크, 테스트 작성 등에서 높은 생산성을 보장합니다.</li>
                <li>Express 보다 더 구조적이고 확장 가능한 백엔드 애플리케이션이다</li>
            </ul>

            <h4>NextJS</h4>
            <ul><li>NestJS는 Node.js 기반의 서버 애플리케이션을 위한 프레임워크로, Express 위에서 동작하며 모듈화, 객체지향, 함수형 프로그래밍 요소를 통합한 구조를 제공한다.</li>
                <li>NestJS는 Angular에서 영감을 받은 구조와 데코레이터 방식을 사용하여, 유지보수가 쉽고 확장 가능한 서버 애플리케이션을 만들 수 있게 한다.</li></ul>

            <p>Express와의 관계</p>
            <ul><li>NestJS는 기본적으로 Express 위에서 동작합니다.</li>
                <li>Express를 사용하는 것처럼 요청 처리나 라우팅을 수행할 수 있습니다.</li>
                <li>(옵션) Fastify를 선택하여 더 빠른 처리도 가능함</li>
            </ul>

            <p>NestJS의 주요 특징</p>
            <ul><li>의존성 주입(Dependency injection)</li>
                <li>데코레이터 기반 라우팅</li>
                <li>모듈 기반 설계</li>
                <li>테스트 친화적 구조</li></ul>

            <h4>NestJS 프로젝트 구성예시 - User</h4>
            <p>1. Controller - HTTP 요청을 처리하는 진입점</p>
            <ul><li>컨트롤러는 클라이언트의 HTTP 요청을 받아 해당 요청을 서비스로 전달한다.</li></ul>
            <CodeBlock code={TIL0514ControllerExample}></CodeBlock>

            <p>2. Service - 비즈니스 로직 처리</p>
            <ul><li>서비스는 실제 로직이나 데이터를 처리하는 계층이다. 컨트롤러로부터 요청을 받고, 결과를 반환한다.</li></ul>
            <CodeBlock code={TIL0514ServiceExample}></CodeBlock>

            {/* 🔁 흐름 요약
	1.	클라이언트가 GET /user 요청
	2.	→ UserController.getUser() 실행
	3.	→ UserService.getUser() 호출됨
	4.	→ { name: 'Alice', age: 25 } 응답 */}

            <p>Module - 기능 단위로 컴포넌트를 그룹화</p>
            <ul><li>모듈은 관련된 컨트롤러와 서비스를 하나로 묶어 NestJS가 인식하게 한다.</li></ul>
            <CodeBlock code={TIL0514ModuleExample}></CodeBlock>
            <ul><li>@Module(): NestJS에서 기능 단위(예: 사용자 기능)를 그룹화하는 데 사용</li>
                <li>controllers: 라우팅을 담당하는 클래스 (예: /user 요청 처리)</li>
                <li>providers: 로직을 처리하는 서비스 (예: DB조회, 생성 등)
                    <ul><li>이 모듈이 제공할 서비스(또는 의존선 주입 가능한 객체) 목록</li>
                        <li>UserService는 비즈니스 로직을 처리하고, Nest가 이 서비스를 다른 컴포넌트에 자동으로 주입할 수 있도록 함</li>
                    </ul></li>
                <li>UserModule: 사용자 기능을 담은 모듈. 애플리케이션의 재사용 가능한 단위</li></ul>

            <p>의존선 주입(Dependency Injection)</p>
            <ul><li>NestJS에서는 생성자 인자를 통해 자동으로 필요한 서비스를 주입받을 수 있다.</li></ul>
            <pre><code>{`
constructor(private readonly userService: UserService) {}
`}</code></pre>
            <ul><li>NestJS는 내부적으로 이 의존성을 주입해 연결해 준다.</li></ul>

            <p>환경변수 설정 - ConfigModule</p>


            <h4>요청 처리 고급 기능</h4>
            <p>DTO와 유효성 검사를 통해 안전한 입력 데이터 확보</p>
            <ul><li>DTO란? 요청 데이터의 형식과 제약을 명확히 정의하는 객체</li>
                <li>class-validator 라이브러리와 함께 사용하면 유효성 검사를 간편하게 처리할 수 있다.</li>
                <li>예시:</li></ul>

            <p>Pipe를 활용해 요청 값을 변환하거나 검증</p>
            <ul><li>Pipe는 요청이 컨트롤러에 도달하기 전 값을 가공하거나 검증하는 데 사용된다</li>
                <li>내장 Pipe 예시</li>
                <CodeBlock code={TIL0514BuiltinPipe}></CodeBlock>
                <li>커스텀 Pipe 예시</li>
                <CodeBlock code={TIL0514CustomPipe}></CodeBlock>
            </ul>

            <p>미들웨어를 통해 공통 로직 사전 실행</p>
            <ul><li>미들웨어는 라우트에 도달하기 전 공통 처리 로직을 넣는 데 사용됨</li>
                <li>로깅, 인증, 카운트 증가 등 다양한 용도로 활용됨</li>
                <li>예시:</li></ul>
            <CodeBlock code={TIL0514MiddleExam1}></CodeBlock>
            <CodeBlock code={TIL0514MiddleExam2}></CodeBlock>

            {/* 🔁 동작 흐름
	1.	서버에 요청이 들어옴
	2.	logger 미들웨어가 가장 먼저 실행됨
	•	예: [GET] /user, [POST] /login 같은 로그 출력
	3.	이후 컨트롤러로 요청 전달 (next() 호출 덕분에) */}

            <p>Exception Filter로 일관된 예외 처리 구현</p>

            <h4>인증 및 보안</h4>
            <ul><li>이 단계에서는 NestJS에서 인증(Authentication)을 처리하는 방법을 학습한다.</li>
                <li>실제 서비스에서 흔히 사용되는 JWT 인증 방식과 Passport + Guard 조합을 사용해 안전한 사용자 인증 흐름을 구현하는 것이 핵심이다.</li></ul>

            <p>개념 이해: 인증 흐름의 구성 요소</p>
            <ul><li>JWT: 사용자 정보를 담아 클라이언트에게 전달하는 토큰</li>
                <li>Passport: 다양한 인증 전략(Local, JWT 등)을 지원하는 미들웨어</li>
                <li>Guard: 요청을 가로채 인증된 사용자만 접근 허용</li>
                <li>Decorator: 인증된 사용자 정보에 접근할 수 있게 해줌 (@Request, @User)</li></ul>

            <p>1. JWT 로그인 흐름 구현</p>
            <ul><li>설치 패키지</li>
                <pre><code>{`
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install --save-dev @types/passport-jwt
`}</code></pre>
                <li>AuthModule기본 설정</li></ul>
            <CodeBlock code={TIL0514AuthModuleSetting}></CodeBlock>

            <p>2. Passport 모듈과 Guard 활용</p>
            <ul><li>JwtStrategy 구현</li>
                <CodeBlock code={TIL0514JwtStrategy}></CodeBlock>
                <li>Guard 구현</li></ul>
            <CodeBlock code={TIL0514GuardExample}></CodeBlock>

            <p>3. 로그인 구현</p>
            {/* //로그인 코드 넣기 // */}

            <p>4. 인증된 사용자 정보 요청하기</p>
            <ul><li>Guard 적용</li>
                <li>커스텀 데코레이션 (@User)</li></ul>


            <h4>환경변수 관리 - @nestjs/config</h4>
            <p>@nestjs/config 소개와 설치</p>
            <ul><li>왜 환경변수를 관리해야 할까?
                <ul><li>인증 정보 (JWT 비밀키, DB 비밀번호 등)를 코드에 직접 쓰는 건 보안상 위험</li>
                    <li>운영 환경(dev, prod, test 등)에 따라 유동적인 설정값 필요</li></ul>
            </li>
                <li>설치 방법: npm install @nestjs/config</li>
            </ul>

            <h4>참고 자료</h4>
            <ul><li><a href='https://docs.nestjs.com/'>NestJS 공식 문서</a></li>
                <li>과제: <a href='https://github.com/dolsotbob/jwt-nestjs'>jwt-nestjs</a></li>
            </ul>

        </div>
    )
}

export default TIL0514

