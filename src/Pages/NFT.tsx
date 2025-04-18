import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { privateKeyToAccount } from './NFT/utils/web3';
import NFTHeader from './NFT/components/NFTHeader';
// import styles from './Pages.module.css';

const NFT = () => {
    const [inputValue, setInputValue] = useState('');
    const [isConnected, setIsConnected] = useState(false); // 지갑 연결 여부
    const navigate = useNavigate();

    // sessionStorage에 지갑 주소가 있는지 확인해서 있을 때만 <NFTHeader /> 렌더링! 
    useEffect(() => {
        const address = sessionStorage.getItem('address');
        if (address) {
            setIsConnected(true);
        }

        const handleStorageChange = () => {
            const address = sessionStorage.getItem('address');
            setIsConnected(!!address);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleSubmit = () => {
        const accountInfo = privateKeyToAccount(inputValue);

        if (accountInfo) {
            const account = {
                address: accountInfo?.address,
                privateKey: inputValue,
            };

            sessionStorage.setItem('privateKey', account.privateKey);
            sessionStorage.setItem('address', account.address);

            window.dispatchEvent(new Event('storage'));

            navigate('/viewer', { state: { account } });
        } else {
            alert('Private Key를 입력하세요.')
        }
    };

    return (
        <div>
            {/* 연결됐을 때만 보여줌   */}
            {isConnected && <NFTHeader />}
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Private Key를 넣어주세요."
            />
            <button>
                Wallet Connect
            </button>
        </div>
    );
};

export default NFT
