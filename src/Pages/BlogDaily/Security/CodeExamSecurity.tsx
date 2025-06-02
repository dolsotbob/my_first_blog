export const TIL0602ReentrancyExample = `
function withdraw() public {
  require(balances[msg.sender] > 0);
  (bool sent, ) = msg.sender.call{value: balances[msg.sender]}("");
  require(sent);
  balances[msg.sender] = 0;
}
`

export const TIL0602ReentrancyPrevention1 = `
function withdraw() public {
  uint amount = balances[msg.sender];
  balances[msg.sender] = 0;
  (bool sent, ) = msg.sender.call{value: amount}("");
  require(sent);
}
`

export const TIL0602ReentrancyPrevention2 = `
// locked: 함수 실행 중인지 여부를 나타내는 잠금상태 
// private: 외부에서 접근 못함 
// 기본값은 false -> 즉, 처음엔 잠기지 않은 상태 
bool private locked = false;

// 이 modifier는 함수 앞에 붙여서 함수 실행 도중 다른 호출이 들어오는 걸 막는 용도이다. 
modifier noReentrant() {
  require(!locked, "No reentrancy"); // 함수 실행중이 아니어야 통과 
  locked = true;                     // 실행 시작 -> 잠금 
  _;                                 // 함수 본문 실행
  locked = false;                    // 실행 종료 -> 잠금 해제
}
`

export const TIL0602UnderflowExample = `
uint256 balance = 0;
balance = balance - 1;  // 언더플로우 발생
`

export const TIL0602UnderflowExplited = `
function withdraw(uint amount) public {
    // balance[msg.sender]가 0이고 amount = 1 이라면, 공격자 잔고가 엄청 커짐!    
    balance[msg.sender] -= amount;  
    // 조건 없이 돈을 송금하기 때문에 balance가 무한처럼 보여 계속 출금 가능
    payable(msg.sender).transfer(amount);
}
`

export const TIL0602TimestampExample = `
if (block.timestamp % 2 == 0) {
    // 당첨 처리
}
`

export const TIL0602TimestampExplited = `
function play() public {
    require(msg.value == 1 ether);
    if (block.timestamp % 10 == 0) {
        // 10초 단위에 실행되면 2 ether 지급
        payable(msg.sender).transfer(2 ether);
    }
}
`

