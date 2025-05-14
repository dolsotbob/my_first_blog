import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import { til0423getUserAddressExample } from '../../codeExamples';
import { til0423erc277MetaTnxExecuteExample } from '../../codeExamples';


const TIL0423 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 23일</p>
            <h3>Gas less - EIP 2771(Meta Transactions)</h3>
            <p>학습 목표:</p>
            <ul><li>지난 시간에 ERC-20 토큰의 permit 기능을 활용하여, 사용자가 가스비를 소모하지 않고 토큰을 전송하는 방법을 배웠다.</li>
                <li>이번 시간에는 MetaTransaction을 이용해 사용자가 가스비를 부담하지 않고 트랜잭션을 실행하는 방법을 알아보자.</li></ul>

            <h4>msg.sender</h4>
            <p>msg.sender란?</p>
            <ul><li>이더리움 스마트 컨트랙트에서 현재 실행 중인 함수의 호출자를 나타내는 특별한 전역 변수이다</li>
                <li>Solidity에서 모든 트랜잭션 또는 함수 호출은 특정한 주소에 의해 발생하며, msg.sender는 그 주소를 반환한다</li>
                <li>msg.sender의 기본 동작: 트랜잭션이 발생하면 트랜잭션을 발생시킨 주소(EOA 또는 컨트랙트 주소)가 msg.sender가 된다</li></ul>

            <p>컨트랙트가 컨트랙트를 호출하는 경우</p>
            <ul><li>만약 A 컨트랙트가 B 컨트랙트를 호출하면, msg.sender는 A 컨트랙트의 주소가 된다</li></ul>
            <pre><code>{`
            contract A { 
                function callB(address _b) public view returns (address) {
                    return B(_b).whoIsSender();
                }
            }

            concract B {
                function whoIsSender() public view returns (address) {
                    return msg.sender;
                }
            }
            `}</code></pre>

            <ol><li>Alice(EOA: 0xABC)가 A 컨트랙트의 callB() 함수를 실행하면</li>
                <li>A 컨트랙트가 B 컨트랙트의 whoIsSender()를 호출</li>
                <li>B 컨트랙트의 msg.sender는 A 컨트랙트의 주소가 됨</li></ol>

            <h4>msg.sender가 ERC-20에서 동작하는 방식</h4>
            <ul><li>ERC-20 스마트 컨트랙트에서 msg.sender는 토큰의 소유권을 증명하고, 트랜잭션을 실행하는 중요한 역할을 한다</li></ul>

            <p>transfer: 토큰 전송 (msg.sender = 토큰을 보내는 사람)</p>
            <ul><li>기능: msg.sender가 자신의 토큰을 다른 주소로 전송할 때 사용됨</li></ul>
            <pre><code>{`
            function transfer(address recipient, uint256 amount) public returns (bool) {
                require(recipient != address(0), "Invalid recipient");
                require(_balances[msg.sender] >= amount, "Insufficient balance");

                _balance[msg.sender] -= amount; 
                _balance[recipient] += amount;
                emit Transfer(msg.sender, recipient, amount);
                return true; 
            }            
            `}</code></pre>
            <ul><li>msg.sender 역할:
                <ul><li>송금자(토큰 보유자)의 주소를 나타냄</li>
                    <li>_balances[msg.sender]를 확인하여 잔액이 충분한지 검증</li>
                    <li>토큰을 msg.sender → recipient로 전송</li></ul>
            </li>
            </ul>

            <p>approve: 토큰 사용 권한 위임 (msg.sender = 토큰 소유자)</p>
            <ul><li>기능: msg.sender가 특정 spender 주소에게 자신의 토큰을 사용할 수 있도록 허락</li></ul>
            <pre><code>{`
            function adpprove(address spender, uint256 amount) public returns (bool) { 
                require(spender != address(0), "Invalid spender");

                _allowances[msg.sender][spender] = amount; 
                emit Approval(msg.sender, spender, amount); 
                return true; 
            }
            `}</code></pre>
            <ul><li>msg.sender역할:
                <ul><li>msg.sender(토큰 소유자)가 spender(제3자, 보통 스마트 컨트랙트)에게 일정량의 토큰 사용을 허가</li>
                    <li>_allowances[msg.sender][spender]에 허용된 금액 저장.</li></ul>
            </li></ul>

            <p>transferFrom: 위임된 토큰 전송 (msg.sender = 승인받은 사용자)</p>
            <ul><li>기능: msg.sender가 approve를 통해 허가받은 토큰을 대신 전송</li></ul>
            <pre><code>{`
            function transfer(address sender, address recipient, uint256 amount) public returns (bool) {
                require(sender != address(0)), "Invalid sender");
                require(recipient != address(0), "Invalid recipient");
                require(_balances[msg.sender] >= amount, "Insufficient balance");
                require(_allowances[sender][msg.sender] >= amount, "Allowance exceeded");

                _balance[sender] -= amount; 
                _balance[recipient] += amount;
                _allowances[sender][msg.sender] -= amount; 

                emit Transfer(sender, recipient, amount);
                return true; 
            }    
            `}</code></pre>
            <ul><li>msg.sender역할:
                <ul><li>msg.sender는 spender 역할 (토큰 소유자로부터 위임받은 계정)</li>
                    <li>_allowances[sender][msg.sender]를 확인하여 권한 내에서 실행하는지 검증</li>
                    <li>msg.sender는 sender의 토큰을 대신 recipient에게 전송 가능</li></ul>
            </li></ul>

            <ul><li>실제 사례:
                <ul><li>내가 RPG 게임을 하는데 스마트 계약으로 된 게임내 상점에서 뭔가를 사고 싶어함 </li>
                    <li>내가 상점에 내 토큰 100개까지 사용할 권한을 줌 (프론트에서 실행)</li>
                    <pre><code>{`token.approve(shopAddress, 100);`}</code></pre>
                    <li>상점(스마트 계약 또는 spender)이 내 지갑에서 50개 토큰을 자기 지갑으로 보냄
                        <pre><code>{`token.transfer(jungah, Shop, 50);`}</code></pre>
                        <ul><li>상점이 실행함으로 msg.sender = 상점!</li></ul>
                    </li></ul>
            </li></ul>

            <p>_mint: 새로운 토큰 발행 (msg.sender = 발행자)</p>
            <ul><li>기능: 컨트랙트 배포자(관리자)가 새로운 토큰을 생성</li></ul>
            <pre><code>{`
            function _mint(address account, uint256 amount) internal { 
                require(account != address(0), "Invalid account");

            _totalSupply += amount;
            _balances[account] += amount;
            emit Transfer(address(0), account, amount);
            }
            `}</code></pre>
            <ul><li>msg.sender역할:
                <ul><li>_mint는 보통 onlyOwner 제한이 있으며, 토큰 발행 권한이 있는 관리자만 호출 가능</li>
                    <li>msg.sender가 새로운 토큰을 생성하고 특정 주소에 할당</li></ul>
            </li></ul>
            <ul><li>기타 노트:
                <ul><li>_언더바: 내부에서만 사용한다는 뜻</li>
                    <li>internal: 상속받은 컨트랙트까지 사용 가능
                        <ul><li>public으로 되어있지 않더라도 내가 외부에서 필요하면 따로 만들어서 쓸 수 있다; 커스터마이징 해서</li></ul>
                    </li>
                    <li>private: 함수 내에서만 사용 가능 </li></ul>
            </li></ul>

            <p>_burn: 토큰 소각 (msg.sender = 토큰 소유자)</p>
            <ul><li>기능: msg.sender가 자신의 토큰을 소각(삭제)</li></ul>
            <pre><code>{`
            function _burn(address account, uint256 amount) internal {
                require(account != address(0), "Invalid account");
                require(_balances[account] >= amount, "Insufficient balance");

                _balances[account] -= amount;
                _totalSupply -= amount;
                emit Transfer(account, address(0), amount);
            }
            `}</code></pre>
            <ul><li>msg.sender역할:
                <ul><li>msg.sender가 자신의 토큰을 소각할 때 호출</li>
                    <li>_balances[msg.sender]에서 소각할 수량만큼 차감</li></ul>
            </li></ul>
            <ul><li>기타 노트:
                <ul><li>당장 사용하지 않더라도 민트가 있으면 번도 있는게 좋음</li></ul>
            </li></ul>

            <h4>ERC-2771: Secure Protocol for Native Meta Transactions</h4>
            <ul><li>ERC-2771은 메타 트랜잭션(Meta Transaction)을 쉽게 구현할 수 있도록 도와주는 표준</li>
                <li>이 표준을 따르면, 사용자는 직접 가스비를 지불하지 않고도 트랜잭션을 실행할 수 있다</li></ul>

            <p>Meta Transaction?</p>
            <ul><li>ETH가 없는 사용자도 트랜잭션을 실행할 수 있도록 하기 위해 등장</li>
                <li>메타 트랜잭션은 사용자가 가스비(ETH)를 직접 지불하지 않고 스마트 컨트랙트와 상호작용할 수 있도록 하는 트랜잭션 방식이다</li>
                <li>사용자는 트랜잭션에 서명만 하고, 제3자(릴레이어, Relayer)가 해당 트랜잭션을 블록체인에 제출하며 가스비를 대신 지불한다</li>
                <li>permit은 approve 가스비만 대납해주었지만 메타 트랜잭션은 다 됨</li>
            </ul>

            <p>메타 트랜잭션 실행 과정 - 수업 중 예시</p>
            <ul><li>등장 인물:
                <ul><li>원재: 사용자 (지갑을 가진 실제 사람)</li>
                    <li>인수: Relayer (사용자 대신 트랜잭션을 네트워크에 보내는 사람)</li>
                    <li>상욱: Forwarder (서명을 검증하고 실제 실행을 넘기는 스마트 계약)</li>
                    <li>한수: 최종 스마트 계약 (원래 실행되길 원하는 컨트랙트)</li></ul>
            </li>
            </ul>
            <ol><li>원재가 서명
                <ul><li>사용자 원재가 실행하고 싶은 내용을 EIP-712 형식으로 서명 한다</li></ul>
                <pre><code>{`
                    {
                        from: Wonjae,
                        to: Hansoo,
                        data: "실행할 함수",
                        nonce: 1,
                        deadline: 9999
                    }
                    `}</code></pre>
            </li>
                <li>relayer 인수가 메세지 뒤에 원재의 주소를 붙여 상욱에게 요청
                    <ul><li>msg.sender 대신, msg.data 뒤에 원재의 주소가 붙어있고,</li>
                        <li>스마트 계약은 그걸 “진짜 msg.sender”처럼 해석함</li></ul>
                </li>
                <li>forwarder 상욱은 그 서명이 정말 원재가 한게 맞는지 검증 후 한수에게 보낸다</li>
                <li>한수는 호출된 메시지의 msg.data 뒤쪽에서 주소를 잘라서 진짜 보낸 사람이 원재인지를 확인한다</li></ol>

            <ul><li>가스비는 인수가 내고, 최종 실행은 한수가 한다</li></ul>

            <p>사용자의 실제 주소 추출하기</p>
            <ul><li>메타 트랜잭션이 담긴 트랜잭션에서는 msg.sender가 Forwarder 주소로 설정되기 때문에, 실제 사용자의 주소를 별도로 추출해야 한다</li></ul>
            <CodeBlock code={til0423getUserAddressExample}></CodeBlock>
            <ul><li>Forwarder를 신뢰할 수 있는지 확인 (isTrustedForwarder 함수 호출)</li>
                <li>msg.data의 마지막 20바이트에서 실제 사용자 주소를 추출</li>
                <li>만약 Forwarder가 아닐 경우 기존 msg.sender 그대로 반환
                </li></ul>

            <p>EIP-2771 주요 함수</p>
            <h5>1. isTrustedForwarder(address forwarder) &rarr; bool</h5>
            <ul><li>신뢰할 수 없는 Forwarder가 msg.sender를 조작하는 것을 방지한다</li>
                <li>메타 트랜잭션을 수락할지를 결정하는 필터 역할</li></ul>
            <h5>2. _msgSender() → address</h5>
            <ul><li>일반 트랜잭션에서는 msg.sender가 그대로 반환되지만,</li>
                <li>Forwarder를 통한 메타 트랜잭션일 경우 실제 사용자 주소를 반환합니다</li></ul>
            <h5>3. _msgData() &rarr; bytes calldata</h5>
            <ul><li>일반 트랜잭션에서는 msg.data를 그대로 반환하지만,</li>
                <li>메타 트랜잭션에서는 추가된 데이터(사용자 주소를 포함) 부분을 제거하고 반환함</li>
                <li>메타 트랜잭션을 사용할 때, 추가된 Forwarder 정보 없이 원래의 데이터를 처리할 수 있도록 함</li></ul>
            <h5>execute(ForwardRequest request) &rarr; bool</h5>
            <ul><li>Relayer가 메타 트랜잭션을 실제로 실행하는 함수</li>
                <li>사용자의 서명을 검증한 후, Forwarder가 Recipient 컨트랙트에 트랜잭션을 전달한다</li></ul>
            <h5>verify(ForwardRequest request) &rarr; bool</h5>
            <ul><li>서명을 검증하여 Replay Attack 및 위조된 트랜잭션을 방지한다.</li>
                <li>Forwarder가 악성 서명을 실행하지 않도록 보장한다.</li></ul>
            <h5>nonces(address signer) &rarr; uint256</h5>
            <ul><li>각 사용자의 Nonce(트랜잭션 실행 순서)를 관리함 </li>
                <li>메타 트랜잭션이 중복 실행되지 않도록 방지하는 역할을 함</li>
                <li>동일한 서명이 여러 번 사용되지 않도록 방지 (Replay Attack 방지)</li></ul>

            <p>execute 함수</p>
            <CodeBlock code={til0423erc277MetaTnxExecuteExample}></CodeBlock>

            <p>참고 자료</p>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-2771'>ERC-2771 공식 문서</a></li>
                <li>과제: <a href='https://github.com/dolsotbob/metaTx/tree/main'>metaTx</a></li></ul>

        </div>
    )
}

export default TIL0423