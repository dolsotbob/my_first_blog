import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0520AOPExample } from './CodeExamServer'

const TIL0520 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 20일</p>
            <h3>NestJS - 컨트랙트 요청 API 4</h3>

            <h4>Interceptor</h4>
            <p>Interceptor란?</p>
            <ul><li>축구 인터셉트 같은 것</li>
                <li>modifier 같은 것</li>
                <li>요청(request)과 응답(response) 사이에서 동작하는 미들웨어와 유사한 컴포넌트</li>
                <li>NestJS의 AOP(관점 지향 프로그래밍) 기능 중 하나
                    <ul><li>Aspect-Oriented Programming</li>
                        <li>관심사 분리</li></ul>
                </li>
                <li>@Injectable() 데코레이터와 NestInterceptor 인터페이스를 사용함</li></ul>

            <p>무엇을 할 수 있을까?</p>
            <ul><li>요청 전/후 로직 처리 (로깅, 타이머 측정 등)</li>
                <li>응답 구조 변경</li>
                <li>예외 래핑</li>
                <li>캐싱 처리 등</li></ul>

            <p>기본 구조</p>
            <span style={{ fontStyle: 'italic' }}>기본 구조 잘 이해해야 함.</span>
            <CodeBlock code={TIL0520AOPExample}></CodeBlock>
            <ul><li>intercept()는 요청을 가로채고, 다음 핸들러를 호출한다.</li>
                <li>next.handle()은 실제 컨트롤러의 응답 스트림이다.</li>
                <li>map() 연산자를 통해 응답 데이터를 포장하거나 수정할 수 있다.</li>
                <li>rxjs(Reactive Extension for JavaScrip)
                    <ul><li>비동기 데이터 스트림을 다루는 라이브러리 </li>
                        <li>NestJS에서는 특히 Interceptor, Pipe, Exception Filter 같은 요청-응답 흐름 중간에 개입하는 코드에서 rxjs가 자주 쓰임 </li>
                        <li>예를들어 JWT로 Oracle 서버에 접속하고 Oracle이 실시간 데이터를 전송해주면 rxjs로 조건에 맞는 데이터만 필터링 하거나, UI에 보여주거나 알람 전송할 때 사용할 수 있음</li></ul>
                </li>
            </ul>

            <p>적용 방법</p>
            <ul><li>전역으로 사용</li>
                <pre><code>{`
    // main.ts
    app.useGlobalInterceptors(new SuccessInterceptor());
            `}</code></pre>
                <li>특정 컨트롤러나 라우터에 사용</li>
                <pre><code>{`
    @UseInterceptors(SuccessInterceptor)
    @Controller('user')
    export class UserController {}
        `}</code></pre>
            </ul>

            <p>실무 활용 예시</p>
            <ul><li>응답 일괄 포맷팅</li>
                <pre><code>{`
    {
        "status": "SUCCESS",
        "errorCode": {},
        "data": { ... }
    }
    `}</code></pre>

                <li>요청 시간 측정</li>
                <pre><code>{`
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now()                  ;
        return next.handle().pipe(
            tap(() => console.log(₩⏱ 응답 시간: S{Date.now() - now}ms₩))
        );          
    }
    `}</code></pre>
                <li>캐싱 처리(Custom Decorator와 함께)</li>
                <pre><code>{`
    // 캐시된 결과가 있으면 반환, 없으면 핸들러 실행 후 캐싱
    `}</code></pre>
            </ul>

            <p>주의할 점</p>
            <ul><li>@Res()를 직접 사용하면 interceptor가 작동하지 않음 → return을 사용해야 함
                <ul><li>NestJS에서는 컨트롤러에서 return으로 값을 돌려줘야 인터셉터가 응답을 가로채서 가공할 수 있음</li></ul>
            </li>
                <li>모든 응답이 map()을 거치므로 성능 영향을 줄 수 있음
                    <ul><li>Interceptor는 모든 응답을 rxjs.map()으로 감싼다.</li>
                        <li>데이터가 매우 많거나 요청이 많으면 성능에 영향이 생길 수 있다.</li>
                        <li>특히 큰 리스트, 이미지 처리, 대량 데이터 응답에서는 주의!</li>
                    </ul>
                </li>
                <li>비동기 흐름에 대한 이해 필요 (RxJS)
                    <ul><li>NestJS에서 Interceptor는 rxjs의 비동기 스트림 기반으로 동작하기 때문에</li>
                        <li>pipe(), map(), filter() 같은 함수들을 이해해야 제대로 다룰 수 있음</li></ul>
                </li>
            </ul>

        </div>
    )
}

export default TIL0520