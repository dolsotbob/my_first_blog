import React from 'react'

const TIL0312 = () => {
  return (
    <div className='TIL0312'>
        <p>2025년 3월 12일</p>
        <h3>온체인 데이터</h3>
        <h4>온체인 데이터란?</h4>
        <p>블록체인 네트워크에 기록된 모든 데이터
            <ul><li>누구나 접근할 수 있으며 변경이 불가능함</li>
            <li>스마트 컨트랙트 실행, 트랜잭션 정보, 계정 상태 등 블록체인 상에서 발생하는 모든 활동 포함</li></ul>
        </p>

        <h4>온체인 데이터의 주요 구성 요소는?</h4>
        <ol><li>트랜젝션 데이터
            <ul><li>hash-트랜잭션 ID, fom, to, value, gasUsed</li></ul>
        </li>
        <li>블록 데이터
            <ul><li>number-블록번호, hash-블록해시, miner-채굴자주소, timestamp-블록생성시간, transactions-트랜잭션 목록</li></ul>
        </li>
        <li>상태 데이터
            <ul><li>계정 잔액, 스마트 컨트랙트 저장소, 토큰 보유량</li></ul></li></ol>

        <p>온체인 데이터의 활용 사례는? 
            <ul><li>트랜젝션 모니터링, 디파이 분석, NFT 조회, 스마트 컨트랙트 상태 확인</li></ul>
        </p>

        <h4>온체인 데이터를 가져오는 방법은?</h4>
        <p>블록체인 노드와 상호작용하는 방법을 통해 조회할 수 있다
            <ol><li>직접 노드 운영
                <ul><li>Geth, Erigon, Besu 등 실행</li></ul>
            </li>
            <li>RPC 인프라 제업체 이용
                <ul><li>Infura, Alchemy, QuickNode 등 사용</li></ul>
            </li>
            <li>Web3 SDK 활용
                <ul><li>Web3.js, Ethers.js 등을 사용해 온체인 데이터 조회</li></ul>
            </li></ol>
        </p>

        
        <h3>노드와 통신</h3>
        <p>노드를 실행하려면 컴퓨터에 "클라이언트"라고 하는 응용 프로그램이 필요함. 
            예: Bitcoin Core, Geth 등 
        <br/>데이터를 받기 위해 직접 노드 운영을 하는 대신 클라이언트를 실행하는 다른 노드에게서 데이터 받아 오는 방법이 있다. 
        </p>

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
        <li>JSON-RPC API</li></ul>


    </div>
  )
}

export default TIL0312