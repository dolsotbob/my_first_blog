import React from 'react'

const TIL0620 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 20일</p>
            <h3>프로젝트를 시작하며</h3>
            <h4>프로젝트란</h4>
            <ul><li>프로젝트란, 고유한 산출물(제품, 서비스, 결과)을 만들기 위해 수행되는 일시적인 활동</li>
                <li>고객의 니즈를 만족시키는 목적 지향적 활동</li></ul>
            <ul><li>나를 채용하여 당신의 회사에세 쓸 수 있어를 입증하는 자료</li></ul>

            <h4>Lean Canvas</h4>
            <ol><li>Customer Segments (고객)</li>
                <li>Problem (문제)</li>
                <li>Unique Value Proposition (UVP)</li>
                <li>Solution (해결책)</li>
                <li>Unfair Advantage (경쟁우위)</li>
                <li>Revenue Streams (수익 구조)</li>
                <li>Cost Structure (비용 구조)</li>
                <li>Key Metrics (핵심 지표)</li>
                <li>Channels (채널)</li></ol>

            <h4>개발 전 설계도 만들기</h4>

            <h4>개발 시작</h4>
            <pre><code>{`
개발자가 첫날에 하는 일.

⸻

🧱 Step 1. Git 초기화 (선택적이지만 강력 추천)

git init

이후 .gitignore도 추가해둘 거예요 (node_modules, .env, artifacts 등 무시)

⸻

⚒️ Step 2. 프로젝트 초기화 (Hardhat 기반)

npm init -y              # package.json 생성
npm install --save-dev hardhat
npx hardhat

▶️ hardhat 실행 시 선택 사항:
	•	❓ What do you want to do?
👉 Create a JavaScript project 또는 Create a TypeScript project (추천)
	•	설정 경로 그대로 Enter
	•	gitignore 자동 생성 OK

⸻

📦 Step 3. 기본 라이브러리 설치

npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev typescript ts-node
npm install ethers dotenv

✅ 사용 이유:
	•	@nomicfoundation/hardhat-toolbox: 컨트랙트 테스트, 배포 등 툴 통합
	•	ethers: 컨트랙트와 상호작용
	•	dotenv: 환경변수 저장 (RPC URL, 지갑 키 등)

⸻

📁 Step 4. 폴더 구조 만들기 (최소 버전)

mkdir contracts scripts test
touch contracts/RPSGame.sol
touch hardhat.config.ts

(혹은 앞서 만든 구조에 따라 /contracts/core/RPSGame.sol로 만들어도 됩니다)

⸻

🧪 Step 5. 첫 컨트랙트 작성

예시: contracts/core/RPSGame.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RPSGame {
    function play() external pure returns (string memory) {
        return "가위바위보 게임 시작!";
    }
}


⸻

🧪 Step 6. 테스트 파일 생성

mkdir -p test/unit
touch test/unit/RPSGame.test.ts

테스트 예시:

import { expect } from "chai";
import { ethers } from "hardhat";

describe("RPSGame", function () {
  it("should say game started", async function () {
    const RPSGame = await ethers.getContractFactory("RPSGame");
    const game = await RPSGame.deploy();
    expect(await game.play()).to.equal("가위바위보 게임 시작!");
  });
});


⸻

🧪 Step 7. 테스트 실행

npx hardhat test


⸻

🧾 Step 8. .gitignore와 .env 생성

.gitignore 예시:

node_modules/
.env
artifacts/
cache/
typechain/

.env 예시:

PRIVATE_KEY=0x123abc...
RPC_URL=https://rpc.testnet.chaindomain.io


⸻

✨ 준비 완료!

이제 개발 기반이 완성되었습니다.
다음 단계는 다음 중 하나예요:
	1.	RPSGame.sol 본격 구현 시작
	2.	deploy.ts 배포 스크립트 작성
	3.	프론트엔드 환경 분리 시작 (frontend/ 폴더 생성)

⸻

원하시면:
	•	hardhat.config.ts 샘플
	•	deploy.ts 기본 버전
	•	contracts/core/RPSGame.sol 기본 구조

도 바로 제공해드릴게요! 무엇부터 원하시나요?        
    `}</code></pre>

        </div>
    )
}

export default TIL0620