
export const til0227stateExample = `
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
`;

export const til0227eventHandlerExample = `
function Input() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    );
}
`
export const til0228reactRouterExample = `
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
`

export const til0304useStateExample = `
import React, { useState } from "react";
import "./styles.css";

function CheckboxExample() {
    // 노트 1 
	const [isChecked, setIsChecked] = useState(false);
	
	const handleChecked = (event) => {setIsChecked(event.target.checked);};
	
	return (
		<div className="App">
			// 노트 2
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            // 노트 3 
            <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
		</div>
	);
}

export default CheckboxExample;
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


export const til0410tokenURIJSONExample = `
{
    "name": "CryptoKitty #1",
    "description": "이 고양이는 세상에서 하나뿐입니다!",
    "image": "https://example.com/images/1.png",
    "attributes": [
        { "trait_type": "색상", "value": "노랑" },
        { "trait_type": "눈 모양", "value": "둥근 눈" }
    ]
}
`;

export const til0410tokenURIExample = `
// ERC721URIStorage는 OpenZeppelin에서 제공하는 확장된 ERC721 표준
// 각 토큰 ID에 개별 URI(메타데이터)를 저장할 수 있는 기능을 제공함

contract MyNFT is ERC721URIStorage {
    uint256 private _tokenIds;                  // _tokenIds는 현재까지 발행된 NFT의 수를 추적하는 변수; private으로 선언되서 계약 외부에서 접근 불가

// 계약이 배포될 때 ERC721("MyNFT", "MNFT")는 부모 계약의 생성자를 호출하면서 NFT의 이름("MyNFT")과 심볼("MNFT")을 설정합니다
constructor() ERC721("MyNFT", "MNFT") { }

    // mint 함수는 외부에서 호출할 수 있는 공개 함수로 NFT를 발행한다
// 인자1: recipient: NFT 받을 사람의 지갑 주소 
// 인자2: metadataURI: 발행할 NFT에 연겷할 메타데이터(보통 IPFS링크)
// 발행한 NFT의 토큰 ID(uint256) 반환 
function mint(address recipient, string memory metadataURI) public returns (uint256) {
    _tokenIds++;                            // _tokenIds를 1 증가시켜 새로운 토큰 ID를 생성한다
uint256 newItemId = _tokenIds;          // 방금 증가시킨 _tokenIds 값을 newItemId 변수에 저장; 이 ID를 새 NFT의 고유 번호(토큰ID)로 사용한다

_mint(recipient, newItemId);            // recipient 주소로 ID가 newItemId인 NFT를 실제로 발행한다
_setTokenURI(newItemId, metadataURI);  // 방금 발행한 토큰에 metadataURI를 연결(즉, 이 NFT가 어떤 이미지/정보를 가지는지 정의하는 메타데이터 설정)

return newItemId;                      // 새로 발행한 NFT의 ID(토큰ID) 반환
    }
}
`;

export const til0410ERC721Example = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MyNFT is ERC721, ERC721Enumerable, Ownable, ERC721URIStorage {    // 충돌되는 함수 있어 아래에서 오버라이딩 필요 
    uint256 private _tokenIds;  // NFT의 고유한 ID를 저장하는 변수; NFT 하나 발행할 때마다 1씩 증가 

    // NFT 이름과 심볼 설정; 배포하는 사람이 자동으로 owner가 됨 
    constructor(
        string memory name_,
        string memory symbol_
    ) ERC721(name_, symbol_) Ownable(msg.sender) {}   

    // NFT 발행 함수 
    function mint(     
        address recipient,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {  // onlyOwner 덕에 이 함수는 계약의 주인만 실행 가능 
        unchecked {
            ++_tokenIds;
        }

        _safeMint(recipient, _tokenIds);    // recipient에게 새 NFT 발행 
        _setTokenURI(_tokenIds, _tokenURI); // NFT에 메타데이터 URL 연결 

        return _tokenIds;   // 새 토큰ID 반환 
    }

    // 이 계약이 어떤 인터페이스를 지원하는지 알려줌
    // 오픈씨나 다른 플랫폼이 이걸 호출해서 이 계약이 ERC721을 따르는지 판단할 수 있음 
    // override: 여러 부모 계약을 상속받았고 겹치는 것들이 있어 명시적으로 어떤 것을 사용할지 정의해줘야 함 
    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // 특정 NFT의 메타데이터 URI를 반환함 
    // 오픈씨 같은 NFT 마켓플레이스에서 이 URI를 호출해 이미지, 이름, 설명 등 메타데이터를 가져감 
    function tokenURI(
        uint256 _tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    // 토큰 전송 등으로 계정의 보유 NFT 수량이 증가할 때 호출되는 내부 함수 
    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    // 토큰을 to 주소로 옮길 때 호출됨 
    // 승인된 주소(auth)로부터 tokenId를 이동시킬 때 사용되며, 소유권 변경을 반영함 
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }
}
`;

export const til0414MetadataExample = `
{
  "name": "CryptoPunk #5822",
  "description": "이 NFT는 희귀한 CryptoPunk 중 하나입니다.",
  "image": "https://ipfs.io/ipfs/QmExampleImageHash",
  "attributes": [
    { "trait_type": "Type", "value": "Alien" },
    { "trait_type": "Accessory", "value": "Bandana" }
  ]
}
`;

export const til0414OnChainTokenURIExample = `
// 오픈씨나 NFT 마켓플레이스가 호출하는 함수; ERC721 표준에서 NFT의 메타데이터 위치를 제공하는 역할 
function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked("data:application/json;base64,", base64EncodedMetadata));
}
`;

export const til0414OffChainMintExample = `
// 새 NFT를 발행하고, 해당 NFT에 메타데이터 URI를 설정한 뒤 발행된 토큰의 ID를 반환하는 함수; 
function mint(
        address recipient,   // NFT 받을 지갑 주소 
        string memory _tokenURI   // 새로 발행되는 NFT의 메타데이터 URI 
    ) public onlyOwner returns (uint256) {  // onlyOwner만 호출 가능 
        unchecked {   // 오버플로우 검사 없이 정수 연산 수행 
            ++_tokenIds;   // tokenId를 1 증가시켜서 새로운 토큰 ID를 생성 
        }

        // recipient 주소로 _tokenIds ID를 가진 NFT를 안전하게 발행
        _safeMint(recipient, _tokenIds);   // 해당 주소가 스마트 계약인 경우 토큰 받을 준비가 되어 있는지도 확인해주는 더 안전한 민트 방법
        _setTokenURI(_tokenIds, _tokenURI);  // 발행한 NFT에 URI 연결해서 해당 토큰의 정보를 지정함  

        return _tokenIds;  // 이 함수가 생성한 NFT 토큰의 ID 반환 
    }
`

