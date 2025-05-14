import React from 'react'
import til0402 from '../../assets/til0402.png'
import til0402hardhatTest from '../../assets/til0402hardhatTest.png'
import til0402truffleTest from '../../assets/til0402truffleTest.png'

const TIL0402 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 2일</p>
            <h3>Solidity - 실습 3</h3>
            <h4>스마트 컨트랙트의 테스트 과정</h4>
            <ol><li>로컬 테스트</li>
                <li>테스트넷 배포 및 검증</li>
                <li>메인넷 배포 및 최종 검증</li></ol>

            <p>로컬 테스트</p>
            <ul><li>주요 목적:
                <ul><li>기본적인 논리 검증</li>
                    <li>이벤트 발생 여부 확인</li>
                    <li>오류 및 예외 처리 검증</li>
                    <li>가스 소비량 테스트</li></ul>
            </li>
                <li>사용 도구:
                    <ul><li>Hardhat, Truffle: 로컬 이더리움 네트워크를 제공하여 스마트 컨트랙트를 빠르게 배포하고 테스트할 수 있음</li>
                        <li>Ganache: 이더리움 테스트 환경을 로컬에서 실행할 수 있도록 지원하는 도구</li>
                        <li>Foundry: 고성능 스마트 컨트랙트 개발 및 테스트 도구</li>
                        <li>Ethers.js/Web3.js: 블록체인과 상호작용하여 테스트 수행</li>
                    </ul>
                </li>

                <li>로컬 테스트의 한계:
                    <ul><li>실제 블록체인 네트워크와 다름</li>
                        <li>실제 네트워크 지연(latency) 확인 불가능</li>
                        <li>실제 가스비 측정 불가능</li></ul>
                </li>

                <li>테스트 예시:
                    <ul><li><img className='til0402_img' src={til0402} alt="testnet_example"></img></li></ul>
                </li>
            </ul>
            <br />

            <p>테스트넷 배포 및 검증</p>
            <ul><li>주요 목적:
                <ul><li>실제 블록체인 환경에서의 동작 확인</li>
                    <li>다른 스마트 컨트랙트 및 DApp과의 상호작용 테스트</li>
                    <li>네트워크 지연시간 및 가스 소비량 검토</li>
                    <li>배포 과정에서 발생할 수 있는 예상치 못한 문제 해결</li></ul>
            </li>

                <li>테스트넷 배포 후 확인해야 할 사항
                    <ul><li>트랜잭션이 예상한 대로 실행되는지?</li>
                        <li>이벤트가 정상적으로 발생하는지?</li>
                        <li>실제 네트워크에서의 가스 소비량은?</li>
                        <li>여러 계정 간 호출 시 예상한 결과가 나오는지?</li></ul>
                </li>

                <li>테스트넷 테스트의 한계
                    <ul><li>여전히 가상환경 (테스트 토큰 사용)</li>
                        <li>가스비는 실제와 다소 차이가 있을 수 있음</li>
                        <li>일부 네트워크 문제는 메인넷과 다를 수 있음</li></ul>
                </li>
            </ul>

            <p>메인넷 배포 및 최종 검증</p>
            <ul><li>메인넷 배포 전 최소 5변 이상 테스트 하기</li>
                <li>실제 비용 발생</li>
                <li>메인넷 배포 후에는 컨트랙트 변경이 불가능함</li>
                <li>주요 목적:
                    <ul><li>스마트 컨트랙트가 완전히 검증된 상태인지 확인</li>
                        <li>실제 사용자와의 상호작용 테스트</li>
                        <li>보안 및 안정성 검토</li>
                        <li>실사용 환경에서의 가스 최적화 확인</li></ul>
                </li>
                <li>배포 후 확인해야 할 사항:
                    <ul><li>트랜잭션이 정상적으로 수행되는가?</li>
                        <li>컨트랙트 기능이 예상대로 동작하는가?</li>
                        <li>가스비 최적화가 잘 적용되었는가?</li>
                        <li>보안 취약점은 없는가?</li></ul>
                </li>
                <li>메인넷 배포 후 보안 점검:
                    <ul><li>컨트랙트 코드가 공개된 상태에서 문제가 없는지 검토</li>
                        <li>트랜잭션을 통한 공격 가능성이 있는지 확인</li>
                        <li>소유자 및 권한 관리 설정이 적절한지 점검</li></ul>
                </li>
            </ul>

            <h4>Hardhat vs Truffle 기본 web3 라이브러리 차이점</h4>
            <ul><li>기본적으로 Truffle은 web3.js를, Hardhat는 ethers.js 사용하지만 각 모듈을 설치하여 사용 가능</li></ul>

            <p>Hardhat</p>
            <ul><li>기본 라이브러리: ethers.js</li>
                <li>트랜잭션 및 스마트 컨트랙트 테스트에 최적화되어 있음</li>
                <li>사용 예제: </li>
                <img className="til0402img2" src={til0402hardhatTest} alt="harhat-ethers.js-example-img"></img>
            </ul>

            <p>Truffle</p>
            <ul><li>기본 라이브러리: web3.js</li>
                <li>Ganache및 Truffle Suite와 함께 작동하도록 설계됨</li>
                <li>사용 예제:</li>
                <img className='til0402img3' src={til0402truffleTest} alt="truffle-web3.js-example-img"></img>
            </ul>

            <h4>ethers.js</h4>
            <ul><li>(web3.js 처럼) 이더리움 블록체인과 상호작용할 수 있도록 도와주는 JavaScript 라이브러리</li>
                <li>스마트 컨트랙트 배포, 호출, 트랜잭션 전송, 계정 관리 등을 쉽게 수행할 수 있도록 설계됨</li></ul>

            <p>ethers.js의 특징</p>
            <ol><li>이더리움 네트워크와 상호작용
                <ul><li>블록체인 데이터 읽기: provider.getBalance()</li>
                    <li>트랜잭션 전송: signer.sendTransaction()</li>
                    <li>스마트 컨트랙트 함수 호출: contract.someFunction()</li></ul>
            </li>
                <li>다양한 이더리움 네트워크 지원
                    <ul><li>메인넷, 테스트넷(Goerli, Sepolia), 로컬 개발 네트워크(Hardhat, Ganache)</li></ul>
                </li>
                <li>경량화 및 모듈화
                    <ul><li>빠르고 가벼운 라이브러리 &rarr; 프론트엔드 & 백엔드에서 모두 사용 가능</li>
                        <li>필요한 기능만 선택적으로 사용할 수 있음</li></ul>
                </li>
                <li>지갑(Accounts) 관리 기능 내장
                    <ul><li>프라이빗 키 & Mnemonic 기반 계정 생성: Wallet.createRandom()</li>
                        <li>트랜잭션 서명 및 전송: wallet.signTransaction()</li></ul>
                </li>
                <li>TypeScript 지원
                    <ul><li>강력한 타입 체크 기능 제공: ethers.Contract, ethers.Wallet</li></ul>
                </li>
                <li>Etherscan API 지원
                    <ul><li>스마트 컨트랙트 검증: etherscan.verifyContract()</li></ul>
                </li>
            </ol>

            <p>ethers.js 기본 사용법</p>
            <ol><li>설치: npm install ethers</li>
                <li>provider 사용해 블록체인 네트워크와 연결
                    <pre><code>{`
                import { ethers } from "ethers"; 

                // Infura, Alchemy 같은 외부 RPC 프로바이더 사용 가능 
                const provider = new ethers.JsonRpcProvider("http://mainnet.infura.io/v3/YOUR_INFURA_KEY");

                async function getBlockNumber() { 
                    const blockNumber = await provider.getBlockNUmber();
                    console.log(₩현재 블록 번호: S{blockNumber}₩); 
                }

                        getBlockNumber();
                `}</code></pre>
                    <ul><li>네트워크 연결 후 블록 번호 가져오기</li></ul>
                </li>
                <li>지갑 생성 및 계정 정보 확인
                    <pre><code>{`
                const wallet = ethers.Wallet.createRandom(); 
                console.log(₩주소: S{wallet.address}₩);
                console.log(₩프라이빗 키: S{wallet.privateKey}₩);
                `}</code></pre>
                    <ul><li>랜덤 이더리움 지갑 생성</li></ul>
                </li>
                <li>특정 주소의 잔액 조회
                    <pre><code>{`
                const address = "0x1234567890abcdef1234567890abcdef12345678";
                const balance = await provider.getBalance(address); 
                console.log(₩잔액: S{ethers.formatEther(balance)} ETH₩);
                `}</code></pre>
                    <ul><li>이더리움 주소의 잔액을 ETH 단위로 전환</li></ul>
                </li>
                <li>트랜잭션 보내기
                    <ul><li>트랜잭션을 보내려면 지갑이 필요하며 서명 후 네트워크에 전송해야 함</li>
                        <pre><code>{`
                const privateKey = "YOUR_PRIVATE_KEY"; // 보안상 환경 변수 사용 권장 
                const wallet = new ethers.Wallet(privateKey, provider);

                aync function sendTransaction() { 
                    const tx = await wallet.sendTransaction({
                        to: "0xabcdef1234567890abcdef1234567890abcdef12",
                        value: ethers.parseEther("0.1"), 
                    }); 

                    console.log(₩트랜잭션 해시: S{tx.hash}₩);
                }

                sendTransaction(); 
                `}</code></pre>
                        <li>트랜잭션을 생성하여 0.1ETH 전송</li></ul>
                </li>
                <li>스마트 컨트랙트와 상호작용
                    <ul><li>스마트 컨트랙트 ABI와 주소를 사용해 특정 함수를 호출할 수 있음
                        <ul><li>ABI(Application Binary Interface): 이더리움 스마트 컨트랙트와 외부 애플리케이션(예: 프론트엔드, web3.js, ethers.js 등)이 상호작용할 수 있도록 정의된 인터페이스</li>
                            <li>ABI는 스마트 컨트랙트와 대화하는 설명서와 같은 것</li>
                            <li>이더리움 스마트 컨트랙트는 EVM에서 동작하는 바이트코드(이진 코드) 형태로 배포됨. 그런데 사람이나 다른 프로그램이 이 바이너리 코드를 직접 해석하기 어렵기 때뭅ㄴ에 함수 및 데이터 구조를 설명하는 JSON 형태의 인터페이스(ABI)가 필요함</li></ul>
                    </li>
                        <pre><code>{`
                const contractAddress = "0xYourContractAddress"; 
                const abi = [
                    "function getValue() public view returns (uint256)", 
                    "function setValue(uint256 _value) public",
                ];

                const contract = new ethers.Contract(contractAddress, abi, provider); 

                async function readContract() { 
                    const value = await contract.getValue(); 
                    console.log(₩컨트랙트 값: S{value}₩);
                }

                readContract();
                `}</code></pre>
                        <ul><li>배포된 스마트 컨트랙트에서 값 읽기</li></ul>
                    </ul>
                </li>
            </ol>

            <p>참고</p>
            <ul><li>과제: <a href='https://github.com/dolsotbob/SolidityConcepts'>SolidityConcepts Repository</a></li>
                <li><a href='https://hardhat.org/tutorial/testing-contracts'>Hardhat testing contracts tutorial</a></li>
                <li><a href='https://hardhat.org/tutorial/testing-contracts'>ethers.js</a></li>
            </ul>

            <p>참고: 과제</p>
            <ul><li>npm run test</li>
                <pre><code>{`
            SolidityConcepts
    라이선스 및 Solidity 버전 검사
      ✔ 컨트랙트에서 SPDX 주석으로 라이선스가 있어야 합니다.
      ✔ 컨트랙트에서 Solidity 버전이 0.8.0 이상, 0.9.0 미만이어야 합니다.
    상태 변수 검사
      ✔ uint256 타입의 public 상수(constant) FIXED_VALUE 변수의 초기값은 100이어야 합니다.
      ✔ address 타입의 public 불변(immutable) owner 변수가 배포자의 주소여야 합니다.
      ✔ uint256 타입의 public 일반 상태변수 value 의 초기값은 50이어야 합니다.
    조건문 검사(checkValue)
      ✔ 함수 checkValue 호출 시 인자(uint256)를 받아 string 타입이 리턴되어야 합니다.
      ✔ 함수 checkValue 호출 시 인자값이 100보다 큰 경우 "Value is greater than 100"이 리턴되어야 합니다.
      ✔ 함수 checkValue 호출 시 인자값이 100인 경우 "Value is exactly 100"이 리턴되어야 합니다.
      ✔ 함수 checkValue 호출 시 인자값이 100보다 작은 경우 "Value is less than 100"이 리턴되어야 합니다.
    반복문 검사
      ✔ 함수 sumUpTo 호출 시 인자(uint256)를 받아 uint256 타입이 리턴되어야 합니다.
      ✔ 함수 sumUpTo 호출 시 인자(uint256)를 받아 uint256 타입이 리턴되어야 합니다.
      ✔ sumUpTo 함수는 for 문을 사용해야 합니다.
      ✔ sumUpTo 함수는 1부터 인자(uint256)까지 모든 정수를 더한 값을 반환해야 합니다.
    이벤트(event) 검사
      ✔ 이벤트 ValueChanged는 인자 (uint256 oldValue, uint256 newValue)와 함께 발생해야 합니다.
      ✔ 함수 updateValue 호출 시 상태변수 value에 새로운 값이 저장되고 ValueChanged 이벤트가 발생(emit)해야 합니다.
    접근 제어자(modifier) & 에러 처리(require) 검사
      ✔ modifier onlyOwner가 존재해야 합니다.
      ✔ onlyOwner modifier가 함수 ownerFunction에 적용되어야 합니다.
      ✔ modifier onlyOwner는 소유자(owner)가 아닌 경우 "Not the contract owner"를 에러로 출력(require)해야 합니다.
      ✔ 소유자(owner)가 함수 ownerFunction을 실행시 "Hello, Owner!"를 리턴해야 합니다.
    코인 송금 & 에러 처리(require) 검사
      ✔ 컨트랙트에 receive() 함수가 정의되어 있어야 합니다.
      ✔ 컨트랙트는 코인을 받을 수 있어야 합니다.
      ✔ sendEther 함수 호출 시 인자(address)로 들어오는 수신자가 이더를 정상적으로 받아야 합니다.
      ✔ sendEther 함수 호출 시 송금액(msg.value)이 0 미만일 경우 "Must send ether"를 오류로 출력(require)해야 합니다.
      ✔ getContractBalance 함수는 현재 컨트랙트 잔액을 반환해야 합니다.
      ✔ withDraw 함수 호출 시 소유자(owner)가 컨트랙트의 모든 잔액을 인출해야 합니다.
      ✔ 소유자(owner)가 아닌 계정이 withDraw를 호출하면 실패해야 합니다.(modifier)
`}</code></pre>
                <li>컨트랙트</li>
                <pre><code>{`
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolidityConcepts {
    uint256 public constant FIXED_VALUE = 100;
    uint256 public value = 50;
    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    function checkValue(uint256 _value) public pure returns (string memory) {
        if (_value > 100) {
            return "Value is greater than 100";
        } else if (_value == 100) {
            return "Value is exactly 100";
        } else {
            return "Value is less than 100";
        }
    }

    function sumUpTo(uint256 _number) public pure returns (uint256) {
        uint256 sum = 0;

        for (uint256 i = 1; i <= _number; i++) {
            unchecked {
                sum += i;
            }
        }
        return sum;
    }

    event ValueChanged(uint256 oldValue, uint256 newValue);

    function updateValue(uint256 newValue) public onlyOwner {
        uint256 oldValue = value; //oldValue는 function 안에 있는 로컬 변수이고 로컬에 저장됨
        value = newValue;
        emit ValueChanged(oldValue, newValue);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _; // onlyOwner가 들어간 함수의 실제 코드 실행(여기선 아래 함수)
    }

    function ownerFunction() public view onlyOwner returns (string memory) {
        return "Hello, Owner!";
    }

    receive() external payable {}

    function sendEther(address payable _to) public payable {
        require(msg.value > 0, "Must send ether");
        (bool success, ) = _to.call{value: msg.value}("");
        require(success, "Failed to send ether");
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // 실무에서는 정말로 받아지는지 반드시 확인 하고 넘어갸야 함(테스크 많이 해볼수록 좋음)
    //call 쓰면 require 쓴다
    function withDraw() public onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Failed to withdraw");
        // require(address(this).balance > 0, "No funds to withdraw");
        // payable(owner).transfer(address(this).balance);
    }
}
`}</code></pre>
            </ul>

        </div>
    )
}

export default TIL0402