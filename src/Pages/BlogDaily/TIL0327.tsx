import React from 'react'
import attackContract from "../../assets/attackContract.png"

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

        </div>
    )
}

export default TIL0327