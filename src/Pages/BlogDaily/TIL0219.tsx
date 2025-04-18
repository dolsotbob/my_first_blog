import React from 'react'

const TIL0219 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 2월 19일</p>
            <h3>Javascript 3</h3>

            <p>배열과 객체 그리고 내장함수</p>
            <ul><li>배열은 순서대로 나열하고 싶을 때 사용. 예: 트랜잭션 처리</li>
                <li>객체는 구조화된 저장소</li>
                <li>함수는 공장처럼 인풋이 들어와서 어떤 과정을 거쳐 아웃풋이 나감</li></ul>

            <h4>참조 타입</h4>
            <ul><li>복접한 데이터를 나타내며 자바스크립트에서 객체, 배열, 함수 등을 포함함</li>
            <li>이 데이터들은 값 자체가 아닌 메모리 주소(참조)를 저장하며, 여러 데이터를 묶어서 관리하거나 구조화할 때 사용됨</li>
            <li>특징:
                <ul>
                    <li>값이 아닌 메모리 주소 저장</li>
                    <li>하나의 객체를 여러 변수가 공유할 수 있음</li>
                    <li>복사하면 새로운 객체가 만들어지지 않고 같은 객체를 참조함</li>
                </ul>
            </li>
            </ul>

            <h4>얕은 복사와 깊은 복사</h4>
            <ul><li>얕은 복사는 객체의 1단계 데이터만 복사. 중첩된 객체나 배열은 참조(주소)만 복사해서 복사본에 중첩 데이터를 수정하면 원본에도 영향을 미침</li>
            <li>깊은 복사는 객체의 모든 데이터(중첩된 객체나 배열 포함)를 완전히 새로운 메모리 공간에 복사함. 복사본과 원본은 독립적이어서 한쪽을 수정해도 다른 쪽에 영향을 미치지 않음. 예: cloneDeep</li>
            </ul>

            <h4>배열</h4>
            <ul><li>여러 데이터를 하나의 리스트로 묶어서 관리할 수 있는 데이터 타입</li>
            <li>배열의 각 요소는 인덱스를 통해 접근할 수 있음</li>
            <li>배열의 주요 메서드:
                <ul>
                    <li>push(): 배열의 끝에 요소 추가</li>
                    <li>unshift(): 배열의 앞에 요소 추가</li>
                    <li>for 루프 또는 forEach(): 배열의 각 요소 순회</li>
                    <li>filter(): 조건을 만족하는 요소만 필터링해 새 배열 생성</li>
                </ul>
            </li>
            </ul>

            <h4>배열의 반복</h4>
            <ul>
                <li>for 루프: 배열의 길이를 기준으로 각 요소 처리.</li>
                <li>for...of 루프: 배열의 요소에만 집중하는 간결한 반복문.</li>
            </ul>

            <h4>객체</h4>
            <ul><li>키(key)-값(Value) 형태로 데이터 저장</li>
            <li>객체 생성 방법:
                <ul>
                    <li>중괄호 { }롤 객체를 정의하는 객체 리터럴 방식. 예</li>
                    <li>Object 생성자</li>
                    <li>Object.create()</li>
                </ul>
            </li>
            </ul>
            

            <h4>객체 속성 접근</h4>
            <ul>
                <li>점 표기법. 예: console.log(person.name);</li>
                <li>대괄호 표기법. 예: console.log(person[key]);</li>
            </ul>

            <h4>객체의 주요 메서드</h4>
            <ul>
                <li>Object.values()</li>
                <li>Object.entries()</li>
                <li>Object.assign()</li>
            </ul>

            <h4>객체와 반복</h4>
            <p>for...in 반복문: 객체의 속성을 순회할 때 사용</p>
                <ul>for (const key in person)</ul>
                <ul>{'실행문: key: 객체[key] 출력해라'}</ul>
            

            <h4>기본 내장 함수</h4>
            배열, 문자열, 객체 등 양한 데이터 타입을 쉽게 다룰 수 있도록 자바스크립트에서 미리 제공하는 함수.<br />
            배열의 기본 내장 함수 예:
            <ul>
                <li>indexOf(): 배열에서 특정 요소의 인덱스를 반환. 요소가 없으면 1 반환.</li>
                <li>includes(): 배열에 특정 요소가 있는지 확인.</li>
                <li>sort(): 배열의 요소 정렬.</li>
                <li>slice: 배열의 일부 복사.</li>
                <li>splice: 배열에서 특정 위치의 요소 제거/추가</li>
            </ul>

            <h4>객체의 내장 함수</h4>
            <ul>
                <li>Object.keys(): 객체의 모든 키를 배열로 반환.</li>
                <li>Object.hasOwnproperty(): 객체에 특정 키가 존재하는지 확인.</li>
                <li>Object.freeze(): 객체를 동결해 수정할 수 없게 만듬. 새 속송 추가 혹은 기존 속성 변경 불가.</li>
                <li>Object.seal(): 객체의 속성 추가 혹은 삭제 불가. 기존 속성 값은 수정 가능.</li>
            </ul>

            <h4>문자열의 내장 함수</h4>
            <ul>
                <li>indexOf(): 문자열에서 특정 문자 또는 첫 번째 인덱스 반환</li>
            </ul>


        </div>
    )
}

export default TIL0219