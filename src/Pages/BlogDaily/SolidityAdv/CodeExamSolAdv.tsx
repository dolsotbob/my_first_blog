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

export const TIL0415UploadHanler = `
const handleUpload = async () => {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    formData.append('network', 'public');

    try {
      const result = await uploadFileToIPFS(formData);
      handleImageUpload({
        url: result,
        preview: preview,
      });
    } catch (error) {
      console.error('파일 업로드 실패:', error);
      alert('파일 업로드 실패!');
    } finally {
      setUploading(false);
    }
};
`

export const TIL0415UploadUI = `
return (
  <div>
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? '업로드 중...' : '업로드'}
    </button>
  </div>
);
`

export const TIL0422SendTxGas = `
await sender.sendTransaction({
  to: recipient, 
  value: ethers.utils.parseEther("1.0"),
});
`

export const TIL0422ContractGas = `
await token.transfer(recipient, ethers.utils.parseUnits("100", 18));
`

export const TIL0422DomainSeparator = `
DOMAIN_SEPARATOR = keccak256(
    abi.encode(
        keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
        keccak256(bytes(name)),
        keccak256(bytes(version)),
        chainid,
        address(this)
    )
);
`

export const TIL0423ContractCallingContract = `
contract A {
    function callB(address _b) public view returns (address) {
        return B(_b).whoIsSender();
    }
}

contract B {
    function whoIsSender() public view returns (address) {
        return msg.sender;
    }
}
`

export const TIL0423TransferToken = `
function transfer(address recipient, uint256 amount) public returns (bool) {
    require(recipient != address(0), "Invalid recipient");
    require(_balances[msg.sender] >= amount, "Insufficient balance");

    _balances[msg.sender] -= amount;
    _balances[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
}
`

export const TIL0423Approve = `
function approve(address spender, uint256 amount) public returns (bool) {
    require(spender != address(0), "Invalid spender");

    _allowances[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
}
`

export const TIL0423TransferFrom = `
function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
    require(sender != address(0), "Invalid sender");
    require(recipient != address(0), "Invalid recipient");
    require(_balances[sender] >= amount, "Insufficient balance");
    require(_allowances[sender][msg.sender] >= amount, "Allowance exceeded");

    _balances[sender] -= amount;
    _balances[recipient] += amount;
    _allowances[sender][msg.sender] -= amount;

    emit Transfer(sender, recipient, amount);
    return true;
}
`

export const TIL0423mint = `
function _mint(address account, uint256 amount) internal {
    require(account != address(0), "Invalid account");

    _totalSupply += amount;
    _balances[account] += amount;
    emit Transfer(address(0), account, amount);
}
`

export const TIL0423burn = `
function _burn(address account, uint256 amount) internal {
    require(account != address(0), "Invalid account");
    require(_balances[account] >= amount, "Insufficient balance");

    _balances[account] -= amount;
    _totalSupply -= amount;
    emit Transfer(account, address(0), amount);
}
`

export const TIL0423msgSender = `
function _msgSender() internal view returns (address) {
    if (msg.data.length >= 20 && isTrustedForwarder(msg.sender)) {
        address signer;
        assembly {
            signer := shr(96, calldataload(sub(calldatasize(), 20)))
        }
        return signer;
    }
    return msg.sender;
}
`

export const TIL0423msgData = `
function _msgData() internal view returns (bytes calldata) {
    if (msg.data.length >= 20 && isTrustedForwarder(msg.sender)) {
        return msg.data[:msg.data.length - 20];
    }
    return msg.data;
}
`
