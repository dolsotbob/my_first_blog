import React from 'react'
import contractStructure from '../../assets/smartContractStructure.png'
import contractState from '../../assets/contractState.png'
import contractCheck from '../../assets/contractCheck.png'
import til0324uint from '../../assets/til0324uint.png'
import til0324int from '../../assets/til0324int.png'

const TIL0324 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 24일</p>
            <h3>Solidity - 기본 문법 1</h3>
            <ul><li>Solidity: 이더리움 스마트 컨트랙트를 작성하기 위한 프로그래밍 언어</li>
                <li>EVM에서 실행됨</li>
                <li>Binance Smart Chain, Polygon 등 EVM 호환 네트워크에서도 활용됨</li>
                <li>Hardhat, Truffle, Remix IDE 사용할 수 있음</li></ul>

            <p>Solidity 컴파일러 설치</p>
            <ul><li>npm install -g solc</li>
                <li>Hardhat과 함께 사용하려면: npm intall --save-dev hardhat</li></ul>

            <p>Solidity의 특징</p>
            <ol><li>스마트 컨트랙트 기반</li>
                <li>정적 타입 언어: 변수 타입을 명확히 선언해야 함</li>
                <li>EVM에서 실행 가능</li>
                <li>이벤트 기반 프로그래밍: 블록체인 데이터 쉽게 추적 가능</li>
                <li>보안 중심 개발: modifier, require, assert 등을 활용한 보안 강화 기능 제공</li></ol>


            <h4>Remix</h4>
            <ul><li>웹 기반 IDE(Integrated Development Environment, 통합 개발 환경)</li>
                <li>remix.ethereum.org</li></ul>


            <h4>Solidity 코드 실행 흐름</h4>
            <ol><li>변수를 선언하고 초기화</li>
                <li>함수 실행</li>
                <li>트랜잭션 처리
                </li></ol>
            <pre><code>{`
                contract SimpleContract { 
                    string public message = "Hello, Solidity!"; 

                    function setMessage(string memory _newMessage) public { 
                        message = _newMessage; 
                    }
                }
                `}</code></pre>

            <p>Solidity 콘솔 출력</p>
            <ul><li>자바스크립트의 console.log와 달리 Solidity는 블록체인 상에서 로그를 기록할 수 있도록 이벤트(event) 기능을 제공함</li></ul>
            <pre><code>{`
            contract Logger {
                event Log(string message);

                function logMessage(string memory _message) public {
                    emit Log(_message);
                }
            }
            `}</code></pre>

            <p>Solidity 코드의 오류 처리</p>
            <ul><li>Solidity 코드의 오류 처리: 트랜잭션이 롤백되며 특정 지점에서 실행이 멈춤</li>
                <li>오류 처리 방법:
                    <ul><li>require(condition, message): 조건이 참이 아니면 오류 발생</li>
                        <li>assert(condition): 내부 오류 체크(개발자용)</li>
                        <li>revert(message): 강제적으로 실행을 취소하고 트랜잭션 롤백</li></ul>
                </li>
            </ul>

            <h4>스마트 컨트랙트 구조</h4>
            <img className='contractStructure' src={contractStructure} alt="smart-contract-img"></img>
            <ul><li>Solidity 컨트랙트를 오픈소스 프로잭트에 사용할 경우 필수적으로 라이선스 정보를 명시해야 함</li>
                <li>MIT는 가장 널리 사용되는 오픈 라이선스 중 하나임</li>
                <li>컨트랙트의 이름은 대문자로 시작하는 PascalCase를 사용하는 것이 일반적임</li>
                <li>상태 변수: 블록체인에 저장되는 데이터로 컨트랙트의 영구적 상태를 유지함</li>
                <li>생성자: 컨트랙트 배포 시 한 번만 실행되며 초기 값을 설정하는 역하을 함</li>
                <pre><code>{`
                contract Example { 
                     address public owner; 

                     constructor() {
                          owner = msg.sender;   // 컨트랙트 배포자의 주소 저장 
                     }
                }
                `}</code></pre>
            </ul>

            <p>왜 버전 선언이 필요한가?</p>
            <ul><li>버전 호환성 문제 방지
                <ul><li>Solidity 0.8.x 버전에서는 정수 오버플로우(overflow)와 언더플로우(underflow)가 기본적으로 방지됨</li>
                    <li>이전 버전(0.7.x 이하)에서는 이 기능이 자동으로 활성화되지 않음 → SafeMath 라이브러리를 따로 사용해야 했음
                    </li></ul>
            </li>
                <li>안정성과 예측 가능성 확보</li></ul>

            <h4>Solidity 데이터 타입</h4>
            <p>값 타입과 참조 타입</p>
            <ul><li>"데이터 타입"은 스마트 컨트랙트가 변수를 저장하고 처리하는 방법을 정의하는 것</li></ul>

            <p>값 타입: 변수가 직접 데이터를 저장하는 유형</p>
            <ul><li>정수형: uint8 ~ uint256, int8 ~ int256 까지 8비트 단위로 선언 가능</li>
                <li>불리언</li>
                <li>주소: address payable 은 이더를 송금할 수 있는 주소</li>
                <li>바이트: 고정 크기의 바이트 배열을 저장하는 타입</li>
                <li>열거형(Enum): 특정 값들 중 하나를 선택할 때 사용</li></ul>

            <h4>데이터 타입을 올바르게 사용하는 이유</h4>
            <ul><li>블록체인에서 저장 비용을 절감(가변 크기보다는 고정 크기 타입 사용 추천)</li>
                <li>불필요한 연산 방지(최적화된 데이터 타입 사용)</li>
                <li>코드 오류 예방(정적 타입 선언으로 실수 방지)</li></ul>

            <h4>Type: Number</h4>
            <ul><li>0으로 나누는 연산은 require을 사용해 방지해야 함</li>
                <li>uint와 int 타입이 혼합되면 컴파일 오류 발생 가능</li>
                <li>uint 범위:
                    <img className="til0324uint" src={til0324uint} alt='uint-range-image'></img>
                </li>
                <li>int 범위:
                    <img className="til0324int" src={til0324int} alt='int-range-image'></img>
                </li>
                <li>제곱 연산 (** 연산자 사용)</li>
                <li>삼항 연산자(condition ? true : false)를 활용하여 최소/최대값 비교 가능</li>
                <pre><code>{`
                contract MinMaxExample {
                    function min(uint256 a, uint256 b) public pure returns (uint256) {
                        return a < b ? a : b; 
                    }
                    function max(uint256 a, uint256 b) public pure returns (uint256) { 
                        return a > b ? a : b;
                    }
                }
                `}</code></pre>
                <li>오버플로우 및 언더플로우 방지
                    <ul><li>Solidity 0.8.x 이전 버전에서는 SafeMath 라이브러리를 사용해야 했지만, 이제는 필요 없음</li></ul>
                </li>
                <pre><code>{`
                contract OverflowProtection {
                    function testOverflow(uint8 a, uint8 b) public pure returns (uint8) {
                        return a + b; // 값이 255를 초과하면 자동으로 예외 발생
                    }
                }
                `}</code></pre>
            </ul>

            <h4>Type: Boolean</h4>
            <ul><li>불리언 타입은 스마트 컨트랙트의 상태 관리에 자주 사용됨</li>
                <img className='contractState' src={contractState} alt="contract-state-img"></img>
                <li>closeVoting() 함수가 실행되면 votingOpen 값이 false로 변경됨</li>
                <li>Boolean을 활용한 접근 제어: Modifier</li>
            </ul>

            <h4>Type: Address</h4>
            <ul><li>EOA와 스마트 컨트랙트 계쩡 모두가 address 타입을 사용해 식별됨</li>
                <li>address는 20바이트(160비트) 크기를 가짐</li>
                <li>지불 가능 주소: address payable</li>
                <li>이더 송금 내장 기능: transfer, send, call
                    <ul><li>transfer: 실패 시 자동 revert; 가장 안전함; 가스비 제한 있어서 중간에 리버트 시킬 수 있기 때문에 실무에서 덜 쓰임</li>
                        <li>send: 실패시 false 반환; 별도 처리 필요; 쓰지 말기</li>
                        <li>call: 가장 유연하지만 보안 위험 있음; 외부 컨트랙트 실행 가능; 실무에서 가장 많이 쓰임</li></ul> </li>
                <li>특정 주소가 스마트 컨트랙트인지 확인</li>
                <ul><li>extcodesize 어셈블리 코드를 사용</li>
                    <li>이 코드는 암기해도 괜찮음</li></ul>
                <img className='contractCheck' src={contractCheck} alt='contract-check-img'></img>
                <li>Address 타입의 활용 사례: 지갑 주소 관리, 스마트 컨트랙트 호출, 이더 송금 등 다양한 목적으로 사용됨</li>
            </ul>

            <h4>Type: Byptes</h4>
            <ul><li>고정 크기와 가변 크기의 바이트 배열을 저장하는 데 사용됨</li>
                <li>문자열보다 낮은 가스 비용</li>
                <li>고정 크기 바이트 배열(bytes1 ~ bytes32): 더 적은 가스 사용, 연산 속도 빠름</li>
                <li>가변 크기 바이트 배열(bytes): string과 유사하지만 메모리 최적화 측면에서 더 효율적; 개별 바이트 접근 가능</li>
                <li>Solidity에서 문자열을 조작할 필요가 있다면 bytes를 사용하는 것이 더 가스 효율적입니다.
                </li>
            </ul>

            <h4>Type: Enum</h4>
            <ul><li>여러 개의 상수 값들을 한정된 집합으로 정의할 때 사용</li>
                <li>스마트 컨트랙트에서 상태나 옵션을 명확하게 표현하는 데 유용함</li>
                <li>값을 숫자로 저장하지만 가독성을 위해 명명된 요소 사용 가능</li>
            </ul>

        </div>
    )
}

export default TIL0324