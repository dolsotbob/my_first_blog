import React from 'react'

const TIL0213 = () => {
    return (
        <div className='BlogDaily'>
            <h3>HTTL과 CSS는 어떻게 연결하나요?</h3>
            <p>Link 태그 또는 내부 스타일로 연결할 수 있습니다.</p>
            <ol>
                <li>외부 스타일시트 연결: link rel="stylesheet” href=“css/styles.css”</li>
                <li>내부 스타일시트: HTML 파일 안에서 style 태그를 사용</li>
                <li>인라인 스타일: HTML 요소에 직접 스타일 정의</li>
            </ol>

            외부 스타일시트 연결할 때 주의 사항은?
            <ul>
                <li>경로 설정</li>
                <li>파일 확장자는 .css</li>
                <li>스타일시트의 로딩 순서는 순서대로 로드됨
                </li>
            </ul>

            <h4>CSS에서 ID와 Class는 각각 어떻게 쓰일까?</h4>
            <ul><li>ID는 문서 내에서 유일해야 함. 한 요소에만 적용 가능</li></ul>

            <h4>링크 스타일링 할 때 어떤 태그를 쓰나요?</h4>
            <ul><li>a</li></ul>

            <h4>Flexbox와 Grid에서 누구에게 속성을 주나요?</h4>
            <ul><li>부모에게 속성을 주고, 부모가 자식들을 정렬한다.</li></ul>

            <h4>미디어 쿼리란?</h4>
            <ul><li>디바이스의 화면 크기, 해상도, 방향에 따라 다른 스타일을 적용할 수 있도록 도와줌. 이를 사용하면 반응형 웹 디자인(Responsive Web Design)을 구현할 수 있음.
            </li></ul>



        </div>
    )
}

export default TIL0213