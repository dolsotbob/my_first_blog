import React from 'react'

const TIL0326 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 26일</p>
            <h3>Solidity - 기본 문법 3: 변수와 함수</h3>

            <h4>변수 선언</h4>
            <ul><li>Solidity에서 변수는 데이터를 저장하고 관리하는 데 사용됨</li>
                <li>변수를 선언하면 이더리움 블록체인 상의 스마트 컨트랙트에 상태(State)를 유지할 수 있게 됨; 온체인 데이터가 됨</li>
            </ul>

            <p>특징</p>
            <ul><li>변수 선언 시 데이터 타입과 가시성을 명시해야 함</li>
                <li>선언된 변수는 블록체인 상에 저장됨</li>
                <li>public으로 선언된 변수는 자동으로 getter 함수가 생성됨</li>
            </ul>

            <p>변수 선언 형식: </p>
            <pre><code>{`
            uint256 public number = 10;
            `}
            </code></pre>
            <ul><li>데이터 타입 - 가시성 - 변수명 - 초기값 </li></ul>

            <h4>변수의 가시성</h4>
            <ol><li>public: 외부 및 내부에서 접근 가능</li>
                <li>private: 오직 선언된 컨트랙트 내부에서만 접근 가능</li>
                <li>internal: 선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능</li>
                <li>external: 외부에서만 접근 가능 (변수에선 사용 불가, 함수에만 사용 가능)</li>
            </ol>

            <h4>상태 변수 vs 로컬 변수</h4>
            <ul><li>상태 변수는 함수 밖에서, 로컬 변수는 함수 내부에서 선언됨</li>
                <li>상태 변수: 블록체인 저장소에 저장되고 가스 비용 발생됨(쓰기, 읽기 시)</li>
                <li>로컬 변수: 메모리 또는 스택에 저장되고 가스 비용 적음; 함수 실행 시에만 존재하고 실행 후 소멸됨</li></ul>

            <h4>상수Constant 및 불변Immutalbe 변수</h4>
            <ul><li>JavaScript의 const와 비슷</li>
                <li>언제 값을 정하느냐의 차이</li>
                <li>상수: 배포 시점에 고정된 값; 수정 불가능; 읽기 연산에만 사용되어 가스 비용 절감</li>
                <pre><code>{`
                contract ConstantExample {
                    uint256 public constant FIXED_VALUE = 100;
                }
                `}</code></pre>
                <li>불변: 배포 시점에만 설정 가능, 이후에는 변경 불가능; 배포 이후 값이 변경되지 않아 보안성이 향상됨</li>
                <pre><code>{`
                contract ImmutableExample { 
                    address public immutable owner; 

                    constructor() { 
                        owner = msg.sender; // 배포 시점에서만 값 설정 가능 
                    }
                }
                `}</code></pre>
            </ul>

            <h4>Solidity에서 함수란?</h4>
            <ul><li>특정 작업을 수행하는 코드 블록</li>
                <li>외부 호출 또는 내부 로직에서 사용</li>
                <li>상태 변수에 접근하거나 외부에서 데이터를 가져오는 데 사용됨</li>
                <li>가시성 및 상태 변경자(State Mutability)를 설정 가능</li>
            </ul>

            <h4>상태 변경자State Mutability</h4>
            <p>함수가 스마트 컨트랙트의 상태 변수에 어떤 영향을 미치는지를 정의함</p>
            <ul><li>view: 상태 변수의 읽기만 허용(가스 비용 없음)</li>
                <li>pure: 상태 변수의 읽기 및 쓰기 모두 금자(가스 비용 없음)</li>
                <li>payable: 이더리움을 받을 수 있는 함수</li></ul>


        </div>
    )
}

export default TIL0326