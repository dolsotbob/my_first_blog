import React from 'react'

const TIL0212 = () => {
    return (
        <div className='BlogDaily'>
            <h3>HTML</h3>
            <p>2025년 2월 12일</p>

            <h4>HTML이란?</h4>
            <p>웹 페이지의 뼈대를 구성하는 마크업 언어.</p>

            <h4>HTML의 특징은?</h4>
            <ul>
                <li>하이퍼텍스트: 문서간 연결</li>
                <li>마크업 언어: 텍스트에 태그를 추가해 구조와 의미 정의</li>
                <li>브라우저가 읽고 해석해 웹페이지로 렌더링</li>
            </ul>

            <h4>HTML의 구성요소는?</h4>
            <ol>
                <li>!DOCTYPE html: 브라우저가 HTML5 규격에 맞게 콘텐츠 해석하도록 지정</li>
                <li>html: HTML 문서의 루트요소로 모든 HTML 태그를 감쌈</li>
                <li>head: 문서의 메타 정보 담음</li>
                <li>body</li>
            </ol>

            <h4>속성(attribute)</h4>
            <p>태그에 추가 정보를 제공해 해당 요소의 동작이나 스타일을 설정하는 데 사용됨. <br />
                속성명="값"의 형식으로 표현됨 </p>
            자주 사용하는 속성명
            <ul>
                <li>id, class</li>
                <li>href</li>
                <li>src</li>
                <li>alt</li>
                <li>style</li>
                <li>title</li>
                <li>input</li>
            </ul>
            <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element">HTML 요소 참고서</a>

            <h4>SEO, 검색 엔진 최적화</h4>
                <p>검색 엔진에서 웹사이트가 더 높은 순위에 노출되도록 최적화하는 작업</p>
                <p>SEO 태그 사용의 중요성</p>
                <ul>
                    <li>검색 엔진에 정보 제공</li>
                    <li>검색 순위 향상</li>
                    <li>사용자 경험 개선</li>
                </ul>

        </div>
    )
}

export default TIL0212