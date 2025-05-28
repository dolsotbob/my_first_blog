import React from 'react'
import entityTable from './Images/EntityTable.png'
import TypeORMTable from './Images/TypeORM.png'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0528typeORMentity } from './CodeExamDB'

const dbConfig = [
    {
        configuration: 'type: postgres',
        meaning: '사용할 데이터베이스 종류 지정',
        example: 'postgres, mysql, sqlite, mariadb 등',
    },
    {
        configuration: 'host: ',
        meaning: '데이터베이스 서버의 호스트 주소',
        example: 'localhost, 127.0.0.1, 혹은 외부 DB 주소 (예: db.example.com)',
    },
    {
        configuration: 'port: 0',
        meaning: '데이터베이스가 사용하는 포트 번호',
        example: 'PostgreSQL 기본값: 5432',
    },
    {
        configuration: 'username: ',
        meaning: 'DB에 접속하기 위한 사용자 이름',
        example: '',
    },
    {
        configuration: 'password: ',
        meaning: '해당 사용자 계정의 비밀번호',
        example: '',
    },
    {
        configuration: 'database: ',
        meaning: '연결할 데이터베이스의 이름',
        example: 'myapp, postgres 등',
    },
    {
        configuration: 'autoLoadEntities: true',
        meaning: '엔티티를 모듈마다 수동으로 등록하지 않아도 자동으로 인식',
        example: '주의: true로 하면 forFeature([UserEntity]) 없이 전체 앱의 엔티티를 자동으로 로드한다.',
    },
    {
        configuration: 'synchronize: true',
        meaning: '앱 시작 시 DB 테이블을 엔티티에 맞게 자동으로 생성/수정',
        example: '주의: 실서비스에서는 false로 두는 것이 안전하다. 데이터가 날아갈 수 있다.',
    },
]

const TIL0528 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 28일</p>
            <h3>NestJS & DB 설계</h3>
            <h4>Entity</h4>
            <ul><li>현실 세계에 존재하는 사물, 개념, 사람, 사건 등을 데이터 표현하기 위한 단위</li>
                <li>정보를 저장하고 관리해야 하는 대상</li>
                <li>데이터베이스에서는 엔티티가 표(Table)로 표현됨
                    <img className='TIL0528EntityTableImg' src={entityTable} alt='Entity Table Image'></img>
                    <ul><li>User는 엔티티 이름 (테이블)</li>
                        <li>id, name, email은 엔티티의 속성 (컬럼)</li></ul>
                </li>
            </ul>

            <h4>NestJS와 DB의 연결: Entity</h4>
            <ul><li>NestJS와 DB를 연결한다는 것은 NestJS에서 데이터베이스를 사용하기위해 데이터를 읽고 쓰기 위한 통로를 만든다는 것</li>
                <li>이때 사용되는 것이 바로
                    <ul><li>Entity (엔티티)</li>
                        <li>Repository (레포지토리)</li>
                        <li>Service (서비스)</li>
                        <li>Controller (컨트롤러)</li></ul>
                </li>
                <li>이 중에서 Entity는 데이터베이스의 구조(테이블)를 정의하는 가장 기본적인 부분이다.</li>
            </ul>

            <p>Entity란? (NestJS 기준)</p>
            <ul><li>NestJS에서는 TypeORM 같은 라이브러리를 사용해서 데이터베이스 테이블을 TypeScript 코드로 표현한다.</li>
                <li>이때 사용하는 것이 바로 @Entity() 데코레이터</li>
                <li>예: User라는 테이블을 만들고 싶다면</li>
                <CodeBlock code={TIL0528typeORMentity}></CodeBlock>
                <li>이  코드는 다음과 같은 DB 테이블을 만든다:</li>
                <img className='TIL0528typeORMImage' src={TypeORMTable} alt='Table Created with typeORM image'></img>
            </ul>

            <ul><li>이 예제에서 테이블 이름은 소문자로 시작하는 user 라고 지어진다.</li>
                <li>만약 클레스 네임과 별도로 테이블 이름을 만들고 싶다면:
                    <pre><code>{`
    @Entity('users')
    Export class User { 
    `}</code></pre>
                </li>
            </ul>

            <ul><li>DB 칼럼의 데이터 타입을 명시적으로 지정할 수 있다.</li>
                <li>즉, text, varchar, int, boolean, timestamp 등 원하는 타입을 명시적으로 지정할 수 있다. </li>
                <pre><code>{`   
    @Column({ type: 'text' })
    name: string;
    `}</code></pre>
                <li>이렇게 하면 DB 칼럼 타입이 TEXT로 명확히 지정됨</li>
            </ul>

            <p>엔티티와 DB는 어떻게 연결될까?</p>
            <ol><li>NestJS에서 @Entity() 클래스를 정의하면
                <ul><li>→ TypeORM이 그 클래스를 DB 테이블로 인식한다.</li></ul>
            </li>
                <li>클래스의 속성(@Column())이
                    <ul><li>→ DB 테이블의 컬럼(column)이 된다.</li></ul>
                </li>
                <li>그리고 NestJS는 이 구조를 기반으로
                    <ul><li>데이터를 조회하거나 저장할 수 있는 Repository 객체를 자동으로 만들어 준다.</li></ul>
                </li></ol>

            <h4>과제</h4>
            <ul><li>NestJS를 이용하여 User Entity를 만들고, DB와 연결하여, users 테이블에 새로운 user의 정보를 추가하는 과제</li>
            </ul>

            <p>db.config.ts 설정</p>
            <ul><li>src/common/db/db.config.ts
                <ul><li>configService 를 이용하여 환경 값 입력을 완성한다.</li>
                    <li>자신이 설정한 postgres 자체의 설정 값을 모르면 과제 진행이 되지 않는다. (차라리 자시 설치)</li></ul>
            </li>
            </ul>
            <span>아래는 config 내에 들어가는 값의 의미:</span>
            <div className="ml-4">
                {dbConfig.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.configuration}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>의미:</strong> {type.meaning}</li>
                            <li><strong>예제:</strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <ul><li>autoLoadEntities는 아마도 실무에서는 수동으로 해야 하는 경우가 많을 것</li>
                <li>서버 켜기 전에는 synchronize가 true인지 false인지 꼭 확인하기</li></ul>

            <p>과제 진행 순서</p>
            <ol><li>user Entity 구현</li>
                <li>.env 설정</li>
                <li>db.config.ts 설정</li>
                <li>(Postman) API 요청을 통해 DB에 데이터 입력</li></ol>


            <p>각 폴더/파일의 역할</p>
            <ul><li>controller/ - 어떤 URL 요청을 받을지 정의</li>
                <li>dto/ - 요청에 들어오는 데이터의 형식 검증</li>
                <li>service/ - 실제 로직 처리 (데이터베이스 저장 등)</li>
                <li>entity/ - DB 테이블 정의 (User, Post 등)</li>
                <li>repository/ (optional) - 복잡한 DB 쿼리를 따로 분리해서 관리</li>
                <li>app.module.ts - NestJS 전체 구성 모듈</li>
                <li>main.ts - NestJS 앱 시작점 (서버 실행)</li></ul>

            <p>요청 흐름 예시: Postman에서 POST /user/signup을 보낸다면...</p>
            <ol><li>user.controller.ts - 어떤 URL 요청을 받을지 정의</li>
                <li>create-user.dto.ts - 전달받은 데이터를 검증</li>
                <li>user.service.ts - DB에 저장하는 로직 실행</li>
                <li>user.entity.ts - 실제 어떤 필드를 저장할지 정의</li></ol>

        </div>
    )
}

export default TIL0528