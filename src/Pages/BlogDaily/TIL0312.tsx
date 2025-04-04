import React from 'react'

const TIL0312 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 12일</p>
            <h3>온체인 데이터</h3>
            <h4>온체인 데이터란?</h4>
            <p>블록체인 네트워크에 기록된 모든 데이터</p>
            <ul><li>누구나 접근할 수 있으며 변경이 불가능함</li>
                <li>스마트 컨트랙트 실행, 트랜잭션 정보, 계정 상태 등 블록체인 상에서 발생하는 모든 활동 포함</li></ul>


            <h4>온체인 데이터의 주요 구성 요소는?</h4>
            <ol><li>트랜젝션 데이터
                <ul><li>hash-트랜잭션 ID, fom, to, value, gasUsed</li></ul>
            </li>
                <li>블록 데이터
                    <ul><li>number-블록번호, hash-블록해시, miner-채굴자주소, timestamp-블록생성시간, transactions-트랜잭션 목록</li></ul>
                </li>
                <li>상태 데이터
                    <ul><li>계정 잔액, 스마트 컨트랙트 저장소, 토큰 보유량</li></ul></li></ol>

            <p>온체인 데이터의 활용 사례는?</p>
            <ul><li>트랜젝션 모니터링, 디파이 분석, NFT 조회, 스마트 컨트랙트 상태 확인</li></ul>


            <h4>온체인 데이터를 가져오는 방법은?</h4>
            <p>블록체인 노드와 상호작용하는 방법을 통해 조회할 수 있다</p>
            <ol><li>직접 노드 운영
                <ul><li>Geth, Erigon, Besu 등 실행</li></ul>
            </li>
                <li>RPC 인프라 제업체 이용
                    <ul><li>Infura, Alchemy, QuickNode 등 사용</li></ul>
                </li>
                <li>Web3 SDK 활용
                    <ul><li>Web3.js, Ethers.js 등을 사용해 온체인 데이터 조회</li></ul>
                </li></ol>



            <h3>노드와 통신</h3>
            <ul><li>노드를 실행하려면 컴퓨터에 "클라이언트"라고 하는 응용 프로그램이 필요함
                <ul><li>예: Bitcoin Core, Geth 등</li></ul>
            </li>
                <li>데이터를 받기 위해 직접 노드 운영을 하는 대신 클라이언트를 실행하는 다른 노드에게서 데이터 받아 오는 방법이 있다</li>
            </ul>

            <h4>노드와 클라이언트간 통신 JSON - RPC</h4>
            <ul><li>Remote Procedure Call, RPC란?
                <ul><li>블록체인 노드로부터 데이터를 얻어오는 것</li>
                    <li>다른 컴퓨터에 있는 기능을 마치 내 컴퓨터에서 실행하는 것처럼 호출할 수 있게 해주는 기술</li>
                    <li>마치 내게 짜장면 레서피는 없지만 짜장면을 주문할 수 있고,
                        레서피가 있는 중식당에서 짜장면을 요리해 배달해주는 것과 같다. API와도 닮았다</li>
                    <li>RPC도 프로그램이 원격 서버에 함수 호출을 요청하면, 서버에서 그 요청을 받아 결과를 처리한 후 다시 돌려주는 방식</li>
                    <li>사용하는 이유
                        <ul><li>직접 연결 없이도 다른 컴퓨터의 기능을 실행할 수 있어서 편리</li>
                            <li>언어와 환경이 달라도 통신 가능</li>
                            <li>분산 시스템이나 마이크로서비스에서 효율적인 통신 방식</li></ul>
                    </li></ul>
            </li>

                <li>JSON-RPC API란?
                    <ul><li>무상태성-Stateless의 경량 RPC 프로토콜</li>
                        <li>‘무상태성’이란 햄버거 가게에서 내가 어제 주문한거 기억하지 못하는 것과 같다 </li>
                        <li>JSON-RPC는 컴퓨터끼리 대화할 수 있게 해주는 약속/프로토콜이다</li>
                        <li>JSON-문자 기반 데이터 형식- 을 이용해 요청하고 응답하는 방식. 즉 JSON 형식으로 짜장면을 주문하고 배달해야 함</li>
                        <li>어디에 쓰일까?
                            <ul><li>이더리움 블록체인과 소통할 때
                                <ul><li>예: JSON-RPC를 사용해 이더리움 노드에 요청을 보내고 블록 번호를 받아오는 것</li></ul>
                            </li>
                                <li>서버와 클라이언트가 데이터를 주고받을 때</li>
                                <li>Web3.js나 ethers.js와 같은 웹3 라이브러리에서 블록체인과 상호작용할 때
                                    <ul><li><a href='https://www.npmjs.com/package/web3'>Web3.js</a>는 대표적인 이더리움 자바스크립트 API</li></ul>
                                </li></ul>
                        </li>
                    </ul>
                </li>
            </ul>


            <h3>이더리움의 화폐 단위</h3>
            <p>
                <img src='https://miro.medium.com/v2/resize:fit:1310/format:webp/1*AQ-UM_xbnakiX_3iz81Zzw.png' />;

                <br />이더리움 단위가 다양한 이유는? </p>
            <ul><li>높은 정밀도 필요</li>
                <li>가스비 최적화</li>
                <li>스마트 컨트랙트 개발 최적화
                    <ul><li>스마트 컨트랙트는 Wei 단위를 사용하여 정확한 연산 수행 가능</li></ul></li>
            </ul>


            <h4>다양한 개발 도구 1 - Ganache</h4>
            <ul><li>가나슈: 가상의 이더리움 네트워크를 생성해 스마트 컨트랙트를 실행할 수 있도록 해주는 프로그램</li>
                <li>스마트 컨트랙트를 테스트넷에 보내기 전 로컬에서 먼저 구동해보기 위해 쓰는 가상/프라이빗 네트워크</li>
                <li>가나슈 등을 이용해 만든 가상 환경을 TestRPC라고 함</li>
                <li>개발 및 배포 과정: TestRPC - TestNet - MainNet</li>
                <li>가나슈 홈페이지: https://www.trufflesuite.com/ganache</li>
            </ul>

            <h4>다양한 개발 도구 2 - 블록체인 인프라 서비스 Infura</h4>
            <ul><li>Infura: 원격 이더리움 노드를 통해 이더리움 네트워크에 접근할 수 있게 해주는 서비스</li>
                <li>https://www.infura.io/</li></ul>


            <h4>다양한 개발 도구 3 - 블록체인 개발 라이브러리 Web3.js</h4>
            <ul><li>이더리움 블록체인과 상호 작용하는 클라이언트를 개발하는 데 사용</li>
                <li>다른 계정으로 이더를 전송하거나, 스마트 컨트랙트에서 데이터를 읽고 쓰거나, 스마트 컨트랙트를 만드는 등 다양한 액션을 수행할 수 있게 해주는 라이브러리의 집합</li></ul>
            <p>클라이언트가 이더리움 블록체인과 상호작용하는 방법</p>
            <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiksL9T0miY778hrLYdZSSkmDbHOISRCyHw4Fut5fzjGiQHtSKLi0ZHsxvIXSubRa2NFgo5hzBx8rqmx7WW9BkuFBHgwJAqzpZHPUcqjSSndm1v83UpYX4Em5zrVoF65dRgjEE24KUdbA/s1600/Ethereum+%25282%2529.png'></img>

            <a href='https://web3js.readthedocs.io/en/v1.10.0/getting-started.html'>공식 문서</a> 활용 하기
            <br />

            Web3.js에는 다음과 같은 다양한 모듈이 있다
            <ul><li>web3-eth: 이더리움 블록체인과 스마트 컨트랙트 모듈</li>
                <li>web3-shh: P2P 커뮤니케이션과 브로드캐스트를 위한 위스퍼 프로토콜 모듈</li>
                <li>web3-bzz: 탈중앙화 파일 스토리지를 위한 스왐 프로토콜 모듈</li>
                <li>web3-utils: dApp 개발자를 위한 유용한 헬퍼 함수들을 모아둔 모듈</li></ul>


        </div>
    )
}

export default TIL0312