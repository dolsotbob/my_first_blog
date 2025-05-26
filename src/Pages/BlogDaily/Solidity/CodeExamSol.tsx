export const TIL0327InheritanceBasic = `
// 부모 계약 (Parent Contract)
pragma solidity ^0.8.0; 

contract Parent { 
    string public parentName = "Parent Contract"; 

    function greet() public view returns (string memory) { 
        return "Hello from the Parent Contract!";
    } 
}

// 자식 계약 (Child Contract)
contract Child is Parent { 
    function childGreet() public view returns (string memory) {
        return "Hello from the Child Contract!"; 
    }
}
`

export const TIL0327OverridingExample = `
// 부모 계약 
contract Animal { 
    function sound() public virtual pure returns (string memory) { 
        return "Generic Animal Sound";
    }
}

// 자식 계약 
contract Dog is Animal { 
    function sound() public pure override returns (string memory) {
        return "Bark";
    }
}
`

export const TIL0327VisibilitySpecifiers = `
contract Base { 
    string public publicData = "Public"; 
    string internal internalData = "Internal"; 
    string private privateData = "Private"; 

    function getPrivateData() private pure returns (string memroy) { 
        return "Only within Base";
    }
}

 contract Derived is Base { 
    unction accessData() public view returns (string memory, string memory) { 
         // 접근 가능 
        string memory publicVal = publicData; 
        string memory internalVal = internalData; 
                    
        // 접근 불가 (컴파일 에러 발생)
        // string memory privateVal = privateData; 
                    
        return (publicVal, internalVal);
    }
}
`

export const TIL0327InterfaceDef = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAnimal {
    function makeSound() external view returns (string memory);
}
`

export const TIL0327InterfaceImported = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IAnimal.sol";

contract Dog is IAnimal {
    function makeSound() external pure override returns (string memory) {
        return "Bark";
    }
}

contract Cat is IAnimal {
    function makeSound() external pure override returns (string memory) {
        return "Meow";
    }
}
`

export const TIL0327InterfaceUsage = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IAnimal.sol";

contract AnimalSound {
    function getSound(IAnimal animal) public view returns (string memory) {
        return animal.makeSound();
    }
}
`
export const TIL0327LibraryDef = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library MathLibrary {
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function subtract(uint256 a, uint256 b) public pure returns (uint256) {
        require(b <= a, "Underflow error");
        return a - b;
    }
}
`

export const TIL0327LibraryInContract = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MathLibrary.sol";

contract Calculator {
    function addNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        return MathLibrary.add(a, b);
    }

    function subtractNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        return MathLibrary.subtract(a, b);
    }
}
`

export const TIL0327usingForLibrary = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library ArrayUtils {
    function findMax(uint256[] memory self) public pure returns (uint256) {
        require(self.length > 0, "Array is empty");
        uint256 max = self[0];
        for (uint256 i = 1; i < self.length; i++) {
            if (self[i] > max) {
                max = self[i];
            }
        }
        return max;
    }

    function sum(uint256[] memory self) public pure returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < self.length; i++) {
            total += self[i];
        }
        return total;
    }
}
`

export const TIL0327usingFor = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ArrayUtils.sol";

contract ArrayProcessor {
    using ArrayUtils for uint256[];

    uint256[] private data;  // 이 컨트랙트 안에서 사용할 배열 data 선언 

    function addElement(uint256 value) public {
        data.push(value);
    }

    function getMax() public view returns (uint256) {
        return data.findMax();  // ArrayUtils에 있는 findMax 사용 
    }

    function getSum() public view returns (uint256) {
        return data.sum();  // ArrayUtils에 있는 sum 사용 
    }
}
`

export const TIL0325removeAndShift = `
// 배열에서 특정 요소를 삭제하고 뒤의 요소들을 앞으로 당김 
contract RemoveAndShift {
    // numbers라는 이름의 동적 배열을 선언하고 초기갑으로 [10, 20, 30, 40]으로 설정한다
    // public이기 때문에 자동으로 getter 함수가 만들어져 외부에서 numbers(0), numbers(1) 등으로 조회 가능
    uint256[] public numbers = [10, 20, 30, 40];

    function removeAt(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        for (uint256 i = index; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers.pop();
    }
}
`

export const TIL0328MappingofStructs =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        string name;
        uint256 age;
        string email;
    }

    mapping(address => Profile) public profiles;

    // 사용자 정보 등록
    function setProfile(string memory _name, uint256 _age, string memory _email) public {
        profiles[msg.sender] = Profile(_name, _age, _email);
    }

    // 사용자 정보 조회
    function getProfile(address _user) public view returns (string memory, uint256, string memory) {
        Profile memory profile = profiles[_user];
        return (profile.name, profile.age, profile.email);
    }
}
`

export const TIL0328NestedMappings =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PermissionSystem {
    // permissions 매핑: 사용자(address)의 역할(string)에 대한 권한(bool)을 저장함 
    // 첫 번째 매핑은 address를, 두 번째 매핑은 string을 키로 사용함 
    // permissions[_user][_role] = true로 사용자가 특정 역할을 가지도록 설정하거나 false로 설정해 권한을 회수할 수 있다
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
`

export const TIL0328functionReceive =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReceiveExample {
    event Received(address sender, uint amount);

    // 이더 수신 시 호출 
    receive() external payable { 
        emit Received(msg.sender, msg.value);
    }
}
`

export const TIL0328functionFallback =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FallbackExample {
    event FallbackCalled(address sender, uint amount, bytes data);

    // 정의되지 않은 호출 발생 시 자동 실행
    fallback() external payable {
        emit FallbackCalled(msg.sender, msg.value, msg.data);
    }
}
`

export const TIL0328tryCatch =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandlingExample {
    event ErrorCaught(string reason);

    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        require(b != 0, "Cannot divide by zero");
        return a / b;
    }

    function safeDivide(uint256 a, uint256 b) public {
        try this.divide(a, b) returns (uint256 result) {
            // 성공 시 처리
        } catch Error(string memory reason) {
            emit ErrorCaught(reason);
        }
    }
}
`

export const TIL0328CustomErrors =
    `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomErrorExample {
    error NotOwner(address caller);

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // 소유자만 실행 가능한 함수
    function restrictedFunction() public {
        if (msg.sender != owner) {
            revert NotOwner(msg.sender);
        }
    }
}
`

