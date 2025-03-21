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
            <ol><li>컴파일: Solidity 코드를 EVM이 이해할 수 있는 Bytecode로 변환</li>
                <li>배포: 변환된 바이트코드를 트랜잭션을 통해 블록체인에 배포
                    <ul><li>배포하면 contract address가 생김</li></ul>
                </li>
            </ol>
        </div>
    )
}

export default TIL0321