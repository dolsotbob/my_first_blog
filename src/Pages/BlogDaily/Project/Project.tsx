import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'; // CSS 파일 추가

const cardData = [
    { date: '6/20', title: '프로젝트 시작', path: '/blog/project/0620' },
];

const Project = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">프로젝트</h2>
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

export default Project;