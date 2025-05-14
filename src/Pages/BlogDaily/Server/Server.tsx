import React from 'react';
import { Link } from 'react-router-dom';
import './Server.css'; // CSS 파일 추가

const cardData = [
    { date: '5/9', title: 'Server Intro', path: '/blog/server/0509' },
    { date: '5/12', title: 'Express', path: '/blog/server/0512' },
    { date: '5/13', title: '인증/보안', path: '/blog/server/0513' },
    { date: '5/14', title: 'NestJS', path: '/blog/server/0514' },
];

const Server = () => {
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

export default Server;