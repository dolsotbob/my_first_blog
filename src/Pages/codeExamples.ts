



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

export const til0304onChangeExample = `
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <h1>{name}</h1>
    </div>
  )
};
`
export const til0304onClickExample = `
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={() => alert(name)}>Button</button>  // 버튼을 클릭하면 alert(name)을 실행해
      <h1>{name}</h1>
    </div>
  );
};
`

export const til0324contractExample = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleContract {
    // 1️⃣ 상태 변수 (State Variables)
    string public message;

    // 2️⃣ 생성자 (Constructor)
    constructor(string memory _message) {
        message = _message;
    }

    // 3️⃣ 함수 (Functions): 스마트 컨트랙트가 수행할 로직을 정의 
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
`

export const til0327globalVariableExample = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GlobalVariablesExample {
    address public owner;
    uint256 public sentValue;
    uint256 public timestamp;

    constructor() {
        owner = msg.sender; // 계약을 배포한 주소 저장
    }

    // 이더를 입금하고 관련 데이터를 기록
    function deposit() public payable {
        require(msg.value > 0, "Must send some ether.");
        sentValue = msg.value;           // 송금한 이더 양 기록
        timestamp = block.timestamp;     // 트랜잭션 발생 시간 기록
    }

    // 호출자의 주소 반환
    function getCaller() public view returns (address) {
        return msg.sender;               // 호출한 주소 반환
    }

    // 최초 트랜잭션 발신자 확인
    function getOrigin() public view returns (address) {
        return tx.origin;                // 트랜잭션 시작 주소 반환; 보안 문제로 주의 필요 
    }
}
`

export const til0327vulnerableContractExample = `
// 취약한 컨트랙트
contract VulnerableContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw() public {
        // ❌ 취약한 접근 제어
        require(tx.origin == owner, "Not owner");
        
        // 이더 송금 로직 (생략)
    }
}

// 공격자가 에어드랍 이벤트라고 속여서 owner에게 어떤 버튼을 누르면 트랜잭션이 생성되어 무엇을 실행되게 합니다. 

// 사실상 공격자가 만든 컨트랙트
contract AttackContract {
    address public vulnerableContract;

    constructor(address _victim) {
        vulnerableContract = _victim;
    }

    function attack() public {
        // vulnerableContract = VulnerableContract 주소
        (bool success, ) = victimContract.call(
            abi.encodeWithSignature("withdraw()")
        );
        require(success, "Call failed");
    }
}
`

export const til0327blockInfoExample = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockInfo {
    function getBlockDetails() public view returns (
        uint blockNum, 
        uint prevrandao, 
        uint gasLimit, 
        address miner
    ) {
        return (
            block.number,         // 현재 블록 번호
            block.prevrandao,     // 이전 블록의 난수; Ethereum 2.0 업그레이드 이후 block.difficulty를 대체 
            block.gaslimit,       // 블록 가스 한도
            block.coinbase        // 채굴자의 주소
        );
    }
}
`
export const til0327gasTrackerExample = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasTracker {
    uint256 public gasUsed;

    function trackGasUsage() public {
        uint256 initialGas = gasleft();  // 시작 시점 가스량 기록
        uint256 result = 0;

        // 가스를 소모하는 연산 (예: 반복문)
        for (uint i = 0; i < 100; i++) {
            result += i;
        }

        uint256 finalGas = gasleft();    // 종료 시점 가스량 기록
        gasUsed = initialGas - finalGas; // 사용한 가스 계산
    }
}
`
export const til0327generateHashExample = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashGenerator {
    function generateHash(string memory data) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(data)); // 해시 값 생성
    }
}
`

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

export const til0422eip712SigningExample = `
const domain = {
  name: "MyToken",
  version: "1",
  chainId: 1,
  verifyingContract: "0x1234567890abcdef...",
};

