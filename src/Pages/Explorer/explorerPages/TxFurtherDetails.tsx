import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getBalance } from '../utils/web3';

const TxFurtherDetails_1: React.FC = () => {
    const { address } = useParams<{ address: string }>();
    const [balance, setBalance] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!address) {
            setError('Please provide your wallet address'); //에러 메세지 보내고
            setLoading(false); // 로딩 멈추기 
            return;
        }


        let isMounted = true;

        //주소가 있을 때 아래 코드 실행 
        const fetchBalance = async () => {
            try {
                setLoading(true); //로딩 시작
                setError(null); //에러 초기화 

                const balance = await getBalance(address); //address로 잔액 가져와 

                if (isMounted) {
                    setBalance(balance); //잔액 상태에 설정  
                    setLoading(false); // 로딩 종료
                }
            } catch (error) {
                if (isMounted) {
                    setError('Failed to fetch balance');
                    setLoading(false);
                }
            }
        };

        fetchBalance(); //useEffect가 실행될 때 비동기 함수가 호출되어 해당 지갑의 잔액 가져온다 

        return () => {
            isMounted = false;  //컴포넌트가 언마운트되면 클린업 함수로 상태 업데이트 방지 
        };

    }, [address]); //address 가 변결될 때마다 이 useEffect가 실행됨 

    return (
        <div className='txFurtherDetails'>
            <p><strong>Address:</strong> {address}</p>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {balance && <p><strong>Balance:</strong> {balance} <strong>KAIA</strong></p>}
        </div>
    );
}

export default TxFurtherDetails_1