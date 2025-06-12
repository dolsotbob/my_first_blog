import React from 'react'

const rollupData = [
    {
        type: 'Optimistic Rollup',
        advantages: [
            '빠르고 효율적',
            '복잡한 연산 처리 가능 (EVM 호환성 높음)',
        ],
        disadvantages: [
            '확정에 시간이 오래 걸림 (7일 지연 등)',
            '악의적 트랜잭션이 일시적으로 반영될 수 있음',
        ],
        examples: [
            { name: 'Optimism', url: 'https://optimism.io' },
            { name: 'Arbitrum', url: 'https://arbitrum.io' },
        ],
    },
    {
        type: 'ZK Rollup',
        advantages: [
            '확정(Finality) 빠름 (수 분 내)',
            '데이터 조작 어려움 → 높은 보안성',
        ],
        disadvantages: [
            '복잡한 연산 처리 어려움 (EVM 완전 호환 어려움)',
            '생성 비용이 높음 (ZK proof 생성 비용)',
        ],
        examples: [
            { name: 'zkSync', url: 'https://zksync.io' },
            { name: 'StarkNet', url: 'https://www.starknet.io' },
        ],
    },
];


const TIL0611 = () => {
    return (
        <div className='BlogDaily'>
            <h3>레이어 2 확장 솔루션</h3>

            <h4>레이어 2란? </h4>
            <ul><li>기본 체인(Layer 1) 바깥에서 작동하면서, 트랜잭션을 더 빠르고 효율적으로 처리하기 위한 보조 처리 계층</li>
                <li>즉, 블록체인의 교통 체증을 줄이는 우회도로 같은 역할을 함
                    <ul><li>기본 체인(예: 이더리움)은 그대로 두고</li>
                        <li>부가적인 네트워크나 프로토콜이 일부 기능을 대신 처리한 후</li>
                        <li>필요한 정보만 요약해서 Layer 1에 기록</li></ul>
                </li></ul>

            <p>레이어 2가 해결하는 방식</p>
            <ul><li>트랜잭션을 Layer 2에서 빠르게 처리</li>
                <li>이후 요약본(혹은 증명 정보)만 Layer 1에 기록</li>
                <li>결과적으로,
                    <ul><li>TPS 대폭 증가</li>
                        <li>수수료 절감</li>
                        <li>보안은 여전히 Layer 1이 보장</li></ul>
                </li></ul>

            <h4>대표적인 Layer 2: 롤업</h4>
            <span>여러 트랜잭션을 하나로 묶어(Roll-up) 처리하고, 요약된 데이터만 Layer 1에 기록하는 방식</span><br />
            <span>롤업의 두 가지 종류</span>
            <ul><li>Optimistic Rollup
                <ul><li>특징: “정상이라고 가정하고 기록, 이상하면 나중에 증명”</li>
                    <li>일정 시간 동안 문제 제기(Challenge) 가능</li>
                </ul>
            </li>
                <li>ZK Rollup
                    <ul><li>특징: “처음부터 계산 결과의 증명(영지식 증명)을 함께 기록”</li>
                    </ul>
                </li>
            </ul>

            <p>Optimistic과 ZK 롤업 비교</p>
            <table className="table-auto border border-gray-400 w-full text-left mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 w-1/5">Rollup 종류</th>
                        <th className="border px-4 py-2 w-1/5">항목</th>
                        <th className="border px-4 py-2">내용</th>
                    </tr>
                </thead>
                <tbody>
                    {rollupData.map((rollup, idx) => (
                        <React.Fragment key={`rollup-${idx}`}>
                            <tr>
                                <td className="border px-4 py-2 font-semibold" rowSpan={3}>
                                    {rollup.type}
                                </td>
                                <td className="border px-4 py-2 font-medium">장점</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.advantages.map((adv, i) => (
                                            <li key={`adv-${idx}-${i}`}>{adv}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">단점</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.disadvantages.map((disadv, i) => (
                                            <li key={`disadv-${idx}-${i}`}>{disadv}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-medium">예시</td>
                                <td className="border px-4 py-2">
                                    <ul className="list-disc list-inside">
                                        {rollup.examples.map((ex, i) => (
                                            <li key={`ex-${idx}-${i}`}>
                                                <a
                                                    href={ex.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {ex.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <h4>대표적인 Layer 2: 플라즈마</h4>

            <h4>대표적인 Layer 2: 채널</h4>

            <h4>대표적인 Layer 2: Validium</h4>

        </div>
    )
}

export default TIL0611