const types = {
  Permit: [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
};

const message = {
  owner: "0xabc...",
  spender: "0xdef...",
  value: 100,
  nonce: 1,
  deadline: 1713200000, // Math.floor(Date.now() / 1000) + 3600;
};

const signature = await signer.signTypedData(domain, types, message);
`

export const til0423getUserAddressExample = `
    /**
     * @dev Indicates whether any particular address is the trusted forwarder.
     */
    function isTrustedForwarder(address forwarder) public view virtual returns (bool) {
        return forwarder == trustedForwarder();
    }

    /**
     * @dev Override for 'msg.sender'. Defaults to the original 'msg.sender' whenever
     * a call is not performed by the trusted forwarder or the calldata length is less than
     * 20 bytes (an address length).
     */
    function _msgSender() internal view virtual override returns (address) {
        uint256 calldataLength = msg.data.length;
        uint256 contextSuffixLength = _contextSuffixLength();
        if (isTrustedForwarder(msg.sender) && calldataLength >= contextSuffixLength) {
            return address(bytes20(msg.data[calldataLength - contextSuffixLength:]));
        } else {
            return super._msgSender();
        }
    }
`

export const til0423erc277MetaTnxExecuteExample = `
export const execute = async () => {
  try {
    const deadline = Math.floor(Date.now() / 1000) + 3600;

    const nonce = await forwarder.nonces(user1.address);
    const domain = {
      name: 'MyForwarder',
      version: '1',
      chainId: (await provider.getNetwork()).chainId,
      verifyingContract: forwarderAddress,
    };

    const types = {
      ForwardRequest: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'gas', type: 'uint256' },
        { name: 'nonce', type: 'uint256' },
        { name: 'deadline', type: 'uint48' },
        { name: 'data', type: 'bytes' },
      ],
    };

    const message = {
      from: user1.address,
      to: tokenAddress,
      value: ethers.toBigInt(0),
      nonce: nonce,
      deadline: deadline,
      gas: ethers.toBigInt(500000),
      data: token.interface.encodeFunctionData('transfer', [
        user2.address,
        ethers.parseEther('1'),
      ]),
    };

    const signature = await user1.signTypedData(domain, types, message);

    const request = {
      ...message,
      signature: signature,
    };

    const execute = await forwarder.execute(request);
    await execute.wait();
  } catch (error) {
    console.error('Error in execute:', error);
  }
};
`

export const TIL0509MiddlewareExample = `
const express = require('express');
const app = express();

// 미들웨어 1: 모든 요청에 대해 로그 출력
app.use((req, res, next) => {
  console.log(₩[LOG] S{req.method} S{req.url}₩);
  next(); // 다음 단계로 진행
});

// 미들웨어 2: 인증 여부 확인 (간단한 예시)
app.use((req, res, next) => {
  if (req.query.token === '1234') {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
});

// 라우터 핸들러
app.get('/', (req, res) => {
  res.send('Hello, authorized user!');
});

app.listen(3000);
`

export const TIL0509RoutingExample = `
const express = require('express');
const app = express();

// GET 요청 처리
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// POST 요청 처리
app.post('/users', (req, res) => {
  res.send('New user created');
});

app.listen(3000);
`

export const TIL0509RoutingExample2 = `
app.get('/products');          // 모든 상품 조회
app.get('/products/:id');      // 특정 상품 조회
app.post('/products');         // 상품 추가
app.put('/products/:id');      // 상품 전체 수정
app.delete('/products/:id');   // 상품 삭제
`

export const TIL0512CreateServer = `
// app.js 또는 server.js 
const express = require('express');
const app = express();
const port = 3000;

// JSON 요청 파싱 미들웨어 등록 
app.use(express.json());

// 기본 라우팅 예시 
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, () => {
  console.log(₩🚀 서버가 http://localhost:S{port} 에서 실행 중입니다.₩);
});
`

export const TIL0512UserAPIExample = `
// GET: 사용자 전체 목록 조회
app.get('/users', (req, res) => {
  res.json(users); // 예: [{ id: 1, name: 'Alice' }]
});

// POST: 사용자 생성
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT: 사용자 정보 수정
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  // 실제 수정 로직은 생략
  res.json({ id, ...updated });
});

// DELETE: 사용자 삭제
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  // 실제 삭제 로직은 생략
  res.status(204).send();
});
`

export const TIL0513tokenAuthMiddleware = `
// JSON Web Token을 검증하고 생성하는 jsonwebtoken 라이브러리를 가져온다 
const jwt = require('jsonwebtoken');

// 이 미들웨어 함수는 /auth/me 같은 인증이 필요한 라우터 전에 실행됩니다.
function authenticate(req, res, next) {
   // 요청 헤더에서 Authorization 값을 꺼낸다 
   // 클라이언트는 이렇게 보낸다 -> Authorization: Bearer <JWT토큰>
   const authHeader = req.headers.authorization; 
   // 헤더가 없다면 인증 실패 
   if (!authHeader) return res.sendStatus(401); 

   // Authorization 헤더는 "Bearer <token>" 형식이므로,
	 //	공백 기준으로 나눠서 두 번째 요소(token)만 추출 
   // 첫 번째 요소는 Bearer임  
   const token = authHeader.split(' ')[1];

   try { 
     // jwt.verify() 로 토큰이 유효한지 검사 
     // 검증 성공 시, 토큰에 담긴 payload가 decoded로 반환됨 
     const decoded = jwt.verify(token, 'my-secret-key');
     // 검증에 성공하면 토큰에 담긴 사용자 정보를 req.user에 저장 
     req.user = decoded; 
     next();
   } catch (err) {
     return res.status(403).json({ message: '토큰이 유효하지 않습니다.' });
   }
}
`