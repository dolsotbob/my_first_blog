const coinWallet = [10, 50, 100, 500];

const vault = 660; 

const reduceVault = coinWallet.reduce((acc, cur, idx, arr) => {
    console.log(`acc: ${acc}, cur: ${cur}, idx: ${idx}, arr: ${arr}`);
  return acc + cur;
}, 10);

console.log(reduceVault);
