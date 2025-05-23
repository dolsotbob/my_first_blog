import React from 'react';
import { Link } from 'react-router-dom';
import './SolidityAdv.css'; // CSS 파일 추가

const cardData = [
    { date: '4/7', title: '컨트랙트 호출(ABI)', path: '/blog/solidityadv/0407' },
    { date: '4/8', title: 'ERC-20', path: '/blog/solidityadv/0408' },
    { date: '4/10', title: 'ERC-721', path: '/blog/solidityadv/0410' },
    { date: '4/14', title: 'NFT Storage', path: '/blog/solidityadv/0414' },
    { date: '4/21', title: 'Test-Driven Contract Development', path: '/blog/solidityadv/0421' },
    { date: '4/22', title: 'Gassless - EIP 2612(Permit)', path: '/blog/solidityadv/0422' },
    { date: '4/23', title: 'Gassless - EIP 2771(Meta Transaction)', path: '/blog/solidityadv/0423' },
    { date: '4/29', title: 'Upgradable', path: '/blog/solidityadv/0429' },
    { date: '4/30', title: 'Unisawp', path: '/blog/solidityadv/0430' },
    { date: '5/7', title: 'Oracle', path: '/blog/solidityadv/0507' },
];

const SolidityAdv = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">Server</h2>
            <div className="bc_card-grid">
                {cardData.map((item, index) => (
                    <Link to={item.path} className="bc_card" key={index}>
                        <p className="bc_card-date">{item.date}</p>
                        <h3 className="bc_card-heading">{item.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SolidityAdv;