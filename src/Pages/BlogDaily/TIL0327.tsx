import React from 'react'

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
                    <ul><li>이더리움이 PoS로 전환되면서 생김</li>
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

            <p></p>
            이 메모는 Solidity에서 msg.sender와 tx.origin의 차이점을 설명하는 내용입니다.
            •	msg.sender: 현재 실행 중인 함수나 트랜잭션을 호출한 주소를 나타냅니다. 즉, 함수 호출 시 직접 호출한 주소가 msg.sender입니다.
            •	tx.origin: 트랜잭션을 시작한 원래의 주소를 나타냅니다. 트랜잭션의 처음 호출자는 tx.origin입니다.

            메모에 나와 있는 예시를 보면:
            1.	**EOA (Externally Owned Account)**가 트랜잭션을 생성합니다. 즉, 사용자가 어떤 트랜잭션을 처음 시작하는 경우입니다.
            2.	컨트랙트 1이 호출됩니다. 그러면 컨트랙트 1의 함수가 실행됩니다.
            3.	컨트랙트 1은 그 내부에서 컨트랙트 2를 호출합니다.

            여기서:
            •	**msg.sender**는 컨트랙트 1이 컨트랙트 2를 호출하기 때문에, 컨트랙트 1이 msg.sender로 설정됩니다.
            •	**tx.origin**은 트랜잭션을 처음 시작한 주소인 EOA로 설정됩니다.

            따라서, 컨트랙트 2에서 msg.sender는 컨트랙트 1, tx.origin은 EOA가 됩니다.

            이 차이를 이해하는 것은 트랜잭션의 흐름을 추적하거나, 보안 관련 로직을 작성할 때 중요합니다. tx.origin을 사용하면 중간의 호출자가 아닌, 최초 트랜잭션을 시작한 주소를 추적할 수 있어 보안상 위험할 수 있습니다.


        </div>
    )
}

export default TIL0327