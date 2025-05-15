import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0515NestJSClassConstructor } from './CodeExamServer'

const TIL0515 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 15일</p>
            <h3>NestJS - 컨트랙트 요청 API 1</h3>
            <ul><li>학습 목표: 스마트 컨트랙트의 기능을 NestJS 기반 서버 API로 구현하는 과정 알아보기</li>
                <li>사용자는 프론트엔드나 외부 시스템에서 직접 블록체인과 상호작용하는 대신, HTTP API 인터페이스를 통해 안전하고 구조화된 방식으로 컨트랙트 기능을 호출할 수 있다.</li></ul>

            <h4>NestJS 클래스, this, readonly 키워드 이해하기</h4>
            <p>클래스와 constructor 기본 구조 이해하기</p>
            <ul><li>NestJS의 서비스는 보통 클래스 기반으로 작성된다.</li>
                <li>@Injectable() 데코레이터가 붙은 이 클래스는 의존성 주입을 통해 다른 서비스나 설정을 받아서 사용하게 된다.</li>
                <pre><code>{`
    @Injectable()
    export class DatatypeService { 
        constructor(private readonly ethersService: EthersService) {}
    }
    `}</code></pre>
                <li>constructor는 클래스를 초기화하는 함수</li>
                <li>NestJS는 EthersService를 자동으로 생성해서 ethersService에 주입함</li>
                <li>EthersService: 클래스(타입) - @Injectable()로 정의된 NestJS 서비스 클래스</li>
                <li>ethersService: 인스턴스(객체) - NestJS가 EthersService를 기반으로 생성한 실제 객체</li>
            </ul>

            <p>this는 뭐 하는 건가요?</p>
            <pre><code>{`
    async positive() { 
        return await this.ethersService.positiveNumber();
    }
    `}</code></pre>
            <ul><li>this는 현재 클래스 인스턴스를 가리킨다.</li>
                <li>this.ethersService는 생성자에서 받은 서비스 인스턴스</li>
                <li>즉, ethersService는 DatatypeService 안에서 계속 쓰일 수 있게 this로 접근하는 것임.</li>
            </ul>

            <p>readonly의 역할</p>
            <pre><code>{`
    constructor(private readonly ethersService: EthersService) {}
    `}</code></pre>
            <ul><li>readonly는 한 번 할당하면 더 이상 바꿀 수 없는 속성</li>
                <li>클래스 안에서 실수로 다른 값으로 바꾸는 걸 방지함</li>
                <pre><code>{`
    this.ethersService = new OtherService(); // ❌ 컴파일 에러 발생
    `}</code></pre>
                <li>즉, readonly는 안전하게 의존성 주입받은 인스턴스를 보호해주는 역할을 한다.</li>
            </ul>

            <p>정리된 예제</p>
            <CodeBlock code={TIL0515NestJSClassConstructor}></CodeBlock>
            <ul><li>🔁 호출 흐름 요약
                <ol><li>NestJS가 DatatypeService 인스턴스를 생성</li>
                    <li>그 과정에서 EthersService 인스턴스를 생성해서 생성자에 자동으로 주입</li>
                    <li>positive() 함수가 호출되면, 내부에서 ethersService.positiveNumber()를 실행</li></ol>
            </li>
            </ul>



        </div>
    )
}

export default TIL0515