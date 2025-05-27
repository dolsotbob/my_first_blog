import React from 'react'
import CodeBlock from '../../../components/CodeBlock';
import { til0410tokenURIJSONExample } from '../../codeExamples';
import { til0410tokenURIExample } from '../../codeExamples';
import { til0410ERC721Example } from '../../codeExamples';

const TIL0410 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 10일</p>
            <h3>ERC-721</h3>
            <ul><li>NFT(Non-Fungible Token)을 생성할 수 있는 표준</li></ul>

            <p>ERC-20과 ERC-721과의 차이</p>
            <ul><li>ERC-20은 대체 가능한 자산
                <ul><li>같은 종류의 ERC-20 토큰들은 개별적인 차이가 없고 서로 교환이 가능함
                    <ul><li>1 ETH는 어떤 주소에서든 동일한 가치를 지님</li></ul>
                </li>
                    <li>거래 방식: 특정 수령을 전송 가능</li>
                    <li>소유권 조회: balanceOf(address)로 토큰 잔액 확인</li>
                </ul>
            </li>
                <li>ERC-721: 각각의 토큰이 고유한 속성을 가지는 대체 불가능한(Non-Fungible) 토큰임
                    <ul><li>각 ERC-721 토큰은 개별적으로 구별되며 특정 자산의 소유권 증명에 활용됨</li>
                        <li>개별적 가치를 지닌 디지털 자산이 필요한 경우 NFT가 적합한 솔루션임</li></ul>
                </li>
            </ul>
            <ul><li>한 마디로 ERC-20은 수량, ERC-721은 개체/ID</li></ul>

            <p>ERC-721의 주요 특징</p>
            <ul><li>대체 불가능(Non-Fungible): 각 토큰이 고유하며, 다른 토큰과 1:1로 교환할 수 없음</li>
                <li>소유권 증명: 특정 토큰이 특정 주소의 소유라는 점을 블록체인 상에서 증명할 수 있음</li>
                <li>추적 가능: 토큰의 생성, 전송, 소유권 이전 내역을 블록체인에서 확인 가능</li>
                <li>거래 방식: 개별 ID를 가진 특정 토큰을 전송</li>
                <li>소유권 조회: ownerOf(tokenId)로 특정 토큰의 소유자 확인</li>
            </ul>

            <p>ERC-721의 활용 사례</p>
            <ol><li>디지털 아트 & 수집품
                <ul><li>예: 크립토펑크, Bored Ape Yacht Club</li></ul>
            </li>
                <li>가상 부동산
                    <ul><li>예: Decentraland의 LAND, The Sandbox</li></ul>
                </li>
                <li>게임 아이템
                    <ul><li>예: CryptoKitties, Axie Infinity</li></ul>
                </li>
                <li>실제 자산 증명
                    <ul><li>예: Ubitquity(부동산 소유권 관리), Propy(부동산 거래 기록)</li></ul>
                </li></ol>

            <h4>ERC-721 표준</h4>
            <ul><li>ERC-721은 대체 불가능한 토큰을 위한 표준이다</li>
                <li>NFT는 각 토큰이 고유한 속성을 가지며 소유권을 추적할 수 있는 스마트 컨트랙트 기반의 토큰이다</li>
                <li>ERC-721을 준수하는 스마트 컨트랙트는 아래와 같은 필수 기능과 이벤트를 구현해야 한다</li></ul>

            <p>ERC-721 필수 기능</p>
            <ol><li>특정 토큰의 소유자 확인
                <pre><code>{`
    function ownerOf(uint256 tokenId) external view returns (address);
    `}</code></pre>
                <ul><li>특정 토큰 ID(tokenID)의 소유자 주소를 반환함</li>
                    <li>NFT는 개별적으로 구별되므로 각 토큰 ID가 특정 주소에 귀속됨</li></ul>
            </li> <br />

                <li>토큰 전송 (소유자가 직접 실행)
                    <pre><code>{`
    function transferFrom(address from, address to, uint256 tokenId) external;
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    `}</code></pre>
                    <ul><li>transferFrom: from 주소에서 to 주소로 특정 NFT(tokenId) 를 전송함</li>
                        <li>safeTransferFrom: transferFrom과 동일하지만, 수신자가 컨트랙트일 경우, 수신 컨트랙트가 ERC-721을 지원하는지 확인 후 전송함</li>
                        <li>소유자만 실행할 수 있으며, approve()를 통해 다른 계정도 실행할 수 있음</li>
                        <li><span style={{ color: "green", fontStyle: 'italic' }}>cf: ERC20에서의 transferFrom</span>
                            <pre><code>{`
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
    `}</code></pre>
                        </li>
                        <li><span style={{ color: "green", fontStyle: 'italic' }}>cf: ERC-20에는 ERC-721에 없는 transfer()가 있음 - 내가 직접 누군가에게 보낼 때</span>
                            <pre><code>{`
    function transfer(address _to, uint256 _value) public returns (bool success)
    `}</code></pre>
                        </li>
                    </ul>
                </li><br />

                <li>승인 기능
                    <pre><code>{`
    function approve(address to, uint256 tokenId) external;
    `}</code></pre>
                    <ul><li>특정 토큰(tokenId) 에 대한 제어 권한을 다른 계정(to)에게 부여한다</li>
                        <li>이 기능을 사용하면 위임받은 계정이 transferFrom()을 실행할 수 있음</li><br />
                        <li><span style={{ color: "green", fontStyle: 'italic' }}>cf: ERC-20의 approve(): 사람들이 위조 토큰 만드는 것을 방지하며 토큰의 총 발행량을 확인하여 tx을 허용하거나 거부함</span>
                            <pre><code>{`
    function approve(address _spender, uint256 _value) public returns (bool success)
    `}</code></pre>
                            <ul><li><span style={{ color: "green", fontStyle: 'italic' }}>Allows _spender to withdraw from your account multiple times, up to the _value amount</span></li>
                                <li><span style={{ color: "green", fontStyle: 'italic' }}>ERC20에서의 approve()는 누군가에게 특정 수량(value)를 보내는 것을 승인 하는 것</span>
                                    <ul><li>ERC721에서의 approve()는 누군가에게 어떤 개체를 보내는 것에 대해 승인하는 것</li></ul>
                                </li></ul>

                        </li>
                    </ul>
                </li><br />

                <li>전체 승인(Operator Approval) 기능
                    <pre><code>{`
    function setApprovalForAll(address operator, bool approved) external;
    `}</code></pre>
                    <ul><li>특정 주소(operator)가 모든 토큰을 관리할 수 있도록 승인함</li>
                        <li>true이면 operator는 소유자의 모든 토큰을 전송할 수 있으며, false이면 권한을 해제함</li></ul>
                </li><br />

                <li>승인된 주소 조회
                    <pre><code>{`
    function getApproved(uint256 tokenId) external view returns (address);
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    `}</code></pre>
                    <ul><li>getApproved(): 특정 토큰(tokenId) 에 대해 승인된 계정(위임받은 계정)을 반환함</li>
                        <li>isApprovedForAll(): 특정 owner의 모든 토큰을 전송할 수 있는 operator인지 확인함</li></ul>
                </li><br />

                <li>토큰(NFT)의 개수 조회
                    <pre><code>{`
    function balanceOf(address _owner) external view returns (uint256);
    `}</code></pre>
                    <ul><li>특정 주소가 보유한 ERC-721 토큰(NFT)의 개수를 조회하는 함수</li></ul>
                </li></ol>

            <p>ERC-721 필수 이벤트</p>
            <ol><li>전송 이벤트
                <pre><code>{`
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    `}</code></pre>
                <ul><li>NFT가 from 주소에서 to 주소로 전송될 때 발생하는 이벤트</li>
                    <li>새로운 NFT가 생성될 경우 from은 0x0이 됨</li>
                    <li><span style={{ color: "green", fontStyle: 'italic' }}>cf. ERC20의 event Transfer: </span></li>
                    <pre><code>{`
    event Transfer(address indexed _from, address indexed _to, uint256 _value)
    `}</code></pre>
                </ul>
            </li><br />

                <li>승인 이벤트
                    <pre><code>{`
        event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
        `}</code></pre>
                    <ul><li>특정 NFT(tokenId) 에 대한 사용 권한이 approved 주소에 부여될 때 발생함</li>
                        <li><span style={{ color: "green", fontStyle: 'italic' }}>cf. ERC20의 event Approval:</span></li>
                        <pre><code>{`
    event Approval(address indexed _owner, address indexed _spender, uint256 _value)
    `}</code></pre>
                    </ul>
                </li><br />

                <li>전체 승인(Operator Approval) 이벤트
                    <pre><code>{`
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    `}</code></pre>
                    <ul><li>owner가 operator에게 모든 NFT에 대한 권한을 부여하거나 해제할 때 발생함</li></ul>
                </li>
            </ol><br />

            <h4>참고 자료:</h4>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-721'>EIP721 공식 제안문서</a></li></ul>

            <h4>메타데이터</h4>
            <p>ERC-721에서 메타데이터(tokenURI)가 필요한 이유</p>
            <ul><li>NFT는 디지털 자산을 소유 및 추적할 수 있도록 하는 블록체인 기술이다</li>
                <li>그러나 NFT 자체는 이미지, 비디오, 음악 등의 데이터를 직접 저장하지 않는다
                    <ul><li>1MB의 이미지를 저장하려면 ETH 수백 개 이상의 비용이 필요할 수 있음</li></ul>
                </li>
                <li>대신, 메타데이터(tokenURI)를 사용하여 외부 저장소(예: IPFS, Arweave, AWS, 온체인 등)에 저장된 디지털 자산을 참조한다</li></ul>

            <p>tokenURI란?</p>
            <ul><li>NFT의 메타데이터(JSON 형식)을 저장하는 URI(Uniform Resource Identifier)</li>
                <li>NFT의 정보를 설명하는 JSON 파일의 URL 반환</li>
                <li>tokenURI(uint256 tokenId) 함수가 호출되면, 해당 토큰의 메타데이터 URL을 반환</li>
                <li>예제: tokenURI() 함수
                    <pre><code>{`
            function tokenURI(uint256 tokenId) public view override returns (string memory) {
                return string(abi.encodePacked("https://example.com/metadata/", Strings.toString(tokenId), ".json"));
            }
            `}</code></pre>
                    <ul><li>위 함수가 실행되면 https://example.com/metadata/1.json 같은 URL이 반환됨</li></ul>
                </li>
            </ul>

            <p>tokenURI에 저장된 메타데이터(JSON) 구조</p>
            <ul><li>NFT 메타데이터는 일반적으로 JSON 형식으로 작성됨</li>
                <li>예제: NFT 메타데이터 (tokenURI가 가리키는 JSON)</li></ul>

            <CodeBlock code={til0410tokenURIJSONExample} />

            <ul><li>각 필드의 역할:
                <ul><li>name: NFT의 이름</li>
                    <li>description: NFT에 대한 설명</li>
                    <li>image: NFT가 나타내는 이미지의 URL</li>
                    <li>attributes: NFT의 속성(특성)</li></ul>
            </li></ul>

            <p>tokenURI가 필요한 이유</p>
            <ul><li>NFT의 실제 데이터를 저장할 공간 제공: 블록체인에 저장하는 것은 가스비가 너무 높음</li>
                <li>NFT에 대한 정보를 쉽게 조회 가능: 오픈씨에서 정보 쉽게 불러올 수 있음</li>
                <li>유동성과 거래 가능성 증가: tokenURI가 없으면 NFT를 보유해도 어떤 자산인지 확인할 수 없음</li>
                <li>확장성 제공: NFT에 새로운 속성을 추가하거나 변경할 수 있음</li></ul>

            <p>tokenURI가 사용되는 실제 예제</p>
            <ul><li>NFT 생성 후 tokenURI 설정</li></ul>

            <CodeBlock code={til0410tokenURIExample} />

            <p>오픈씨같은 마켓플레이스에서 NFT 표시</p>
            <ul><li>tokenURI()를 호출하여 NFT의 이미지와 속성을 불러옴</li></ul>

            <h4>OpenZeppelin을 사용한 ERC-721 예시</h4>
            <ul><li>OpenZeppelin 라이브러리 설치:
                <ul><li>npm install @openzeppelin/contracts</li></ul>
            </li>
                <li>Reference ERC-721 토큰 생성(컨트랙트 개발)</li>
            </ul>
            <CodeBlock code={til0410ERC721Example} />

            <ul><li>ERC721을 상속받아 표준 토큰을 쉽게 만들 수 있음</li>
                <li>Ownable 을 상속받아 컨트랙트 owner와 관련된 기능을 사용할 수 있음</li>
                <li>ERC721URIStorage 를 상속받아 각 NFT(토큰 ID)에 대한 메타데이터(URI)를 저장하고 관리할 수 있도록 하는 기능을 사용할 수 있음</li>
                <li>ERC721Enumerable 을 상속받아 총 공급량 조회 및 개별 보유자 목록 조회 기능을 사용할 수 있음</li></ul>


            <h4>과제: 나만의 NFT 만들기</h4>
            <ul><li>ERC721 토큰 컨트랙트를 구현하고, Ethers.js를 이용하여 컨트랙트 호출(Call) 해보기</li>
                <li>Ganache 로컬 블록체인을 Hardhat에 연결</li>
                <li>과제물:<a href='https://github.com/dolsotbob/erc721'>ERC721</a></li>
                <li>교제 6쪽 예제을 MyNFT.sol에 복붙한 후 부모 컨트랙트 살펴보기</li>
                <li>ethers.ts: ethers.js를 사용해 블록체인과 통신해서 자바스크립트에서 내가 배포한 컨트랙트의 함수를 하나씩 실행 해보는 것
                    <ul><li>서버든 프론트든 자바스크립트 기반에서 콘트랙트와 통신이 가능하다</li>
                        <li>abi는 모델하우스, 혹은 설명서 같은 것. 우리는 abi를 통해 배포한 컨트랙트의 함수를 호출하는 것을 연습하는 것임</li></ul>
                </li>
                <li>npm run test 하면 후반부에 오래 걸리는 이유: 무언가 꼬였다가 스스로 풀렀다는 의미 &rarr; 웹3에서 테스트 여러 번 해야 하는 이유임</li>
            </ul>



        </div >
    )
}

export default TIL0410