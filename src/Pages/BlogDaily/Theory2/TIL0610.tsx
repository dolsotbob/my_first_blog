import React from 'react'

const BCSizeLimit = [
    {
        problem: '네트워크 전파 지연',
        detail1: '블록이 커질수록 다른 노드에 전송하는 데 시간이 오래 걸림',
        detail2: '그 사이에 다른 블록이 생성되면 체인 분기(fork) 발생'
    },
    {
        problem: '하드웨어 부담 증가',
        detail1: '노드가 커다란 블록을 검증, 저장, 복사하려면 높은 컴퓨팅 자원 필요',
        detail2: '결과적으로 일반 사용자가 노드 참여하기 어려워짐 -> 탈중앙화 약화'
    }
]

const TIL0610 = () => {
    return (
        <div className='BlogDaily'>
            <h3>확장성의 한계</h3>
            <h4>처리 지연과 가스비 급등 사례</h4>
            <span>동시에 많은 사용자가 트랜잭션을 보내면 → 혼잡 상태가 발생함. 혼잡이 심해지면 다은 두 문제 발생</span>
            <ol><li>트랜잭션 처리 지연</li>
                <li>가스비 급등</li></ol>

            <h4>블록 크기 제한과 노드 동기화 문제</h4>
            <p>블록 크기 제한의 이유</p>
            <div className="ml-4">
                {BCSizeLimit.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.problem}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail1}</li>
                            <li><strong></strong> {type.detail2}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <p>블록 크기 제한과 TPS</p>
            <ul><li>TPS는 블록 크기와 블록 생성 주기에 의해 결정됨</li>
                <li>블록이 작으면 TPS는 낮고, 블록을 키우면 TPS는 오르지만 위의 문제들로 인해 한계 존재</li></ul>

            <p>노드 동기화</p>
            <ul><li>모든 참여 노드가 같은 블록체인 데이터를 갖도록 맞추는 과정</li>
                <li>블록이 생성될 때마다 다 같이 같은 데이터로 업데이트되어야 함</li></ul>

            <p>노드 동기화 문제란?</p>
            <span>블록이 커지고 처리량이 많아질수록,</span>
            <ul><li>새 노드가 전체 블록체인을 동기화하는 데 수 시간~수일 소요</li>
                <li>실시간 블록 반영이 지연</li>
                <li>일부 노드는 최신 상태에 도달하지 못해 서비스에서 제외되기도 함</li></ul>
            <span>결과적으로,</span>
            <ul><li>전체 네트워크의 일관성(consistency) 저하</li>
                <li>특정 노드가 오래된 블록에서 포크를 생성할 위험 증가</li>
                <li>동기화가 느리면 블록체인의 신뢰성과 보안성도 위협</li></ul>

            <p>실제 사례: 비트코인의 블록 크기 논쟁</p>
            <ul><li>Bitcoin Cash 등장의 배경</li></ul>


            <h4>레이어 1 기반 확장성의 구조적 한계</h4>
            <ul><li>레이어 1은 보안과 탈중앙화를 유지해야 하므로 무작정 성능(TPS)을 올릴 수 없는 구조적인 제약이 있다.</li></ul>

            <p>레이어 1 확장의 구조적 한계를 넘어서기 위해 등장한 기술</p>
            <ul><li>레이어2 - 별도의 외부 처리 계층 (ex. 롤업, 채널)</li>
                <li>샤딩 - 체인을 분할하여 병렬 처리 가능하게 함</li>
                <li>모듈형 블록체인 - 데이터/합의/실행을 나누어 처리량 극대화</li></ul>

        </div>
    )
}

export default TIL0610