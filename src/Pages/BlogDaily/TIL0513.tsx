import React from 'react'




const TIL0513 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 13일</p>
            <h3>[인증/보안] Cookie & Session & JWT</h3>

            <h4>우리는 왜 인증이 필요한가?</h4>
            <ul><li>인터넷은 요청을 보낼 때마다 기억을 잃은 상태로 시작한다.</li>
                <li><a href='https://ko.wikipedia.org/wiki/%EB%AC%B4%EC%83%81%ED%83%9C_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C'>stateless protocol</a></li>
                <li>그래서 매번 요청마다 "내가 누구인지" 알려줄 수 있는 장치, 즉 '인증(Authentication)'이 반드시 필요하다</li>
            </ul>

            <p>인가(Authorization)</p>
            <ul><li>인가는 관리자만 가능한 기능을 어떻게 제한하기 위하여 구현된다.</li>
                <li>인증은 신분 확인, 인가는 권한 확인</li></ul>

            <p>서버가 기억력이 없다는건 무슨 뜻인가?</p>
            <ul><li>서버는 요청이 끝나면 이전 요청을 잊어버린다.</li>
                <li>즉, 상태를 저장하지 않는다. (stateless) </li></ul>

            <p>그렇다면 로그인 정보를 어떻게 유지할까?</p>
            <ul><li>세션과 쿠키: "로그인 상태"를 기억하게 만들어주는 장치</li></ul>

            <p>JWT: 로그인 상태를 저장하는 또 다른 방식</p>
            <ul><li>JWT(JSON Web Token) 이란?
                <ul><li>사용자의 인증 정보를 포함하는 토큰 기반 인증 방식</li>
                    <li>서버에 상태를 저장하지 않음(Stateless)</li></ul>
            </li>
                <li>JWT는 왜 사용될까?
                    <ul><li>세션을 서버에 저장하지 않아도 됨 → 확장성 ↑</li>
                        <li>클라이언트에 모든 정보 포함 → 서버 부담 ↓</li>
                        <li>다양한 서비스(API, 모바일 등)에서 일관된 인증 가능
                        </li></ul>
                </li>
                <li>JWT 구조
                    <ul><li>헤더(Header).페이로드(Payload).서명(Signature)</li>
                        <li>Header: 알고리즘, 토큰 타입</li>
                        <li>Payload: 사용자 정보 (예: userId)</li>
                        <li>Signature: 위조 방지용 서명</li>
                    </ul>
                </li>
                <li>예시 흐름
                    <ol><li>로그인 시 서버가 JWT 생성해 클라이언트에 전달</li>
                        <li>클라이언트가 JWT를 저장 (예: localStorage, cookie)</li>
                        <li>이후 요청마다 <span style={{ color: 'red', fontWeight: 'bold' }}>Authorization: Bearer 토큰 </span>헤더에 포함해 전송</li>
                        <li>서버는 토큰 유효성만 검증하고 사용자 인증 완료</li></ol>
                </li>
            </ul>

            <h4>쿠키(Cookie)</h4>
            <ul><li>서버가 여러분의 브라우저에게 “이거 기억해줘” 하고 보내는 정보</li>
                <li>쿠키는 클라이언트(브라우저)가 저장하는 정보입니다</li></ul>

            <p>왜 쿠키가 필요할까?</p>
            <ul><li>웹은 Statelss(기억을 하지 않는) 구조이기 때문</li>
                <li>놀이동산 입장 팔찌와 비슷함</li></ul>

            <p>쿠키의 구조 예시</p>
            <pre><code>{`Set-Cookie: sessionId=abcd1234; Path=/; Max-Age=3600; HttpOnly`}</code></pre>
            <ul><li>sessionId=abcd1234: 저장할 실제 데이터</li>
                <li>Path: 어느 경로에서 유효한지</li>
                <li>Max-Age: 쿠키 유효 시간 (초 단위)</li>
                <li>HttpOnly: JS에서 접근할 수 없도록 설정 (보안용)</li></ul >

            <p>쿠키가 사용되는 대표적인 예</p>
            <ul><li>로그인 상태 유지</li>
                <li>장바구니 임시 저장</li>
                <li>최근 본 상품 정보</li>
                <li>다크모드 / 언어 설정 기억</li>
            </ul >

            <p>보안 팁</p>
            <ul><li>민감한 정보(비밀번호 등)는 절대 쿠키에 직접 저장 금지</li>
                <li>HttpOnly 설정으로 JavaScript 접근 방지</li>
                <li>Secure 설정으로 HTTPS에서만 전송</li>
            </ul>

        </div >
    )
}

export default TIL0513