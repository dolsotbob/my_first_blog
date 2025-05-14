import React from 'react'

const TIL0401 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 1일</p>
            <h3>Solidity - 실습 2</h3>
            <h4>public으로 선언하지 않은 상태 변수의 Getter</h4>
            <ul><li>Solidity에서 상태 변수를 private 또는 internal로 선언하면 외부에서 직접 접근할 수 없기 때문에 getter를 직접 구현해야 한다</li></ul>
            <pre><code>{`
            // SPDX-License-Identifier: MIT 
            pragma solidity ^0.8.0; 

            contract Example { 
                uint256 private myNumber = 100;  // private -> 자동 Getter 없음 

                // Getter 함수 직접 구현 
                function getMyNumber() public view returns (uint256) {
                    return myNumber; 
                }
            }
            `}</code></pre>
            <p>사용 방법</p>
            <pre><code>{`
            // Hardhat(ethers.js)
            const number = await contract.getMyNumber();  // 직접 구현된 getter 사용 
            console.log(number.toString());  // 100
            `}</code></pre>

            <h4>구조체의 getter & setter</h4>
            <ul><li>구조체에서는 가시성 설정 불가</li>
                <li>다른 변수를 통해 private으로 선언 가능</li>
                <pre><code>{`
            struct Person { 
                string name; 
                uint age; 
                address wallet; 
            }

            Person private person; 
            `}</code></pre>
            </ul>

            <p>구조체의 getter</p>
            <ul><li>상태 변수를 private로 선언하면 getter 함수가 자동으로 생성되지 않아 별도의 getter 함수를 public으로 만들어야 한다</li></ul>
            <pre><code>{`
            function getPerson() public view returns (string memory, uint, address) { 
                    return (person.name, person.age, person.wallet);  // 개별 값 변환 (Solidity에서는 구조체 자체를 반환할 수 없음)
            }
            `}</code></pre>

            <p>구조체의 setter</p>
            <ul><li>구조체 데이터를 설정하는 setter 함수는 특정 필드만 변경할 수도 있고, 전체 구조체를 한 번에 설정할 수도 있습니다.</li>
                <li>특정 필드만 변경
                    <pre><code>{`
            // 이름 변경 
            function setName(string memory _name) public { 
                person.name = _name; 
            }        

            // 나이 변경 
            function setAge(uint _age) public { 
                person.age = _age; 
            }

            // 지갑 주소 변경 
            function setWallet(address _wallet) public { 
                person.wallet = _wallet; 
            }
            `}</code></pre>
                </li>
                <li>전체 구조체를 한 번에 설정
                    <pre><code>{`
            function setPerson(string memory _name, uint _age, address _wallet) public { 
                person = Person(_name, _age, _wallet);
            }
            `}</code></pre>
                </li>
            </ul>

            <p>매핑을 활용한 여러 개의 구조체 관리</p>
            <ul><li>매핑은 객체라고 보면 됨</li>
                <li>매핑에서 가시성 설정 가능</li></ul>
            <pre><code>{`
            contract StructMapping { 
                struct Person { 
                    string name; 
                    uint age; 
                    address wallet; 
                }

                mapping(address => Person) private people; 

                // 특정 사용자의 정보를 설정하는 함수 
                function setPerson(string memory _name, uint _age) public { 
                    people[msg.sender] = Person(_name, _age, msg.sender);
                }

                // 특정 사용자이 정보를 반환하는 함수 
                function getPerson(address _user) public view returns (string memory, uint, address) {
                    Person memory p = people[_user]; 
                    return (p.name, p.age, p.wallet);
                }
            }
            `}</code></pre>
            <ul><li>mapping을 활용해 여러 사용자의 데이터를 저장하고, msg.sender 기준으로 구조체 데이터를 관리함</li></ul>

            <p>참고</p>
            <ul><li><a href='https://github.com/dolsotbob/DataType2'>과제</a></li></ul>
        </div>
    )
}

export default TIL0401