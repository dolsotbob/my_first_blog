import React from 'react';
import { Link } from "react-router-dom";
import "./TILmain.css";
import blockchain from '../../assets/blockchain.png'

const topics = [
    { path: "/blog/theory", label: "Blockchain Theory" },
    { path: "/blog/web", label: "Web" },
    { path: "/blog/js", label: "JavaScript" },
    { path: "/blog/react", label: "React" },
    { path: "/blog/tool", label: "개발도구" },
    { path: "/blog/solidity", label: "Solidity" },
    { path: "/blog/solidityadv", label: "Solidity 심화" },
    { path: "/blog/server", label: "서버" },
    { path: "/blog/db", label: "DB" },
    { path: "/blog/security", label: "보안" },
    { path: "/blog/theory2", label: "이론" }
];

const TILmain = () => {
    return (
        <div className="til-container">
            {topics.map((topic) => (
                <div className="til-card" key={topic.path}>
                    <Link to={topic.path}>{topic.label}</Link>
                </div>
            ))}
        </div>
    )
}

export default TILmain

