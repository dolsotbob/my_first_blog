import React from 'react'
import entityTable from './Images/EntityTable.png'
import TypeORMTable from './Images/TypeORM.png'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0528typeORMentity } from './CodeExamDB'

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


        </div>
    )
}

export default TIL0528