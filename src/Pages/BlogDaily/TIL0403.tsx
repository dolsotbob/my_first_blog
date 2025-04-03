import React from 'react'

const TIL0403 = () => {
  return (
    <div className='BlogDaily'>
      <p>2025년 4월 3일</p>
      <h3>Solidity - 실습 4</h3>
      <ul><li>Solidity - 기본 문법4의 문법 개념 활용</li></ul>

      <h4>Vault 컨트랙트</h4>
      <ul><li>코인을 저장하는 금고Vault 컨트랙트 개발하기</li></ul>
      <ul><li>npm run test:Vault</li></ul>
      <pre><code>{`
            Vault
    라이선스 및 Solidity 버전 검사
      ✔ 컨트랙트에서 SPDX 주석으로 라이선스가 있어야 합니다.
      ✔ 컨트랙트에서 Solidity 버전이 0.8.0 이상, 0.9.0 미만이어야 합니다.
    상태 변수 검사
      ✔ address 타입의 public 상태변수 owner 의 값은 배포자의 주소여야 합니다.
      ✔ uint256 타입의 public 상태변수 sentValue 가 선언되어야 합니다.
      ✔ uint256 타입의 public 상태변수 timestamp 가 선언되어야 합니다.
      ✔ uint256 타입의 public 상태변수 gasUsed 가 선언되어야 합니다.
    함수 검사
      ✔ 함수 deposit을 호출하면 sentValue는 "호출 시 전송된 이더(코인)의 양 (wei 단위)", timestamp는 "현재 블록이 생성된 시간"이 저장되어야 합니다.
      ✔ 함수 deposit을 호출 시 보내는 이더(코인)의 양이 0 이하일 시 "Must send some ether." 에러를 출력해야 합니다.
      ✔ 함수 getCaller는 호출자의 주소를 리턴해야 합니다.
      ✔ 함수 getOrigin은 트랜잭션을 시작한 외부 계정 주소를 반환해야 합니다.
      ✔ 함수 getBlockDetails는 호출 시 현재 블록 정보 값(
          현재 블록의 번호(uint), 
          이전 블록의 난수(uint) 값,
          현재 블록의 가스 한도(uint),
          현재 블록을 채굴한 채굴자의 주소(address)
        )을 반환해야 합니다.
      ✔ 함수 trackGasUsage 호출 시 gasleft()를 사용하여 초기 가스 값과 최종 가스 값의 차이를 계산하고, 이를 상태 변수 gasUsed에 저장해야 합니다.
      ✔ 함수 generateHash는 string 타입을 인자(string)로 받아 keccak256 해시 값(bytes32)을 리턴해야 합니다.

            `}</code></pre>
      <ul><li>금고 컨트랙트: </li></ul>
      <pre><code>{`
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract Vault {
    address public owner; 
    uint256 public sentValue;
    uint256 public timestamp;
    uint256 public gasUsed;

    // 인자 넣어줄 수도 있음 (그러면 배포 스크립트에 주소 넣어주어야)
    constructor() { 
        owner = msg.sender; 
    }
     
    function deposit() public payable { 
        require(msg.value > 0, "Must send some ether."); 
        sentValue = msg.value; 
        timestamp = block.timestamp; 
    }

    function getCaller() public view returns (address) { 
        return msg.sender; 
    }

    function getOrigin() public view returns (address) { 
        return tx.origin; 
    }

    function getBlockDetails() public view returns (uint256, uint256, uint256, address) { 
    return (block.number, block.prevrandao, block.gaslimit, block.coinbase);
    }

    // 확인용 함수; 내가 만든 이 컨트랙트가 얼마나 많은 가스비를 소모하는지 확인하기 위함 
    function trackGasUsage() public {
        uint256 initalGas = gasleft(); 
        uint256 result = 0; 

        for (uint i = 0; i < 100; i++) {
                result += i; 
        }
        
        uint finalGas = gasleft(); 
        gasUsed = initialGas - finalGas; 
    }
    
    // 상태 변수를 바꾸지 않기 때문에 memory가 아닌 calldata 사용 
    function generateHash(
         string calldata message
    ) public pure returns (bytes32) { 
        return keccak256(abi.encodePacked(message));  // string은 bytes로도 변경 가능; encode vs encodePacked 
    }
}
`}</code></pre>



      <h4>Bank 컨트랙트</h4>
      <ul><li>코인을 저장하는 금고Vault 컨트랙트를 상속받아 출금 기능이 있는 Bank 컨트랙트 개발하기</li></ul>
      <ul><li>npm run test:Bank</li></ul>
      <pre><code>{`
Bank
    라이선스 및 Solidity 버전 검사
      ✔ 컨트랙트에서 SPDX 주석으로 라이선스가 있어야 합니다.
      ✔ 컨트랙트에서 Solidity 버전이 0.8.0 이상, 0.9.0 미만이어야 합니다.
    (상속) Bank는 Vault의 상속받은 기능을 사용할 수 있어야 합니다.
      상태 변수 검사
        ✔ address 타입의 public 상태변수 owner 의 값은 배포자의 주소여야 합니다.
        ✔ uint256 타입의 public 상태변수 sentValue 가 선언되어야 합니다.
        ✔ uint256 타입의 public 상태변수 timestamp 가 선언되어야 합니다.
        ✔ uint256 타입의 public 상태변수 gasUsed 가 선언되어야 합니다.
      함수 검사
        ✔ 함수 deposit을 호출하면 sentValue는 "호출 시 전송된 이더(코인)의 양 (wei 단위)", timestamp는 "현재 블록이 생성된 시간"이 저장되어야 합니다.
        ✔ 함수 deposit을 호출 시 보내는 이더(코인)의 양이 0 이하일 시 "Must send some ether." 에러를 출력해야 합니다.
        ✔ 함수 getCaller는 호출자의 주소를 리턴해야 합니다.
        ✔ 함수 getOrigin은 트랜잭션을 시작한 외부 계정 주소를 반환해야 합니다.
        ✔ 함수 getBlockDetails는 호출 시 현재 블록 정보 값(
          현재 블록의 번호(uint), 
          이전 블록의 난수(uint) 값,
          현재 블록의 가스 한도(uint),
          현재 블록을 채굴한 채굴자의 주소(address)
        )을 반환해야 합니다.
        ✔ 함수 trackGasUsage 호출 시 gasleft()를 사용하여 초기 가스 값과 최종 가스 값의 차이를 계산하고, 이를 상태 변수 gasUsed에 저장해야 합니다.
        ✔ 함수 generateHash는 string 타입을 인자(string)로 받아 keccak256 해시 값(bytes32)을 리턴해야 합니다.
    이벤트(event) 검사
      ✔ 이벤트 Withdrawn는 인자 (address indexed user, uint256 amount)와 함께 발생해야 합니다.
      ✔ 함수 withdraw는 uint256 타입을 인자로 받아 (1)sentValue에서 인자 값을 차감 후 (2)해당 인자 값 만큼 호출자에게 반환해야 합니다.
      ✔ 함수 withdraw를 정상적으로 호출시 Withdrawn 이벤트가 발생해야 합니다.
    접근 제어자(modifier) & 에러 처리(require) 검사
      ✔ modifier onlyOwner가 존재해야 합니다.
      ✔ onlyOwner modifier가 함수 withdraw에 적용되어야 합니다.
      ✔ modifier onlyOwner는 소유자(owner)가 아닌 경우 "Only the owner can call withdraw."를 에러로 출력(require)해야 합니다.
      ✔ 함수 withdraw는 인자로 들어오는 값이 sentValue를 초과할 경우 "Insufficient balance in Vault."를 에러로 출력해야 합니다.

            `}</code></pre>
      <ul><li>Bank 컨트랙트</li></ul>
      <pre><code>{`
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Vault.sol";

contract Bank is Vault {
    // indexed: 필터 용으로, tx 후 영수증으로 ... 나중에 찾아볼 수 있도록
    event Withdrawn(address indexed user, uint256 amount); 

    modifier onlyOwner() { 
         require(msg.sender == owner, "Only the owner can call withdraw.");
         _;
    }

    function withdraw (uint256 amount) public onlyOwner { 
        require (amount <= sentValue, "Insufficient balance in Vault.");
        
        sentValue -= amount; 
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed."); 

        emit Withdrawn(msg.sender, amount); 
    }
    receive() external payable {}
}
            `}</code></pre>
    </div>
  )
}

export default TIL0403