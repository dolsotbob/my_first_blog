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
            <p>얕은 복사</p>
            <ul><li>객체의 1단계 데이터만 복사</li>
                <li>중첩된 객체나 배열은 참조(주소)만 복사함</li>
                <li>따라서 복사본에 중첩 데이터를 수정하면 원본에도 영향을 미침</li>
                <li>예시:
                    <pre><code>{`
            const original = { name: "철수", info: { age: 30 } };
            const shallowCopy = { ...original }; // 얕은 복사

            shallowCopy.info.age = 31; // 중첩된 객체를 수정
            console.log(original.info.age); // 31 (원본도 영향을 받음)
            `}</code></pre>
                    <ul><li>사용 예: 스프레드 연산자(..), Object.assign() 메서드</li></ul>
                </li>
            </ul>
            <p>깉은 복사</p>
            <ul><li>객체의 모든 데이터(중첩된 객체나 배열 포함)를 완전히 새로운 메모리 공간에 복사함</li>
                <li>복사본과 원본은 독립적이어서 한쪽을 수정해도 다른 쪽에 영향을 미치지 않음. </li>
                <li>예시:
                    <pre><code>{`
            const original = { name: "철수", info: { age: 30 } };
            const deepCopy = JSON.parse(JSON.stringify(original)); // 깊은 복사

            deepCopy.info.age = 31; // 중첩된 객체를 수정
            console.log(original.info.age); // 30 (원본은 영향을 받지 않음)
            `}</code></pre>
                    <ul><li>사용 예:
                        <ul><li>JSON.parse(JSON.stringify()) (단순 객체/배열에 적합)</li>
                            <li>라이브러리(예: Lodash의 cloneDeep)</li></ul>
                    </li></ul>
                </li>
            </ul>

            <h4>배열</h4>
            <ul><li>여러 데이터를 하나의 리스트로 묶어서 관리할 수 있는 데이터 타입</li>
                <li>배열의 각 요소는 인덱스를 통해 접근할 수 있음</li></ul>

            <p>배열의 주요 특징</p>
            <ol><li>순서가 있는 데이터 집합</li>
                <li>다양한 타입 저장 가능</li>
                <pre><code>{`const mixedArray = [1, "Hello", true, { name: "철수" }];  `}</code></pre>
                <li>동적 크기</li></ol>

            <p>배열 생성 방법</p>
            <ul><li>리터럴 표기법: (가장 간단하고 일반적인 방식)
                <ul><li>const number = [1, 2, 3, 4, 5];</li></ul>
            </li>
                <li>Array 생성자:
                    <ul><li>const fruits = new Array("apple", "banana", "cherry");</li></ul>
                </li></ul>

            <p>배열의 주요 메서드:</p>
            <ol><li>요소 추가와 제거:
                <ul><li>push(): 배열의 끝에 요소 추가</li>
                    <li>pop(): 배열의 마지막 요소 제거</li>
                    <li>unshift(): 배열의 앞에 요소 추가</li>
                    <li>shift(): 배열의 첫 번째 요소 제거</li>
                </ul>
            </li>
                <li>배열의 순회
                    <ul><li>for 루프 또는 forEach(): 배열의 각 요소 순회</li></ul>
                </li>
                <li>배열 변환
                    <ul><li>map(): 배열의 각 요소를 변환하여 새 배열 생성</li>
                        <li>filter(): 조건을 만족하는 요소만 필터링해 새 배열 생성</li></ul>
                    <pre><code>{`
            const numbers = [1, 2, 3, 4];
            const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
            const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
            `}</code></pre>
                </li>
                <li>배열 검사
                    <ul><li>includes(): 특정 요소가 배열에 포함되어 있는지 확인</li>
                        <li>indexOf(): 특정 요소의 인덱스 반환 (없으면 -1 반환)</li></ul>
                </li>
            </ol>


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
            배열, 문자열, 객체 등 양한 데이터 타입을 쉽게 다룰 수 있도록 자바스크립트에서 미리 제공하는 함수.< br />
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


        </div >
    )
}

export default TIL0219