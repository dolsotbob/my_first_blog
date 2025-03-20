import Web3 from 'web3';
import { Numbers } from 'web3-types';

const web3 = new Web3('https://public-en-kairos.node.kaia.io');

export const getBlock = async (blockNumber?: number) => {
  const block = await web3.eth.getBlock(blockNumber ?? 'latest');
  return {
    number: block.number,
    hash: block.hash,
    transaction: block.transactions,
    miner: block.miner,
    timestamp: block.timestamp,
  };
};

export const getTransactionReceipt = async (txHash: string) => {
  const tx = await web3.eth.getTransactionReceipt(txHash);
  return tx;
};

export const getTransaction = async (txHash: string) => {
  const tx = await web3.eth.getTransaction(txHash);
  return tx;
};

export const getNetworkStatus = async () => {
  const isListening = await web3.eth.net.isListening();
  const peerCount = await web3.eth.net.getPeerCount();

  return isListening && Number(peerCount) > 2;
};

export const fromWei = (amount: Numbers) => {
  return web3.utils.fromWei(amount, 'ether');
};

export const getBalance = async (address: string) => {
  const balanceWei = await web3.eth.getBalance(address);
  const balance = web3.utils.fromWei(balanceWei, 'ether');
  return parseFloat(balance).toFixed(3);
}


// web3.eth.getBlockNumber() //returns the current block number 

// web3.eth.getBlock(3150) //Returns a block matching the block number or block hash.
// - return trasactions (get tnx_) 

// web3.eth.getBlockTransactionCount("block hash or block number") // returns the number of transactions in a given block 

