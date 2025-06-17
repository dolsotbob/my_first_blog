import React from 'react'

const TIL0617 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 17일</p>
            <h3>AWS - Backend deploy</h3>
            <ul><li>학습 목표: 백엔드 시스템을 배포하여 API 서버와 데이터베이스 서버가 분리된 구조를 직접 만들어 보기</li>
                <li>사용자 브라우저 - HTTP 요청 &rarr; EC2 인스턴스 NestJS 서버 - DB 연결 &rarr; RDS 인스턴스 PostgreSQL DB</li></ul>

        </div>
    )
}

export default TIL0617