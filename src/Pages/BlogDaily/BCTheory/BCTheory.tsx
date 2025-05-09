// BCTheory.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BCTheory.css'; // CSS 파일 추가

const cardData = [
    { date: '2/3', title: '비트코인의 탄생과 배경', path: '/blog/theory/0203' },
    { date: '2/4', title: '해시와 디지털 서명', path: '/blog/theory/0204' },
    { date: '2/5', title: '스마트 컨트랙트 개요', path: '/blog/theory/0205' },
    { date: '2/6', title: 'EVM 및 가스', path: '/blog/theory/0206' },
    { date: '2/7', title: '이더리움', path: '/blog/theory/0207' },
];

const BCTheory = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">Blockchain Theory TIL</h2>
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

export default BCTheory;