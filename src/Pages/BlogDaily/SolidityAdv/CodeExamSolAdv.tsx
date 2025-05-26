export const TIL0407TxCallSolidity =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionExample {
    uint256 public value;

    // 트랜잭션 호출 (상태 변경)
    function setValue(uint256 _value) public {
        value = _value;
    }
}
`

export const TIL0407TxCallJS =
    `
const contract = new ethers.Contract(contractAddress, abi, signer);
await contract.setValue(42); // 상태 변경 -> 가스 필요
`

export const TIL0407CallSolidity =
    `
contract CallExample {
    uint256 public value = 100;

    // 조회 호출 (가스 없음)
    function getValue() public view returns (uint256) {
        return value;
    }
}
`

export const TIL0407CallJS =
    `
const value = await contract.getValue();  // 가스 없이 데이터 조회  
console.log(value.toString());  // "100"
`

export const TIL0407ContractExample =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public value;  // public 키워드 덕에 자동 getter 함수 

    event ValueChanged(uint256 newValue);

    function setValue(uint256 _value) public {  // setter 함수 
        value = _value;
        emit ValueChanged(_value);
    }

    function getValue() public view returns (uint256) {  // getter 함수 
        return value;
    }
}
`

export const til0407deployExample = `
// hre = Hardhat Runtime Environment 
// hre는 hardhat.config.js설정과 연결되어 있고 Hardhat에서 제공하는 기능을 사용할 수 있게 해줌 (배포, 컴파일, 테스트 등)
const hre = require("hardhat");

async function main() {     // 블록체인과의 통신이 비동기로 일어나서 async/await 사용 
  const MyContract = await hre.ethers.getContractFactory("MyContract");   // MyContract라는 스마트 계약을 만들 수 있는 기계를 주세요
  const contract = await MyContract.deploy();   // 이제 진짜 계약을 하나 만들어 블록체인에 배포해주세요  

  await contract.waitForDeployment();   // 배포가 완료될 때까지 기다림 

  console.log(₩📌 스마트 컨트랙트 배포 완료! 주소: S{ contract.target }₩);  // contract.target은 배포된 스마트 계약 주소 

  // ABI 저장 (artifacts 폴더에서 가져오기)
  const contractArtifact = await hre.artifacts.readArtifact("MyContract");  // artifacts 폴더에서 MyContract의 정보를 읽어온다(이 안에 abi, 바이트코드 등의 정보가 있음) 
  console.log("📌 ABI:", JSON.stringify(contractArtifact.abi, null, 2));
}

// main()을 실행하고 에러가 생기면 콘솔에 출력하고 종료 코드를 1로 설정함 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
`;

export const til0407afterDeploymentExample =
    `
예시

📌 스마트 컨트랙트 배포 완료! 주소: 0x1234567890abcdef1234567890abcdef12345678
📌 ABI: [
  {
    "inputs": [{"internalType": "uint256","name": "_value","type": "uint256"}],
    "name": "setValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getValue",
    "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
]
`

export const til0407callContractExample = `
require("dotenv").config();
const { ethers } = require("ethers");

// 📌 배포된 컨트랙트 주소 (배포 후 콘솔에서 확인 가능)
const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

// 📌 ABI 불러오기
const contractArtifact = require("../artifacts/contracts/MyContract.sol/MyContract.json");
const abi = contractArtifact.abi;

// 📌 이더리움 네트워크 프로바이더 설정
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// 📌 지갑 연결 (Hardhat 테스트 계정 사용)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// 📌 스마트 컨트랙트 인스턴스 생성
const contract = new ethers.Contract(contractAddress, abi, wallet);

// 📌 컨트랙트 함수 호출 (쓰기 트랜잭션)
async function setContractValue() {
  const tx = await contract.setValue(42);
  await tx.wait();
  console.log("📌 setValue 트랜잭션 완료!");
}

// 📌 컨트랙트 값 조회 (읽기 호출)
async function getContractValue() {
  const value = await contract.getValue();
  console.log("📌 현재 저장된 값:", value.toString());
}

// 실행
setContractValue();
getContractValue();
`;

export const til0408OpenZeppelinCreatingToken =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
`


