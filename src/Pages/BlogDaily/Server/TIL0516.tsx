import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0516SetBalanceDto } from './CodeExamServer'
import { TIL0516SetUserDto } from './CodeExamServer'
import { TIL0516DTOinController } from './CodeExamServer'
import { TIL0516DTOinService } from './CodeExamServer'
import { TIL0516exceptionClass } from './CodeExamServer'
import { TIL0516exceptionClass2 } from './CodeExamServer'
import { TIL0516CustomException } from './CodeExamServer'
import { TIL0516CustomExceptionExample } from './CodeExamServer'

const ExceptionClass = [
    {
        class: 'BadRequestException',
        code: '400',
        details: '잘못된 요청',
    },
    {
        class: 'UnauthorizedException',
        code: '401',
        details: '인증 실패',
    },
    {
        class: 'ForbiddenException',
        code: '403',
        details: '권한 없음',
    },
    {
        class: 'NotFoundException',
        code: '404',
        details: '리소스 없음',
    },
    {
        class: 'InternalServerErrorException',
        code: '500',
        details: '서버 내부 오류',
    },
]

const TIL0516 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 16일</p>
            <h3>NestJS - 컨트랙트 요청 API 2</h3>

            <h4>DTO</h4>
            <p>DTO (Data Transfer Object)란? </p>
            <ul><li>컨트롤러와 서비스 간 데이터 전달을 위한 객체
                <ul><li>API 요청/응답에 사용되는 데이터 구조를 정의</li>
                    <li>DB 모델(Entity)와 분리된 "입출력 전용 객체"</li>
                    <li>NestJS에서는 클래스로 정의하고 데코레이터로 유효성 검사를 설정</li></ul>
            </li>
            </ul>

            <p>왜 DTO를 쓰는가?</p>
            <ul><li>타입 안정성: 타입스크립트의 장점을 활용</li>
                <li>명시적 구조: 협업과 유지보수에 용이</li>
                <li>유효성 검증: 사용자 입력을 안전하게 처리</li></ul>

            <p>NestJS에서 DTO 만들기</p>
            <ul><li>SetBalanceDto</li>
                <CodeBlock code={TIL0516SetBalanceDto}></CodeBlock>
                <li>SetUserDto</li>
                <CodeBlock code={TIL0516SetUserDto}></CodeBlock>
                <li>위 DTO들은 POST /user 또는 PATCH /balance 같은 API에서 요청 바디 검증에 사용될 수 있음</li></ul>

            <p>DTO를 사용하는 위치</p>
            <ul><li>컨트롤러</li>
                <CodeBlock code={TIL0516DTOinController}></CodeBlock>
                <li>서비스</li>
                <CodeBlock code={TIL0516DTOinService}></CodeBlock>
            </ul>

            <h4>NestJS 예외 처리(Exception)</h4>
            <ul><li>일관되고 명확한 에러 메시지를 위한 Exception 설계</li>
                <li>NestJS는 HttpException 클래스를 통해 HTTP 상태 코드 기반의 에러 응답을 처리할 수 있도록 돕는다.</li>
                <li>기본적으로 NestJS는 throw new HttpException(...) 방식으로 에러를 발생시키고, 이를 클라이언트에게 JSON 응답으로 반환한다.</li>
            </ul>

            <p>기본 예외 클래스들</p>
            <div className="ml-4">
                {ExceptionClass.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.class}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>상태 코드:</strong> {type.code}</li>
                            <li><strong>설명:</strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>
            <CodeBlock code={TIL0516exceptionClass}></CodeBlock>
            <CodeBlock code={TIL0516exceptionClass2}></CodeBlock>
            <br />

            <p>커스텀 예외 생성 유틸 만들기</p>
            <ul><li>아래 코드는 공통 예외를 쉽게 관리하기 위한 설정 파일 예시:</li></ul>
            <CodeBlock code={TIL0516CustomException}></CodeBlock>
            <ul><li>장점:
                <ul><li>예외 메시지와 코드 일관성 유지</li>
                    <li>예외 타입을 import만으로 사용 가능</li>
                    <li>중복 코드 제거</li></ul>
            </li></ul>

            <p>사용 예시</p>
            <ul><li>서비스 로직에서의 사용</li></ul>
            <CodeBlock code={TIL0516CustomExceptionExample}></CodeBlock>

        </div>
    )
}

export default TIL0516