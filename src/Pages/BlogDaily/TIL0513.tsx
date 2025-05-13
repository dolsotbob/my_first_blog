import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import { TIL0513tokenAuthMiddleware } from '../codeExamples'

const JWTbasedLogin = [
    {
        order: '(1) 로그인 요청',
        details: '[사용자] → POST /login (아이디, 비밀번호)'
    },
    {
        order: '(2) 서버 처리',
        details: [
            '[서버]',
            '- 아이디/비밀번호 검증',
            '- JWT를 응답에 담아 클라이언트에게 전달',
            '',
            '[서버] → 응답 { token: eyJhbGciOiJIUzI1NiI... }'
        ],
    },
    {
        order: '(3) 클라이언트 저장',
        details: '클라이언트는 전달받은 JWT를 브라우저의 localStorage 또는 sessionStorage에 저장'
    },
    {
        order: '(4) 이후 모든 요청에서 Authorization 헤더에 JWT 추가',
        details: [
            '[사용자] → GET /mypage',
            'Authorization: Bearer <JWT>'
        ],
    },
    {
        order: '(5) 서버는 JWT 검증 후 사용자 정보 추출',
        details: [
            '[서버]',
            '- Authorization 헤더에서 JWT 추출',
            '- JWT 서명 및 만료 여부 확인',
            '- 유효하면 payload의 사용자 ID/권한 사용해 요청 처리'
        ]
    }
]

type AuthRow = {
    항목: string;
    세션쿠키: string;
    JWT: string;
};

const authTable: AuthRow[] = [
    {
        항목: '상태 저장 위치',
        세션쿠키: '서버 (세션) + 클라이언트 (쿠키)',
        JWT: '클라이언트 (JWT)',
    },
    {
        항목: '확장성',
        세션쿠키: '제한적 (서버 메모리에 저장 필요)',
        JWT: '뛰어남 (무상태 방식)',
    },
    {
        항목: '인증 유지 방식',
        세션쿠키: '쿠키에 세션 ID 저장',
        JWT: 'JWT를 매 요청에 전송',
    },
    {
        항목: '서버 부하',
        세션쿠키: '사용자 수가 많으면 세션 관리 부담',
        JWT: '클라이언트에 저장되어 부하 적음',
    },
    {
        항목: '보안',
        세션쿠키: '세션 탈취, 세션 고정 공격 주의',
        JWT: '토큰 탈취 시 정보 노출 위험 (HTTPS 필수)'
    },
];

const cookieCharacter = [
    {
        character: 'HtttpOnly',
        meaning: 'JS에서 쿠키 접근 불가',
        effect: 'XSS(스크립트 공격) 방지',
    },
    {
        character: 'Secure',
        meaning: 'HTTPS에서만 전송',
        effect: '중간자 공격(MITM) 방지',
    },
    {
        character: 'SameSite',
        meaning: '교차 출처 요청 차단',
        effect: 'CSRF 방지; 외부 사이트에서 자동으로 쿠키를 보내지 못하게 함',
    }
];

