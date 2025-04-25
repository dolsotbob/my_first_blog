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
                <li>for 루프: 배열의 길이를 기준으로 각 요소 처리</li>
                <li>for...of 루프: 배열의 요소에만 집중하는 간결한 반복문
                    <pre><code>{`
        const fruits = ["apple", "banana", "cherry"];

        for (const fruit of fruits) {
            console.log(fruit);   // apple, banana, cherry
        }
        `}</code></pre>
                    <ul><li>배열 요소만 순회하며, 인덱스는 제공되지 않는다</li></ul>
                </li>
            </ul>

            <h4>객체</h4>
            <ul><li>키(key)-값(Value) 형태로 데이터 저장</li>
                <li>다양한 속성을 가진 복잡한 데이터를 하나의 구조로 묶어 관리할 수 있게 해줌</li>
                <li>객체 생성 방법:
                    <ol>
                        <li>중괄호 { }로 객체를 정의하는 객체 리터럴 방식</li>
                        <pre><code>{`
                const car = {
                    brand: "Tesla", 
                    model: "Model S", 
                    year: 2022
                };
                        `}</code></pre>
                        <li>Object 생성자</li>
                        <pre><code>{`
                const car = new Object(); 
                car.brand = "Tesla"; 
                car.model = "Model S"; 
                car.year = 2022; 
                `}</code></pre>
                        <li>Object.create(): 프로토타입을 기반으로 새로운 객체 생성</li>
                        <pre><code>{`
                const prototype = { type: "vehicle" };
                const car = Object.create(prototype); 
                car.brand = "Tesla";
                `}</code></pre>
                    </ol>
                </li>
            </ul>


            <p>객체 속성 접근</p>
            <ol>
                <li>점 표기법. 예: console.log(person.name);
                    <ul><li>키가 고정된 문자열이여야 함</li></ul>
                </li>
                <pre><code>{`
            const person = { name: "철수", age: 30 }; 
            console.log(person.name);  // "철수" 
            console.log(person.age);   // 30
            `}</code></pre>
                <li>대괄호 표기법. 예: console.log(person[key]);</li>
                <pre><code>{`
            const person = { name: "철수", age: 30 };
            console.log(person["name"]);  // "철수" 
            
            const key = "age" 
            console.log(person[key]);  // 30
            `}</code></pre>
            </ol>

            <p>객체의 주요 메서드</p>
            <ol>
                <li>Object.keys(): 객체의 모든 키를 배열로 반환</li>
                <pre><code>{`
            const person = { name: "철수", age: 30 };
            console.log(Object.keys(person));  // ["name", "age]
            `}</code></pre>
                <li>Object.values(): 객체의 모든 값을 배열로 반환</li>
                <pre><code>{`
            console.log(Object.values(person));  // ["철수", 30]
            `}</code></pre>
                <li>Object.entries(): 객체의 키와 값을 배열 형태로 반환</li>
                <pre><code>{`
            console.log(Object.entries(person));  // [["name", "철수"], ["age", 30]]
            `}</code></pre>
                <li>Object.assign()</li>
                <pre><code>{`
            const additionalInfo = { job: "개발자" }; 
            const combined = Object.assign({}, perosn, additionalInfo); 
            console.log(combined);  // { name: "철수", age: 30, job: "개발자" }
            `}</code></pre>
            </ol>

            <p>객체 속성 추가와 삭제</p>
            <ul><li>속성 추가: 점 표기법 또는 대괄호 표기법으로 추가</li>
                <pre><code>{`
            // 점 표기법
            const person = { name: "철수" };
            person.age = 30;
            console.log(person); // { name: "철수", age: 30 }

            // 대괄호 표기법
            const person = { name: "철수" };
            person["age"] = 30;

            console.log(person["name"]); // "철수"
            console.log(person["age"]); // 30

            console.log(person); // { name: "철수", age: 30 }
            `}</code></pre>
                <li>속성 삭제: delete 키워드 사용</li>
                <pre><code>{`
            delete person.age; 
            console.log(person);  // { name: "철수" }
            `}</code></pre>
            </ul>

            <p>대괄호 표기법의 특징</p>
            <ul><li>동적 속성 이름 사용 가능:
                <ul><li>점 표기법은 정적인 키 이름을 사용할 때 적합하지만, 대괄호 표기법은 동적으로 키를 생성하거나 접근할 때 유용함</li>
                    <li>예시1:</li>
                    <pre><code>{`
            const key = "age";
            person[key] = 30; // 동적으로 속성 추가
            console.log(person[key]); // 30
            `}</code></pre>
                    <li>예시2:</li>
                    <pre><code>{`
            const keyName = "age";

            const dog = {
            name: "Jindo",
            [keyName]: 5  // keyName 변수의 값이 키가 됨!
            };

            console.log(dog);           // { name: "Jindo", age: 5 }
            console.log(dog[keyName]);  // 5
            `}</code></pre>
                </ul>
            </li>
                <li>변수 또는 문자열로 속성 접근:
                    <ul><li>속성 이름이 변수, 공백이 포함된 문자열 또는 특수 문자인 경우 대괄호 표기법이 필요함</li></ul>
                    <pre><code>{`
            const person = {};

            // 공백이 포함된 키
            person["first name"] = "철수";
            console.log(person["first name"]); // "철수"

            // 특수 문자 포함 키
            person["@nickname"] = "철";
            console.log(person["@nickname"]); // "철"
            `}</code></pre>
                </li>
            </ul>


            <p>객체와 반복</p>
            <ol><li>for...in 반복문: 객체의 속성을 순회할 때 사용</li>
                <pre><code>{`
            const person = { name: "철수", age: 30 };
            for (const key in person) {
                console.log(₩S{key}: S{person[key]}₩);
            }
            // 출력:
            // name: 철수
            // age: 30

            `}</code></pre>
                <li>Object.entries()를 사용해 키와 값을 함께 순회
                    <pre><code>{`
            for (const [key, value] of Object.entries(person)) { 
                console.log(₩S{key}: S{value}₩);
            }
            `}</code></pre>
                </li>
            </ol>

            <pre><code>{``}</code></pre>


            <h4>기본 내장 함수</h4>
            <ul><li>배열, 문자열, 객체 등 양한 데이터 타입을 쉽게 다룰 수 있도록 자바스크립트에서 미리 제공하는 함수</li></ul>

            <p>배열의 기본 내장 함수</p>
            <ol><li>요소의 추가와 제거
                <ul><li>push(): 배열의 끝에 요소 추가</li>
                    <li>pop(): 배열의 마지막 요소 제거</li>
                    <li>shift(): 배열의 첫 번째 요소 제거</li></ul>
            </li>
                <li>요소 탐색
                    <ul><li>indexOf(): 배열에서 특정 요소의 인덱스를 반환. 요소가 없으면 1 반환.</li>
                        <li>includes(): 배열에 특정 요소가 있는지 확인; 반환값은 true 또는 false</li></ul>
                </li>
                <li>배열 변형
                    <ul><li>reverse(): 배열의 요소 순서를 뒤집는다</li>
                        <li>sort(): 배열의 요소 정렬.</li></ul>
                </li>
                <li>요소 복사와 추출
                    <ul><li>slice: 배열의 일부 복사; 원본 배열은 변경되지 않는다
                        <pre><code>{`
                const fruits = ["apple", "banana", "cherry", "date"];
                const sliced = fruits.slice(1, 3);
                console.log(sliced); // ["banana", "cherry"]                
                `}</code></pre>
                    </li>
                        <li>splice: 배열에서 특정 위치의 요소 제거/추가; 원본 배열이 변경된다
                            <pre><code>{`
                const fruits = ["apple", "banana", "cherry"];
                fruits.splice(1, 1, "grape"); // 1번 인덱스에 "grape" 추가, "banana" 제거
                console.log(fruits); // ["apple", "grape", "cherry"]
                `}</code></pre>
                        </li></ul>
                </li>
            </ol>

            <p>객체의 내장 함수</p>
            <ol><li>객체 탐색
                <ul><li>Object.keys(): 객체의 모든 키를 배열로 반환</li>
                    <li>Object.values(): 객체의 모든 값을 배열로 반환</li>
                    <li>Object.entries(): 각 키-값 쌍이 배열로 묶인 형태의 배열 반환</li></ul>
            </li>
                <li>객체 생성
                    <ul><li>Object.assign(): 객체를 복사하거나 여러 객체를 하나로 합칠 때
                        <pre><code>{`
            const person = { name: "철수" };
            const additionalInfo = { age: 30, job: "개발자" };

            const combined = Object.assign({}, person, additionalInfo);
            console.log(combined); // { name: "철수", age: 30, job: "개발자" }
            `}</code></pre>
                    </li>
                        <li>Object.create(): 특정 프로토타입을 가진 객체 생성
                            <pre><code>{`
            const prototype = { greet: function() { console.log("Hello!"); } };
            const person = Object.create(prototype);
            person.name = "철수";

            console.log(person.name); // "철수"
            person.greet(); // "Hello!"
            `}</code></pre>
                        </li></ul>
                </li>
                <li>속성 정의 및 조작
                    <ul><li>Object.defineProperty()</li>
                        <li>Object.defineProperties()</li></ul>
                </li>
                <li>속성 확인 및 비교
                    <ul><li>Object.hasOwnproperty(): 객체에 특정 키가 존재하는지 확인</li>
                        <li>Object.is(): 두 값이 엄격하게 같은지 비교</li></ul>
                </li>
                <li>객체 고정 및 보호
                    <ul><li>Object.freeze(): 객체를 동결해 수정할 수 없게 만듬. 새 속송 추가 혹은 기존 속성 변경 불가.</li>
                        <li>Object.seal(): 객체의 속성 추가 혹은 삭제 불가. 기존 속성 값은 수정 가능.</li></ul>
                </li>
            </ol>


            <p>문자열의 내장 함수</p>
            <ol><li>문자 검색
                <ul><li>indexOf(): 문자열에서 특정 문자 또는 첫 번째 인덱스 반환</li>
                    <li>includes(): 문자열에 특정 문자 또는 문자열이 포함되어 있는지 확인</li>
                </ul>
            </li>
                <li>문자 변환
                    <ul><li>toUpperCase()</li>
                        <li>toLowerCase()</li></ul>
                </li>
            </ol>



        </div >
    )
}

export default TIL0219