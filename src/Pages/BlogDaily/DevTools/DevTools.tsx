
import React from 'react';
import { Link } from 'react-router-dom';
import './DevTools.css'; // CSS 파일 추가

const cardData = [
    { date: '3/7', title: '파이썬/타입스크립트', path: '/blog/tool/0307' },
    { date: '3/12', title: '다양한 개발 도구 1 - Ganache, Infura, Web3.js', path: '/blog/tool/0312' },
    { date: '3/13', title: 'DApp', path: '/blog/tool/0313' },
    { date: '3/14', title: 'DApp - 지갑', path: '/blog/tool/0314' },
    { date: '3/18', title: 'Explorer 만들기', path: '/blog/tool/0318' },
    { date: '3/21', title: '다양한 개발 도구 2 - Truffle과 Hardhat', path: '/blog/tool/0321' },
];

const DevTools = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">개발도구</h2>
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

export default DevTools;