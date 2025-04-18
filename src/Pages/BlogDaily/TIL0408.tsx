import React from 'react'

const TIL0408 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 8일</p>
            <h3>ERC-20</h3>
            <ul><li>학습 목표: Solidity를 활용하여 토큰을 개발하고, 배포 및 상호작용하는 방법을 익히기</li></ul>

            <h4>EIP & ERC</h4>
            <ul><li>이더리움 네트워크는 오픈소스 프로젝트로 누구나 스마트 컨트랙트를 개발할 수 있다</li>
                <li>통일된 표준이 없으면 서로 다른 스마트 컨트랙트 및 애플리케이션 간의 호환성 문제가 발생할 수 있어 EIP와 ERC가 도입됨</li>
                <li>EIP는 이더리움 네트워크의 개선을 위한 공식적인 제안 시스템이며, ERC는 스마트 컨트랙트의 표준을 정의하는 제안이다</li></ul>

            <p>EIP (Ethereum Improvement Proposal, 이더리움 개선 제안)</p>
            <ul><li>이더리움은 탈중앙화 네트워크여서 새로운 기능 추가, 성능 개선, 보안 업데이트 등은 개발자 및 커뮤니티가 직접 제안하고 검토해야 함</li>
                <li>이러한 개선 프로세스를 체계적으로 관리하기 위해 EIP라는 공식적인 제안 시스템이 도입됨
                    <ul><li>이더리움 네트워크의 기능 추가, 성능 개선, 보안 업데이트 등을 제안하는 문서</li>
                        <li>누구나 제안할 수 있음</li>
                        <li>이더리움 커뮤니티의 논의를 거쳐 승인될 경우, 네트워크에 반영</li></ul>
                </li></ul>

            <p>ERC (Ethereum Request for Comments, 이더리움 표준 제안)</p>
            <ul><li>이더리움은 스마트 컨트랙트를 실행할 수 있는 블록체인이다. 프로젝트들이 각자 다른 방식으로 스마트 컨트랙트를 개발하면 지갑, 거래소, DApp에서 이를 지원하기 어려운 문제가 발생한다.</li>
                <li>이를 해결하기 위해 스마트 컨트랙트의 표준을 정하는 것이 ERC
                    <ul><li>ERC는 EIP의 하위 개념으로 스마트 컨트랙트 및 토큰 표준을 정의함</li>
                        <li>ERC 표준을 따르면, 모든 애플리케이션에서 쉽게 호환되는 컨트랙트를 만들 수 있음</li></ul>
                </li>
            </ul>

            <p>팁</p>
            <ul><li>제안할 때 Interface만 만들면 안되고 reference code 코드도 만들어 (깃허브에) 올려야 함</li>
                <li>EIP, ERC 모두 같은 numbering 받음</li></ul>


            <h4>ERC-20이란?</h4>
            <ul><li>이더리움 네트워크에서 사용되는 표준 토큰</li>
                <li>2015년 11월 Fabian Vogelsteller와 Vitalik Buterin에 의해 제안됨</li>
                <li>이더리움(or EVM) 블록체인에서 스마트 컨트랙트를 통해 생성되는 토큰들이 서로 호환될 수 있도록 기술적 규칙을 정의함</li></ul>

            <p>ERC-20의 역할과 중요성</p>
            <ul><li>ICO및 다양한 디지털 자산의 표준으로 활용됨</li>
                <li>이더리움 네트워크에서 토큰 간의 상호 운용성을 보장하고, 전송 및 데이터 접근 방식을 통일하여 개발이 용이해짐</li>
                <li>DApp 및 이더(ETH)와의 호환성
                    <ul><li>ERC-20 토큰은 이더리움 기반 DApp에서 사용되며, 이더(ETH)와 쉽게 교환될 수 있도록 설계돰</li>
                        <li>ERC-20 표준을 따르는 DApp은 스마트 컨트랙트, 소프트웨어 지갑, 하드웨어 지갑 등에서 자유롭게 지원됨</li></ul>
                </li>
                <li>개발자 및 사용자 친화적인 환경 제공
                    <ul><li>ERC-20 표준을 따르면 일관된 방식으로 토큰 생성 및 관리 가능</li>
                        <li>이를 통해 지갑, 거래소, DApp 간의 원활한 상호작용이 가능</li></ul>
                </li></ul>

            <p>ERC-20 표준</p>
            <ul><li>표준을 따라야 호환이 가능해짐</li>
                <li>ERC-20은 다음과 같은 기능이 있어야 ERC-20의 표준을 따랐다고 정의함:
                    <ul><li>여기서 기능이란? 스마트 컨트랙트에 구현해야할 함수와 이벤트</li></ul>
                </li></ul>

            <h5>Functions</h5>
            <ul><li><span style={{ fontWeight: 'bold' }}>totalSupply() </span>: 총발행량으로 토큰이 총 몇 개 있는지 알려줌</li>
                <li><span style={{ fontWeight: 'bold' }}>transfer() </span>: 송금으로 토큰을 총 발행 주소에서 개인 계정으로 송금할 수 있음
                    <ul><li>내가 직접 내 지갑에서 다른 지갑으로 토큰을 보내는 함수</li>
                        <li>msg.sender가 소유자인 나여야 함</li>
                        <li>msg.sender가 최소 amount 만큼 토큰을 갖고 있어야 함</li>
                        <li>인자:
                            <ul><li>to: 받을 주소</li>
                                <li>amount: 보낼 양(단위는 보통 wei)</li></ul>
                        </li></ul>
                </li>
                <li><span style={{ fontWeight: 'bold' }}>balanceOf() </span>: 잔액으로 계정에 있는 토큰을 반환함</li>
                <li><span style={{ fontWeight: 'bold' }}>transferFrom() </span>: 사용자 간 송금 기능으로 사용자는 송금 기능을 이용하여 다른 사용자에게 토큰을 송금할 수 있음
                    <ul><li>내가 허가한 사람인 spender가(approve 받은 사람이) 보내는 것</li>
                        <li>from이 amount만큰 토큰을 가지고 있어야 함</li>
                        <li>spender가 from에게 최소 amount 만큼 허가를 받아야 함 (allowance)</li>
                    </ul>
                </li>
                <li><span style={{ fontWeight: 'bold' }}>approve() </span>: 승인 기능으로 사람들이 위조 토큰을 만드는 것을 방지하며 토큰의 총 발행량을 확인하여 트랜잭션을 허용하거나 거부함
                    <ul><li>다른 사람이 내 토큰을 대신 보낼 수 있도록 허락해주는 함수</li>
                        <li>인자:
                            <ul><li>spender: 내 토큰을 대신 쓸 수 있는 주소</li>
                                <li>amount: 허락한 최대 토큰 양</li></ul>
                        </li>
                        <li>spender는 이후 transferFrom()을 이용해 msg.sender(나)의 토큰을 amount 한도 내에서 전송할 수 있음</li></ul>
                </li>
                <li><span style={{ fontWeight: 'bold' }}>allowance() </span>: 허용 기능으로 누군가가 시스템을 속이고 본인이 소유한 것보다 더 많은 토큰을 보내고자 하는 경우 이 기능을 인해 사용자는 자신이 가진 것보다 더 많은 토큰을 보낼 수 없으며, 거래가 이루어지는 경우 취소됨
                    <ul><li>특정 spender가 특정 owner로부터 얼마나 허가를 받았는지 확인</li></ul>
                </li></ul>

            <h5>Events</h5>
            <ul><li>event Transfer(address indexed _from, address indexed _to, uint256 _value)</li>
                <li>event Approval(address indexed _owner, address indexed _spender, uint256 _value)</li></ul>

            <p>참고:</p>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-20'>EIP20 공식 제안문서</a></li>
                <li><a href='https://github.com/OpenZeppelin/openzeppelin-contracts'>OpenZeppelin 깃헙 문서</a>
                    <ul><li>오픈 재플린 문서에서 ERC-20 관련 함수들 뜯어보기 (그냥 넘기지 말기)</li></ul>
                </li>
                <li>과제: <a href='https://github.com/dolsotbob/erc20'>나만의 토큰 만들기</a></li>
            </ul>

            <h4>OpenZeppelin</h4>
            <ul><li>이더리움 및 스마트 컨트랙트 개발을 위한 보안 강화 라이브러리 및 프레임워크를 제공하는 오픈소스 프로젝트</li>
                <li>ERC-20, ERC-721, ERC-1155 등의 표준을 포함한 스마트 컨트랙트의 재사용 가능한 코드 제공</li></ul>

            <p>OpenZeppelin의 주요 특징</p>
            <ol><li>스마트 컨트랙트 라이브러리 제공
                <ul><li>ERC-20(토큰 표준), ERC-721(NFT), 접근 제어(Ownable), 수학 연산(SafeMath) 등 다양한 컨트랙트 모듈을 제공하여 개발자가 직접 작성해야 하는 코드를 줄여줌</li></ul>
            </li>
                <li>보안성 검증</li>
                <li>Upgradeable Contracts 지원
                    <ul><li>스마트 컨트랙트 배포 후에도 업그레이드가 가능하도록 Proxy 패턴을 활용한 업그레이드 가능한 컨트랙트 기능 제공</li></ul>
                </li>
                <li>Access Control (권한 관리)
                    <ul><li>Ownable, Roles 등의 접근 제어 기능을 제공하여 특정 역할을 가진 사용자만 실행할 수 있는 함수를 정의할 수 있음</li></ul>
                </li>
                <li>문서화 및 커뮤니티 지원
                    <ul><li>공식 문서와 GitHub 리포지토리를 통해 코드 예제 및 설명이 제공되며, 개발자 커뮤니티에서 적극적으로 지원됨                    </li></ul>
                </li></ol>

            <p>OpenZeppelin을 사용한 ERC-20 예시</p>
            <ul><li>OpenZeppelin의 ERC20 컨트랙트를 부모 컨트랙트로 상속받아 MyToken 컨트랙트를 만드는 예시
                <ul><li>ERC20을 상속받아 표준 토큰을 쉽게 만들 수 있다</li></ul>
            </li>
                <li>OpenZeppelin 라이브러리 설치</li>
                <pre><code>{`
                npm install @openzeppelin/contracts
                `}</code></pre>
                <li>ERC-20 토큰 생성(컨트랙트 개발)</li>
                <pre><code>{`
                // SPDX-License-Identifier: MIT
                pragma solidity ^0.8.0;

                import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

                contract MyToken is ERC20 {
                    constructor() ERC20("MyToken", "MTK") {
                        _mint(msg.sender, 1000000 * 10 ** decimals());
                    }
                }
                `}</code></pre>
                <ul><li>_mint 함수는 오픈 재플린의 ERC-20에서 가져온 것</li>
                    <li>언더바: 내부에서만 사용됨을 식별하기 위해; 상속 받은자까지 사용 가능</li></ul>
            </ul>

            <h4>과제:</h4>
            <ul><li>ERC20 토큰 컨트랙트를 구현하고, Web3.js를 이용하여 컨트랙트 호출(Call) 해보기</li>
                <li>개발 도구: <a href='https://archive.trufflesuite.com/ganache/'>Ganache</a>가 설치 되어 있어야 함</li>
                <li>먼저 할 일: Ganache 로컬 블록체인을 Hardhat에 연결
                    <ol><li>Ganache 실행</li>
                        <li>hardhat.config.ts에서 url 값에 Ganache의 RPC Server 주소 입력</li>
                        <li>.env.example 파일 이름에서 .example을 지운 후 프라이빗키 입력
                            <li>Ganache의 계정 중 하나를 선택해 열쇠모양 아이콘을 클릭해 프라이빗 키 입력</li>
                        </li></ol>
                </li>
                <li>npm install 하고 필요한 모듈 설치</li>
                <li>이제 package.json의 scripts 실행할 수 있음
                    <ul><li>배포 명령어도 확인 가능: npm run deploy</li></ul>
                </li>
                <li>node modules에서 오픈 재플린의 ERC-20 확인할 수 있음 </li>
                <li>web3.ts 만들 때는
                    <ol><li><a href='https://web3js.readthedocs.io/en/v1.10.0/'>web3.js</a> 활용하기</li>
                        <li><a href='https://github.com/OpenZeppelin/openzeppelin-contracts'>OpenZeppelin 깃헙 문서</a>에서 ERC-20 함수 뜯어 보면서 하기</li>
                        <li>MyToken.json에서도 함수 인자 확인할 수 있음</li>
                    </ol>
                </li>
            </ul>
            <br />

        </div>
    )
}

export default TIL0408