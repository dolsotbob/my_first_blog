import React from 'react';
import { Link } from 'react-router-dom';
import './Security.css'; // CSS 파일 추가

const cardData = [
    { date: '6/2', title: '스마트 컨트랙트 보안', path: '/blog/security/0602' },
    { date: '6/4', title: 'Audit & 사용자 보호', path: '/blog/security/0604' },
    { date: '6/5', title: '향후 보안 이슈와 대응', path: '/blog/security/0605' },
];

const Security = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">보안</h2>
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

export default Security;