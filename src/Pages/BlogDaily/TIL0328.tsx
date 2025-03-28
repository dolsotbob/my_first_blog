import React from 'react'

const TIL0328 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 28일</p>
            <h3>Solidity - 기본 문법 5</h3>
            <ul><li>데이터 타입 심화</li>
                <li>Fallback & Receive Functions</li>
                <li>Advanced Error Handling</li></ul>

            <h4>구조체의 매핑</h4>
            <ul><li>매핑은 자바스크립트의 객체와도 같은 것</li>
                <li>Mapping과 Struct를 함께 사용해 데이터를 더 구조적으로 관리할 수 있음</li>
                <pre><code>{`
            contract UserProfile { 
                struct Profile { 
                    string name; 
                    uint256 age; 
                    string email;
                }
                
                // 사용자 주소별로 정보를 저장 
                mapping(address => Profile) public profiles; 

                // 사용자 정보 등록 
                function setProfile(string memory _name, uint256 _age, string memory _email) public { 
                    profiles[msg.sender] = Profile(_name, _age, _email); 
                
                }

                // 사용자 정보 조회 
                function getProfile(address _user) public view returns (string memroy, uint256, string memory) {
                    Profile memory profile = profiles[_user];
                    return (profile.name, profile.age, profile.email);
                } 
            }
            `}</code></pre>
            </ul>

            <h4>다중 매핑 구조(Nested Mappings)</h4>
            <ul><li>매핑 안에 또 다른 매핑을 정의해 2차원 이상의 데이터 저장이 가능함</li>
                <li>주로 권한 관리와 복잡한 관계 설정에 유용함</li>
                <li>다중 매핑 구조 예시 1: </li>
                <pre><code>{`
            const permissions = {
                address: {
                    string: bool
                }
            }
            `}</code></pre>
                <li>다중 매핑 구조 예시 2:</li>
                <pre><code>{`
                contract PermissionSystem { 
                    // permissions 매핑: 사용자(address)의 역할(string)에 대한 권한(bool)을 저장함 
                    // 첫 번째 매핑은 address를, 두 번째 매핑은 string을 키로 사용함 
                    // permissions[_user][_role] = true로 사용자가 특정 역할을 가지도록 설정하고나 false로 설정해 권한을 회수할 수 있다
                    mapping(address => mapping(string => bool)) public permissions; 

                    // 권한 부여 
                    function grantPermission(address _user, string memory _role) public { 
                        permissions[_user][_role] = true; 
                    }
                    
                    // 권한 회수 
                    function revokePermission(address _user, string memory _role) public { 
                        permissions[_user][_role] = false; 
                    }

                    // 권한 확인 
                    function hasPermission(address _user, string memory _role) public view returns (bool) {
                        return permissions[_user][_role];
                    }
                }
                `}</code></pre>
            </ul>

            <h4>Receive와 Fallback</h4>
            <ul><li>스마트 계약이 이더를 수신할 때 호출하는 특별한 함수</li>
            </ul>

            <h4>Receive</h4>
            <ul><li>이더를 직접 수신할 때 호출되는 함수</li>
                <li>external과 payable로 선언해야 함</li>
                <pre><code>{`
            contract ReceiveExample { 
                event Received(address sender, uint amount); 

                // 이더 수신 시 호출 
                receive() external payable { 
                    emit Received(msg.sender, msg.value);
                }
            }
            `}</code></pre>
            </ul>

            <h4>Fallback</h4>
            <ul><li>정의되지 않은 함수가 호출되거나 데이터가 포함된 호출이 발생할 때 자동으로 실행</li>
                <li>external로 선언되어야 함; 이더 전송이 포함되었다면 payable도 필요</li>
                <li>Proxy 패턴에서 쓰임; 프록시 계약에서 사용자가 호출한 요청을 실제 로직을 처리하는 로직 계약으로 전달하는 역할</li>
                <pre><code>{`
            contract FallbackExample { 
                event FallbackCalled(address sender, uint amount, bytes data); 

                // 정의되지 않은 호출 발생 시 자동 실행 
                fallback() external payable { 
                    emit FallbackCalled(msg.sender, msg.value, msg.data); 
                }
            }
            `}</code></pre>
            </ul>

            <h4>에러 처리 심화</h4>
            <ul><li>기본적인 에러 핸들러 require, revert, assert 외 심화적인 에러 처리 방식</li>
                <li>try/catch 문법과 Custom Errors</li></ul>

            <h4>try/catch 문법</h4>
            <ul><li>에러 날 경우 따로 처리하고 싶을 때 사용할 수 있음</li>
                <li>예시:</li>
                <pre><code>{`
            function safeDivide(uint256 a, uint256 b) public { 
                try this.divide(a, b) returns (uint256 result) { 
                    //성공 시 처리
                } cath Error(string memory reason) { 
                    emit ErrorCaught(reason);
                }
            }
            `}</code></pre>
            </ul>

            <h4>사용자 정의 에러Custom Errors</h4>
            <ul><li>특정 조건이 충족되지 않았을 때 발생할 수 있는 에러를 명확하게 정의할 수 있음</li>
                <li>string이 없어서 require, revert 보다 가스 비용 절감됨</li>
                <li>emit이 아닌 revert 키워드로 출력</li>
                <li>예시: </li>
                <pre><code>{`
            contract CustomErrorExample { 
                error NotOwner(address caller);  // NotOwner라는 커스텀 에러 정의

                address public owner; // 계약 소유자 주소 저장 

                constructor() { 
                    owner = msg.sender; // 배포한 사람이 자동으로 소유주가 됨 
                }

                // 소유자만 실행 가능한 함수 
                function restrictedFunction() public {
                    // 소유자가 아닌 사람이 restrictedFunction()을 호출하면 NotOwner 에러가 발생함  
                    // revert NotOwner(msg.sender);가 실행되면서, 트랜잭션이 롤백되며 호출자의 주소가 포함된 오류 메시지가 반환됨
                    if (msg.sender != owner) {     
                        revert NotOwner(msg.sender);
                    }
                }
            }
            `}</code></pre>
            </ul>

        </div>
    )
}

export default TIL0328