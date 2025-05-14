import React from 'react';
import { Link } from 'react-router-dom';
import './React.css'; // CSS 파일 추가

const cardData = [
    { date: '2/25', title: '객체 지향 프로그래밍(OOP)', path: '/blog/react/0225' },
    { date: '2/26', title: '심화 - 비동기', path: '/blog/react/0226' },
    { date: '2/27', title: '심화 - React 기초', path: '/blog/react/0227' },
    { date: '2/28', title: '심화 - React SPA', path: '/blog/react/0228' },
    { date: '3/4', title: '심화 - React State & Props', path: '/blog/react/0304' },
    { date: '3/5', title: 'HTTP/네트워크', path: '/blog/react/0305' },
    { date: '3/6', title: 'React 클라이언트 Ajax 요청', path: '/blog/react/0306' },
];

const ReactPage = () => {
    return (
        <div className="bc_card-container">
            <h2 className="bc_card-title">React</h2>
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

export default ReactPage;