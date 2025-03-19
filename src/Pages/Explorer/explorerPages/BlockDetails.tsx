import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlock } from '../utils/web3';
import '../Explorer.css'

const BlockDetails: React.FC = () => {
  const { blockNumber } = useParams<{ blockNumber: string }>();
  const [block, setBlock] = useState<any>(null);

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const blockData = await getBlock(Number(blockNumber));

        // BigInt 값 반환 - web3.eth.getBlock(blockNumber)를 사용할 때 블록 번호가 BigInt로 반환되고 이후 setBlock(block)을 할 때 다른 타입과 혼합되어 에러 났었음 
        const formattedBlock = {
          ...blockData,
          number: blockData.number.toString(), //블록 번호 변환 
          timestamp: blockData.timestamp.toString(),
        };

        setBlock(formattedBlock);
      } catch (err) {
        console.error('Error fetching block:', err);
      }
    };

    fetchBlock();
  }, [blockNumber]);

  if (!block) return <p>Loading...</p>;

  return (
    <div className='blockDetails'>
      <h3>Block Details</h3>
      <p><strong>Block Number:</strong> {block.number}</p>
      <p><strong>Hash:</strong> {block.hash}</p>
      <p><strong>Transactions:</strong> {block.transactions}</p>
      <p><strong>Miner:</strong> {block.miner}</p>
      <p><strong>Timestamp:</strong> {new Date(block.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export default BlockDetails;
