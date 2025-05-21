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


