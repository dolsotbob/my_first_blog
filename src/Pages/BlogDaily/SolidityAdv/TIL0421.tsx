import React from 'react'

const TIL0421 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 21일</p>
            <h3>Test-Driven Contract Development</h3>
            <ul><li>TDD는 테스트를 먼저 작성한 후 코드 구현을 진행하는 소프트웨어 개발 방법론</li>
                <li>실패하는 테스트를 먼저 작성한 후, 해당 테스트를 통과하는 최소한의 코드만 작성하는 방식으로 개발이 진행됨</li>
                <li>스마트 컨트랙트는 한 번 배포되면 수정이 어렵고, 잘못된 코드가 치명적인 경제적 손실을 초래할 수 있어서 메인넷 배포 전에 철저한 테스트가 필수적임</li></ul>

            <p>일반적인 스마트 컨트랙트 배갈 흐름</p>
            <ul><li>기능 설계 &rarr; 코드 작성 &rarr; 테스트 코드 작성 &rarr; 테스트 실행 &rarr; 수정/최적화 &rarr; 배포</li></ul>

            <h4>스마트 컨트랙트 개발 프로세스 예시</h4>
            <ol><li>핵심 기능 정의
                <ul><li>스마트 컨트랙트에서 구현할 주요 기능 정의</li>
                    <li>예: transfer(), mint(), approve(), stake(), withdraw() 등
                    </li></ul>
            </li>
                <li>테스트 케이스 설계
                    <ul><li>각 기능별로 예상되는 입력값과 반환값을 미리 정의한다</li>
                        <li>예: transfer()가 정상적으로 작동하는지, stake()가 올바르게 보상 계산을 수행하는지</li></ul>
                </li>
                <li>기능 구현 & 테스트 코드 동시 작성
                    <ul><li>기능을 구현하면서 바로 테스트 코드 작성</li>
                        <li>제일 먼저 Getter, Setter 테스트로 시작 &rarr; 로직 테스트 &rarr; 전체 테스트</li>
                        <li>예: Hardhat, Foundry, Chai 등을 활용하에 테스트 코드 추가</li></ul>
                </li>
                <li>테스트 실행 & 디버깅
                    <ul><li>기능이 의도대로 동작하는지 확인하고, 테스트를 통과하지 못한 부분 수정</li>
                        <li>전체 테스트 하며 크리티컬한 오류가 날 수 있다 <span style={{ color: 'deeppink' }}>&rarr; 문서 만들기: </span> 내가 이러한 컨트랙트를 이러한 스토리로 만들었는데 여기서 이러한 오류가 났고 나는 이렇게 해결했다 &rarr; 문서를 동료들과 공유</li></ul>
                </li>
                <li>테스트 자동화 & 시뮬레이션
                    <ul><li>가스 비용, 보안 취약점 등을 시뮬레이션하여 추가 검증 수행</li>
                        <li>로컬에서는 가스비 잘 안 잡힘</li>
                        <li><span style={{ color: 'deeppink' }}>가스비나 공통함수의 경우 나만의 테스트 만들어두기 (많은 스타트업의 경우 없는 경우가 많음)</span></li></ul>
                </li>
            </ol>

            <h4>Chai</h4>
            <ul><li>JavaScript에서 테스트(assertion)를 쉽게 작성할 수 있도로고 도와주는 라이브러리</li>
                <li>Mocha, Hardhat 같은 프레임워크와 함께 사용됨</li></ul>

            <p>Chai가 지원하는 Assertion(검증 방식 or Test) 스타일</p>
            <ul><li>Expect: 자연어 문장처럼 테스트 가능; 스마트 컨트랙트에서 가장 많이 사용됨
                <ul><li>expect(value).to.equal(42);</li></ul>
            </li>
                <li>Should: 객체 기반 테스트
                    <ul><li>value.should.equal(42);</li></ul>
                </li>
                <li>Assert: 전통적인 TDD 스타일
                    <ul><li>assert.equal(value, 42);</li></ul>
                </li></ul>

            <h4>Hardhat을 활용한 테스트</h4>
            <ul><li>빠르게 테스트 및 디버깅 가능</li>
                <li>가상 계정(Signers) 제공 &rarr; 계쩡과 자금을 즉시 사용</li>
                <li>자동 롤백 기능 &rarr; 테스트 후 상태가 초기화</li></ul>

        </div>
    )
}

export default TIL0421