const TIL0513 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 13일</p>
            <h3>[인증/보안] Cookie & Session & JWT</h3>

            <h4>우리는 왜 인증이 필요한가?</h4>
            <ul><li>인터넷은 요청을 보낼 때마다 기억을 잃은 상태로 시작한다.</li>
                <li><a href='https://ko.wikipedia.org/wiki/%EB%AC%B4%EC%83%81%ED%83%9C_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C'>stateless protocol</a></li>
                <li>그래서 매번 요청마다 "내가 누구인지" 알려줄 수 있는 장치, 즉 '인증(Authentication)'이 반드시 필요하다</li>
            </ul>

            <p>인가(Authorization)</p>
            <ul><li>인가는 관리자만 가능한 기능을 어떻게 제한하기 위하여 구현된다.</li>
                <li>인증은 신분 확인, 인가는 권한 확인</li></ul>

            <p>서버가 기억력이 없다는건 무슨 뜻인가?</p>
            <ul><li>서버는 요청이 끝나면 이전 요청을 잊어버린다.</li>
                <li>즉, 상태를 저장하지 않는다. (stateless) </li></ul>

            <p>그렇다면 로그인 정보를 어떻게 유지할까?</p>
            <ul><li>세션과 쿠키: "로그인 상태"를 기억하게 만들어주는 장치</li></ul>

            <p>JWT: 로그인 상태를 저장하는 또 다른 방식</p>
            <ul><li>JWT(JSON Web Token) 이란?
                <ul><li>사용자의 인증 정보를 포함하는 토큰 기반 인증 방식</li>
                    <li>서버에 상태를 저장하지 않음(Stateless)</li></ul>
            </li>
                <li>JWT는 왜 사용될까?
                    <ul><li>세션을 서버에 저장하지 않아도 됨 → 확장성 ↑</li>
                        <li>클라이언트에 모든 정보 포함 → 서버 부담 ↓</li>
                        <li>프론트/백 분리된 구조에서 효율적</li>
                        <li>다양한 서비스(API, 모바일 등)에서 일관된 인증 가능 (OAuth 등)
                        </li></ul>
                </li>
                <li>JWT 구조
                    <ul><li>헤더(Header).페이로드(Payload).서명(Signature)</li>
                        <li>Header: 알고리즘, 토큰 타입</li>
                        <li>Payload: 사용자 정보 (예: userId)</li>
                        <li>Signature: 위조 방지용 서명</li>
                    </ul>
                </li>
                <li>예시 흐름
                    <ol><li>로그인 시 서버가 JWT 생성해 클라이언트에 전달</li>
                        <li>클라이언트가 JWT를 저장 (예: localStorage, cookie)</li>
                        <li>이후 요청마다 <span style={{ color: 'red', fontWeight: 'bold' }}>Authorization: Bearer 토큰 </span>헤더에 포함해 서버로 전송</li>
                        <li>서버는 토큰 유효성만 검증하고 사용자 인증 완료</li></ol>
                </li>
            </ul>

            <h4>쿠키(Cookie)</h4>
            <ul><li>서버가 여러분의 브라우저에게 “이거 기억해줘” 하고 보내는 정보</li>
                <li>쿠키는 클라이언트(브라우저)가 저장하는 정보입니다</li></ul>

            <p>왜 쿠키가 필요할까?</p>
            <ul><li>웹은 Statelss(기억을 하지 않는) 구조이기 때문</li>
                <li>놀이동산 입장 팔찌와 비슷함</li></ul>

            <p>쿠키의 구조 예시</p>
            <pre><code>{`Set-Cookie: sessionId=abcd1234; Path=/; Max-Age=3600; HttpOnly`}</code></pre>
            <ul><li>sessionId=abcd1234: 저장할 실제 데이터</li>
                <li>Path: 어느 경로에서 유효한지</li>
                <li>Max-Age: 쿠키 유효 시간 (초 단위)</li>
                <li>HttpOnly: JS에서 접근할 수 없도록 설정 (보안용)</li></ul >

            <p>쿠키가 사용되는 대표적인 예</p>
            <ul><li>로그인 상태 유지</li>
                <li>장바구니 임시 저장</li>
                <li>최근 본 상품 정보</li>
                <li>다크모드 / 언어 설정 기억</li>
            </ul >

            <p>보안 팁</p>
            <ul><li>민감한 정보(비밀번호 등)는 절대 쿠키에 직접 저장 금지</li>
                <li>HttpOnly 설정으로 JavaScript 접근 방지</li>
                <li>Secure 설정으로 HTTPS에서만 전송</li>
            </ul>

            <h4>세션(Session)</h4>
            <ul><li>서버가 사용자의 정보를 직접 기억하는 방식</li>
                <li>사용자가 로그인하면 서버는 이 사용자가 누구인지, 어떤 상태인지를 세션에 저장한다.</li></ul>

            <p>쿠키와의 차이점</p>
            <ul><li>쿠키는 말 그대로 정보 조각을 사용자에게 주는 것, 세션은 정보를 서버가 직접 들고 있는 것</li>
                <li>쿠키가 놀이공원 입장 팔찌라면, 세션은 놀이공원 “출입 명부”
                    <ul><li>입장 시 이름/정보를 적음 (로그인)</li>
                        <li>놀이기구 직원이 명부를 보고 “이 사람 맞네” 확인 (세션 조회)</li>
                        <li>손님이 팔찌(쿠키)를 보여주면 → 명부에서 찾아봄</li></ul>
                </li>
                <li>쿠키와 세션은 서로 연결되어 함께 작동함</li></ul>

            <p>요약 정리</p>
            <ul><li>작동 방식: 로그인 → 서버가 세션 생성 → 세션 ID를 쿠키로 전달</li>
                <li>왜 필요한가? 서버가 "누가 요청했는지" 기억하기 위해서</li></ul>

            <p>보안 팁</p>
            <ul><li>세션에 너무 많은 데이터 저장은 지양 (속도 이슈)</li>
                <li>세션 고정 공격(Session Fixation) 방지를 위해 → 로그인 시 세션 ID 재발급</li>
                <li>로그아웃 시 req.session.destroy()로 명확히 세션 제거</li></ul>

            <h4>JWT(JSON Web Token)</h4>
            <ul><li>JSON 형식의 데이터를 Base64로 인코딩한 문자열 토큰으로, 사용자 인증 및 정보 전달에 사용됨</li>
                <li>주로 무상태 인증 (Stateless Authentication) 방식에서 사용되며, 서버에 세션을 저장하지 않고 클라이언트가 토큰을 보관하고 매 요청마다 서버에 전달한다</li></ul>

            <p>Express에서 JWT 구현 예시</p>
            <ol><li>설치
                <ul><li>npm install jsonwebtoken</li></ul>
            </li>
                <li>토큰 생성</li>
                <pre><code>{`
const jwt = require('jsonwebtoken');

const token = jwt.sign({ 
    userId: 'alice01' }, 'my-secret-key', { expiresIn: '1h',
});
`}</code></pre><br />
                <li>토큰 검증 미들웨어</li>
                <CodeBlock code={TIL0513tokenAuthMiddleware}></CodeBlock>
                <li>사용 예시</li>
                <pre><code>{`
app.get('/me', authenticate, (req, res) => { 
    res.json({ user: req.user });
});                
`}</code></pre><br />
            </ol>

            <p>주의할 점</p>
            <div className="ml-4">
                {JWTbasedLogin.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.order}</summary>
                        <ul className="list-disc list-inside ml-4">
                            {Array.isArray(type.details) ? (
                                type.details.map((line, i) =>
                                    i === 0 ? (
                                        <li key={i} className="font-semibold list-none">{line}</li>
                                    ) : (
                                        <li key={i}>{line}</li>
                                    )
                                )
                            ) : (
                                <li>{type.details}</li>
                            )}
                        </ul>
                    </details>
                ))}
            </div>

            <p>세션/쿠키 vs JWT 비교</p>
            <div className="ml-4">
                {authTable.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.항목}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>세션/쿠키 방식:</strong> {type.세션쿠키}</li>
                            <li><strong>JWT 방식:</strong> {type.JWT}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <h4>보안 고려 요소</h4>
            <p>1. 쿠키에 민감한 정보를 넣으면 안되는 이유</p>
            <ul><li>쿠키는 브라우저에 저장되고,</li>
                <li>개발자 도구 또는 자바스크립트에서 누구나 읽을 수 있기 때문</li></ul>

            <ul><li>쿠키에 절대 넣어서는 안되는 정보
                <ul><li>비번, 카드 정보, 주민번호, 개인정보 등</li></ul>
            </li>
                <li>&rarr; 대신 세션 ID만 저장하고 민감한 정보는 서버에서 관리함</li>
            </ul>

            <p>2. 쿠키의 3가지 필수 설정</p>
            <span style={{ fontStyle: "italic" }}>보안상 꼭 고려해야 할 쿠키의 대표 속성 세 가지</span>
            <div className="ml-4">
                {cookieCharacter.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.character}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>의미:</strong> {type.meaning}</li>
                            <li><strong>효과:</strong> {type.effect}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <pre><code>{`
    res.cookie('sessionId', value, {
        httpOnly: true, 
        secure: true,. 
        sameSite: 'strict'
    });        
    `}</code></pre><br />
            <ul><li>쿠키는 기본 설정만으로는 취약할 수 있다. 반드시 위 3가지 설정을 활용해야 한다.
            </li></ul>

            <p>3. CSRF (사이트 간 요청 위조)</p>
            <ul><li>CSRF란, 사용자가 로그인된 상태인 것을 악용해 공격자가 의도하지 않은 요청을 강제로 수행하게 만드는 공격</li></ul>
            <ol><li>사용자가 쿠팡에 로그인 상태</li>
                <li>악성 사이트에 접속 → img src="https://coupang.com/delete-account"</li>
                <li>브라우저는 자동으로 쿠키와 함께 요청을 보냄</li>
                <li>서버는 사용자가 요청한 줄 알고 계정 삭제 처리
                </li></ol>

            <ul><li>CSRF 토큰이란,
                <ul><li>진짜 사용자가 요청을 보낸 것이 맞는지를 확인하기 위한 고유한 값(토큰)
                    <ul><li>서버가 토큰 만들어서 클라이언트에게 보냄</li>
                        <li>클라이언트는 그걸 숨겨진 폼이나 헤더에 담아 요청함</li>
                        <li>서버는 "내가 준 토큰 맞네?" 확인 후 요청 처리</li></ul>
                </li></ul>
            </li>
            </ul>

            <p>4. 세션 고정 (Session Fixation) 공격</p>
            <span style={{ fontStyle: "italic" }}>해커가 미리 만든 세션ID를 사용자의 브라우저에 심어놓고, 사용자가 로그인하면 그 세션ID로 인증 상태가 연결되는 공격</span>
            <ul><li>공격자가 sessionId=1234을 사용자의 쿠키에 넣음</li>
                <li>사용자가 로그인 → 세션이 고정된 ID로 생성됨</li>
                <li>공격자는 이미 그 세션ID를 알고 있어서 접근 가능</li>
            </ul>

            <ul><li>로그인 성공 시 세션ID 재발급 (regenerate 등)</li>
                <li>사용자 브라우저에서 받은 세션을 그대로 재사용하지 않기</li></ul>
            <pre><code>{`
        req.session.regenerate((err) => {
            req.session.user = username; 
        });
        `}</code></pre>

            <p>5. JWT 보안 체크리스트</p>
            <ul><li>✅ 서명된 토큰만 사용 (HS256, RS256 등)</li>
                <li>❌ 비밀키 노출 금지 (SECRET 값은 환경 변수로)</li>
                <li>❌ 민감한 정보 포함 금지 (비밀번호, 카드 정보 등)</li>
                <li>✅ 짧은 만료 시간 설정 (exp 필드)</li>
                <li>✅ HTTPS 사용 필수</li>
                <li>✅ 토큰 검증 철저히 (verify()로 시그니처 및 만료 검증)
                </li></ul>


            <h4>과제</h4>
            <ul><li><a href='https://github.com/dolsotbob/jwt'>jwt</a></li>
                <li><a href='https://www.npmjs.com/package/jsonwebtoken'>jsonwebtoken 안내 문서</a></li>
                <li><a href='https://expressjs.com/ko/'>Express 공식문서</a></li></ul>

        </div >
    )
}

export default TIL0513