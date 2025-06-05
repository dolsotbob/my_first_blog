import React from 'react';

// 📌 양자 공격 알고리즘 종류
const quantumAlgorithms = {
    shor: '정수 소인수분해 및 이산로그 문제 해결 (공개키 암호 해독 가능)',
    grover: '해시 충돌 및 대칭키 암호 공격을 제곱근 속도로 가속'
};

// 📌 포스트 양자 암호 기술 종류
const postQuantumCryptoTypes = [
    '격자 기반 암호 (Lattice-based)',
    '코드 기반 암호 (Code-based)',
    '다변수 기반 암호 (Multivariate)',
    '해시 기반 서명 (Hash-based Signatures)',
    'Isogeny 기반 암호 (양자 친화형 공개키 교환)'
];

// 📌 PQC 적용 시 고려 사항
interface PQCConsiderations {
    performance: string;
    blockSize: string;
    compatibility: string;
}

const pqcChallenges: PQCConsiderations = {
    performance: '서명 생성 및 검증 속도 느려짐',
    blockSize: '키와 서명 크기로 인해 블록 크기 증가',
    compatibility: '기존 블록체인 프로토콜과의 통합 문제 발생'
};

// 📌 블록체인 적용 예시
const exampleApplications = [
    {
        name: 'Falcon',
        type: '격자 기반 서명',
        status: 'NIST PQC finalist'
    },
    {
        name: 'SPHINCS+',
        type: '해시 기반 서명',
        status: 'PQ-friendly, 블록체인에 적합'
    }
];

const ResearchP0605 = () => {
    return (
        <div className="p-4">
            <h2>📖 논문 요약: Post-Quantum Blockchain</h2>

            <p><strong>원문 링크:</strong> <a href='https://ieeexplore.ieee.org/document/8967098' target='_blank' rel='noopener noreferrer'>
                Towards Post-Quantum Blockchain: A Review on Blockchain Cryptography Resistant to Quantum Computing Attacks (2019)</a></p>

            <h3>⚠️ 양자컴퓨터의 위협</h3>
            <ul>
                <li><strong>Shor 알고리즘:</strong> 정수 소인수분해, 공개키 해독 가능</li>
                <li><strong>Grover 알고리즘:</strong> 해시 충돌 및 대칭키 공격 가속</li>
            </ul>

            <h3>✅ 포스트 양자 암호 기술</h3>
            <ul>
                {postQuantumCryptoTypes.map((type, index) => <li key={index}>{type}</li>)}
            </ul>

            <h3>❗ 적용 시 고려사항</h3>
            <ul>
                <li><strong>성능 저하:</strong> {pqcChallenges.performance}</li>
                <li><strong>블록 크기:</strong> {pqcChallenges.blockSize}</li>
                <li><strong>호환성:</strong> {pqcChallenges.compatibility}</li>
            </ul>

            <h3>🔎 적용 사례</h3>
            <ul>
                {exampleApplications.map((app, index) => (
                    <li key={index}>
                        <strong>{app.name}:</strong> {app.type}, <em>{app.status}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResearchP0605;
