import React from 'react'

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

            <p>참고 자료:</p>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-721'>ERC-721 공식 문서</a></li></ul>

        </div >
    )
}

export default TIL0410