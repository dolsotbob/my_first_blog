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

            <h3>함수</h3>
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
                <li>payable: 이더리움을 받을 수 있는 함수</li>
            </ul>

            <h4>반환값Return Value</h4>
            <ul><li>함수는 returns 키워드를 사용해 반환값의 타입을 지정할 수 있음</li>
                <li>여러 값 반환도 가능. 튜플 형태로 반환</li>
                <li>반환값이 있는 함수 예시:</li>
            </ul>
            <pre><code>{`
                contract ReturnExample {
                    function getDouble(uint256 number) public pure returns (uint256) {
                        return number * 2;
                    }

                    function getUser() public pure returns (string memory, uint256) {
                        return ("Alice", 30);
                    }
                }
            `}</code></pre>

            <h4>함수 호출 방법</h4>
            <ul><li>내부 호출: internalFunction()을 직접 호출할 수 있음</li>
                <li>외부 호출: this.externalFunction() 형식으로 접근해야 함</li>
                <pre><code>{`
                function callExternal() public view returns (string memory) { 
                    return this.externalFunction();
                }
                `}</code></pre>
            </ul>

            <h4>접근 제어자Modifier</h4>
            <ul><li>특정 조건을 충족할 때만 함수를 실행하도록 설정할 수 있음</li>
                <li>modifier는 함수를 실행하기 전에 특정 조건을 검사하는 데 유용함</li>
                <pre><code>{`
                contract ModifierExample {
                    address public owner;

                    constructor() {
                        owner = msg.sender;
                    }

                    modifier onlyOwner() {
                        require(msg.sender == owner, "Not the contract owner");
                        _;
                    }

                    function secureFunction() public onlyOwner {
                        // 소유자만 실행 가능
                    }
                }
                `}</code></pre>
                <li>_; 는 실제 함수 로직이 실행된다는 뜻</li>
                <li>_; 위치에 따라 어디서 조건을 확인할지 결정됨</li>
            </ul>

            <h4>함수 오버로딩</h4>
            <ul><li>같은 이름의 함수를 서로 다른 매개변수로 선언할 수 있음</li>
                <li>동일한 함수 이름을 사용하지만, 매개변수에 따라 다른 함수가 호출됨</li>
                <li>매개변수 있을 때는 이렇게, 없을 때는 저렇게 하고 싶다고 하는 것</li>
            </ul>

            <h4>storage, memory, calldata</h4>
            <ul><li>참조 타입: (배열, 구조체, 매핑 등) 데이터는 딴 곳에 있고 메모리에는 주소만 있음</li>
                <li>참조 타입을 함수에서 다룰 때 데이터를 어디에 저장할 지 명확히 지정해야 한다. 이를 위해 storage, memory, calldata 3가지 키워드를 사용함</li>
            </ul>
            <ol><li>storage: Persistent Storage
                <ul><li>함수를 통해 접근할 때 상태 변수를 직접 참조하기 위해 사용</li>
                    <li>가스 비용이 높지만 블록체인에 영구적으로 데이터 기록</li></ul>
            </li>
                <li>memory: Temporary memory
                    <ul><li>함수 호출 중에만 데이터 저장; 실행 끝나면 자동으로 삭제</li>
                        <li>주로 계산에 필요한 임시 데이터를 저장하거나 상태 변수의 복사본을 만들 때 사용됨</li>
                        <li>수정해도 원본 상태 변수는 변경되지 않음</li>
                        <li>함수가 끝나면 복사된 데이터는 삭제됨</li>
                        <li>가스 비용이 상대적으로 저렴</li></ul>
                </li>
                <li>calldata: Read-Only External Input
                    <ul><li>외부에서 입력된 데이터를 처리할 때 사용 (함수의 매개변수로 전달됨)</li>
                        <li>데이터를 복사하지 않고 직접 참조 → 가스 비용이 가장 낮음</li>
                        <li>읽기 전용이며 입력받은 데이터를 수정할 수 없음</li>
                        <li>주로 대량의 입력 데이터 처리에 사용됨</li>
                        <li>external 가시성을 가진 함수에서 주로 사용됨</li>
                    </ul>
                </li>
            </ol>

            <p>차이점을 볼 수 있는 예시</p>
            <pre><code>{`
            contract DataLocationExample {
                uint256[] public numbers;

                // 상태 변수(numbers)에 값을 저장 (영구 저장소)
                function addNumber(uint256 _number) public {
                    numbers.push(_number);
                }

                // 상태 변수를 참조 (영구적으로 변경)
                function updateFirstNumber(uint256 _newNumber) public {
                    uint256[] storage storedNumbers = numbers;
                    storedNumbers[0] = _newNumber; // 상태 변수 값 변경
                }

                // 상태 변수 복사 (임시 데이터로 처리)
                function getFirstNumber() public view returns (uint256) {
                    uint256[] memory copiedNumbers = numbers;
                    return copiedNumbers[0]; // 상태 변수를 복사해서 반환
                }

                // 외부 데이터 입력 처리 (읽기 전용)
                function logExternalData(uint256[] calldata externalData) external pure returns (uint256) {
                    return externalData[0]; // 외부 입력 데이터를 반환 (변경 불가)
                }
            }
            `}</code></pre>

            <h4>조건문 및 반복문Control Structure</h4>
            <ul><li>스마트 컨트랙트의 동작 흐름을 제어하는 데 사용됨</li></ul>

            <p>반복문 사용 시 주의사항(가스 비용 최적화)</p>
            <ol><li>가스 비용 고려: 반복문은 실행 횟수에 비례하여 가스 비용이 증가함</li>
                <li>무한 루프 방지: 무한 루프 발생 시, 트랜잭션이 실패하고 모든 가스가 소모됨</li>
                <li>최적화된 데이터 구조 사용: 반복문 대신 매핑이나 이벤트를 활용해 가스 비용 절감 가능</li></ol>


            <h3>Solidity에서 이벤트란?</h3>
            <ul><li>스마트 컨트랙트와 외부 애플리케이션(예: DApp 또는 프론트엔드) 간의 통신을 위한 메커니즘</li>
                <li>블록체인에 기록되어 외부에서 읽기 가능</li>
                <li>tnx log로 저장; 영구 저장은 아니지만 검색 가능</li></ul>

            <p>가스 비용 최적화와 이벤트</p>
            <ul><li>이벤트는 가스 비용이 낮음 - 상태 변수에 데이터를 저장하는 것보다 효율적</li>
                <li>로그로 저장되므로 상태 저장 비용 없이 외부에서 데이터 추적할 수 있음</li>
                <li>복잡한 데이터 저장 대신 이벤트를 활용해 가스 비용을 줄이는 것이 일반적</li></ul>

            <h4>Solidity에서 접근 제어자Modifier란?</h4>
            <ul><li>함수 실행 전에 특정 조건을 검사하거나, 공통적인 동작을 재사용 가능하게 만드는 기능</li>
                <li>주로 접근 제어, 상태 확인, 재사용 가능한 코드 작성에 사용됨</li></ul>

            <h4>Solidity에서 에러 처리란?</h4>
            <p>에러 처리 메커니즘</p>
            <ul><li>require() → 조건 검사 및 입력값 검증</li>
                <li>revert() → 명시적으로 오류 발생</li>
                <li>assert() → 내부 논리 오류 체크 (코드의 일관성 유지)</li>
                <li>try/catch → 외부 호출 실패를 처리</li></ul>

            <h4>Solidity에서 이더 송금이란?</h4>
            <p>Solidity에서는 이더를 스마트 컨트랙트 간에 송금하거나 스마트 컨트랙트에서 외부 계정으로 이더를 전송할 수 있음</p>
            <p>이더 송금을 위한 3가지 방법:</p>
            <ul><li>transfer() → 안전한 이더 송금 (가스 제한: 2300)</li>
                <li>send() → 실패 시 반환값으로 성공 여부 확인</li>
                <li>call() → 가장 유연하지만 주의가 필요한 송금 방법</li>
            </ul>

        </div>
    )
}

export default TIL0326