import React, { useEffect, useState } from 'react';

import SearchBar from '../explorerComponents/SearchBar';
import { getBlock, getNetworkStatus } from '../utils/web3';
import '../Explorer.css';

const ExplorerHome = () => {
  const [blockNum, setBlockNum] = useState<string>('');
  const [networkStatus, setNetworkStatus] = useState<boolean>(false);

  const fetchBlock = async () => {
    try {
      const latestBlock = await getBlock();
      setBlockNum(latestBlock.number.toString());
    } catch (error) {
      console.error('Error fetching latest block:', error);
    }
  };

  const fetchNetworkStatus = async () => {
    try {
      const networkStatus = await getNetworkStatus();
      setNetworkStatus(networkStatus);
    } catch (error) {
      console.error('Error fetching network status:', error);
    }
  };

  useEffect(() => {
    fetchBlock();
    fetchNetworkStatus();
  }, []);

  return (
    <div className='explorerHome'>
      <h1>Blockchain Explorer</h1>
      <SearchBar />
      <h2>Latest Block: {blockNum ? blockNum : 'Loading...'}</h2>
      <h2>
        Network Status:{' '}
        {networkStatus
          ? 'Network is healthy :)'
          : 'Network is unhealthy :('}
      </h2>
    </div>
  );
};

export default ExplorerHome;
