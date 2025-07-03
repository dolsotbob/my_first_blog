import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0512CreateServer } from '../../codeExamples'
import { TIL0512UserAPIExample } from '../../codeExamples'

const CRUD = [
    {
        action: 'Create(생성)',
        httpmethod: 'POST',
        details: '데이터 생성'
    },
    {
        action: 'Read(조회)',
        httpmethod: 'GET',
        details: '데이터를 읽거나 조회'
    },
    {
        action: 'Update(수정)',
        httpmethod: 'PUT / PATCH',
        details: '데이터 수정'
    },
    {
        action: 'Delete(삭제)',
        httpmethod: 'DELETE',
        details: '데이터 삭제'
    }
]

const TIL0512 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 12일</p>
            <h3>Express</h3>
            <ul><li>Node.js를 위한 가볍고 유연한 웹 애플리케이션 프레임워크</li>
                <li>다양한 HTTP 유틸리티와 미들웨어를 제공하여 빠르게 서버를 구축하고 API를 만들 수 있도록 돕는다.</li>
                <li>특징:
                    <ul><li>Node.js의 기본 HTTP 모듈 위에 만들어짐</li>
                        <li>RESTful API, 웹 애플리케이션, 마이크로서비스에 적합함</li>
                        <li>"미들웨어" 기반으로 구성되어 있어 구조를 단순하게 유지하면서도 확장이 쉬움</li></ul>
                </li>
            </ul>

            <p>왜 Express를 사용할까?</p>
            <ul><li>코드가 간결해지고 유지보수가 쉬워짐</li>
                <li>라우팅, 요청 파싱, 정적 파일 제공 등 기능이 내장되어 있음</li>
                <li>다양한 미들웨어와의 호환성이 뛰어남</li>
                <li>커뮤니티가 크고 학습 자료가 풍부함</li></ul>

            <p>설치 방법</p>
            <ol><li>Node.js 설치
                <ul><li>https://nodejs.org 에서 최신 LTS 버전 설치</li></ul>
            </li>
                <li>프로젝트 초기화
                    <pre><code>{`
mkdir my-express-app
cd my-express-app
npm init -y
`}</code></pre>
                </li>
                <li>Express 설치
                    <ul><li>npm install express</li>
                        <li>설치가 완료되면 package.json의 dependencies에 express가 추가됨</li></ul>
                </li>
            </ol>

            <p>서버 만들기</p>
            <ul><li>index.js 파일을 생성하고 아래와 같이 작성한다</li></ul>
            <pre><code>{`
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
    res.send('Hello Express!');
    });

    app.listen(port, () => {
    console.log(₩🚀 서버가 http://localhost:S{port} 에서 실행 중입니다.₩);
    });
    `}</code></pre>
            <br />
            <p>실행</p>
            <ul><li>node index.js</li>
                <li>브라우저에서 http://localhost:3000에 접속하면 "Hello Express!"가 출력된다.</li></ul>


            <h4>Express 기본 구조</h4>
            <p>app.js 또는 server.js의 역할</p>
            <ul><li>Express 프로젝트에서는 보통 app.js 또는 server.js 파일을 시작점으로 사용한다.</li>
                <li>이 파일은 전체 애플리케이션의 진입점으로, 주요 역할은 다음과 같다:
                    <ul><li>Express 애플리케이션 생성 (express() 호출)</li>
                        <li>미들웨어 등록 (app.use())</li>
                        <li>라우터 연결 (app.use('/경로', 라우터) 방식 또는 app.get() 등 직접 정의)</li>
                        <li>서버 실행 (app.listen())</li>
                    </ul>
                    <CodeBlock code={TIL0512CreateServer}></CodeBlock>
                </li>
            </ul>

            <p>미들웨어란?</p>
            <ul><li>요청(request)과 응답(response) 사이에서 실행되는 함수</li>
                <li>모든 Express 앱은 미들웨어의 연속체로 구성되어 있다</li></ul>

            <p>주요 미들웨어 예시</p>
            <ol><li><strong>express.json()</strong>
                <ul><li>JSON 요청 본문을 자동으로 파싱해 req.body에 넣어준다
                    <ul><li>“파싱하다(parse)”는 어떤 데이터를 읽어서 구조를 이해하고, 프로그래밍에서 사용할 수 있는 형태로 바꾸는 것을 말함</li></ul>
                </li>
                    <li>app.use(express.json());</li></ul>
            </li>
                <li><strong>express.static()</strong>
                    <ul><li>정적 파일(CSS, JS, 이미지 등)을 제공할 때 사용</li>
                        <li>app.use(express.static('public'));</li></ul>
                </li>
                <li><strong>커스텀 미들웨어</strong>
                    <pre><code>{`
app.use((req, res, next) => { 
    console.log(₩S{req.method} S{req.url}₩);
    next();  // 다음 미들웨어로 진행 
});
`}</code></pre>
                    <ul><li>인증 체크 미들웨어</li></ul>
                </li>
            </ol>

            <p>라우팅</p>
            <ul><li>클라이언트의 요청 URL과 메서드(GET, POST 등)에 따라 어떤 동작을 할지 정의하는 것</li>
                <li>기본 라우팅 메서드:
                    <pre><code>{`
    app.get('/hello', (req, res) => {
    res.send('GET 요청 받음');
    });

    app.post('/submit', (req, res) => {
    res.send('POST 요청 받음');
    });
    `}</code></pre>
                </li>
                <li>기타 메서드:
                    <ul><li>app.put()</li>
                        <li>app.delete()</li>
                        <li>app.patch()</li></ul>
                </li>
            </ul>

            <p>요청과 응답 객체</p>
            <ul><li>Express에서 라우터 핸들러는 다음 두 인자를 받습니다:</li>
                <pre><code>{`
app.get('/', (req, res) => {
    // req: 요청 정보 객체
    // res: 응답을 보낼 수 있는 객체
});
`}</code></pre>
                <br />
                <li>req 객체 예시:
                    <ul><li>req.method: 요청 방식 (GET, POST 등)</li>
                        <li>req.url: 요청 경로</li>
                        <li>req.query: URL 쿼리 파라미터</li>
                        <li>req.params: 경로 파라미터</li>
                        <li>req.body: 요청 본문 (json 미들웨어 필요)
                        </li></ul>
                </li>
                <li>res 객체 예시:
                    <ul><li>res.send(): 문자열 응답</li>
                        <li>res.json(): JSON 응답</li>
                        <li>res.status(code): 상태 코드 설정</li>
                    </ul>
                </li>
            </ul >
            <pre><code>{`
    app.post('/user', (req, res) => {
        const name = req.body.name;
        res.status(201).json({ message: ₩hello, S{name}₩ });
    });
    `}</code></pre>
            <br />

            <h4>REST API 가능 설계</h4>
            <ul><li>Express를 사용하면 간단하게 REST API를 설계할 수 있음</li></ul>

            <p>CRUD 구조</p>
            <ul><li>REST API는 보통 다음과 같은 4가지 동작을 기반으로 구성된다:</li>
            </ul>

            <div className="ml-4">
                {CRUD.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.action}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>HTTP method:</strong> {type.httpmethod}</li>
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <ul><li>예시: 사용자 API</li></ul>
            <CodeBlock code={TIL0512UserAPIExample}></CodeBlock>

            <p>파라미터 처리</p>
            <ul><li>Express는 요청의 다양한 정보를 다음과 같은 방식으로 받을 수 있다:
                <ol><li><strong>req.params (경로 파라미터)</strong></li>
                    <pre><code>{`
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(₩User ID: S{id}₩);
});
                    `}</code></pre>
                    <li><strong>req.query (쿼리 스트링)</strong></li>
                    <pre><code>{`
app.get('/search', (req, res) => {
  const keyword = req.query.q;
  res.send(₩검색어: S{keyword}₩);
});
// 예: /search?q=apple
                    `}</code></pre>
                    <li><strong>req.body (본문 데이터)</strong></li>
                    <pre><code>{`
app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  res.json(user);
});
                    `}</code></pre>
                </ol>
            </li>
            </ul>

            <p>상태 코드와 응답 보내기</p>
            <ul><li>응답을 보낼 때는 단순히 데이터를 넘겨주는 것뿐 아니라 적절한 HTTP 상태 코드도 함께 보내는 것이 중요함</li>
                <li>자주 쓰이는 상태 코드:
                    <ul><li>200: OK - 성공적인 일반 요청</li>
                        <li>201: Created - 리소스 생성 성공</li>
                        <li>204: No Content - 응답 본문 없음</li>
                        <li>400: Bad Request - 잘못된 요청</li>
                        <li>404: Not Found - 리소스 없음</li>
                        <li>500: Internal Server Error - 서버 오류</li></ul>
                </li>
                <li>더 많은 상태 코드는 이 <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status'>링크</a> 참고하기</li>
                <li>응답 예시:
                    <pre><code>{`
res.status(200).json({ message: '성공' });
res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
res.status(201).json(newUser);
`}</code></pre>
                </li>
            </ul>

            <h4>에러 핸들리와 구조화</h4>
            <ul><li>Express 애플리케이션이 커지면 에러를 잘 처리하고, 라우터나 로직을 잘 분리하는 구조가 중요해진다.</li></ul>

            <p>404 / 500 에러 처리 미들웨어</p>
            <ul><li>Express는 마지막까지 어떤 라우터에도 매칭되지 않으면 404 에러를 처리하고, 에러가 발생하면 500 오류를 핸들링할 수 있는 미들웨어를 정의할 수 있다.</li>
                <li>400대 에러: 클라이언트 사이드에서 무언가 잘못 헸을 때
                    <ul><li>404 핸들러:</li>
                        <pre><code>{`
app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});
`}</code></pre>
                    </ul>
                </li>
                <li>500 대 에러: 클라이언트 쪽에서는 잘 했지만 서버 측에서 무언가 잘못 되었을 때</li>
                <li>500 에러 핸들러 (에러 처리용 미들웨어는 4개의 인자를 가진다)
                    <pre><code>{`
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', stack: err.toString() });
});
                    `}</code></pre>
                </li>
                <li>이 두 미들웨어는 app.use()의 마지막에 배치하는 것이 원칙이다.
                </li>
            </ul>

            <p>라우터 분리 (express.Router())</p>
            <ul><li>하나의 파일에 모든 API를 넣기보다는 <strong>기능 단위로 라우터를 분리</strong>하는 것이 유지보수에 좋다.</li>
                <li>예시: 사용자 라우터
                    <ul><li><strong>routes/user.js</strong></li>
                        <pre><code>{`
    express = require('express');
    const router = express.Router();
    const userController = require('../controllers/userController');

    router.get('/', userController.getAll);
    router.get('/:id', userController.getById);

    module.exports = router;
    `}</code></pre>
                        <li><strong>app.js</strong></li>
                        <pre><code>{`
    const userRouter = require('./routes/user');
    app.use('/users', userRouter);
                    `}</code></pre>
                    </ul>
                </li>
            </ul>

            <p>컨트롤러/서비스 계층 구조</p>
            <ul><li>기능이 복잡해지면 요청 처리 로직을 컨트롤러와 서비스 계층으로 나눈다</li>
                <li>Contrller: 요청(req)을 받아 응답(res)을 처리하는 레벨</li>
                <li>Service: 실제 로직을 수행하는 계층 (DB 조회, 데이터 가공 등)</li>
                <li>예시:
                    <ul><li><strong>controllers/userController.js</strong></li>
                        <pre><code>{`
    const userService = require('../services/userService');

    exports.getAll = (req, res) => {
    const users = userService.findAll();
    res.json(users);
    };

    exports.getById = (req, res) => {
    const user = userService.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
    };
`}</code></pre>
                        <br />
                        <li><strong>services/userService.js</strong></li>
                        <pre><code>{`
    const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    ];

    exports.findAll = () => users;

    exports.findById = (id) => users.find(u => u.id === id);
`}</code></pre>
                    </ul>
                </li>
            </ul>

            <h4>과제</h4>
            <ul><li><a href='https://github.com/dolsotbob/rocket-airline-server'>Rocket Airline 서버 구현하기</a></li></ul>




        </div >
    )
}

export default TIL0512