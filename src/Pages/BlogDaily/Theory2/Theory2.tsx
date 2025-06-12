import React from 'react';
import { Link } from 'react-router-dom';
import './Theory2.css';

const cardData = [
    { date: '6/9', title: '블록체인의 확장성', path: '/blog/theory2/0609' },
    { date: '6/10', title: '블록체인 트릴레마', path: '/blog/theory2/0610' },
    { date: '6/11', title: '레이어 2 확장 솔루션', path: '/blog/theory2/0611' },
]

const Theory2 = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">이론</h2>
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

export default Theory2;