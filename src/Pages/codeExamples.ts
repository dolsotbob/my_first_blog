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