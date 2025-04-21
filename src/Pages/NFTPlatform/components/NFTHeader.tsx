import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Components.module.css';

const NFTHeader = () => {
    const [isAccount, setIsAccount] = useState(
        sessionStorage.getItem('address') || ''
    );

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAccount(sessionStorage.getItem('address') || '');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <header>
            <nav className={styles.nav}>
                {isAccount ? (
                    <>
                        <Link className={styles.nav_item} to="/nft">홈</Link>
                        <Link className={styles.nav_item} to="/nft/viewer">NFT</Link>
                        <Link className={styles.nav_item} to="/nft/mint">Mint</Link>
                    </>
                ) : (
                    <Link className={styles.nav_item} to="/">홈</Link>
                )}
            </nav>
        </header>
    );
}

export default NFTHeader; 