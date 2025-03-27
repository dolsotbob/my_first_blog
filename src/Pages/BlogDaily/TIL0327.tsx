import React from 'react'
import attackContract from "../../assets/attackContract.png"
import interfaceVsAbstract from "../../assets/interfaceVsAbstract.png"
import libraryVsContract from "../../assets/libraryVsContract.png"

const TIL0327 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 27일</p>
            <h3>Solidity - 기본 문법 4</h3>
            <ul><li>주요 전역 번수와 전역 함수</li>
                <li>상속Inheritance</li>
                <li>인터페이스와 추상 계약</li>
                <li>라이브러리</li>
            </ul>

            <h3>주요 전역 변수와 전역 함수</h3>
            <ul><li>이더리움 불록체인의 상태 및 트랜잭션 데이터를 쉽게 접근할 수 있도록 도와줌</li></ul>

            <h4>전역 변수Global Variables</h4>
            <p>이더리움 블록체인에서 스마트 계약 실행 시 자동으로 제공되는 읽기 전용 데이터로 주로 블록, 트랜잭션, 메세지에 대한 정보를 제공
            </p>
            <ul><li>msg.sender: 현재 함수를 호출한 주체의 주소; address 타입</li>
                <li>msg.value: 호출 시 전송된 이더의 양(wei 단위); uint 타입</li>
                <li>msg.data: 호출 시 전송된 데이터 전체; bytes 타입</li>
                <li>tx.origin: tx을 시작한 외부 계정 주소; 스마트 계약에서 호출되더라도 최초 발신자의 주소 변환; address 타입
                    <ul><li>보안상 취약한 부분이 있음; 쌤은 실무에서 한 번도 사용해 보지 않으셨음</li></ul>
                </li>
                <li>block.timestamp: 현재 블록이 생성된 시간 (초 단위, 유닉스 타임스탬프); uint 타입</li>
                <li>block.number: 현재 블록의 번호; uint 타입</li>
                <li>block.prevrandao: 이전 블록의 난수 값
                    <ul><li>이더리움이 PoS로 전환되면서 block.difficulty대체</li>
                        <li style={{ color: 'deeppink' }} >Solidity에서 랜덤 값을 구할 때: </li>
                        <pre><code>{`
                    function getRandom() external view returns (uint256) {
                        return uint256(keccak256
                            (abi.encodePacked(block.prevrandao, msg.sender, block.timestamp))
                            );
                    }
                    `}</code></pre>
                    </ul>
                </li>
                <li>block.gaslimit: 현재 블록의 가스 한동(전체 사용 가능한 가스의 양)
                    <ul><li>gas limit 책정 방법: ethers.js나 web3.js에서 우리 컴퓨터로 몇 번 돌려보면서 가스 평균치를 내서 씀(estimate gas)</li></ul>
                </li>
                <li>block.coinbase: 현재 블록을 채굴한 채굴자의 주소; address 타입</li>
                <li>gasleft(): 현재 실행 중인 함수에 남아 있는 가스량; uint 타입 </li>
            </ul>

            <h4>msg.sender와 tx.origin의 차이를 보여주는 예시</h4>
            <ol><li>EOA가 tx을 실핸한다(사용자가 어떤 tx을 처음 시작한다)</li>
                <li>컨트랙트 1이 호출되고, 컨트랙트 1의 함수가 실행된다</li>
                <li>컨트랙트 1은 그 내부에서 컨트랙트 2를 호출한다</li></ol>
            <ul><li>여기서 msg.sender는 컨트랙트 1이 컨트랙트 2를 호출하기 때문에, 컨트랙트 1이 msg.sender로 설정됨</li>
                <li>tx.origin은 트랜잭션을 처음 시작한 주소인 EOA로 설정됨</li>
                <li>따라서, 컨트랙트 2에서 msg.sender는 컨트랙트 1, tx.origin은 EOA가 된다</li></ul>

            <p>tx.origin을 사용한 컨트랙트 보안의 취약성을 사용해 공격하는 예시</p>
            <img className="attackContract" src={attackContract} alt="attack-contract-code-image"></img>

            <h4>전역 함수</h4>
            <p>스마트 계약 내에서 호출할 수 있는 내장 함수로 주로 tx 관리나 블록 상태 추적에 사용됨</p>
            <ul><li>gasleft(): 현재 tx에 남아있는 가스 양 확인</li>
                <li>keccak256(): 입력된 데이터 해시 처리(SHA3)</li>
                <li>blockhash*(uint): 특정 블록 번호에 대한 해시 값을 반환(256개 이내의 최근 블록)</li></ul>

            <h4>전역 변수와 함수의 활용 시 주의 사항</h4>
            <ol><li>보안 문제
                <ul><li>tx.origin은 재진입 공격에 취약해 인증에 사용X</li>
                    <li>대신 msg.sender를 활용하는 것이 권장됨</li></ul>
            </li>
                <li>타임스탬프 조작
                    <ul><li>block.timestamp는 채굴자에 의해 소폭 자작될 수 있음(약 15초 범위 내에서)</li>
                        <li>시간 기반 게임 로직에 주의 필요</li></ul>
                </li>
                <li>가스 관리
                    <ul><li>반복문이나 복잡한 로직은 가스 비용 증가에 주의</li>
                        <li>gasleft() 함수를 활용해 남은 가스량을 실시간으로 추적</li></ul>
                </li></ol>

            <h3>상속Inheritance</h3>
            <ul><li>OOP에서 파생된 개념</li>
                <li>기존 계약의 기능을 확정하거나 재사용하기 위한 기능</li>
                <li>특징:
                    <ul><li>코드 재사용</li>
                        <li>계약의 유지 보수 용이성</li>
                        <li>가독성 향상 및 코드의 명확성 증가</li></ul>
                </li></ul>

            <h4>기본 상속 문법</h4>
            <ul><li>is 키워드로 부모 계약 상속</li>
                <li>자식 계약은 부모 계약의 함수나 변수에 접근할 수 있음</li>
                <li>상속된 함수와 상태 변수는 별도의 선언 없이도 사용 가능</li>
                <li>자식 파일에서 부모 컨트랙트를 import 할 수 있음</li>
                <li>JavaScript와 다른 점: Solidity에서는 가시성이 있음</li>
            </ul>

            <h4 style={{ color: 'deeppink' }}>함수 Overriding</h4>
            <ul><li>"다형성"과 "확장성"을 위한 기능</li>
                <li>다형성: 하나의 함수가 여러 형태를 가질 수 있다는 의미
                    <ul><li>Animal 부모 클래스에서 소리를 출력하도록 하고, Cat, Dog 자식 클래스에서 “야옹” “멍멍” 등 다르게 출력하도록 하는 것</li>
                        <li>코드 유연성을 높이고 코드 중복 줄일 수 있음</li></ul>
                </li>
                <li>확장성: 기존 코드를 변경하지 않고 새 기능을 추가하거나 기존 기능을 변경할 수 있음</li>
                <li>virtual과 override 사용 </li></ul>

            <h4>다중 상속 예시</h4>
            <pre><code>{`
            // 부모 계약 A
            contract A {
                function getValue() public pure virtual returns (string memory) {
                    return "A";
                }
            }

            // 부모 계약 B
            contract B {
                function getValue() public pure virtual returns (string memory) {
                    return "B";
                }
            }

            // 자식 계약 C (A와 B를 상속)
            contract C is A, B {
                function getValue() public pure override(A, B) returns (string memory) {
                    return "C";
                }
            }
            `}</code></pre>

            <ul><li>우선 순위를 내가 컨트랙트 안에서 정할 수 있다</li>
                <li>상속 우선순위는 상속 선언 순서에 따라 결정됨</li></ul>

            <h4>접근 제어자Visibility Specifiers와 상속</h4>
            <ul><li>public: 상속받은 계약에서 접근 가능</li>
                <li>internal: 상속받은 계약에서 접근 가능 (외부에서는 접근 불가)</li>
                <li>private: 상속받은 계약서에서도 접근 불가</li></ul>

            <h3>인터페이스와 추상 계약</h3>
            <h4>인터페이스Interface</h4>
            <ul><li>외부 계약 이 따를 수 있는 표준 함수 시그니처만 정의하는 계약</li>
                <li>특징:
                    <ul><li>함수 정의만 존재하고 구현은 없음</li>
                        <li>상태 변수는 가질 수 없음</li>
                        <li>모든 함수는 external로 선언되어야 함</li>
                        <li>다른 계약에서 상속받아 구현해야 함</li></ul>
                </li>
                <li>문법: </li>
                <pre><code>{`
                interface IExample { 
                    function doSomething(uint256 value) external returns (bool);
                }
                `}</code></pre>
            </ul>

            <h4>추상 계약Abstract Contracts</h4>
            <ul><li>하나 이상의 구현되지 않은 함수를 가진 계약</li>
                <li>주로 기본 로직이나 공통 기능을 정의하고, 이를 상속받은 계약에서 구현하도록 설계됨</li>
                <li>중복 코드 제거할 수 있음</li>
                <li>특징:
                    <ul><li>직접 배포할 수 없음</li>
                        <li>최소한 하나 이상의 virtual 함수가 존재해야 함</li>
                        <li>상속받은 계약에서 반드시 override 해야 함</li></ul>
                </li>
                <li>문법:</li>
                <pre><code>{`
                abstract contract BaseContract { 
                    function doTask() public virtual returns (string memory);
                }
                `}</code></pre>
            </ul>

            <h4>인터페이스 vs 추상 계약 비교</h4>
            <img className="interfaceVsAbstractContract" src={interfaceVsAbstract} alt="interface-vs-abstract-contract-img"></img>

            <h3>라이브러리</h3>
            <ul><li>Solidity에서 재사용 가능한 코드 집합</li>
                <li>스마트 계약과 유사하지만, 상태 변수가 없고, 배포 불가능하며, 오직 함수 집합만을 제공</li>
                <li>특징:
                    <li>library 키워드를 사용해 정의함</li>
                    <li>pure 또는 view 함수를 주로 포함함</li>
                    <li>스마트 계약에서 직접 호출되거나 using for 구문을 통해 사용할 수 있음</li>
                    <li>내장된 가스 최적화 기능이 적용됨</li>
                </li>
                <li>문법: </li>
                <pre><code>{`
            library LibraryName { 
                function functionName(parameters) public pure returns (type) {
                    // logic here 
                }
            }
            `}</code></pre>
            </ul>

            <h4>using for 구문 활용</h4>
            <ul><li>라이브러리 함수를 특정 데이터 타입에 연결시켜, 메서드 형식으로 사용할 수 있게 해줌</li>
                <li>장점:
                    <ul><li>코드의 가독성이 높아짐</li>
                        <li>특정 데이터 타입에 맞는 함수를 명확하게 사용할 수 있음</li></ul>
                </li>
                <li>문법: using LibraryName for Type; </li>
            </ul>

            <h4>라이브러리 vs. 계약의 차이점</h4>
            <img className="libraryVsContract" src={libraryVsContract} alt="library-vs-contract-img"></img>


        </div>
    )
}

export default TIL0327

