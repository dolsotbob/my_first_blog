import React from 'react'

const TIL0226 = () => {
    return (
        <div className='BlogDaily'>
            <h3>심화 - 비동기</h3>
            <ul>
                <li>Node.js는 논블로킹(non-blocking)하고 비동기적(asynchronous)으로 작동하는 런타임으로 개발됨</li>
                <li>JavaScript는 기본적으로 동기적으로 코드가 실행되지만 JavaScript 엔진(예: V8)과 브라우저 또는 Node.js와 같은 런타임 환경이 함께 협력하여 비동기 작업을
                    처리함</li>
                <li>비동기 코드는 코드가 작성된 순서대로 작동되는 것이 아니라 동작이 완료되는 순서대로 작동하게 됨. 개발자는 예측 가능한 코드를 작성하도록 노력해야 함.</li>
            </ul>


            <h3>비동기로 작동하는 코드 제어하는 방법 1 - 콜백</h3>
            <ul><li>함수를 통해 비동기 코드의 순서를 제어할 수 있다. 코드가 길어질수록 복잡해지고 가독성이 낮아지는 Callback Hell이 발생하는 단점이 있다.</li>
            </ul>

            <h3>비동기로 작동하는 코드 제어하는 방법 2 - Promise</h3>
            <ul><li>Promise는 class이기 때문에 new 키워드를 통해 Promise 객체를 생성함</li>
                <li>Promise는 비동기 처리를 수행할 콜백 함수(executor)를 인수로 전달받는데, 이 콜백 함수는 resolve, reject 함수를 인수로 전달 받음</li>
                <li>PROMISE 객체가 생성되면 executor는 자동으로 실행되고 작성했던 코드들이 작동됨</li>
                <li>코드가 정상적으로 처리 되면 resolve 함수를 호출, 에러가 발생하면 reject 함수를 호출
                    <ul><li>let promise = new Promise(resolve, reject) </li></ul>
                </li>
            </ul>




            <h3>Promise 객체의 내부 프로퍼티</h3>
            <p>new Promise가 반환하는 Promise 객체는 state, result 내부 프로퍼티를 갖고있음. .then, .catch, .finally의 메서드를 사용해 접근 가능</p>
            <ul><li>State: 기본 상태(state)는 pending 이다. 콜백함수(executor)가 성공적으로 작동하면 fulfilled로, 에러가 발생하면 rejected가 됨</li>
                <li>Result: 처음은 undefined이다. 콜백함수(executor)가 성공적으로 작동하여 resolve(value)가 호출되면 value로, 에러가 발생하여</li>
                <li>reject(error)가 호출되면 error로 변함</li></ul>


            <p >then, catch, finally</p>
            <ul><li>Then: executor에 작성했던 코드들이 정상적으로 처리되면 resolve 함수를 호출하고 .then 메서드로 접근할 수 있다</li>
                <li>.then 안에서 리턴한 값이 Promise면 Promise의 내부 프로퍼티 result를 다음 .then의 콜백함수의 인자로 받아오고,</li>
                <li>Promise가 아니라면 리턴한 값을 .then의 콜백 함수의 인자로 받아올 수 있다</li></ul>

            <p >Promise chaining</p>
            <ul><li>비동기 작업을 순차적으로 진행해야 하는 경우 필요함</li></ul>

            <h3>비동기로 작동하는 코드 제어하는 방법 2 - Promise.all()</h3>
            <p>여러 개의 비동기 작업을 동시에 처리하고 싶을 때 사용. 인자로 배열을 받고, executor내 작성했던 코드들이 정상적으로 처리되면 결과를 배열에 저장해 새로운 Promise를
                반환함
                <ul>Promise.all([promiseOne(), promiseTwo(), promiseThree()])
                    <ul>.then(value)... </ul>
                    <ul>.catch(err)... </ul>
                </ul>
                인자로 받는 배열에 있는 Promise 중 하나라도 에러가 발생하면 나머지 Promise의 state와 상관없이 즉시 종료됨. </p>

            <h3>Async/Await</h3>
            <ul><li>async/await 키워드로 복잡한 Promise 코드를 간결하게 작성할 수 있다</li>
                <li>함수 앞에 async 키워드를 사용하고 async 함수 내에서만 await 키워드 사용</li>
                <li>await 키워드가 작성된 코드가 동작하고 나서야 다음 순서의 코드가 동작함</li>
            </ul>

            <h3>Node.js</h3>
            <ul><li>비동기 이벤트 기반 JavaScript 런타임</li>
                <li>JavaScript를 사용하여 서버 사이드 애플리케이션을 개발할 수 있게 해주는 런타임 환경</li>
                <li>기존에 JavaScript가 브라우저에서만 실행되던 것과 달리 서버측에서도 Javascript를 실행할 수 있도록 해줌</li></ul>

            <h4>Node.js 내장 모듈을 사용하는 방법</h4>
            <ul><li>모듈이란? 건축에서 온 단어로 어떤 기능을 조립할 수 있는 형태로 만든 부분이란 뜻</li>
                <li>그중 fs(FileSystem) 모듈은 PC의 파일을 읽거나 저장하는 등의 일을 할 수 있게 도와줌</li>
                <li>Node.js 내장 모듈 목록은 <a href="https://nodejs.org/docs/latest-v18.x/api/index.html">Node.js v18.20.6 Documentation</a>에서 찾을 수 있음</li>
                <li>모든 모듈은 모듈을 사용하기 위해 불러오는 과정이 필요함</li>
                <li>브라우저에서 다른 파일을 불러올 때는 script 태그 이용</li>
                <pre><code>{`<script src="불러오고싶은_스크립트.js"></script>`}</code></pre>
                <li>Node.js는 자바스크립트 코드 가장 상단에 require 구문을 이용해 다른 파일을 부른다</li>
                <pre><code>{`
                const fs = require('fs'); // 파일 시스템 모듈을 불러옵니다
                const dns = require('dns'); // DNS 모듈을 불러옵니다

                // 이제 fs.readFile 메서드 등을 사용할 수 있습니다!
                `}</code></pre>
            </ul>

            <h4>3rd-party 모듈 사용 방법</h4>
            <ul><li>외부 모듈. 예를 들어 Node.js공식 문서에 없는 underscore 모듈을 설치하려면: npm install underscore</li>
                <li>설치 후에는 require 구문으로 사용할 수 있음:
                    <pre><code>{`const _ = require('underscore');`}</code></pre>
                </li>
            </ul>


            <h4>fs.readFile을 통해 알아보는 Node.js 공식문서 가이드</h4>
            <ul><li>메서드 fs.readFile은 로컬에 존재하는 파일을 읽어옴</li>
                <li><a href='https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_fs_readfile_path_options_callback'>fs.readFile의 공식 API 문서</a></li></ul>

            <h3>fetch API</h3>
            <ul><li>비동기 요청의 가장 대표적인 사례가 네트워크 요청이다</li>
                <li>네트워크를 통해 이루어지는 요청중 가장 흔한 것이 URL로 요청하는 것</li>
                <li>URL로 요청하는 것을 가능하게 해주는 API가 fetch API</li></ul>

            <h3>Axios</h3>
            <ul><li>브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리</li>
                <li>Fetch API보다 사용이 간편하면서 추가적 기능이 포함되어 있음</li>
                <li>써드파티 라이브러리로 설치가 필요함 (cf. Fetch API는 빌트인 API라 별도의 설치 필요 없음)
                    <ul><li>npm install axios</li></ul>
                </li>
                <li>자동으로 JSON데이터 형식으로 변환됨 (cf. Fetch API는 .json()메서드를 사용해야 함)</li>
            </ul>

            <p>GET 요청</p>
            <ul><li>일반적으로 정보를 요청하기 위해 사용되는 메서드</li>
                <li>첫 번째 인자에는 url 주소가 들어감 </li>
                <li>두 번째 인자에는 요청 시 사용할 수 있는 옵션들을 설정</li></ul>

            <p>POST 요청</p>
            <ul><li>서버에게 데이터를 보내기 위해 사용되는 메서드</li>
                <li>첫 번째 인자에는 url 주소가 들어감 </li>
                <li>두 번째 인자에는 요청 시 보낼 데이터 설정</li></ul>

        </div >
    );
};

export default TIL0226