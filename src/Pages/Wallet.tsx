import React from 'react'
import { useState } from 'react';
import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';
import './Wallet.css';

const web3 = new Web3('https://public-en-kairos.node.kaia.io'); // 웹3 인스턴스 생성

const Wallet = () => {
    const [wallet, setWallet] = useState<Web3Account | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [txHash, setTxHash] = useState<Uint8Array | string | null>(null);
    const [copyAddressSuccess, setCopyAddressSuccess] = useState<boolean>(false);
    const [copyPrivateKeySuccess, setCopyPrivateKeySuccess] = useState<boolean>(false);
    const [showPrivateKey, setShowPrivateKey] = useState<boolean>(false);

    //지갑 생성 함수 
    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        // console.log("newWallet", newWallet)
        setWallet(newWallet); //생성된 새 지갑 정보를 wallet 상태에 저장 
        setBalance(null); //지갑 생성 후 잔액 초기화 
        setTxHash(null); //지갑 생성 후 트랜잭션 해시 상태 초기화 
    };

    const copyAddress = async () => {
        if (wallet) {
            try {
                // console.log('Address', wallet.address);
                await navigator.clipboard.writeText(wallet.address);
                setCopyAddressSuccess(true);
                setTimeout(() => setCopyAddressSuccess(false), 2000);
            } catch (err) {
                console.error('복사 실패:', err);
            }
        }
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

    // 프라이빗 키 복사 함수 
    const copyPrivateKey = async () => {
        if (wallet) {
            try {
                // console.log('Private Key', wallet.privateKey);
                await navigator.clipboard.writeText(wallet.privateKey);
                setCopyPrivateKeySuccess(true);
                setTimeout(() => setCopyPrivateKeySuccess(false), 2000);
            } catch (err) {
                console.error('복사 실패:', err);
            }
        }
    };

    // 프라이빗 키 표시/숨김 토글 함수 
    const togglePrivateKey = () => {
        setShowPrivateKey(!showPrivateKey);
    };

    //Facucet 받기 함수 
    const myMetaMaskAddress = process.env.REACT_APP_FAUCET_WALLET_ADDRESS;
    const myMetaMaskPrivateKey = process.env.REACT_APP_FAUCET_PRIVATE_KEY || '';

    // console.log("지갑 주소:", myMetaMaskAddress);

    const faucetTokens = async () => {
        if (!wallet) return alert("지갑을 먼저 생성하세요.");

        const recipient = wallet.address; // 방문자가 생성한 지갑 주소
        const faucetAmount = "0.1"; // faucet으로 보낼 토큰 수량 (KAIA)

        try {
            const value = web3.utils.toWei(faucetAmount, "ether");
            const gasPrice = await web3.eth.getGasPrice();
            const estimate = await web3.eth.estimateGas({
                from: myMetaMaskAddress, // 사용자의 메타마스크 주소
                to: recipient,
                value,
                gasPrice,
            });

            const tx = {
                from: myMetaMaskAddress,
                to: recipient,
                value,
                gas: estimate,
                gasPrice,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, myMetaMaskPrivateKey);
            const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            // console.log("sentTx", sentTx);

            setTxHash(sentTx.transactionHash);
            getBalance(); // 잔액 업데이트
            alert("0. 1 KAIA 테스트 토큰이 전송되었습니다!");
        } catch (error) {
            console.error("Faucet 전송 실패:", error);
        }
    };



    return (
        <div className="Wallet">
            <h2>Blockchain Wallet</h2>

            <p>
                <img className='coinImage' src="https://contenthub-static.crypto.com/wp_media/2024/01/WHAT-IS-A-BITCOIN-WALLET-1.jpg"></img>
            </p>

            {!wallet ? (
                <button className="button" onClick={createWallet}>Create Wallet</button>
            ) : (
                <div>
                    <div className="wallet-info">

                        <div className="address-private-section address-section">
                            <strong>Address:</strong> {wallet.address.slice(0, 30) + "..."}
                            <div>
                                <button onClick={copyAddress} className="copy-add-btn">
                                    Copy
                                </button>
                                {copyAddressSuccess && <span className="copy-address-success">✔ Copied!</span>}
                            </div>
                        </div>

                        <div className="address-private-section private-key-section">
                            <strong>Private Key:</strong>
                            <div>
                                {showPrivateKey ? (
                                    <span>{wallet.privateKey.slice(0, 20) + "..."}</span>
                                ) : (
                                    <span>⚫️⚫️⚫️⚫️⚫️</span>
                                )}
                            </div>

                            <div className="private-key-actions">
                                <button onClick={togglePrivateKey} className="toggle-btn">
                                    {showPrivateKey ? "Hide" : "Show"}
                                </button>

                                <button onClick={copyPrivateKey} className="copy-btn">
                                    Copy
                                </button>
                                {copyPrivateKeySuccess && <span className="copy-privatekey-success">✔ Copied!</span>}
                            </div>
                        </div>
                    </div>

                    <button className='button' onClick={getBalance}>Balance</button>
                    {balance !== null && (
                        <p>
                            <strong>Balance:</strong> {balance} KAIA
                        </p>
                    )}

                    {/* faucet 버튼  */}
                    <h3>Free KAIA Test Tokens</h3>
                    <button className='button' onClick={faucetTokens}>
                        Receive
                    </button>

                    {/* 송금 버튼  */}
                    <h3>Send</h3>
                    <div className="send-transaction">
                        <input
                            type="text"
                            placeholder="Recipient Address"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Amount (KAIA)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <button className='button' onClick={sendTransaction}>Send</button>

                    {txHash && (
                        <p>
                            ✅ <strong>Transaction Hash:</strong>{' '}
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

            )
            }
        </div >
    );
};


export default Wallet