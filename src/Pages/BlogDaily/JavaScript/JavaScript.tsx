
import React from 'react';
import { Link } from 'react-router-dom';
import './JavaScript.css'; // CSS 파일 추가

const cardData = [
    { date: '2/14', title: 'JavaScript 1', path: '/blog/js/0214' },
    { date: '2/17', title: 'JavaScript 2', path: '/blog/js/0217' },
    { date: '2/18', title: '계산기 만들기', path: '/blog/js/0218' },
    { date: '2/19', title: 'JavaScript 3', path: '/blog/js/0219' },
    { date: '2/20', title: 'JavaScript 4', path: '/blog/js/0220' },
    { date: '2/21', title: 'DOM', path: '/blog/js/0221' },
    { date: '2/24', title: 'JavaScript 5', path: '/blog/js/0224' },
];

const JavaScript = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">JavaScript</h2>
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

export default JavaScript;