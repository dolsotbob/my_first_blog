
import React from 'react';
import { Link } from 'react-router-dom';
import './aws.css'; // CSS 파일 추가

const cardData = [
    { date: '6/16', title: 'AWS - Front deploy + Domain + HTTPS', path: '/blog/aws/0616' },
    { date: '6/17', title: 'AWS - Backend deploy', path: '/blog/aws/0617' },
];

const AWS = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">AWS</h2>
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

export default AWS;

