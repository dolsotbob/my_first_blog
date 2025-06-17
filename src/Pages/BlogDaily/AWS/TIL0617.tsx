import React from 'react'

const TIL0617 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 17일</p>
            <h3>AWS - Backend deploy</h3>
            <ul><li>학습 목표: 백엔드 시스템을 배포하여 API 서버와 데이터베이스 서버가 분리된 구조를 직접 만들어 보기</li>
                <li>사용자 브라우저 - HTTP 요청 &rarr; EC2 인스턴스 NestJS 서버 - DB 연결 &rarr; RDS 인스턴스 PostgreSQL DB</li></ul>

            <h4>EC2 생성</h4>
            <p>EC2</p>
            <ul><li>EC2(Elastic Compute Cloud): AWS에서 제공하는 클라우드 기반 가상 서버 서비스</li>
                <li>주로 백엔드 서버 배포 시에 많이 사용됨</li></ul>

            <p>네트워크 설정</p>
            <span>보안 규칙을 설정해야 한다. 보안 규칙은 인바운드 , 아웃바운드를 설정하는 것이다.</span>
            <ul><li>인바운드: 외부 ip &rarr; EC2 로 향하는 요청 제어</li>
                <li>아웃바운드: EC2 &rarr; 외부 ip로 향하는 응답 제어</li></ul>
            <span>보안 규칙을 설정하여 게이트를 열어줘야 네트워크 트래픽이 가능하다.</span>

            <h4>RDS(Relational Database Service)</h4>
            <ul><li>AWS에서 제공하는 클라우드 기반 관계형 데이터베이스 관리 서비스</li>
                <li>사용자가 직접 데이터베이스 서버를 설치하고 관리하지 않아도, AWS가 대신 설치, 운영, 백업, 확장 등을 자동으로 처리해주는 서비스</li></ul>

            <p>지원하는 데이터베이스 종류</p>
            <span>RDS는 여러 오픈소스 및 상용 관계형 DB를 지원합니다:</span>
            <ul><li>PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, Amazon Aurora (MySQL/PostgreSQL 호환)</li></ul>

            <p>파라미터 그룹</p>
            <ul><li>파라미터 그룹: RDS 인스턴스의 데이터베이스 엔진 설정값들을 모아 놓은 "설정 탬플릿"</li>
                <li>즉, MySQL, PostgreSQL 등에서의 my.cnf, postgresql.conf와 같은 역할을 함</li></ul>

            <h4>EC2 연결 + 개발 환경 구성</h4>
            <p>EC2 연결</p>
            <p>EC2 개발환경 구성</p>
            <p>EC2 서버 실행</p>

            <h4>Nginx로 프록시 서버 만들기</h4>
            <p>Nginx</p>
            <ul><li>Nginx(Engine-X)는 고성능 웹 서버이자, 리버스 프록시 서버, 로드 밸런서, 캐시 서버로도 사용되는 오픈소스 소프트웨어이다.</li>
                <li>처음엔 정적 파일 제공용 웹 서버로 출발했지만, 지금은 현대적인 웹 애플리케이션 아키텍처의 중심 역할을 한다.</li>
                <li>역할:
                    <ul><li>웹 서버 - HTML, CSS, 이미지 같은 정적 파일을 클라이언트에게 전달</li>
                        <li>리버스 프록시 - 클라이언트의 요청을 백엔드 서버(예: NestJS, Node.js, Django 등)에 대신 전달</li>
                        <li>로드 밸런서 - 여러 서버로 요청을 분산시켜 부하 분산</li>
                        <li>캐시 서버 - 응답 결과를 저장해서 동일 요청이 들어왔을 때 빠르게 제공</li>
                        <li>HTTPS 처리기 - SSL 인증서를 적용해 HTTPS 통신 가능하게 함</li></ul>
                </li>
            </ul>
            <span style={{ fontStyle: 'italic' }}>우리가 HTTP에 대해 배우면서 웹 서버 는 클라이언트의 요청에 따라 응답하는 서버를 뜻하며, 대표적으로 Nginx, Apache 등을 말했었습니다.</span>



        </div>
    )
}

export default TIL0617