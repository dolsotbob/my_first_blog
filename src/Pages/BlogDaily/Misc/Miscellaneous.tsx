import React from 'react';
import { Link } from 'react-router-dom';
import './Miscellaneous.css'; // CSS 파일 추가

const cardData = [
    { date: '6/24', title: 'Github CI/CD 관련 코드', path: '/blog/misc/0624' },
];

const Miscellaneous = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">기타</h2>
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

export default Miscellaneous;