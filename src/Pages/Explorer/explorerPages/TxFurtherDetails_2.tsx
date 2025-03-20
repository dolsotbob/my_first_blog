import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlock, getBlockNumber, getTxFromBlock } from '../utils/web3';

//트랜젝션 타입 정의 
type Transaction = {
    from: string;
    to: string;
    value: string;
};

const TxFurtherDetails_2: React.FC = () => {
    const { address } = useParams<{ address: string }>();
    const [transactions, setTransactions] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);


    const getLast10Blocks = async () => {
        try {
            const latestBlockNumber = await getBlockNumber();
            const recentBlocks = [];
            for (let i = 0; i < 50; i++) {
                const blockNumber = Number(latestBlockNumber) - i; //최근 블록 10개의 Block Number
                recentBlocks.push(blockNumber); //최근 recentBlocks 10개 BlockNumber 배열에 넣기
            }

            console.log("Recent Block Numbers:", recentBlocks);
            return recentBlocks; // 최근 recentBlocks 10개 Block Number 출력 
        } catch (error) {
            setError('Failed to fetch blocks');
            return []; //에러 나면 빈 배열 반환 
        }
    };

    //최근 10개 블록에서 모든 트랜잭션 가져오기 
    const getTxFromLast10Blocks = async (blocks: number[]) => {
        try {
            const allTxs: any[] = [];
            for (let blockNumber of blocks) {
                const txFromBlock = await getTxFromBlock(blockNumber);
                console.log(`Transactions from block ${blockNumber}:`, txFromBlock.transaction);
                allTxs.push(...txFromBlock.transaction);
            }

            console.log("All Transactions:", allTxs);
            return allTxs;
        } catch (error) {
            setError('Failed to fetch transactions');
            return [];
        }
    };

    //트랜잭션에서 해당 지갑 주소와 관련된 트랜잭션 필터일 
    useEffect(() => {
        console.log("Updated Transactions:", transactions);
        const getTxFromAddress = async (address: string) => {
            try {
                if (!address) return;

                //최근 10개 블록 가져오기 
                const recentBlocks = await getLast10Blocks();
                // console.log("Recent Blocks:", recentBlocks);

                if (recentBlocks.length === 0) return;

                //최근 10개 블록에서 트랜잭션 가져오기 
                const txs = await getTxFromLast10Blocks(recentBlocks);
                // console.log("Transaction from last 10 blocks:", txs);

                //해당 주소와 관련된 트잭만 필터링 
                const filteredTxs = txs.filter((tx) => {
                    console.log(`트랜잭션 확인: from=${tx.from}, to=${tx.to}, target=${address}`);
                    return tx.from === address || tx.to === address;
                });

                console.log("Filtered Transactions:", filteredTxs);

                setTransactions(filteredTxs); //상태 업데이트 
            } catch (error) {
                setError('Failed to filter transactions by address');
            }
        };

        if (address) {
            getTxFromAddress(address);
        }
    }, [address]); //주소 변경할 때 마다 실행 


    return (
        <div>
            <h2><strong>Recent Transactions:</strong></h2>
            {error && <p>{error}</p>}
            <ul>
                {transactions.length > 0 ? (
                    transactions.map((tx, index) => (
                        <li key={index}>
                            <strong>From:</strong> {tx.from} <br />
                            <strong>To:</strong> {tx.to} <br />
                            <strong>Amount:</strong> {tx.value}
                        </li>
                    ))
                ) : (
                    <p>No transactions found.</p>
                )}
            </ul>
        </div>
    );
};


export default TxFurtherDetails_2