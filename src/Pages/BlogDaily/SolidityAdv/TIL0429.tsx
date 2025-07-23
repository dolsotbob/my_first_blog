import React from 'react'

const TIL0429 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 29일</p>
            <h3>Upgradable</h3>
            <h4>Upgradable Contract</h4>
            <ul><li>기능을 업그레이드 할 수 있는 스마트 컨트랙트</li>
                <li>로직(Implementation) 수정 가능</li>
                <li>상태(State) 그대로 유지</li>
                <li>주소도 변경 없이 서비스 지속 </li></ul>


            <ul><li>프록시 컨트랙트
                <ul><li>상태(state)를 보관하고, 실제 실행할 로직(implementation)은 별도의 구현 컨트랙트에 위임(delegate)하는 컨트랙트 </li>
                    <li>사용자가 프록시 컨트랙트에 함수를 호출하면, 프록시 컨트랙트(Proxy Contract)는 내부에 저장된 로직 컨트랙트(Implementation Contract)의 주소를 참조해 실제 기능을 대신 실행해준다</li></ul>
            </li>
            </ul>

            <p>Proxy Contract(프록시 컨트랙트)</p>
            <ul><li>역할: 중계자
                <ul><li>사용자가 직접 사용하는 외부 인터페이스</li>
                    <li>사용자의 함수 호출을 받아 실제 로직이 구현된 Implementation Contract로 위임(delegate)한다</li>
                    <li>자신의 상태 변수(Storage)는 유지한 채, 로직만 외부 컨트랙트에 위임한다</li></ul>
            </li>
                <li>핵심 기능:
                    <ul><li>delegatecall을 통해 로직 실행</li>
                        <li>implementation 주소를 저장하고 있음</li>
                        <li>업그레이드 시, 이 주소만 바꿔주면 다른 로직 실행할 수 있음</li></ul>
                </li></ul>

            <p>Implementation Contract(로직 컨트랙트)</p>
            <ul><li>역할: 실제 비즈니스 로직 수행
                <ul><li>함수 로직이 실제로 구현되어 있는 컨트랙트</li>
                    <li>직접 사용되지 않고 항상 Proxy를 통해서만 호출됨</li>
                    <li>상태변수는 가지지만 실제로 저장은 Proxy의 storage에 저장됨(delegatecall 때문)</li></ul>
            </li>
                <li>특징:
                    <ul><li>단독으로 호출되지 않음</li>
                        <li>필요한 경우, 새로운 로직 버전을 만들어 Proxy에 연결시켜 업그레이드 가능</li></ul>
                </li></ul>

            <h4>Storage - 스마트 컨트랙트에서 데이터가 저장되는 방식</h4>
            <ul><li>컨트랙트 주소와 연결된 고유한 저장공간</li>
                <li>값은 트랜잭션 이후에도 계속 유지됨</li>
                <li>가스 비용이 높음(쓰기 비용이 큼)</li></ul>

            <p>저장 방식 - Slot 단위로 저장됨</p>
            <ul><li>storage는 기본적으로 32바이트 단위(slot)로 구성되어 있음</li>
                <li>Solidity는 상태 변수 선언 순서대로 슬롯을 할당한다</li>
                <li>예시:</li>
                <pre><code>{`
    contract Example { 
    uint256 public a = 10;         // a는 slot 0 에 저장됨 
        address public b = address(0); // b는 slot 1 에 저장됨 
        bool public c = true;          // c는 slot 2 에 저장됨 
    }
    `}</code></pre>
            </ul>

            <p>Storage: Proxy 패턴 & Upgradable</p>
            <ul><li>업그레이더블 컨트랙트에서는 로직 컨트랙트를 교체해도 storage는 Proxy 쪽에만 남겨야 해서 슬롯 충돌이 나지 않도록 주의가 필요함</li>
                <li>이를 위해 등장한 개념이 <span style={{ fontWeight: 'bold' }}>EIP-1967 슬롯 고정 방식</span>
                    <pre><code>{`
    bytes32 constant IMPLEMENTATION_SLOT = keccak256("eip1967.proxy.implementation") -1; 
    `}</code></pre>
                    <ul><li>이 슬롯은 implementation address를 저장하기 위해 정해둔 고유 슬롯</li>
                        <li>다른 상태 변수와 절대 슬롯 충돌이 안 나게 하기 위해 고정된 위치 사용</li></ul>
                </li>
            </ul>

            <p>상태 변수 저장 흐름 정리</p>
            <pre><code>{`
    contract MyContract {
        uint public value = 1;
    }
    `}</code></pre>
            <ul><li>value는 storage에 저장됨</li>
                <li>이 storage는 MyContract의 주소에 귀속된 블록체인 디스크 공간</li>
                <li>트랜잭션으로 값이 변경되면 value의 슬롯이 업데이트됨</li>
                <li>view 함수로 읽을 수 있고, pure에서는 접근 못 함</li></ul>

            <p>sload(): slot에 있는 값 가져오기</p>
            <pre><code>{`
    contract SlotExample {
        uint256 public a = 123; // slot 0
        uint256 public b = 456; // slot 1

        function getSlot0() public view returns (bytes32 result) {
            assembly {
                result := sload(0) // slot 0 읽기
            }
        }
    }
    `}</code></pre>
            <ul><li>이렇게 하면 직접 슬롯 0에 있는 값(123)을 가져올 수 있다</li></ul>

            <p>참고 자료</p>
            <ul><li><a href='https://eips.ethereum.org/EIPS/eip-1967'>EIP-1967 공식 자료</a></li></ul>

            <h4>핵심 기능 - fallback & delegatecall</h4>
            <ol><li>fallback 함수 - 사용자 진입점
                <ul><li>무슨 역할을 하냐면?
                    <ul><li>사용자가 Proxy 컨트랙트에 정의되지 않은 함수를 호출하면,</li>
                        <li>이 fallback() 함수가 실행되고,</li>
                        <li>내부에서 delegatecall()을 통해 실제 로직 컨트랙트로 요청을 넘깁니다.</li>
                        <li>📌 업그레이더블 구조에서는 반드시 필요
                        </li></ul>
                </li>
                    <li>예시:</li></ul>
                <pre><code>{`
        fallback() external payable {
        _delegate(implementation); // 프록시 컨트랙트로 함수 실행이 되었을시 실행되는 함수
    }                
        `}</code></pre>
            </li>
                <li>delegatecall - 핵심 위임 로직
                    <ul><li>무슨 역할을 하냐면?
                        <ul><li>Proxy 컨트랙트에서 다른 컨트랙트(= Implementation)의 코드를 실행시킴</li>
                            <li>단, Proxy의 상태(storage) 를 그대로 사용함 </li>
                            <li>📌 즉, "로직은 Implementation이 제공, 저장은 Proxy가 담당"</li></ul>
                    </li>
                        <li>예시:
                            <pre><code>{`
    (bool success, ) = impl.delegatecall(msg.data);
    `}</code></pre>
                            <ul><li>delegatecall이 없다면 업그레이더블 패턴은 불가능함</li></ul>
                        </li></ul>
                </li>
            </ol>

            <p>전체 흐름</p>
            <ul><li>유저가 프록시에 호출 → fallback 작동 → delegatecall 실행 → 로직 컨트랙트의 코드 실행 → 결과는 프록시의 storage에 저장</li>
            </ul>

            <h4>Proxy Pattern</h4>
            <ul><li>업그레이드 가능한 시스템을 만들기 위한 핵심 설계 패턴</li>
                <li>구성 요소 3가지:
                    <ol><li>Proxy Contract: 유저가 호출하는 진입점. 실제 로직은 없고 delegatecall로 위임</li>
                        <li>Implementation Contract(logic): 실제 기능이 정의된 컨트랙트</li>
                        <li>Storage (Proxy 내부): 데이터는 Proxy에 저장됨 (delegatecall이기 때문)</li></ol>
                </li>
            </ul>

            <p>다양한 Upgrade Pattern</p>
            <ul><li>Upgradable Contract 개념이 나오면서 핵심 구성요소의 위치나 역할 분리 방식에 따라 다양한 업그레이드 패턴이 생김</li>
                <li>쌤은 이 중 두 번째 것까지 써보셨음</li></ul>

            <ol><li><strong>Transparent Proxy Pattern (투명 프록시 패턴)</strong>
                <ul><li>OpenZeppelin에서 기본으로 제공하는 패턴이며, OpenZeppelin자체적으로 개발한 패턴</li>
                    <li>핵심 개념:
                        <ul><li>Proxy와 Implementation 분리</li>
                            <li>Admin 주소만 업그레이드를 수행할 수 있고, 일반 사용자는 오직 로직만 호출 가능</li>
                            <li>일반 사용자가 Proxy에 Implementation의 함수를 호출하면 → delegatecall 발생</li>
                            <li>Admin이 Implementation 함수를 호출하려 하면 → 실행이 막힘 ← 핵심 포인트!</li></ul>
                    </li>
                    <li>장점:
                        <ul><li>사용자와 관리자 역할이 명확히 분리되어 있어 안전</li>
                            <li>구조가 직관적이고 사용자/관리자 오용 방지</li></ul>
                    </li>
                    <li>단점:
                        <ul><li>Proxy 자체에 Admin 로직이 있음 → 복잡도 증가</li>
                            <li>업그레이드 로직이 Proxy에 고정됨 (유연성 ↓)</li></ul>
                    </li>
                </ul>
            </li><br />
                <li><strong>UUPS(Universal Upgradeable Proxy Standard)</strong>
                    <ul><li>더 최근의 업그레이드 패턴이며, OpenZeppelin도 권장하는 방식</li>
                        <li>핵심 개념:
                            <ul><li>업그레이드 로직이 로직 컨트랙트(Implementation)에 포함됨</li>
                                <li>Proxy는 오직 delegatecall만 수행하고, upgrade 기능은 로직에 위임</li>
                                <li>upgradeTo(address) 같은 업그레이드 함수가 Implementation에 존재</li>
                            </ul>
                        </li>
                        <li>장점:
                            <ul><li>Proxy가 매우 가볍고 간단함</li>
                                <li>업그레이드 로직도 버전마다 바꿀 수 있어서 유연성 ↑</li>
                                <li>저장 슬롯 충돌 걱정이 적음</li></ul>
                        </li>
                        <li>단점:
                            <ul><li>업그레이드 로직이 로직 컨트랙트에 있으므로 실수하면 위험</li>
                                <li>잘못된 Implementation이 upgradeTo를 덮어쓸 수도 있음 (보안 이슈 주의)</li></ul>
                        </li></ul>
                </li><br />
                <li><strong>Beacon Proxy (Beacon 기반 프록시)</strong>
                    <ul><li>많은 Proxy들이 하나의 Beacon을 공유하는 구조</li>
                        <li>핵심 개념:
                            <ul><li>Beacon이라는 컨트랙트가 Implementation 주소를 저장하고 있음</li>
                                <li>여러 Proxy가 Beacon을 바라봄 → Beacon이 가리키는 로직으로 delegatecall</li>
                                <li>업그레이드는 Beacon 컨트랙트만 바꾸면 됨
                                </li></ul>
                        </li>
                        <li>장점:
                            <ul><li>여러 Proxy를 동시에 업그레이드 가능 (동일 로직 공유 시 유용)</li>
                                <li>다수 인스턴스 관리에 최적
                                </li></ul>
                        </li>
                        <li>단점:
                            <ul><li>모든 Proxy가 동일 로직을 사용해야 함</li>
                                <li>Beacon이 단일 실패 지점(SPoF)이 될 수 있음
                                </li></ul>
                        </li></ul>
                </li><br />
                <li><strong>Diamond Pattern</strong>
                    <ul><li>복잡한 스마트 컨트랙트를 모듈화하고 확장성을 높이기 위해 등장한 업그레이더블 방식</li>
                        <li>특히 함수 수가 많아지면 발생하는 contract size 한도 초과 문제를 해결하기 위해 사용됨
                        </li>
                        <li>핵심 개념:
                            <ul><li>하나의 Proxy (Diamond)가 여러 로직 컨트랙트(Facet)를 참조</li>
                                <li>함수 시그니처 → Facet 주소를 매핑하여, 함수마다 delegatecall할 타겟을 지정</li>
                                <li>DiamondLoupe라는 인터페이스로 현재 구조와 로직을 외부에서 조회 가능</li></ul>
                        </li>
                        <li>구성 요소:
                            <ul><li>Diamond: Proxy 역할, delegatecall만 수행</li>
                                <li>Facet: 실제 로직 컨트랙트 (여러 개 존재 가능)</li>
                                <li>DiamondCut: Facet을 추가/제거/업데이트하는 관리자</li>
                                <li>DiamnodLoupe: 현재 구조를 외부에서 조회할 수 있게 함</li></ul>
                        </li>
                        <li>장점:
                            <ul><li>모듈화: 기능별로 로직을 분리해 관리</li>
                                <li>유연한 확장성: 필요한 기능만 교체 또는 추가 가능</li>
                                <li>컨트랙트 크기 문제 해결: Facet으로 나눠 사이즈 제한 회피
                                </li></ul>
                        </li>
                        <li>단점:
                            <ul><li>구현이 복잡하고, 설계 미숙 시 보안 취약점 유발 가능</li>
                                <li>delegatecall 로직 및 함수 라우팅이 복잡
                                </li></ul>
                        </li>
                    </ul>
                </li>
            </ol>

            <p>참고 자료</p>
            <ul><li><a href='https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable'>업그레이더블 기능을 간단하게 제공하는 OpenZeppelin</a>
                <ul><li>OpenZeppelin에서 기본 openzeppelin-contracts와 별도로 openzeppelin-contracts-upgradeable을 따로 만들어 관리</li>
                    <li>쌤은 사용하기 불편해 권하지 않으심. 이유는:
                        <ul><li>내 컴퓨터(local)에서는 되는데, 다른 사람이 열면 문제 날 수 있어서 “협업”에 불편할 수 있다</li>
                            <li>-upgradeable을 쓰면, 컨트랙트가 로컬 저장 중심으로 작업된다</li>
                            <li>배포할 때나, 다른 개발자가 같은 프로젝트를 쓸 때 동일한 환경이 아니라면 문제가 생기기 쉽다</li></ul>
                    </li>
                    <li>사용법은 구글에 잘 나와있음
                        <ul><li>업그레이더블 컨트랙트를 만들 때는 OpenZeppelin 업그레이어블 버전의 컨트랙트를 상속받아서 써야 함</li>
                            <li>배포 스크립트는 조금 다르게 작성해야 함</li></ul>
                    </li></ul>
            </li></ul>

            <h4>과제</h4>
            <ul><li>과제안에는 Transparent Proxy Pattern 구조에 가까운 Upgradable Proxy 구현 코드</li>
                <li>Repository:  upgradable Repository를 fork 합니다. 터미널에서 git clone 명령어로 레포지토리를 클론 후 스프린트를 진행합니다.</li>
                <li>Network: 네트워크는 Kairos 네트워크를 사용합니다.</li>
                <li>Account: test kaia(Kairos) 코인 잔액이 있는 두 계정을 준비해주세요. (.env.example을 확인 합니다.)
                    <ul><li>admin : proxy의 소유권을 가지는 계정</li>
                        <li>other : proxy의 소유권을 물려받을 계정</li></ul>
                </li>
                <li>npm script 소개
                    <ul><li>npm install 통해 필요한 모듈 설치하기. 이후 package.json의 scripts 실행 가능
                        <ul><li>npm run deploy : Upgradable 컨트랙트는 이미 구현되어 있습니다. 배포가 실행될 수 있도록 배포 스크립트를 구현하여 주세요.</li>
                            <li>npm run test:proxy : 이 명령어를 통해 proxy.test가 실행됩니다. (첫번째 단계) </li>
                            <li>npm run upgrade : Upgrade가 실행될 수 있도록 배포 스크립트와 업그레이드 실행 코드를 완성합니다.</li>
                            <li>npm run test:upgrade : 이 명령어를 통해 upgrade.test가 실행됩니다. (두번째 단계)</li>
                        </ul>
                    </li>
                        <li>과제는 scripts/deploy.ts & scripts/upgrade.ts파일을 구현한다</li>
                    </ul>
                    <ol><li>먼저 scripts/deploy.ts 에서 컨트랙트 배포 스크립트를 완성하여 Proxy 와 V1 컨트랙트를 배포합니다.</li>
                        <li>npm run test:proxy 를 통해 배포 완료를 확인하세요.</li>
                        <li>scripts/upgrade.ts 에서 컨트랙트 배포 스크립트와 업그레이드 실행 코드를 완성하여 V2로 컨트랙트를 업그레이드합니다.</li>
                        <li>npm run test:upgrade 를 통해 업그레이드 완료를 확인하세요.</li></ol>
                </li>
            </ul >

        </div >
    )
}

export default TIL0429