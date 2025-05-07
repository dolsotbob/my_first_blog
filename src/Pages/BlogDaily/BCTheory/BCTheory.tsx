import React from 'react';
import { Link } from 'react-router-dom';

const BCTheory = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Blockchain Theory TIL</h2>
            <ul className="list-disc ml-4 space-y-2">
                <li>
                    <Link to="/blog/theory/0205" className="text-blue-600 hover:underline">
                        2025년 2월 5일 - 스마트 컨트랙트 개요
                    </Link>
                </li>
                <li>
                    <Link to="/blog/theory/0206" className="text-blue-600 hover:underline">
                        2025년 2월 6일 - EVM 및 가스
                    </Link>
                </li>
                {/* 추가 TIL 항목도 여기에 추가 */}
            </ul>
        </div>
    );
};

export default BCTheory;
