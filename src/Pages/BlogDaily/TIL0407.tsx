import React from 'react'
import TIL0407abi from '../../assets/TIL0407abi.png'

const TIL0407 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 7일</p>
            <h3>컨트랙트 호출(ABI)</h3>
            <ul><li>학습 목표: JavaScript를 사용해서 스마트 컨트랙트를 어떻게 불러오고, 그 안의 기능을 어떻게 사용할 수 있는지 배우기</li></ul>

            <h4>컨트랙트 호출(Call)</h4>
            <ul><li>뭘까?: 컨트랙트의 특정 기능(함수)를 실행하거나 데이터를 가져오는 것</li>
                <li>컨트랙트 호출 방식
                    <ol><li>트랜잭션 호출(Transaction Call)
                        <ul><li>상태 변경이 발생하는 함수 호출; 가스 비용이 듦; tx이 블록체인에 기록됨</li>
                            <li>트랜잭션 호출 예제 (Solidity)</li>
                            <pre><code>{`
                        // SPDX-License-Identifier: MIT
                        pragma solidity ^0.8.0; 

                        contract TransactionExample { 
                            uint public value; 

                            //트랜잭션 호출 
                            function setValue(uint256 _value) public { 
                                value = _value; 
                            }
                        }
                        `}</code></pre>
                            <li>트랜잭션 호출 예제 (JavaScript)</li></ul>
                        <pre><code>{`
                        const contract = new ethers.Contract(contractAddress, abi, signer); 
                        await contract.setValue(42);  // 상태 변경 -> 가스 필요 
                        `}</code></pre>
                        <ul><li>signer: set 함수 쓸 때 signer가 가스비를 소모함</li>
                            <li>signer는 msg.sender (혹은 tx.origin이 될 수도)</li></ul>

                    </li>
                        <li>조회 호출(Call)
                            <ul><li>읽기 전용 함수 호출; 가스 비용 없음; tx이 블록체인에 기록되지 않음</li>
                                <li>조회 호출 예제 (Solidity)</li>
                                <pre><code>{`
                        contract CallExample { 
                            uint256 public value = 100; 

                            // 조회 호출 (가스 없음)
                            function getValue() public view returns (uint256) { 
                                return value; 
                            }
                        }
                        `}</code></pre>
                                <li>조회 호출 예제(JavaScript)</li>
                                <pre><code>{`
                        const value = await contract.getValue();  // 가스 없이 데이터 조회 
                        console.log(value.toString());  // "100" 
                        `}</code></pre>
                            </ul>
                        </li></ol>
                </li></ul>

            <h4>ABI(Application Binary Interface)</h4>
            <ul><li>Evm과 대화하기 위한 번역기 </li>
                <pre><code>{`
            evm ↔ abi ↔ JS
		    JS ↔ abi ↔ evm
            `}</code></pre>
                <li>외부 애플리케이션 및 다른 스마트 컨트랙트와의 상호 작용을 가능하게 하는 인터페이스
                    <li>스마트 컨트랙트가 호출할 수 있는 함수 및 데이터 구조를 정의하는 인터페이스</li>
                    <ul><li>Web2에서의 API와 유사하게 ABI는 스마트 컨트랙트에서 호출할 수 있는 특정 메서드(함수)와 데이터 형식을 정의한다</li>
                        <li>API와의 차이점:
                            <ul><li>일반적인 API는 JSON 요청을 보내면 서버가 JSON 응답을 반환하지만,</li>
                                <li>스마트 컨트랙트는 JSON이 아니라 바이트코드(0x...)로만 통신함</li>
                                <li>이 때문에 ABI 인코딩과 ABI 디코딩이 필요함(Javascript 등에서 사용되는 과정)</li></ul>
                        </li></ul>
                </li>
                <li>ABI 인코딩
                    <ul><li>함수 호출 시 ABI 인코딩을 통해 데이터를 바이트코드로 변환하여 EVM에 전달</li></ul>
                </li>
                <li>ABI 디코딩
                    <ul><li>컨트랙트의 응답 값(바이트코드)을 사람이 읽을 수 있는 형태로 변환</li>
                        <li>예를 들어, getBalance() 함수가 0x00000000000000000000000000000000000000000000000000000000000003e8을 반환하면, ABI 디코딩을 통해 "1000"으로 변환
                        </li></ul>
                </li>
            </ul>

            <p>ABI가 필요한 이유</p>
            <ul><li>스마트 컨트랙트는 Solidity 같은 고급 언어로 작성되지만, 블록체인에 배포되면 EVM이 이해할 수 있는 바이트코드(0x...)로 변환됨</li>
                <li>바이트코드는 인간이 이해하기 어려워 스마트 컨트랙트와 상호작용할 때 해석/디코딩이 필요</li>
                <li>이 때 ABI는 바이트코드를 사람이 이해할 수 있는 데이터 형태로 변환하는 역할을 함</li>
                <li>또한 JavaScript와 같은 프로그래밍 언어로 작성된 애플리케이션이 스마트 컨트랙트와 상호작용할 수 있도록 도와줌
                </li>
                <li>Serverless 아키텍처가 가능하게 해줌. 즉 서버 없이 클라이언트가 직접 스마트 컨트랙트와 통신 가능하게 해줌</li>
            </ul>

            <img className='TIL0407abi' src={TIL0407abi} alt="abi-img"></img>

            <h4>Hardhat을 사용한 스마트 컨트랙트 배포 & ABI 생성 과정</h4>
            <ol><li>Solidity 스마트 컨트랙트 작성</li>
                <li>Hardhat을 사용해 컴파일</li>
                <li>Hardhat을 사용해 배포 (ABI가 생성됨)</li>
                <li>JavaScript (Ethers.js) 또는 Web3.js로 ABI 활용하여 컨트랙트 호출</li></ol>

            <p>1. Solidity 스마트 컨트랙트 작성</p>
            <ul><li>예제: contracts/MyContract.sol</li></ul>
            <pre><code>{`
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.0;

            contract MyContract {
                uint256 public value;                    // public 키워드 덕에 자동 getter 함수 

                event ValueChanged(uint256 newValue);

                function setValue(uint256 _value) public {          // setter 함수 
                    value = _value;
                    emit ValueChanged(_value);
                }

                function getValue() public view returns (uint256) {  // getter 함수 
                    return value;
                }
            }
            `}</code></pre>
            <p>2. Hardhat을 사용해 컴파일</p>
            <ol><li>Hardhat 프로젝트 초기화</li>
                <pre><code>{`
                mkdir hardhat_project
                cd hardhat_project
                npx hardhat init
                `}</code></pre>

                <li>컴파일(ABI 생성)</li>
                <pre><code>{`
                npx hardhat compile
                `}</code></pre>
                <ul><li>artifacts/contracts/MyContract.sol/MyContract.json 파일이 생성됨</li>
                    <li>이 파일에는 ABI, 바이트코드, 컨트랙트 정보가 포함됨</li></ul><br />

                <li>배포 스크립트 작성(scripts/deploy.js)</li>
                <pre><code>{`
            const hre = require("hardhat");

            async function main() {
                const MyContract = await hre.ethers.getContractFactory("MyContract");
                const contract = await MyContract.deploy();

                await contract.waitForDeployment();

                console.log(₩📌 스마트 컨트랙트 배포 완료! 주소: S{contract.target}₩);

                // ABI 저장 (artifacts 폴더에서 가져오기)
                const contractArtifact = await hre.artifacts.readArtifact("MyContract");
                console.log("📌 ABI:", JSON.stringify(contractArtifact.abi, null, 2));
            }

            main().catch((error) => {
                console.error(error);
                process.exitCode = 1;
            });
            `}</code></pre>
            </ol>

            <p>3. Hardhat을 사용해 배포 (ABI가 생성됨)</p>
            <ul><li>npx hardhat run scripts/deploy.js --network hardhat</li>
                <li>배포 후 터미널 출력 예시:</li>
                <pre><code>{`
            📌 스마트 컨트랙트 배포 완료! 주소: 0x1234567890abcdef1234567890abcdef12345678
            📌 ABI: [
                {
                    "inputs": [{"internalType": "uint256","name": "_value","type": "uint256"}],
                    "name": "setValue",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getValue",
                    "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
            `}</code></pre>
                <li>배포 후, artifacts/ 폴더 내에서 자동 생성된 ABI 파일을 확인할 수 있음</li>
            </ul>

            <p>4. Ethers.js로 ABI를 활용하여 컨트랙트 호출</p>
            <ul><li>Ethers.js 설치
                <ul><li>npm install ethers dotenv</li></ul>
            </li>
                <li>배포된 컨트랙트의 주소 + ABI를 활용해 컨트랙트 메서드를 호출</li>
                <pre><code>{`
            require("dotenv").config(); 
            const { ethers } = require("ethers"); 

            // 배포된 컨트랙트 주소 (배포 후 콘솔에서 확인 가능)
            const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

            // ABI 불러오기 
            const contractArtifact = require("../artifacts/contracts/MyContract.sol/MyContract.json");
            const abi = montractArtifact.abi; 
            
            // 이더리움 네트워크 프로바이더 설정 
            const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

            // 지갑 연결 (Hardhat 테스트 계정 사용) 
            const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

            // 스마트 컨트랙트 인스턴스 생성 
            const contract = new ethers.Contract(contractAddress, abi, wallet); 

            // 컨트랙트 함수 호출 (쓰기 트랜잭션)
            async function setContractValue() { 
                const tx = await contract.setValue(42); 
                await tx.wait(); 
                console.log("📌 setValue 트랜잭션 완료!");
            }

            // 컨트랙트 값 조회 (읽기 호출)
            async function getContractValue() { 
                const value = await contract.getValue(); 
                console.log("📌 현재 저장된 값:", value.toString());
            }

            // 실행 
            setContractValue(); 
            getContractValue(); 
            `}</code></pre>

                <li>실행 결과</li>
                <pre><code>{`
            📌 setValue 트랜잭션 완료!
            📌 현재 저장된 값: 42
            `}</code></pre>
                <ul><li>컨트랙트 함수 호출할 때 await tx.wait()에서 wait 를 쓰는 이유
                    <ul><li>내가 tx을 만들면 이 tx은 pending 상태로 멤풀에 들어감. 내 tx이 선택되어 블록체인에 올라갈 때까지 기다리게 해줌</li>
                        <li>wait가 사용되는 예:
                            <ul><li>10 BTC를 친구에게 보냈다. 이게 확실히 처리 되었는지 확인하고 싶다</li>
                                <li>setValue로 바꾼 결과를 fixedValue로 바로 다음 tx에서 쓰고 싶다</li></ul>
                        </li>
                        <li>wait 이해하고 활용하기</li></ul>
                </li></ul>

            </ul>

            <h4>참고</h4>
            <ul><li><a href='https://docs.ethers.org/v5/'>ethers.js</a></li>
                <li><a href='https://github.com/dolsotbob/abi'>과제</a>: 이번엔 Web3.js가 아닌 Ethers.js를 이용해 컨트랙트 호출하기
                    <ul><li><a href='https://archive.trufflesuite.com/ganache/'>Ganache(로컬 블록체인 기능)</a>이 설치되어 있어야 함</li>
                        <li>ignition 형식으로 배포해도 되고 이 과제 처럼 Script 만들어 배포해도 됨</li>
                        <li>npm run test 하면 세터 함수 부분이 느림 &rarr; 댑이 느린 이유 &rarr; 확정된 값만 블록체인에 올리고 나머지는 서버에 두는 것이 현재 추세</li>
                        <li>신입일 때 종종 ABI 관련 에러 겪을 수 있음. 대부분 함수에 필요한 인자를 주지 않아서 생김. estimateGas()로 호출을 미리 시도해보면 에러 메세지를 통해 원인 파악할 수 있음
                            <li>참고: Getter 함수도 인자를 가질 수 있음</li>
                        </li></ul>
                </li></ul>
        </div>
    )
}

export default TIL0407