import React from 'react'

const TIL0325 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 25일</p>
            <h3>Solidity - 기본 문법 2: 참조 타입</h3>

            <h4>문자열</h4>
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
                <li>바이트를 문자열로 변환: string(byteData) 사용</li>
                <li>문자열 비교: string 타입에 대해 직접 비교 연산을 지원하지 않아서 keccak256 해시 값을 비교하는 방법 사용</li>
                <pre><code>{`
            contract StringCompare { 
                function isEqual(string memory str1, string memory str2) public pure returns (bool) {
                    return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
                } 
            }
            `}</code></pre>

            </ol>

            <h4>배열</h4>
            <ul><li>배열 안에 여러 타입 들어갈 수 없다. 다만 구조체에서 혼합 타입을 배열로 넣을 수 있다. </li>
                <li>동적 크기와 고정 크기 배열로 나뉨</li>
                <li>push(), poop() 등의 내장 함수 제공</li>
                <li>특정 요소 접근 및 수정 가능(array[index])</li>
                <li>Solidity의 배열은 가스 비용이 높을 수 있어 최적화 필요</li>
                <li>배열을 반복문으로 조회하기</li>
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
                <ul>⁕ 배열의 모든 요소를 합산하는 sumArray() 함수</ul>
                <li>다차원 배열: 배열 안에 배열을 저장할 수 있음</li>
                <li>특정 인덱스 요소 삭제(delete)</li>
                <pre><code>{`
                constract ArrayDelete { 
                    uint256[] public numbers = [10, 20, 30, 40];

                    function removeElement(uint256 index) public {
                        require(index < numbers.length, "Index out of bounds");
                        delete numbers[index];
                    }
                }
                `}</code></pre>
                <li>특정 요소 삭제 후 배열 크기 줄이기: 가스비 높아 최적화 필요</li>
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
            ⁕ 여기서 변수명은 balances <br />
            ⁕ 변수를 함수 밖에서 선언해야 전약적으로 사용할 수 있다 <br />

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
            ⁕ 주소별 특정 ID의 권한을 설정 및 조회할 수 있는 중첩 매핑 예제 <br />

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
            ⁕ 사용자 정보를 저장하는 구조체와 매핑을 조합한 예제<br />

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
            ⁕ 사용자의 address를 키로 하여 데이터를 효율적으로 관리 가능

            <h4>바이트 배열</h4>
            <ul><li>string과 쌍쌍바임</li></ul>

            <h4>컨트랙트 코딩시 꼭 할 일</h4>
            <p>보안성이 입증된 건지 확인하기; Zeppelin에서 코드 가져다 써보기</p>

        </div>
    )
}

export default TIL0325