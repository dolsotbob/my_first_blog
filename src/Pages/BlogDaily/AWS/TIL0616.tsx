import React from 'react'

const TIL0616 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 16일</p>
            <h3>AWS - Front deploy + Domain + HTTPS</h3>
            <p>학습 목표</p>
            <ul><li>React로 개발한 프론트엔드 앱을 AWS를 이용해 배포 하는 과정 익히기</li>
                <li>S3(정적 파일 저장소)와 CloudFront(글로벌 CDN)를 중심으로 React 앱을 배포하고, ACM(SSL 인증서), Route 53(도메인 관리) 등의 서비스를 연동하여 실제 HTTPS 웹사이트로 운영하는 데 필요한 과정을 실습하기</li></ul>

            <h4>AWS(Amazon Web Services)</h4>
            <ul><li>아마존이 만든 클라우드 컴퓨팅 서비스 플랫폼</li>
                <li>인터넷을 통해 서버, 데이터베이스, 저장소, 네트워크, AI 등 수백 가지 IT 자원을 빌려 쓸 수 있는 공간</li></ul>

            <p>AWS가 제공하는 주요 서비스</p>
            <ul><li>S3 - 정적 파일 저장, 웹사이트 호스팅</li>
                <li>EC2 - 가상 서버 (웹 백엔드 등 실행 가능)</li>
                <li>Lambda - 서버 없이 함수 실행 (서버리스 컴퓨팅)</li>
                <li>CloudFront - 콘텐츠를 빠르게 전송하는 CDN</li>
                <li>Route 53 - 도메인 구입 및 연결</li>
                <li>Amplify - 프론트엔드 앱을 쉽게 배포하고 관리</li>
                <li>RDS - MySQL, PostgreSQL 같은 데이터베이스 관리</li>
                <li>ACM- HTTPS 인증서 발급 및 관리</li></ul>

            <h4>S3 정적 웹 호스팅 설정</h4>
            <p>S3는 왜 배포에 쓰일까?</p>
            <ul><li>React 앱을 npm run build 하면 정적 파일들이 생성된다.</li>
                <li>이 파일들은 서버에서 특별한 로직 없이 그대로 사용자에게 내려주면 되므로, S3와 같은 정적 파일 호스팅 서비스에 매우 적합함</li></ul>

            <p>React 앱을 S3에 배포</p>
            <ol><li>React 앱 빌드</li>
                <li>S3 버킷 생성</li>
                <li>빌드된 파일 업로드</li>
                <li>정적 웹 사이트 설정</li>
                <li>버킷 정책</li>
                <li>배포된 주소로 확인하기</li></ol>

            <p>주의할 점</p>
            <ul><li>보안 정책: 정적 웹 호스팅 시, 퍼블릭 읽기 권한이 필요 (또는 CloudFront + OAC 사용)</li>
                <li>라우팅 문제: SPA의 경우 404 에러 페이지를 index.html로 설정해야 제대로 작동</li>
                <li>HTTPS 미지원: S3 웹 호스팅 URL은 기본적으로 HTTP만 지원 → HTTPS를 원하면 CloudFront를 사용해야 함</li></ul>


            <h4>CloudFront: 속도 향상 + 인증서 연결</h4>
            <p>CloudFront</p>
            <ul><li>빠름 - 캐시화 하기 때문; 즉 많이 쓰이는것은 입구 쪽에 두는 것</li>
                <li>CloudFront는 S3 웹사이트를 빠르고 안전하게 전 세계에 제공하기 위한 AWS의 CDN</li>
                <li>웹 콘텐츠(HTML, JS, CSS, 이미지, 동영상 등)를 전 세계 사용자에게 더 빠르고 안정적으로 전달해주는 역할을 함</li></ul><br />

            <span style={{ fontStyle: 'italic' }}>이번에는 S3로 만든 버킷을 이용하여 사용자와 가까운 위치에서 콘텐츠(HTML, 이미지, JS, 영상 등)를 빠르게 전달해주는 캐시 서버(CDN). CloudFront를 만들어 보자.</span>

            <p>CloudFront 동작 방식</p>
            <ol><li>사용자가 웹사이트에 접속 (yourdomain.com/image.png)</li>
                <li>CloudFront가 요청을 받은 후:
                    <ul><li>캐시에 있으면 → 즉시 응답</li>
                        <li>없으면 → 원본 서버(S3, EC2 등)에서 받아와 캐시에 저장</li></ul>
                </li>
                <li>다음 요청부터는 CloudFront 캐시에서 빠르게 응답</li></ol>



        </div>
    )
}

export default TIL0616