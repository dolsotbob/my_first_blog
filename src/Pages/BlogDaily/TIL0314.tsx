import React from 'react'
import hdwalletimg4 from '../../assets/hdwallet.png'

const TIL0314 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 3월 14일</p>
            <h3>DApp - 지갑 1</h3>
            <h4>블록체인 지갑이란?</h4>
            <p>개인 키와 공개 키를 관리하는 소프트웨어 혹은 하드웨어
                <ul><li>공개 키: 블록체인 네트워크에서 지갑 주소 생성하는 데 사용</li>
                    <li>개인 키: 암호화폐에 대한 소유권을 증명하는 비밀 키</li>
                    <li>지갑 주소: 공개 키 기반으로 생성된 사용자 계쩡 주소</li></ul>
            </p>

            <h4>핫 월렛과 콜드 월렛</h4>
            <p>핫 월렛 종류:
                <ul><li>웹 월렛:
                    <ul><li>인터넷 브라우저 통해 접속; 확장 프로그램이나 웹사이트 형태로 제공됨; 보안에 가장 취약하나 즉시 거래 가능</li>
                        <li>예: 이더리움 프러그인인 메타마스크, 카이아의 카이아 월렛</li></ul></li>
                    <li>데스크톱/PC 월렛:
                        <ul><li>윈도우, 맥, 리눅스 같은 OS에 다운로드하여 작동할 수 있는 애플리케이션</li></ul>
                    </li>
                    <li>모바일 월렛:
                        <ul><li>데스크톱 & 웹 지갑의 모바일 형태</li>
                            <li>예: 클립Klip</li></ul></li>
                </ul>
            </p>

            <p>콜드 월렛:
                <ul><li>개인 키를 오프라인으로 보관하는 지갑을 의미함; 오프라인 월렛 </li>
                    <li>장점: 온라인 해킹으로부터 안전</li>
                    <li>단점: 물리적인 손실이나 복구 과정에서의 보안 문제 발생 가능; 실시간 거래 불가능</li>
                    <li>대표적으로 페이퍼 월렛, 하드웨어 월렛 </li>
                </ul>
            </p>

            <h4>비결정적 월렛 & 결정적 월렛</h4>
            <p>비결정적 월렛:
                <ul><li>각 키가 독립적으로 생성되며 시드/seed 없이 비밀키를 무작위로 생성하는 방식</li>
                    <li>동일한 개인키를 다시 생성할 수 없어 주소를 재사용하지 않는 것이 일반적; 개별 키를 모두 백업해야 함</li>
                    <li>블록체인상에서는 암호화폐 주소를 재사용하지 않는 것이 권장되기 때문에 트랜잭션을 생성할 때마다 새로운 비대칭키를 생성해 지갑에 저장해야 함
                        <ul><li>생길 수 있는 문제: 실수로 지갑 데이터를 분실한다면 해당 비밀키를 통해 생성된 주소에 들어있던 코인과 해당 주소로 생성한 스마트 컨트랙트에 접근하지 못하게 됨</li></ul></li>
                </ul>
            </p>

            <p>결정적/시드 월렛:
                <ul><li>비결정 월렛의 불편함을 해결하기 위해 등장함; Deterministic Wallet</li>
                    <li>하나의 시드에서 모든 비밀키를 파생하며, 각 비밀키는 시드와 특정 인덱스의 조합으로 결정됨</li>
                    <li>백업과 복구가 용이함: 시드만 알고 있다면 같은 키를 다시 생성할 수 있다</li>
                    <li>모든 비밀키는 "미리 결정된 값"을 가짐; 하나의 시드만 관리하면 전체 지갑 복구 가능</li>
                    <li>대표적 예시: HD 월렛 </li>
                </ul>
            </p>

            <h4>HD 월렛의 특징</h4>
            <ol><li>결정적/Deterministic 특성</li>
                <li>계층적/Hierarchical 구조</li>
                <li>유도 가능한 키 체계
                    <ul><li>BIP-44에서는 표준화된 경로/Path를 정의하여 특정 코인과 계정에 맞는 키를 생성할 수 있음</li></ul></li>
            </ol>

            <h4>HD 월렛 계정 생성 중요 개념</h4>
            <p>HD Wallet은 계층적 경로를 사용하여 키를 생성하고 관리할 수 있도록 설계됨
                <ul><li>인덱스: 계층적 트리 구조의 root부터 현재 노드까지의 경로</li>
                    <li>시드:
                        <ul><li>암호학적으로 안전한 무작위 숫자에서 니모닉 연상 단어/Mnemonic Code Words를 생성한 후 이를 바탕으로 HD 지갑의 시드 생성</li>
                            <li>지갑의 루트키 역할</li></ul>
                    </li>
                    <li>경로/path</li>
                    <li>구조</li>
                </ul>
                <img className='hdwalletimg4' src={hdwalletimg4} alt='hdwallet-tree-img'></img>
            </p>

            <h4>BIP-32, BIP-44</h4>
            <p>HD 월렛은 <a href='https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki'>BIP-32</a>에서 제안되고, <a href='https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki'>BIP-44</a>에서 개선된 비트코인 표준이다.
            </p>

            <h4>니모닉</h4>
            <p>난수를 12개 또는 24개의 영어 단어로 변환한 시드 복구 방법</p>


        </div>
    )
}

export default TIL0314