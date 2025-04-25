import React from 'react'
import interfaceVsAbstract from "../../assets/interfaceVsAbstract.png"
import libraryVsContract from "../../assets/libraryVsContract.png"
import CodeBlock from '../../components/CodeBlock'
import { til0327globalVariableExample } from '../codeExamples'
import { til0327vulnerableContractExample } from '../codeExamples'
import { til0327blockInfoExample } from '../codeExamples'
import { til0327gasTrackerExample } from '../codeExamples'
import { til0327generateHashExample } from '../codeExamples'

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
            <p>이더리움 블록체인에서 스마트 계약 실행 시 자동으로 제공되는 읽기 전용 데이터</p>
            <p>주로 블록, 트랜잭션, 메세지에 대한 정보를 제공</p>

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

            <p>주요 전역 변수의 활용 예제 1</p>
            <CodeBlock code={til0327globalVariableExample}></CodeBlock>

            <p>msg.sender와 tx.origin의 차이를 보여주는 예시</p>
            <ol><li>EOA가 tx을 실핸한다(사용자가 어떤 tx을 처음 시작한다)</li>
                <li>컨트랙트 1이 호출되고, 컨트랙트 1의 함수가 실행된다</li>
                <li>컨트랙트 1은 그 내부에서 컨트랙트 2를 호출한다</li></ol>
            <ul><li>여기서 msg.sender는 컨트랙트 1이 컨트랙트 2를 호출하기 때문에, 컨트랙트 1이 msg.sender로 설정됨</li>
                <li>tx.origin은 트랜잭션을 처음 시작한 주소인 EOA로 설정됨</li>
                <li>따라서, 컨트랙트 2에서 msg.sender는 컨트랙트 1, tx.origin은 EOA가 된다</li></ul>

            <p>tx.origin을 사용한 컨트랙트 보안의 취약성을 사용해 공격하는 예시</p>
            <CodeBlock code={til0327vulnerableContractExample}></CodeBlock>


            <p>주요 전역 변수의 활용 예제 2 - 블록 정보 확인하기</p>
            <CodeBlock code={til0327blockInfoExample}></CodeBlock>

            <h4>전역 함수</h4>
            <p>스마트 계약 내에서 호출할 수 있는 내장 함수로 주로 tx 관리나 블록 상태 추적에 사용됨</p>
            <ul><li>gasleft(): 현재 tx에 남아있는 가스 양 확인</li>
                <li>keccak256(): 입력된 데이터 해시 처리(SHA3)</li>
                <li>blockhash(uint): 특정 블록 번호에 대한 해시 값을 반환(256개 이내의 최근 블록)</li></ul>

            <p>전역 함수 활용 예제 1 - 가스 소모 추적하기</p>
            <CodeBlock code={til0327gasTrackerExample}></CodeBlock>

            <p>전역 함수 활용 예제 2 - 해시 값 계산하기</p>
            <CodeBlock code={til0327generateHashExample}></CodeBlock>
            <ul><li>keccak256(): 입력된 데이터를 해싱 처리(암호학적으로 안전한 해시 함수)</li></ul>

            <p>전역 변수와 함수의 활용 시 주의 사항</p>
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
            <p>기본 상속 문법</p>
            <pre><code>{`
            // 부모 계약 (Parent Contract)
            pragma solidity ^0.8.0; 

            contract Parent { 
                string public parentName = "Parent Contract"; 

                function greet() public view returns (string memory) { 
                    return "Hello from the Parent Contract!";
                } 
            }

            // 자식 계약 (Child Contract)
            contract Child is Parent { 
                function childGreet() public view returns (string memory) {
                    return "Hello from the Child Contract!"; 
                }
            }
            `}</code></pre>

            <ul><li>is 키워드로 부모 계약 상속</li>
                <li>자식 계약은 부모 계약의 함수나 변수에 접근할 수 있음</li>
                <li>상속된 함수와 상태 변수는 별도의 선언 없이도 사용 가능</li>
                <li>자식 파일에서 부모 컨트랙트를 import 할 수 있음</li>
                <li>JavaScript와 다른 점: Solidity에서는 가시성이 있음</li>
            </ul>

            <h4 style={{ color: 'deeppink' }}>함수 Overriding</h4>
            <pre><code>{`
            // 부모 계약 
            contract Animal { 
                function sound() public virtual pure returns (string memory) { 
                    return "Generic Animal Sound";
                }
            }

            // 자식 계약 
            contract Dog is Animal { 
                function sound() public pure override returns (string memory) {
                    return "Bark";
                }
            }
            `}</code></pre>

            <ul><li>"다형성"과 "확장성"을 위한 기능</li>
                <li>다형성: 하나의 함수가 여러 형태를 가질 수 있다는 의미
                    <ul><li>Animal 부모 클래스에서 소리를 출력하도록 하고, Cat, Dog 자식 클래스에서 “야옹” “멍멍” 등 다르게 출력하도록 하는 것</li>
                        <li>코드 유연성을 높이고 코드 중복 줄일 수 있음</li></ul>
                </li>
                <li>확장성: 기존 코드를 변경하지 않고 새 기능을 추가하거나 기존 기능을 변경할 수 있음</li>
                <li>virtual과 override 사용
                    <ul><li>virtual: 부모 계약에서 오버라이딩 가능하도록 설정</li>
                        <li>override: 자식 계약에서 부모 계약의 함수를 재정의할 때 사용</li></ul>
                </li></ul>

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
            <pre><code>{`
            contract Base { 
                string public publicData = "Public"; 
                string internal internalData = "Internal"; 
                string private privateData = "Private"; 

                function getPrivateData() private pure returns (string memroy) { 
                    return "Only within Base";
                }
            }

            contract Derived is Base { 
                function accessData() public view returns (string memory, string memory) { 
                    // 접근 가능 
                    string memory publicVal = publicData; 
                    string memory internalVal = internalData; 
                    
                    // 접근 불가 (컴파일 에러 발생)
                    // string memory privateVal = privateData; 
                    
                    return (publicVal, internalVal);
                }
            }
            `}</code></pre>


            <h3>인터페이스와 추상 계약</h3>
            <h4>인터페이스Interface</h4>
            <ul><li>외부 계약이 따를 수 있는 표준 함수 시그니처만 정의하는 계약</li>
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
                <li>다형성을 보여주는 예제 (IAnimal 인터페이스를 통해 Dog와 Cat을 동일한 방식으로 사용 가능):
                    <ul><li>인터페이스 정의
                        <pre><code>{`
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.0;

            interface IAnimal {
                function makeSound() external view returns (string memory);                            
            }
                `}</code></pre>
                        <ul><li>interface IAnimal: IAnimal 이라는 이름의 인터페이스 정의</li>
                            <li>makesound 함수는 모든 동물이 구현해야 하는 공통적인 함수</li>
                            <li>external view: 외부에서 호출 가능하며 상태를 변경하지 않음</li>
                            <li>returns (string memory): 문자열 반환</li></ul>
                    </li><br />
                        <li>인테피이스 구현
                            <pre><code>{`
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.0;

            import "./IAnimal.sol";

            contract Dog is IAnimal {
                function makeSound() external pure override returns (string memory) {
                    return "Bark";
                }
            }

            contract Cat is IAnimal {
                function makeSound() external pure override returns (string memory) {
                    return "Meow";
                }
            }
                        `}</code></pre>
                            <ul><li>Dog, Cat 계약은 IAnimal 인터페이스를 구현하고 있음</li>
                                <li>makeSound 함수를 반드시 구현해야 하며 override 키워드를 사용해 명시적으로 재정의</li>
                                <li>pure 키워드는 상태를 변경하거나 읽지 않음을 의미함</li></ul>

                        </li>
                        <li>사용 방법
                            <pre><code>{`
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.0;

            import "./IAnimal.sol";

            contract AnimalSound {
                function getSound(IAnimal animal) public view returns (string memory) {
                    return animal.makeSound();
                }
            }
            `}</code></pre>
                            <ul><li>getSound 함수는 IAnimal 타입의 변수를 받아 makeSound() 함수를 호출함</li>
                                <li>즉 Dog나 Cat 계약의 인스턴스를 IAnimal 타입으로 전달하면, 해당 계약의 makeSound 함수가 실행됨</li></ul>
                        </li></ul>
                </li>
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

                <li>예시 1 - 추상 계약 정의:</li>
                <pre><code>{`
                // SPDX-License-Identifier: MIT
                pragma solidity ^0.8.0;

                abstract contract Animal {
                    string public species;

                    constructor(string memory _species) {
                        species = _species;
                    }

                    // 가상 함수: 자식 계약에서 반드시 오버라이딩 필요
                    function makeSound() public view virtual returns (string memory);
                }
                `}</code></pre>
                <li>예시 2 - 추상 계약 상속 및 구현:</li>
                <pre><code>{`
                // SPDX-License-Identifier: MIT
                pragma solidity ^0.8.0;

                import "./Animal.sol";

                contract Dog is Animal {
                    constructor() Animal("Dog") {}

                    function makeSound() public pure override returns (string memory) {
                        return "Bark";
                    }
                }

                contract Cat is Animal {
                    constructor() Animal("Cat") {}

                    function makeSound() public pure override returns (string memory) {
                        return "Meow";
                    }
                }
                `}</code></pre>
            </ul>

            <h4>인터페이스 vs 추상 계약 비교</h4>
            <img className="interfaceVsAbstractContract" src={interfaceVsAbstract} alt="interface-vs-abstract-contract-img"></img>

            <h3>라이브러리</h3>
            <ul><li>Solidity에서 재사용 가능한 코드 집합</li>
                <li>스마트 계약과 유사하지만, 상태 변수가 없고, 배포 불가능하며, 오직 함수 집합만을 제공</li>
                <li>특징:
                    <ul><li>library 키워드를 사용해 정의함</li>
                        <li>pure 또는 view 함수를 주로 포함함</li>
                        <li>스마트 계약에서 직접 호출되거나 using for 구문을 통해 사용할 수 있음</li>
                        <li>내장된 가스 최적화 기능이 적용됨</li></ul>
                </li>
                <li>문법: </li>
                <pre><code>{`
            library LibraryName { 
                function functionName(parameters) public pure returns (type) {
                    // logic here 
                }
            }
            `}</code></pre>
                <li>라이브러리 사용 예시 - 정수 연산 라이브러리
                    <ul><li>라이브러리 정의</li>
                        <pre><code>{`
                    // SPDX-License-Identifier: MIT
                    pragma solidity ^0.8.0;

                    library MathLibrary {
                        function add(uint256 a, uint256 b) public pure returns (uint256) {
                            return a + b;
                        }

                        function subtract(uint256 a, uint256 b) public pure returns (uint256) {
                            require(b <= a, "Underflow error");
                            return a - b;
                        }
                    }
                    `}</code></pre>
                        <li>스마트 계약에서 사용하기</li></ul>
                    <pre><code>{`
                    // SPDX-License-Identifier: MIT
                    pragma solidity ^0.8.0;

                    import "./MathLibrary.sol";

                    contract Calculator {
                        function addNumbers(uint256 a, uint256 b) public pure returns (uint256) {
                            return MathLibrary.add(a, b);
                        }

                        function subtractNumbers(uint256 a, uint256 b) public pure returns (uint256) {
                            return MathLibrary.subtract(a, b);
                        }
                    }
                    `}</code></pre>
                </li>
            </ul>

            <h4>using for 구문 활용</h4>
            <ul><li>라이브러리 함수를 특정 데이터 타입에 연결시켜, 메서드 형식으로 사용할 수 있게 해줌</li>
                <li>장점:
                    <ul><li>코드의 가독성이 높아짐</li>
                        <li>특정 데이터 타입에 맞는 함수를 명확하게 사용할 수 있음</li></ul>
                </li>
                <li>문법: using LibraryName for Type; </li>
                <li>예시: 배열 관련 라이브러리
                    <ul><li>라이브러리 정의</li>
                        <pre><code>{`
                    // SPDX-License-Identifier: MIT
                    pragma solidity ^0.8.0;

                    library ArrayUtils {
                        function findMax(uint256[] memory self) public pure returns (uint256) {
                            require(self.length > 0, "Array is empty");
                            uint256 max = self[0];
                            for (uint256 i = 1; i < self.length; i++) {
                                if (self[i] > max) {
                                    max = self[i];
                                }
                            }
                            return max;
                        }

                        function sum(uint256[] memory self) public pure returns (uint256) {
                            uint256 total = 0;
                            for (uint256 i = 0; i < self.length; i++) {
                                total += self[i];
                            }
                            return total;
                        }
                    }
                    `}</code></pre>
                        <li>using for 구문을 활용한 계약</li></ul>
                    <pre><code>{`
                    // SPDX-License-Identifier: MIT
                    pragma solidity ^0.8.0;

                    import "./ArrayUtils.sol";

                    contract ArrayProcessor {
                        using ArrayUtils for uint256[];

                        uint256[] private data;

                        function addElement(uint256 value) public {
                            data.push(value);
                        }

                        function getMax() public view returns (uint256) {
                            return data.findMax();
                        }

                        function getSum() public view returns (uint256) {
                            return data.sum();
                        }
                    }
                    `}</code></pre>
                    <ul><li>using ArrayUtils for uint256[];: uint256[] 타입의 배열에서 findMax()와 sum() 함수를 메서드처럼 호출할 수 있게 설정</li>
                        <li>data.findMax(); → 배열 내 최대값 반환</li>
                        <li>data.sum(); → 배열 요소의 합 반환</li></ul>
                </li>
            </ul>

            <h4>라이브러리 vs. 계약의 차이점</h4>
            <img className="libraryVsContract" src={libraryVsContract} alt="library-vs-contract-img"></img>

            <p>참고:</p>
            <ul><li>과제: <a href='https://github.com/dolsotbob/animal_contract_practice'>Animal Contract</a></li></ul>

        </div>
    )
}

export default TIL0327

