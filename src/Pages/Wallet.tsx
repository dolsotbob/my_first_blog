import React from 'react'
import { useState } from 'react'; //궁금 
import Web3 from 'web3'; //궁금 
import { Web3Account } from 'web3-eth-accounts';
import './Wallet.css';

const web3 = new Web3('https://public-en-kairos.node.kaia.io'); // 웹3 인스턴스 생성 //궁금2

const Wallet = () => { //리액스 상태 정의 // 궁금3 
    const [wallet, setWallet] = useState<Web3Account | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [txHash, setTxHash] = useState<Uint8Array | string | null>(null);
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    //지갑 생성 함수 
    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        // console.log("newWallet", newWallet)
        setWallet(newWallet); //생성된 새 지갑 정보를 wallet 상태에 저장 
        setBalance(null); //지갑 생성 후 잔액 초기화 
        setTxHash(null); //지갑 생성 후 트랜잭션 해시 상태 초기화 
    };

    //잔액 조회 함수 
    const getBalance = async () => {
        if (!wallet) return; //wallet이 존재하지 않으면 if 조건이 실행되어 return이 호출되고 함수가 종료됨
        const balanceWei = await web3.eth.getBalance(wallet.address); //현재 지갑 주소(wall.address)를 사용하여 web.eth.getBalance()를 통해 해당 주소의 잔액을 Wei 단위로 가져온다
        // console.log("balanceWei", balanceWei)
        setBalance(web3.utils.fromWei(balanceWei, 'ether')); //ETH 단위로 변환하여 상태 업데이트 
    };

    // 송금 함수 
    const sendTransaction = async () => {
        if (!wallet || !recipient || !amount) return;

        try {
            const value = web3.utils.toWei(amount, 'ether'); //송금 금액을 Wei단위로 변환
            // console.log(value, 'kaia')

            const gasPrice = await web3.eth.getGasPrice(); //가스 가격을 가져온다 
            const estimate = await web3.eth.estimateGas({
                from: wallet.address,
                to: recipient,
                value,
                gasPrice,
            })
            // console.log(estimate)

            const tx = { //트랜젝션 객체 tx 생성 
                from: wallet.address,
                to: recipient,
                value,
                gas: estimate, //가스 리밋 
                gasPrice,
            };
            // console.log("tx",tx)

            const signedTx = await web3.eth.accounts.signTransaction( //트랜젝션 서명 
                tx,
                wallet.privateKey
            );
            // console.log(signedTx)

            const sentTx = await web3.eth.sendSignedTransaction( //서명된 트랜젝션을 블록체인 네트워크에 전송
                signedTx.rawTransaction
            );
            // console.log(sentTx)

            setTxHash(sentTx.transactionHash); //트랜젝션 해시(sentTx.transactionHash)를 상태에 저장하고,
            getBalance(); //getBalance 함수를 호출해 잔액을 업데이트 함 
        } catch (error) {
            console.error('Transaction Failed:', error);
        }
    };

    //프라이빗 키 표시 여부 상태 
    const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);

    // 프라이빗 키 복사 함수 
    const copyPrivateKey = async () => {
        if (wallet) {
            try {
                // console.log('Private Key', wallet.privateKey);
                await navigator.clipboard.writeText(wallet.privateKey);
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            } catch (err) {
                console.error('복사 실패:', err);
            }
        }
    };

    // 프라이빗 키 표시/숨김 토글 함수 
    const togglePrivateKey = () => {
        setShowPrivateKey(!showPrivateKey);
    };


    return (
        <div className="Wallet">
            <h2>블록체인 지갑</h2>

            <p>
                <img className='coinImage' src="https://contenthub-static.crypto.com/wp_media/2024/01/WHAT-IS-A-BITCOIN-WALLET-1.jpg"></img>
            </p>

            {!wallet ? (
                <button className="button" onClick={createWallet}>새 지갑 생성</button>
            ) : (
                <div>
                    <div className="wallet-info">
                        <p className="address-private-section">
                            <strong>주소:</strong> {wallet.address}
                        </p>
                        <div className="address-private-section private-key-section">
                            <strong>프라이빗 키:</strong>
                            {showPrivateKey ? <span>{wallet.privateKey}</span> : <span>⚫️⚫️⚫️⚫️⚫️</span>}

                            <div className="private-key-actions">
                                <button onClick={togglePrivateKey} className="toggle-btn">
                                    {showPrivateKey ? "숨기기" : "보기"}
                                </button>

                                <button onClick={copyPrivateKey} className="copy-btn">
                                    복사
                                </button>
                                {copySuccess && <span className="copy-success">✔ 복사됨!</span>}
                            </div>
                        </div>

                    </div>

                    <button className='button' onClick={getBalance}>잔액 조회</button>
                    {balance !== null && (
                        <p>
                            <strong>잔액:</strong> {balance} KAIA
                        </p>
                    )}

                    <h3>송금</h3>
                    <div className="send-transaction">
                        <input
                            type="text"
                            placeholder="받는 주소"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="보낼 금액 (KAIA)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <button className='button' onClick={sendTransaction}>송금</button>

                    {txHash && (
                        <p>
                            ✅ <strong>트랜잭션 해시:</strong>{' '}
                            <a
                                href={`https://kairos.kaiascan.io/tx/${txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {txHash}
                            </a>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Wallet;