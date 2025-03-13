import React from 'react'

const TIL0219 = () => {
  return (
    <div className='BlogDaily'>
<h3>Javascript 4</h3>
                가제: 이렇게 코딩하면 안됩니다.
                <h4>원시 & 참조 타입</h4>
                <ol>
                    <li>값 자체를 저장 vs 주소값을 저장</li>
                    <li>원시 값 자체를 복사 vs 주소값을 복사</li>
                    <li>변경 불가능한 값 vs 변경이 가능한 값</li>
                </ol>

                <h4>스코프</h4>
                <ul><li>일반적으로 스코프는 사격 시 목표물을 정확히 조준하기 위해 사용</li>
                <li>자바스크립트에서의 스코프는 "변수의 유효범위"로 사용</li>
                <li>바깥쪽 스코프에서 선언한 변수는 안쪽 스코프에서 사용 가능하지만</li>
                <li>안쪽 스코프에서 선언한 변수는 바깥쪽 스코프에서 사용 불가능함</li>
                <li>베그에서 안에 있음 밖이 보이지만 밖에선 안이 안 보이는 것과 비슷</li></ul>

                <h4>window 객체</h4>
                브라우저에만 존재하는 객체.
                함수 선언식으로 함수를 선언하거나 var로 선언된 전역 변수 및 전역 함수는 window 객체에 속하게 됨. <br/>
                나중에 클라이언트 지갑, 메마 연결할 때 사용할 수 있음.

                <h4>권장 사항</h4>
                <ol>
                    <li>전역 변수는 최소화</li>
                    <ul>
                        <li>CSS 관심사 분리</li>
                    </ul>
                    <li>let, const 사용</li>
                    <ul>
                        <li>var는 블록 스코프를 무시함. 또한 같은 이름의 변수를 재선언 해도 에러를 내지 않음.
                        </li>
                    </ul>
                    <li>선언 없는 변수 할당 금지</li>
                    <li>실수 방지 위해 Strict Mode 사용</li>
                </ol>

                <h4>클로져</h4>
                함수 안쪽에서 바깥쪽의 변수를 사용할 수 있지만 그 반대는 안된다는 것. <br/>
                외변접내: 외부 함수의 변수에 접근할 수 있는 내부 함수 <br/>
                {/* <br>클로저가 중요한 이유: <br>
                클로저의 함수는 어디에서 호출되느냐와 무관하게 선언된 함수 주변 환경에 따라 접근할 수 있는 변수가 정해짐.

                <h4>클로저의 특징을 활용한 사례</h4>
                <ul>
                    <li>데이터를 보존하는 함수</li>
                    <ul>아래 코드에서 getFoodRecipe가 클로저로서
                        foodName, ingredient1, ingredient2에 접근할 수 있음. <br>
                        이 때 createFoodRecipe('하이볼')으로 전달된 문자열 '하이볼'은 recipe 함수 호출 시 계속 재사용할 수 있음.<br>
                        <br> function createFoodRecipe (foodName) {
                        <ul>let ingredient1 = '탄산수';</ul>
                        <ul>let ingredient2 = '위스키';</ul>
                        <ul>const getFoodRecipe = function () {</ul>
                        <ul>return `${ingredient1} + ${ingredient2} = ${foodName}!`;}</ul>
                        <ul>return getFoodRecipe</ul>
                        <br>
                        <ul> const recipe = createFoodRecipe('하이볼');</ul>
                        <ul>recipe(); // '탄산수 + 위스키 = 하이볼!'</ul><br>
                    </ul>
                    <li>커링</li>
                    <ul>
                        <li>여러 전달인자를 가진 함수를 함수를 연속적으로 리턴하는 함수로 변경하는 행위</li>
                        <ul>function sum(a, b) {return a + b;}</ul><br>
                        <ul>function currySum(a)
                            <ul>{return function (b) {
                                <ul>return a + b; }; }</ul>
                            </ul>
                        </ul><br>
                        <ul>console.log(sum(10,20) === currySum(10)(20))</ul>
                    </ul>
                    <ul>
                        <li>전체 프로세스의 일정 부분까지 실행하는 경우 유용 </li>
                    </ul><br>
                    <li>모듈 패턴
                        <ul>
                            <li>모듈은 하나의 기능을 온전히 수행하기 위한
                                모든 코드를 가지고 있는 코드 모음으로 하나의 단위로서 역할을 함.
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>클로저는 특정 데이터를 다른 코드의 실행으로부터 보호해야할 때 용이하다.</p>

                <h4>spread/rest 문법</h4>
                <ul>
                    <li>spread 문법
                        <ul>
                            <li>배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소로 넣을 때 사용</li>
                        </ul>
                        <ul>function sum(x, y, z) {<br>
                            <ul>return x + y + z; } </ul><br>
                            <ul>const numbers = [1, 2, 3];</ul>
                            <ul>sum(...numbers) //6</ul>
                        </ul>

                    </li>
                    <li>rest 문법
                        <ul>
                            <li>파라미터를 배열의 형태로 받아서 사용할 수 있음.</li>
                            <ul>function sum(...theArgs) {
                                <ul>return theArgs.reduce((previous, current) => {
                                    <ul>return previous + current; }); }</ul>
                                </ul>
                            </ul><br>
                            <ul>sum(1,2,2) ///6</ul>
                        </ul>
                    </li>
                </ul>

                <h4>화살표 함수</h4>
                <p>함수를 정의하는 방법:
                <ul>
                    <li>함수 선언문
                        <ul>function sum (x, y) { </ul>
                        <ul>return x + y; }</ul>
                    </li>
                    <li>함수 표현식
                        <ul>const subtract = function (x, y) {</ul>
                        <ul>return x - y; }</ul>
                    </li>
                </ul>
                </p>
                <p>여기에 더해 화살표 함수가 있음. function 키워드 대신 화살표(=>)를 사용함.
                <ul>const multiply = (x, y) => {</ul>
                <ul>return x * y; }</ul>
                매개변수가 한 개일 때 소괄호 생략 가능.<br>
                함수 코드 블록 내부가 하나의 문으로 구성되어 있다면 중괄호 생략 가능.
                </p> */}


    </div>
  )
}

export default TIL0219