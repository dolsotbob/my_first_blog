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
            <ul><li>요청(request)과 응답(response) 사이에서 동작하는 미들웨어와 유사한 컴포넌트</li>
                <li>NestJS의 AOP(관점 지향 프로그래밍) 기능 중 하나
                    <ul><li>Aspect-Oriented Programming</li></ul>
                </li>
                <li>@Injectable() 데코레이터와 NestInterceptor 인터페이스를 사용함</li></ul>

            <p>무엇을 할 수 있을까?</p>
            <ul><li>요청 전/후 로직 처리 (로깅, 타이머 측정 등)</li>
                <li>응답 구조 변경</li>
                <li>예외 래핑</li>
                <li>캐싱 처리 등</li></ul>

            <p>기본 구조</p>
            <CodeBlock code={TIL0520AOPExample}></CodeBlock>
            <ul><li>intercept()는 요청을 가로채고, 다음 핸들러를 호출한다.</li>
                <li>next.handle()은 실제 컨트롤러의 응답 스트림이다.</li>
                <li>map() 연산자를 통해 응답 데이터를 포장하거나 수정할 수 있다.</li></ul>

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
            <ul><li>@Res()를 직접 사용하면 interceptor가 작동하지 않음 → return을 사용해야 함</li>
                <li>모든 응답이 map()을 거치므로 성능 영향을 줄 수 있음</li>
                <li>비동기 흐름에 대한 이해 필요 (RxJS)</li></ul>

        </div>
    )
}

export default TIL0520