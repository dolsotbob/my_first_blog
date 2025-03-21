import React from 'react'

const TIL0321 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 21일</p>
            <h3>다양한 개발 도구2: 스마트 컨트랙트 배포</h3>
            <p>웹3 서비스를 만들기 위한 2단계:
                <ul><li>스마트 컨트랙트를 이용해 온체인 데이터를 만들 수 있어야함</li>
                    <li>라이브러리를 이용해 온체인 데이터를 웹3 서비스로 보여줄 수 있어야함</li></ul>
            </p>

            <h4>스마트 컨트랙트 배포 과정 개요</h4>
            <ol><li>컴파일: 스마트 컨트랙트를 블록체인에서 실행 가능한 형태로 변환하는 과정</li>
                <li>배포: 변환된 코드를 실제 블록체인에 올리는 과정</li>
            </ol>

            <h4>컴파일 과정에서 수행되는 작업</h4>
            <ul><li>Solidity 소스 코드(.sol)을 바이트코드(.bin)로 변환</li>
                <li>ABI(Application Binary Interface) 생성(.json 파일)</li>
                <li>컴파일 된 JSON 파일 저장</li></ul>

            <h4>배포 과정</h4>
            <ul><li>스마트 컨트랙트 배포 tx 생성 및 블록체인에 전송</li>
                <li>배포된 CA 반환</li></ul>

            <h4>배포 후 블록체인 상태</h4>
            <ul><li>스마트 컨트랙트가 블록체인에 저장됨</li>
                <li>CA 생성됨</li>
                <li>해당 CA 사용하여 컨트랙트와 상호작용 가능</li></ul>

            <h4>Truffle과 Hardhat</h4>
            <p>VM 스마트 컨트랙트 개발을 쉽게 할 수 있도록 도와주는 프레임워크</p>

            <h4>Truffle로 배포하기</h4>
            <p><a href="https://trufflesuite.com/docs/truffle/overview">Truffle 공식 문서</a>참고</p>
            <p>요구사항:
                <ul><li>npm install -g truffle 설치 후 truffle 실행하면 명령어 확인할 수 있다</li></ul>
            </p>
            <ol><li>폴더 만들고 truffle init로 트러플 프로젝트 초기화</li>
                <li>truffle develop: 10개 계쩡과 개인키 목록이 올라오며 truffle(develop) 프롬프트 나나탐</li>
                <li>스마트 컨트랙트 코드 작성: /contracts 폴더에 SimpleContract.sol 파일 만들어 코드 짜기 -- compile</li>
                <ul><li>/build 폴더가 생성되며 contracts 폴더 아래에 있는 solidity 파일이 json 형태로 변경되어 생성됨</li></ul>
                <li>스마트 컨트랙트 배포: /migrations 폴더에 1_deploy_contracts.js 라는 파일 만들기 -- migrate</li>
                <li>스마트 컨트랙트 테스트: test</li>
            </ol>

            <h4>truffle-config.js</h4>
            <p>프로젝트의 네트워크, 컴파일러, 배포 설정 등을 정의할 수 있음</p>
            <p>주요 요소: networks, compilers, mocha, db</p>

            <h4>Hardhat으로 배포하기</h4>
            <p><a href="https://hardhat.org/hardhat-runner/docs/config">Truffle 공식 문서</a>참고</p>
            <ol>
                <li>폴더 만들고 npx hardhat init로 hardhat 프로젝트 초기화</li>
                <li>npx hardhat node로 로컬 블록체인 네트워크 실행</li>
                <li>스마트 컨트랙트 코드 작성: /contracts 폴더에 SimpleContract.sol 파일 만들어 코드 짜기 -- npx hardhat compile</li>
                <ul><li>artifacts와 cache 폴더가 생성됨
                    <ul><li>artifacts: 컴파일한 후 생성된 아티팩트(배포 정보)가 저장됨</li>
                        <li>cache: 컴파일된 파일을 캐싱하여 변경되지 않은 파일을 다시 컴파일하지 않도록 함</li></ul></li></ul>
                <li>스마트 컨트랙트 배포: ignition/modules 폴더에 SimpleContract.ts 라는 파일 만들기 -- npx hardhat ignition deploy ignition/modules/SimpleContract.ts</li>
                <li>스마트 컨트랙트 테스트: npx hardhat test</li>
            </ol>

        </div>
    )
}

export default TIL0321