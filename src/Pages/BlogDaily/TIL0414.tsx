import React from 'react'
import { til0414MetadataExample } from '../codeExamples'
import { til0414OnChainTokenURIExample } from '../codeExamples'
import { til0414OffChainMintExample } from '../codeExamples'
import CodeBlock from '../../components/CodeBlock'
import til0414CreatingNFT from '../../assets/til0414CreatingNFT.jpg'

const TIL0414 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 14일</p>
            <h3>NFT Storage</h3>
            <ul><li>학습 목표: NFT의 메타데이터와 관련한 개념을 학습하기</li></ul>

            <h4>NFT Metadata</h4>
            <ul><li>NFT가 가진 정보를 포함하는 JSON 형식의 데이터</li>
                <li>NFT는 토큰 ID만 포함하고 있고, 메타데이터가 NFT가 무엇을 의미하는지 설명해줌</li></ul>
            <CodeBlock code={til0414MetadataExample}></CodeBlock>

            <p>NFT 메타데이터가 중요한 이유</p>
            <ul><li>NFT는 단순한 토큰 ID와 소유자 정보만 저장하지만 NFT의 가치와 의미는 메타데이터에 의해 결정된다
                <ul><li>소유권 증명: NFT가 특정 디지털 자산(이미지, 동영상 등)을 나타냄을 보장</li>
                    <li>희소성 & 속성 제공: 메타데이터의 속성을 기반으로 희소성을 판단</li>
                    <li>디지털 자산 연결: NFT가 특정 이미지나 아이템과 연결될 수 있도록 함</li></ul>
            </li>
                <li>만약 메타데이터가 없다면, NFT는 단순한 숫자(TOKEN ID)에 불과하며 의미를 가지지 못함</li>
            </ul>

            <h4>메타데이터 저장 방식</h4>
            <p>온체인 저장 방식</p>
            <ul><li>NFT의 메타데이터를 블록체인 자체에 저장하는 방식</li>
                <li>블록체인에 직접 기록되므로 변경이 불가능하며 영구적으로 유지</li>
                <li>단점: 저장 비용(가스비)이 높고, 긴 데이터를 저장하기 어려움</li>
                <li>예제: 온체인 NFT 저장 컨트랙트의 tokenURI 기능
                    <CodeBlock code={til0414OnChainTokenURIExample}></CodeBlock>
                    <ul><li>base64: 이미지, JSON 등 데이터를 문자로 인코딩 하는 방법</li>
                        <li>이 함수는 tokenID를 받으면 이미지와 설명이 담긴 JSON 데이터를 Base64로 인코딩한 문자열을 data:application.json;base64,... 형식으로 반환한다</li></ul>
                </li>
                <li>특징:
                    <ul><li>✅ 변조 불가능, 영구 저장</li>
                        <li>❌ 블록체인에 직접 저장하므로 가스 비용 증가</li></ul>
                </li>
            </ul>

            <p>오프체인 저장 방식</p>
            <ul><li>NFT의 메타데이터를 IPFS, Arweave 같은 외부 저장소에 저장하고, 그 URL만 블록체인에 기록</li>
                <li>블록체인에는 메타데이터의 링크(URL)만 저장</li>
                <li>대부분의 NFT 프로젝트가 비용 절감과 확장성을 이유로 오프체인 방식을 사용</li>
                <li>예제: MyNFT에서 사용되었던 mint 기능
                    <CodeBlock code={til0414OffChainMintExample}></CodeBlock>
                </li>
                <li>특징:
                    <ul><li>✅ 비용 절감, 더 많은 데이터를 저장 가능</li>
                        <li>❌ 링크가 사라지면(NFT 메타데이터가 손실되면) NFT의 가치를 잃을 위험</li></ul>
                </li>
            </ul>

            <p>메타데이터를 온체인에 저장하지 않는 주요 이유</p>
            <ol><li>가스비 부담이 큼</li>
                <li>대용량 데이터를 저장하기 어려움</li>
                <li>메타데이터 수정이 어려움(변경 불가능)
                    <ul><li>오프체인 저장 방식(IPFS, Arweave 등)을 사용하면 메타데이터를 동적으로 변경하거나 추가할 수 있음</li></ul>
                </li>
                <li>오프체인 저장 방식이 이미 잘 구축되어 있음
                    <ul><li>현재 NFT 프로젝트들은 IPFS, Arweave, AWS S3, Google Cloud 같은 분산 스토리지 또는 중앙화 서버를 활용하여 메타데이터를 저장</li>
                        <li>블록체인에는 메타데이터 URI(예: IPFS 링크)만 저장하여 효율적으로 트랜잭션 비용을 줄이고, 필요하면 메타데이터를 변경할 수 있음</li>
                        <li>IPFS, Arweave는 블록체인처럼 탈중앙화된 데이터 저장 방식을 제공하기 때문에 신뢰도가 높음</li></ul>
                </li>
            </ol>

            <h4>NFT 메타데이터 저장을 위한 오프체인 솔루션</h4>
            <p>탈중앙화 스토리지</p>
            <ul><li>블록체인과 유사하게 분산 저장 구조를 가진 솔루션으로, 데이터가 특정 서버에 의존하지 않음</li></ul>
            <ol><li>IPFS(InterPlanetary File System)
                <ul><li>가장 널리 사용됨</li>
                    <li>무료</li>
                    <li>데이터 능지처참; 데이터를 작은 조각으로 나누어 서로 다른 노드에 나눠 보관</li>
                    <li>콘텐츠 주소 지정(CID, Content identifier)을 사용하여 데이터를 찾음</li>
                    <li>한 번 저장된 데이터는 변경이 불가능</li></ul>
            </li>
                <li>Pinata
                    <ul><li>IPFS 기반의 NFT 데이터 관리 서비스</li>
                        <li>메타데이터 업로드와 고정(Pinning) 기능 제공</li>
                        <li>API를 통해 NFT 메타데이털르 쉽게 관리할 수 있음</li>
                        <li>자기 서버에 IPFS 노드를 운영하면서, 빠르고 안정적으로 파일을 업로드하고 가져올 수 있게 해주는 서비스</li>
                        <li>IPFS는 기본적으로 분산 네트워크(peer-to-peer) 기반이라서 데이터를 저장하거나 가져오는 데 시간이 걸릴 수 있는 반면, 파나타는 자기들이 운영하는 IPFS를 제공해 IPFS 데이터를 대신 빨리 찾아서 보여줄 수 있다</li></ul>
                </li>
                <li>Arweave
                    <ul><li>블록체인 기반 영구 저장소</li>
                        <li>데이터를 한 번 저장하면 영원히 유지</li>
                        <li>Solana, Ethereum 등의 NFT 프로젝트에서 사용됨</li></ul>
                </li>
                <li>Filecoin
                    <ul><li>IPFS와 연계된 탈중앙화 스토리지</li>
                        <li>데이터를 분산 저장하고, 일정 비용을 지불하면 보존을 보장함</li>
                        <li>OpenSea, NFT.Storage에서 지원</li></ul>
                </li></ol>

            <p>중앙화 스토리지(클라우드)</p>
            <ul><li>비용 절감과 속도 최적화를 위해 중앙화 클라우드 스토리지를 활용하는 경우도 있음</li></ul>
            <ol><li>AWS S3 (Amazon Simple Storage Service)
                <ul><li>NFT 메타데이터를 저장하는 중앙화된 클라우드 스토리지</li>
                    <li>강력한 보안과 확장성 제공</li>
                    <li>쌤이 사용하시는 것. 이유: 그리 비싸지 않음; 개인 정보를 보다 안전히 보관하기 위함</li></ul>
            </li>
                <li>Google Cloud Storage
                    <ul><li>NFT 메타데이터 및 이미지 저장 가능</li>
                        <li>IPFS와 비교하면 빠른 액세스 가능</li></ul>
                </li>
                <li>Firebase Storage
                    <ul><li>NFT 프로젝트에서 이미지와 JSON 메타데이터 저장</li>
                        <li>모바일 및 웹 애플리케이션과 연동 용이</li>
                        <li>실시간 변경 기능과 알림 기능 있음</li></ul>
                </li>
            </ol>

            <h4>NFT 만들어지는 과정</h4>
            <img className='til0414CreatingNFT' src={til0414CreatingNFT} alt='Creating-an-NFT-image'></img>

            <h4>과제</h4>
            <ul><li>분산 저장소 Pinata를 이용해 NFT를 민팅하는 기능 만들기</li>
                <li>web3/ethers.ts 기능 구현하시오</li>
                <li>Kairos(KAIA testnet) 이용하기
                    <ul><li>RPC URL: https://public-en-kairos.node.kaia.io </li></ul>
                </li>
                <li><a href='https://app.pinata.cloud/ipfs/files'>Pinata 사이트</a>에서 API 키 발급하기</li>
                <li><a href='https://github.com/dolsotbob/decentralized-storage-pinata'>decentralized-storage-pinata</a></li>
                <li><a href='https://testnets.opensea.io/assets/baobab/0x5c224e075ef60737257dce4ff004e1126160eb11/4'>과제 결과</a></li>
            </ul>

        </div>
    )
}

export default TIL0414