import React from 'react'

const TIL0217 = () => {
    return (
        <div className='BlogDaily'>

            <h3>Javascript 2</h3>
            <p>2025년 2월 17일</p>
            <h4>조건문 if</h4>
            <ul><li>동치연산자 === 는 두 피연산자가 동일하면 true, 아니면 false를 반환</li>
                <li>!== 는 반대로 두 피연산자가 동일하지 않으면 true, 동일하면 false를 반환</li>
                <li>비교연산자</li>
                <li>논리연산자 &&, ||: ||은 여러 조건 중 하나만 true 여도 true로 판단함. && 은 여러 조건 중 하나라도 false면 false로 판단</li>
                <li>부정연산자 !는 조건이 true이면 false, 조건이 false이면 true를 리턴함</li>
            </ul>


            <p>삼항 조건 연산자</p>
            <ul><li>if문과 else 문을 삼항 조건 연산자로 바꿔쓸 수 있음</li></ul>
            <pre><code>{`
            let num = 5; 
            num % 2 === 0 ? console.log('짝수') : console.log('홀수')  // '홀수' 
            `}</code></pre>
            <ul><li>위 코드는 아래 코드와 동일하게 작동동</li></ul>
            <pre><code>{`
            let num = 5; 
            if(num % 2 === 0) { 
                console.log('짝수');
                } else { 
                console.log('홀수')} 
            `}</code></pre>

            <h4>반복문</h4>
            <p>반복문 for문</p>
            <ul><li>for (초기값; 조건식; 증감식) {'실행코드'}</li></ul>

            <p>문자열과 반복문</p>
            <ul><li>실습: 문자열의 첫 번째 문자부터 마지막 문자까지 모두 출력하는 코드 만드세요</li>
                <pre><code>{`
            let str = "rocketboost"; 
            for (let i = 0; i < str.length; i++) {
                console.log(str[i]);
            }
            `}</code></pre>
            </ul>


            <p>반복문의 중첩</p>
            <ul><li>반복문 내부에 또 다른 반복문을 사용할 수 있음. 단, 컴퓨터가 느려질 수 있음.</li>
                <li>예시: 정육면체 주사위 두 개를 굴려 나올 수 있는 모든 경우의 수 구하기
                    <pre><code>{`
            for (let i = 1; i <= 6; i++) {
	            for (let j = 1; j <= 6; j++) {
                    console.log(W첫번째 주사위는 S{i}, 두번째 주사위는 S{j} 입니다.W);
                }
            }
            `}</code></pre>
                    <ul><li>위 코드 실행 순서:
                        <ol><li>변수 i를 선언하고 1을 할당</li>
                            <li>i가 6보다 작거나 같은지 평가
                                <ol><li>변수 j를 선언하고 1을 할당</li>
                                    <li>변수 j가 6보다 작거나 같은지 평가
                                        <ol><li>i와 j를 각각 출력 (첫 번째 주사위는 1, 두 번째 주사위는1)</li>
                                            <li>j가 1 증가한다</li></ol>
                                    </li>
                                    <li>변수 j가 6보다 작거나 같은지 평가
                                        <ol><li>i와 j를 각각 출력 (첫 번째 주사위는 1, 두 번째 주사위는2)</li>
                                            <li>j가 1 증가한다</li></ol>
                                    </li>
                                </ol>
                            </li>
                            <li>...(중략)...</li>
                            <li>(첫 번째 주사위는 6, 두 번째 주사위는6) 출력 후 &rarr; j가 1증가</li>
                            <li>변수 j가 6보다 작거나 같은지 평가 &rarr; 내부 반복문 종료</li>
                            <li>i가 1 증가 &rarr; i가 6보다 작거나 같은지 평가 &rarr; 외부 반복문 종료</li>
                        </ol>
                    </li></ul>
                </li>
            </ul>

            <p>while문</p>
            <ul><li>조건식만 입력한 후 조건식의 평가결과가 true인 경우 코드블록 내부의 코드를 반복해 실행행
                <pre><code>{`
            let num = 0;

            while (num < 3) {
                console.log(num); // 0 1 2
                num++
            }
            `}</code></pre>
                <ul><li>위 코드를 for문으로 바꾸면 다음과 같음</li></ul>
                <pre><code>{`
            let num = 0;

            for (let num = 0; num < 3; num++) {
                console.log(num); // 0 1 2
            }
            `}</code></pre>
            </li>
                <li>언제까지 반복할 지 모를 때 사용. 예를 들어 내 폴더 안에 몇 개의 파일이 있는지 모를 때</li>
                <li>while문 작성할 때 조건식이 false로 평가되는 순간이 있는지 반드시 주의. 무한 루프 주의</li>
            </ul>

            <p>do...while문</p>
            <ul><li>while 뒤에 오는 조건식이 true로 평가되는 동안 do 뒤에 오는 코드블록 내부의 코드를 반복해서 실행</li>
                <li>단, 이 경우 do의 코드블록 내부의 코드가 최소 한 번은 실행됨
                    <pre><code>{`
            do {
                console.log('코드블록 내부의 코드는 최소 한 번은 실행됩니다.') 
                // '코드블록 내부의 코드는 최소 한 번은 실행됩니다.'
            } while (false)
            `}</code></pre>
                    <ul><li>뒤에 오는 조건식이 항상 False임에도 do의 코드블록 내부에 있는 코드가 한 번은 실행됨</li></ul>
                </li></ul>

        </div>
    )
}

export default TIL0217