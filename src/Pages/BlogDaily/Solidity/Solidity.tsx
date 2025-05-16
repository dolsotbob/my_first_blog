import React from 'react';
import { Link } from 'react-router-dom';
import './Solidity.css'; // CSS 파일 추가

const cardData = [
    { date: '3/24', title: 'Solidity 기본문법 1 - 원시 타입', path: '/blog/solidity/0324' },
    { date: '3/25', title: 'Solidity 기본문법 2 - 참조 타입', path: '/blog/solidity/0325' },
    { date: '3/26', title: 'Solidity 기본문법 3 - 변수와 함수', path: '/blog/solidity/0326' },
    { date: '3/27', title: 'Solidity 기본문법 4 - 주요 전역 변수와 전역 함수', path: '/blog/solidity/0327' },
    { date: '3/28', title: 'Solidity 기본문법 5 - 데이터 타입 심화', path: '/blog/solidity/0328' },
    { date: '3/31', title: 'Solidity 실습 1 - Getter & Setter', path: '/blog/solidity/0331' },
    { date: '4/1', title: 'Solidity 실습 2 - 구조체의 Getter & Setter', path: '/blog/solidity/0401' },
    { date: '4/2', title: 'Solidity 실습 3 - 테스트의 중요성', path: '/blog/solidity/0402' },
    { date: '4/3', title: 'Solidity 실습 4 - Vault & Bank 컨트랙트', path: '/blog/solidity/0403' },
    { date: '4/4', title: 'Solidity 실습 5 - Interface, Library, Abstract Contract', path: '/blog/solidity/0404' },
];

const Solidity = () => {
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

export default Solidity;