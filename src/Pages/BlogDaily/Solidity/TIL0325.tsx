import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { TIL0325removeAndShift } from './CodeExamSol';

const TIL0325 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 25일</p>
            <h3>Solidity - 기본 문법 2: 참조 타입</h3>
            <ul><li>참조 타입은 데이터를 직접 저장하는 대신 참조하는 방식으로 동작함</li>
                <li>문자열, 배열, 매핑, 구조체, 바이트 배열</li></ul>

            <h4>Type: String 문자열</h4>
            <ul><li>Solidity는 문자열 조작 기능이 제한적이며 가스 비용이 높은 연산이 많음 =&gt; bytes 타입 사용이 더 효율적</li>
                <li>UTF-8 인코딩된 문자들을 저장</li>
                <li>동적 크기를 가지며 배열처럼 개별 문자에 직접 접근할 수 없음</li>
            </ul>

            <p>문자열 기본 사용</p>
            <ol>
                <li>기본적인 String 선언: message 변수에 문자열을 저장하고, public 으로 전언하여 자동 getter 함수 생성</li>
                <pre><code>{`
            construct StringExample { 
                string public message = "Hello, Ethereum!" 
            }
            `}</code></pre>

                <li>문자열 길이 확인: bytes로 변환해 확인</li>
                <pre><code>{`
            contract StringLength {
                function getLength(string memory str) public pure returns (uint) {
                    return bytes(str).length;
                }
            }
            `}</code></pre>

                <li>문자열 연결: Solidity에서 문자열을 직접 연결할 수 없으며 abi.encodePacked()를 사용해야 함</li>
                <pre><code>{`
            contract StringConcat { 
                function concatenate(string memory str1, string memory str2) public pure returns (string memory) 
                    return string(abi.encodePacked(str1, str2));
                }
            }
            `}</code></pre>

                <li>문자열을 바이트로 변환: bytes(str) 사용</li>
                <pre><code>{`
            contract StringToBytes {
                function convertToBytes(string memory str) public pure returns (bytes memory) {
                    return bytes(str);
                }
            }
            `}</code></pre>

                <li>바이트를 문자열로 변환: string(byteData) 사용</li>
                <pre><code>{`
            contract BytesToString {
                function convertToString(bytes memory byteData) public pure returns (string memory) {
                    return string(byteData);
                }
            }
            `}</code></pre>

                <li>문자열 비교: string 타입에 대해 직접 비교 연산을 지원하지 않아서 keccak256 해시 값을 비교하는 방법 사용</li>
                <pre><code>{`
            contract StringCompare { 
                function isEqual(string memory str1, string memory str2) public pure returns (bool) {
                    return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
                } 
            }
            `}</code></pre>
            </ol>

            <p>Solidity에서 문자열을 다룰 때 주의할 점</p>
            <ul><li>✔ Solidity는 문자열 조작 기능이 제한적 → bytes 타입을 활용하는 것이 더 효율적</li>
                <li>✔ string.length가 없기 때문에 bytes(str).length를 사용해야 함</li>
                <li>✔ 문자열을 비교할 때 keccak256(abi.encodePacked(str))를 사용해야 함</li>
                <li>✔ 문자열 연결은 abi.encodePacked()를 사용하여 처리</li></ul>

            <h4>배열</h4>
            <ul><li>배열 안에 여러 타입 들어갈 수 없다. 다만 구조체에서 혼합 타입을 배열로 넣을 수 있다. </li>
                <li>배열은 동적 크기와 고정 크기 배열로 나뉨</li>
                <li>push(), poop() 등의 내장 함수 제공</li>
                <li>특정 요소 접근 및 수정 가능(array[index])</li>
                <li>Solidity의 배열은 가스 비용이 높을 수 있어 최적화 필요</li></ul>

            <p>1. 배열의 종류</p>
            <ul><li>동적 크기 배열(Dynamic Array)
                <ul><li>배열의 크기가 고정되지 않으며, push()를 통해 요소를 추가할 수 있다.</li></ul>
            </li>
                <pre><code>{`
        contract DynamicArray {
            uint256[] public numbers;

            function addNumber(uint256 num) public {
                numbers.push(num);
            }
        }
        `}</code></pre>
                <li>고정 크기 배열(Fixed-Size Array)
                    <ul><li>배열의 크기가 고정되며, 선언할 때 크기를 지정해야 한다.</li>
                        <li>고정 크기 배열은 선언 후 크기를 변경할 수 없음</li></ul>
                </li>
                <pre><code>{`
        contract FixedArray {
            uint256[3] public fixedNumbers = [1, 2, 3];
        }    
        `}</code></pre>
            </ul>

            <p>2. 배열의 주요 기능 (내장 함수 및 연산)</p>
            <ul><li>요소 추가(push())
                <ul><li>📌 push()를 사용하여 배열 끝에 요소 추가 가능 (동적 배열에서만 사용 가능)</li></ul>
            </li>
                <li>요소 제거(pop())
                    <ul><li>📌 pop()을 사용하면 배열의 마지막 요소 제거 (고정 크기 배열에서는 사용 불가)</li></ul>
                </li>
                <li>특정 인덱스 값 가져오기(array[index])
                    <ul><li>📌 배열의 특정 인덱스에 접근하려면 array[index] 형식 사용</li></ul>
                </li>
                <li>배열 길이 확인(.length)
                    <ul><li>📌 .length 속성을 사용하여 배열 크기 확인 가능</li></ul>
                </li>
            </ul>

            <p>3. 배열과 루프 활용</p>
            <ul><li>배열을 반복문으로 조회하기</li>
                <pre><code>{`
        contract ArrayLoop { 
            uint256[] public numbers = [1, 2, 3, 4, 5];

            functions sumArray() public view returns (uint256 sum) {
                for (uint256 i = 0; i < number.length; i++) {
                    sum += numbers[i];
                } 
            }
        }
        `}</code></pre>
                <li>배열의 모든 요소를 합산하는 sumArray() 함수</li></ul>

            <p>4. 다차원 배열(Multi-dimensional Array)</p>
            <ul><li>배열 안에 배열을 저장할 수 있음</li>
                <li>2차원 배열 선언 및 사용</li></ul>
            <pre><code>{`
    contract MultiDimArray {
        uint256[][] public matrix;

        function addRow(uint256[] memory row) public {
            matrix.push(row);
        }
    }
    `}</code></pre>
            <ul><li>배열의 배열(2D 배열) 구조로 데이터를 저장 가능</li></ul>

            <p>5. 배열에서 특정 요소 삭제</p>
            <ul><li><span style={{ fontWeight: 'bold' }}>특정 인덱스 요소 삭제(delete)</span>
                <pre><code>{`
    constract ArrayDelete { 
         uint256[] public numbers = [10, 20, 30, 40];

        function removeElement(uint256 index) public {
            require(index < numbers.length, "Index out of bounds");
            delete numbers[index];
        }
    }
    `}</code></pre>
                <li>📌 delete numbers[index]를 사용하면 해당 인덱스의 값이 0으로 초기화됨 (배열 크기는 변하지 않음)</li>
            </li><br />
                <li><span style={{ fontWeight: 'bold' }}>특정 요소 삭제 후 배열 크기 줄이기</span></li>
                <CodeBlock code={TIL0325removeAndShift}></CodeBlock>
                <li>가스비 높아 최적화 필요</li>
            </ul>

            <h4>매핑</h4>
            <ul><li>키-값 쌍을 저장하는 자료구조</li>
                <li>mapping(KeyType &rArr; ValueType) 형식으로 선언</li>
                <li>모든 키는 기본적으로 0 또는 false와 같은 초기값을 가짐 </li>
                <li>storage에만 저장 가능; 즉 블록체인에 영구적으로 저장됨 (메모리 변수로 사용 불가)</li>
            </ul>

            <p>간단한 매핑 예제</p>
            <pre><code>{`
            contract SimpleMapping { 
                mapping(address => uint256) public balances; 
                
                function setBalance(address user, uint256 amount) public { 
                    balance[user] = amount; 
                }
                
                function getBalance(adress user) public view returns (uint256) {
                    return balances[user];
                }
            }
            `}</code></pre>
            ⁕ 여기서 변수명은 balances < br />
            ⁕ 변수를 함수 밖에서 선언해야 전약적으로 사용할 수 있다 < br />

            <p>매핑의 주요 기능</p>
            <ul><li>값 설정(쓰기 연산)
                <ul>balances[msg.sender] = 100; </ul>
                <ul>특정 주소(msg.sender)의 값을 100으로 설정</ul>
            </li>
                <li>값 읽기(조회 연산)
                    <ul>uint256 myBalance = balances[msg.sender];</ul>
                </li>
                <li>값 삭제(delete)
                    <ul><li>데이터 지우는 것은 조심해야 함</li><li>실무에서는 필요하면 Soft delte 사용 - 상태를 비활성화 하는 방식</li></ul>
                </li>
            </ul>

            <p>중첩 매핑(Nested Mapping)</p>
            <pre><code>{`
            contract NestedMapping {
                mapping(address => mapping(uint256 => bool)) public permissions;

                function setPermission(address user, uint256 id, bool status) public {
                    permissions[user][id] = status;
                }

                function hasPermission(address user, uint256 id) public view returns (bool) {
                    return permissions[user][id];
                }
            }
            `}</code></pre>
            ⁕ 주소별 특정 ID의 권한을 설정 및 조회할 수 있는 중첩 매핑 예제 < br />

            <p>매핑과 구조체(Struct) 결합</p>
            <pre><code>{`
            contract StructMapping {
                struct User {
                    string name;
                    uint256 balance;
                }

                mapping(address => User) public users;

                function setUser(address _addr, string memory _name, uint256 _balance) public {
                    users[_addr] = User(_name, _balance);
                }

                function getUser(address _addr) public view returns (string memory, uint256) {
                    return (users[_addr].name, users[_addr].balance);
                }
            }

            `}</code></pre>
            ⁕ 사용자 정보를 저장하는 구조체와 매핑을 조합한 예제 < br />

            <p>매핑 사용 시 주의할 점</p>
            <ul><li>storage에서만 사용 가능하며 memory 변수로 선언 불가</li>
                <li>반복문을 사용해 모든 키를 조회할 수 없음 (키 목록을 별도로 관리해야 함)</li>
                <li>매핑의 키를 delete 하면 기본값으로 초기화되며, 완전히 제거되지 않음</li>
                <li>매핑은 기본적으로 0 또는 false 값을 반환하므로, 존재 여부를 체크하려면 별도의 플래그 변수가 필요할 수 있음</li>
            </ul>

            <h4>구조체(Struct)</h4>
            <ul><li>여러 개의 변수를 하나의 사용자 정의 데이터 타입으로 묶어 저장하는 자료 구조</li>
                <li>storage, memory 키워드를 사용하여 저장 방식 선택 가능</li>
                <li>매핑과 함께 사용하면 강력한 데이터 저장 기능을 제공</li>
            </ul>

            <p>구조체 선언 및 변수 생성</p>
            <pre><code>{`
            contract StructExample {
                struct User { 
                    string name;
                    uint256 age;
                    address wallet;
                }

                User public user; 

                function setUser(string memory _name, uint256 _age, address _wallet) public { 
                    user = User(_name, _age, _wallet);
                }

                function getUser() public view returns (string memory, uint256, address) { 
                    return (user.name, user.age, user.wallet);
                }
            }
            `}</code></pre>
            <ul><li>📌 구조체를 사용하여 사용자 정보를 저장 및 조회하는 예제</li></ul>

            <p>구조체를 배열로 저장하기</p>
            <pre><code>{`
            contract StructArray {
                struct User { 
                    string name; 
                    uint256 age; 
                }

                User[] public users; 

                function addUser(string memory _name, uint256 _age) public { 
                    users.push(User(_name, _age));
                }
            }
            `}</code></pre>
            <ul><li>📌 구조체를 배열로 선언하고, push()를 사용하여 데이터 추가 가능</li></ul>

            <p>매핑과 구조체 결합</p>
            <pre><code>{`
            contract StructMapping {
                struct User {
                    string name;
                    uint256 balance;
                }
                
                mapping(address => User) public users;
                
                function setUser(string memory _name, uint256 _balance) public {
                    users[msg.sender] = User(_name, _balance);
                }
                
                function getUser(address _addr) public view returns (string memory, uint256) {
                    return (users[_addr].name, users[_addr].balance);
                }
            }
            `}</code></pre>
            <ul><li>📌사용자의 address를 키로 하여 데이터를 효율적으로 관리 가능</li></ul>

            <p>구조체 내부 값 수정</p>
            <pre><code>{`
            contract StructUpdate {
                struct User { 
                    string name; 
                    uint256 age; 
                }

                User public user; 

                function setUser(string memory _name, uint256 _age) public { 
                    user = User(_name, _age); 
                }

                function updateAge(uint256 _newAge) public { 
                    user.age = _newAge; 
                }
            }
            `}</code></pre>
            <ul><li>📌 user.age = _newAge;를 통해 구조체 내부 값 수정 가능</li></ul>

            <p>구조체 삭제 (delete)</p>
            <pre><code>{`
            contract StructDelete {
                struct User {
                    string name;
                    uint256 age;
                }

                User public user; 

                function setUser(string memory _name, uint256 _age) public { 
                    user = User(_name, _age);
                }

                function deleteUser() public { 
                    delete user;   // 모든 필드를 초기화 (name = "", age = 0
                }
            }
            `}</code></pre>
            <ul><li>📌 delete 키워드를 사용하여 구조체 값을 초기화할 수 있음</li></ul>

            <p> 메모리(Memory) vs. 저장소(Storage)에서 구조체 사용</p>
            <ul><li>구조체는 storage 또는 memory에 저장할 수 있으며, 가스 비용을 고려하여 적절히 선택해야 한다다</li></ul>
            <ul><li><span style={{ fontWeight: "bold" }}>메모리 구조체 사용 (임시 데이터 저장)</span></li></ul>
            <pre><code>{`
            contract MemoryStruct {
                struct User {
                    string name;
                    uint256 age;
                }

                function getUser(string memory _name, uint256 _age) public pure returns (User memory) { 
                    return User(_name, _age);
                }
            }
            `}</code></pre>
            <ul><li>📌 메모리에서만 사용되는 구조체는 가스 비용 절감 효과가 있음</li></ul>

            <ul><li><span style={{ fontWeight: "bold" }}>저장소(Storage) 구조체 사용 (영구 데이터 저장)</span></li></ul>
            <pre><code>{`
            contract StorageStruct {
                struct User {
                    string name;
                    uint256 age;
                }

                User public user; 

                function setUser(string memory _name, uint256 _age) public { 
                    user = User(_name, _age);
                }
            }
            `}</code></pre>
            <ul><li>📌 저장소(storage)에 데이터를 저장하면 영구적으로 보관됨</li></ul>

            <p></p>
            <pre><code>{``}</code></pre>

            <h4>바이트 배열 타입</h4>
            <ul><li>bytes 타입은 UTF-8 문자열을 바이트 형태로 저장할 수 있음</li>
                <li>고정 크기(bytes1 ~ bytes32)와 가변 크기(bytes) 배열이 존재</li>
                <li>string 보다 효율적인 저장 및 조작이 가능하며, 가스 비용 절감 효과가 있음</li>
                <li>string과 쌍쌍바임</li></ul>

            <p>바이트 배열의 종류</p>
            <ul><li>고정 크기 바이트 배열(bytes1 ~ bytes32)
                <ul><li>더 적은 가스를 사용하며, 연산 속도가 빠름</li>
                    <li>크기가 정해져 있어 push()나 pop() 등의 조작이 불가능</li></ul>
            </li>
                <li>가변 크기 바이트 배열 (bytes)
                    <ul><li>bytes는 동적 크기의 바이트 배열</li>
                        <li>string과 유사하지만, 더 적은 가스를 사용하며 개별 바이트 접근 가능</li>
                        <li>push(), pop() 등을 사용하여 크기를 조정할 수 있음</li></ul>
                </li>
            </ul>

            <p>바이트 배열의 주요 기능</p>
            <ul><li>바이트 배열 길이 확인(.length)
                <pre><code>{`
            contract BytesLength {
                function getLength(bytes memory data) public pure returns (uint) {
                    return data.length;
                }
            }
            `}</code></pre>
                <ul><li>📌 bytes("Hello")를 입력하면 5 반환</li></ul>
            </li>
                <li>특정 바이트 값 접근
                    <pre><code>{`
                contract BytesAccess {
                    function getByteAt(bytes memory data, uint256 index) public pure returns (bytes1) {
                        require(index < data.length, "Index out of bounds");
                        return data[index];
                    }
                }
                `}</code></pre>
                    <ul><li>📌 getByteAt(bytes("Hello"), 1) → "e" 반환
                        <ul><li>bytes("Hello") &rarr;  "Hello"를 바이트 배열로 변환</li>
                            <li>bytes("Hello") == [0x48, 0x65, 0x6c, 0x6c, 0x6f]</li>
                            <li>getByteAt(..., 1): 인덱스 1에 해당하는 바이트 값을 가져옴</li></ul>
                    </li></ul>
                </li>
                <li>바이트 배열 추가(push())
                    <pre><code>{`
                contract BytesPush {
                    bytes public data; 

                    function addByte(bytes1 newByte) public { 
                        data.push(newByte);
                    }
                }
                `}</code></pre>
                    <ul><li>📌 push()를 사용하여 바이트 배열 끝에 요소 추가 가능 (동적 배열에서만 가능)</li>
                        <li>외부에서 1바이트(bytes1)를 입력 받아 data 배열에 push()로 추가</li></ul>
                </li>
                <li>바이트 배열 삭제(pop())
                    <pre><code>{`
                contract BytesPop {
                    bytes public data = "Hello"; 

                    function removeLast() public { 
                        data.pop();
                    }
                }
                `}</code></pre>
                    <ul><li>📌 pop()을 사용하면 배열의 마지막 요소 제거 가능 (고정 크기 배열에서는 불가능)</li></ul>
                </li>
            </ul>

            <p>바이트 배열과 문자열 변환</p>
            <ul><li>Solidity에서 문자열을 다룰 때 bytes 타입을 활용하면 더 효율적임</li>
                <li>string → bytes 변환
                    <pre><code>{`
                contract StringToBytes {
                    function convertToBytes(string memory str) public pure returns (bytes memory) { 
                        return bytes(str);
                    }
                }
                `}</code></pre>
                </li>
                <li>bytes → string 변환
                    <pre><code>{`
                contract BytesToString {
                    function convertToString(bytes memory byteData) public pure returns (string memory) { 
                        return string(byteData);
                    }
                } 
                `}</code></pre>
                </li>
            </ul>

            <p>바이트 배열과 문자열의 차이점</p>
            <ul><li>string: 문자열 저장, UTF-8 지원; 가스 비용 높음; 개별 문자 접근 불가능</li>
                <li>bytes: 바이트 배열 저장, UTF-8 X; 가스 비용 낮음; 개별 문자 접근 가능</li>
                <li>📌 Solidity에서 문자열을 조작할 필요가 있다면 bytes를 사용하는 것이 더 가스 효율적임임</li></ul>


            <h4>컨트랙트 코딩시 꼭 할 일</h4>
            <ul><li>보안성이 입증된 건지 확인하기; Zeppelin에서 코드 가져다 써보기</li></ul>

        </div >
    )
}

export default TIL0325