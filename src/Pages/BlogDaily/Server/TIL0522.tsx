import React from 'react'
import CRONimg from './CRONExpression.png';
import './Server.css'
import CodeBlock from '../../../components/CodeBlock';
import { TIL0522scheduleModule } from './CodeExamServer';
import { TIL0522schedulerLogger } from './CodeExamServer';
import { TIL0522LoggerExample } from './CodeExamServer';

const TIL0522 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 22일</p>
            <h3>Scheduling</h3>

            <h4>스케줄러</h4>
            <ul><li>서버 애플리케이션에서는 특정 작업을 자동으로 주기적으로 실행해야 하는 경우가 자주 발생함
                <ul><li>예: DB 백업, 블록체인 관련 모니터링 서버</li></ul>
            </li>
                <li>이런 기능을 지원하는 시스템을 스케줄러라고 함</li>
                <li>트리거 하지 않아도 특정 시간마다, 주기마다, 또는 정해진 시점에 자동으로 함수를 실행시켜주는 자동 실행 시스템</li></ul>


            <p>언제 사용하나?</p>
            <ul><li>매일 자정에 데이터 백업 → 서버 로그나 사용자 데이터를 안전하게 저장하기 위해</li>
                <li>매 10분마다 이메일 발송 → 뉴스레터, 알림, 인증 메일 등 반복 작업 자동화</li>
                <li>매 1분마다 지갑 잔고 확인 → 블록체인 기반 서비스에서 사용자 지갑 감시</li>
                <li>매주 월요일 오전 9시에 보고서 생성 → 업무 자동화 및 정기 리포트 전송</li></ul>

            <h4>CRON</h4>
            <ul><li>시간 기반 작업 스케줄러</li>
                <li>서버에서 일정 주기마다 어떤 작업(스크립트, 명령어 등)을 자동 실행하고 싶을 때 사용함</li></ul>

            <p>Cron 표현식</p>
            <ul><li>Cron은 특정 시점을 지정하기 위해 5~6개의 필드를 가진 문자열을 사용하게 된다.</li></ul>
            <img className='TIL0522CronImg' src={CRONimg} alt='CRON Expression image'></img><br />
            <span style={{ fontStyle: 'italic' }}>⚠️ 일반 리눅스 crontab에서는 초 필드는 없고 5개만 사용하지만, NestJS의 @nestjs/schedule 등에서는 초 필드까지 지원하는 6자리 형식을 사용함.</span>

            <p>Cron은 어디서 사용될까?</p>
            <ol><li>리눅스 서버
                <ul><li>crontab -e 명령어로 Cron job 등록</li>
                    <li>주기적으로 로그 정리, DB 백업 등</li></ul>
            </li>
                <li>백엔드 프레임워크(NestJS, Spring 등)
                    <ul><li>NestJS에서는 @Cron() 데코레이터 사용</li></ul>
                </li>
                <pre><code>{`
        @Cron('0 0 * * * *') // 매시 정각
        handleTask() {
            console.log('매시 실행되는 작업');
        }
        `}</code></pre>
            </ol>

            <p>CRON 표현식으로 스케줄 지정</p>
            <ul><li><span style={{ fontStyle: 'italic' }}>외우는거 비추. 그 때 그 때 검색 추천</span></li>
                <li>스케줄러는 실행 주기를 지정할 수 있는 CRON 표현식을 사용한다.</li></ul>

            <p>@Cron, @Interval, @Timeout 차이점</p>
            <ul><li>@Cron(): CRON 표현식 기반</li>
                <li>@Interval(ms): 일정 간격마다 실행</li>
                <li>@Timeout(ms): 일정 시간 후 한 번만 실행</li></ul>

            <h4>NestJS에서 스케줄러 구현하기</h4>
            <ul><li>NestJS에서는 @nestjs/schedule 패키지를 사용하면 쉽게 스케줄링 기능을 구현할 수 있다.</li>
                <li>주기적으로 백업, 로그 정리, 알림 전송 등 다양한 자동화 작업을 수행할 수 있다.</li>
                <li>NestJS는 @Cron() 데코레이터와 CronExpression을 활용해 스케줄러를 구현할 수 있음</li>
            </ul>

            <p>NestJS에서 스케줄러 구현 순서</p>
            <ol><li><strong>의존성 설치</strong>
                <ul><li>먼저 스케줄러 기능을 위한 공식 패키지 설치하기</li></ul>
                <pre><code>{`
    npm install --save @nestjs/schedule
    `}</code></pre>
            </li>

                <li><strong>모듈 등록</strong></li>
                <ul><li>AppModule 또는 사용하는 모듈에서 ScheduleModule.forRoot() 등록</li></ul>
                <CodeBlock code={TIL0522scheduleModule}></CodeBlock>
                <ul><li>forRoot()는 글로벌하게 스케줄 기능을 활성화 시켜줌</li></ul>

                <li><strong>스케줄 함수 작성</strong></li>
                <ul><li>@Cron() 데코레이터를 이용해 원하는 주기로 작업을 실행할 수 있음</li>
                    <li>Logger를 활용하면 언제 실행되었는지도 확인할 수 있음</li></ul>
                <CodeBlock code={TIL0522schedulerLogger}></CodeBlock>
                <ul><li>🧩 CronExpression은 NestJS에서 자주 쓰는 표현식을 상수로 제공한다.</li>
                    <li>예: EVERY_10_SECONDS, EVERY_MINUTE, EVERY_DAY_AT_MIDNIGHT 등</li></ul>

            </ol>

            <h4>Logger</h4>
            <ul><li>Logger는 NestJS가 제공하는 내장 로깅 도구</li>
                <li>어떤 이벤트가 발생했는지, 오류가 있는지 등을 콘솔 또는 외부 시스템에 출력할 수 있게 해줌</li>
                <li>개발, 테스트, 운영 환경 모두에서 중요한 역할을 하는 핵심 도구</li></ul>

            <p>왜 Logger를 써야 할까?</p>
            <ul><li>디버깅: 실행 흐름을 추적할 수 있음</li>
                <li>에러 추적: 예외가 언제, 어디서 발생했는지 파악 가능</li>
                <li>운영 모니터링: 서버 상태나 이벤트를 주기적으로 기록 가능</li></ul>

            <p>기본 사용법</p>
            <ul><li>서비스나 컨트롤러에서 사용하기</li>
                <CodeBlock code={TIL0522LoggerExample}></CodeBlock>
                <li>로그 레벨 종류:
                    <ul><li>log(): 일반적인 정보 로그 (INFO)</li>
                        <li>warn(): 경고 상황 (WARN)</li>
                        <li>error(): 에러 상황 (ERROR)</li>
                        <li>debug(): 디버깅 로그 (DEBUG)</li>
                        <li>verbose(): 상세한 정보 로그 (VERBOSE)</li></ul>
                </li>
                <li>NestJS에서는 환경에 따라 로그 레벨을 자동 필터링할 수 있다.</li>
            </ul>

            <p>테스트에서 Logger Mocking 하기</p>
            <ul><li>테스트 코드에서는 실제 로그 대신 mock을 사용해 로깅 호출을 감지한다.</li>
                <li>그냥 이런게 있구나 하고 알고 넘어가기</li></ul>

            <p>커스텀 Logger로 확장 가능</p>
            <ul><li>NestJS의 Logger는 커스터마이징이 가능함</li>
                <li>그리고 AppModule에서 바꿔 끼우기</li></ul>

            <h4>과제</h4>
            <ul><li><a href='https://github.com/dolsotbob/scheduling'>scheduling</a></li></ul>

        </div>
    )
}

export default TIL0522