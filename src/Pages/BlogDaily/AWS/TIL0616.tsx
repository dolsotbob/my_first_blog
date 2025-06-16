import React from 'react'

const awsUsingNorthVirginia = [
    {
        category: 'AWS Certificate Manager (ACM) for CloudFront',
        reason: 'CloudFront는 전역 서비스인데, 인증서는 us-east-1에만 등록해야 사용 가능'
    },
    {
        category: 'CloudFront 오리진에 연결할 ACM 인증서',
        reason: '위와 동일한 이유'
    },
    {
        category: 'Lambda@Edge',
        reason: 'Lambda@Edge 함수는 us-east-1에 배포해야 사용 가능'
    },
    {
        category: 'AWS Chatbot / Support Plans 일부 설정',
        reason: '일부 설정이 전역이므로 us-east-1에서만 가능'
    },
    {
        category: 'Service Catalog, Control Tower 초기 설정',
        reason: '계정 전역 관리 설정이 us-east-1에 종속됨'
    },
    {
        category: 'Billing/Cost Explorer, Organization 설정',
        reason: '전역 서비스로, us-east-1 콘솔에서 접근해야 정확히 동작'
    },
    {
        category: 'S3 Object Lambda, S3 access point alias (일부 기능)	',
        reason: 'us-east-1부터 점진적 제공. 다른 리전은 지원 안될 수 있음'
    }
]

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


            <h4>Route 53 + ACM: 도메인 등록 + HTTPS 인증서</h4>

            <p>AWS Route 53</p>
            <ul><li>AWS의 도메인 등록 + DNS 관리 서비스</li>
                <li>도메인을 구입하거나, 기존 도메인을 연결하여 DNS 레코드(A, CNAME, MX 등)를 설정 가능</li></ul>

            <p>도메인 구매하기</p>
            <ul><li><a href='https://www.gabia.com/'>Gabia</a></li>
                <li>루트 53 보다 비용이 더 쌈 (1년 500원 정도? 쌤 추천) </li>
                <li>루트 53는 임대 만료 다 되갈 때 알람을 주고 더 잘 챙겨줌</li>
                <li><a href='https://velog.io/@cyseok123/AWS-%EC%84%9C%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-4-%EB%8F%84%EB%A9%94%EC%9D%B8-%EA%B5%AC%EB%A7%A4-%ED%9B%84-%EC%A0%81%EC%9A%A9'>가비아 도메인 구매 관련 블로그 포스트</a></li></ul>

            <p>도메인 등록하기</p>
            <ul><li>도메인을 구입하면 끝이 아니라, 해당 도메인을 등록(호스팅)해야 사용할 수 있음</li>
                <li><a href='https://velog.io/@ssssujini99/Web-AWS-Route53%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0'>Route 53 호스팅 관련 블로그 포스트</a></li></ul>

            <h4>ACM(AWS Certificate Manager)</h4>
            <ul><li>웹사이트나 애플리케이션에서 사용할 SSL/TLS 인증서를 쉽게 발급, 관리, 갱신할 수 있도록 해주는 서비스</li>
                <li>즉, HTTPS 보안 연결을 위한 인증서를 무료로 제공하고, 자동 갱신까지 해주는 서비스</li></ul>

            <p>ACM 등록하기 전 확인해야 하는 필수 사항</p>
            <span>AWS에서는 일부 서비스나 기능이 특정 리전, 특히 미국 버지니아 북부(us-east-1)에만 제공되거나 해당 리전에서만 전역 설정이 가능한 경우가 있음.</span><br />
            <span>미국 버지니아 북부(us-east-1)를 꼭 써야 하는 대표적인 서비스/기능:</span>
            <div className="ml-4">
                {awsUsingNorthVirginia.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>이유:</strong> {type.reason}</li>
                        </ul>
                    </details>
                ))}
            </div><br />

            <span style={{ fontStyle: 'italic' }}>ACM을 등록하기 전에 꼭 리전을 변경해야 합니다.</span>

            <p>ACM 등록</p>
            <ul><li><a href='https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/import-certificate.html'>공식문서</a></li>
                <li><a href='https://anggeum.tistory.com/entry/AWS-ACM-%EA%B3%BC-Route53%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%82%AC%EC%84%A4-%EB%8F%84%EB%A9%94%EC%9D%B8-HTTPSSSL-%EB%93%B1%EB%A1%9D-%EB%B0%A9%EB%B2%95-2-ACM%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-SSL-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%93%B1%EB%A1%9D-HTTPS'>관련 블로그</a></li></ul>

        </div>
    )
}

export default TIL0616