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
            <h4>구조체</h4>
            <h4>바이트 배열</h4>
        </div>
    )
}

export default TIL0325