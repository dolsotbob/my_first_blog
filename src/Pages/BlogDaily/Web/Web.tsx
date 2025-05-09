import React from 'react';
import { Link } from 'react-router-dom';
import './Web.css'; // CSS 파일 추가

const cardData = [
    { date: '2/10', title: '기초 웹 개발 이해하기', path: '/blog/web/0210' },
    { date: '2/11', title: 'Git', path: '/blog/web/0211' },
    { date: '2/12', title: 'HTML', path: '/blog/web/0212' },
    { date: '2/13', title: 'Link 태그와 미디어 쿼리', path: '/blog/web/0213' }
];

const Web = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">웹 개발</h2>
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

export default Web;