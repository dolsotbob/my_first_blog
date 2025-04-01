import React from 'react';

const TIL0306 = () => {
    return (
        <div className='BlogDaily'>TIL0306

            <h3>React 클라이언트 Ajax 요청</h3>
            <h4>State 끌어올리기</h4>
            <ul><li>React는 데이터 흐름이 단반향으로 흐르는데 어떻게 하면 부모의 상태를 변경할까? State 끌어올리기로 해결</li>
                <li>마치 콜백처럼 함수 자체를 props로 전달함</li></ul>

            <ul><li>속성: handleButtonClick</li>
                <li>값: 트윗 목록 추가 함수 addNewTweet</li></ul>
            상위 컴포넌트의 "상태를 변경하는 함수(handler)"를 하위 컴포넌트에 props로 전달하고,
            이 함수를 하위 컴포넌트가 실행함으로써 해결

            <p>
                <a href="https://ko.legacy.reactjs.org/docs/lifting-state-up.html">State 끌어올리기 예제</a>
            </p>

            <h4>Side Effect</h4>
            <ul><li>함수 내에서 어떤 구현이 함수 외부에 영향을 끼치는 경우 해당 함수는 Side Effect가 있다고 함</li>
                <li>Pure Function(순수 함수)란 오직 함수의 입력만이 함수의 결과에 영향을 주는 함수를 의미함</li></ul>

            <ul><li>React의 함수 컴포넌트: props가 입력으로, JSX Element가 출력으로 나감.
                여기에는 그 어떤Side Effect도 없으며 순수 함수로 작동함.</li></ul>
            하지만 보통 React 애플리케이션을 작성할 때에는, AJAX 요청이 필요하거나, LocalStorage 또는 타이머와 같은 React와 상관없는 API를 사용하는 경우가 발생할 수 있습니다. 이는 React의 입장에서는 전부 Side Effect입니다. React는 Side Effect를 다루기 위한 Hook인 Effect Hook을 제공합니다.

            <p>React 컴포넌트에서의 Side Effect</p>
            <ul><li>타이머 사용</li>
                <li>데이터 가져오기</li></ul>


            <h4>Effect Hook</h4>
            <p>useEffect는 함수형 컴포넌트에서 Side Effect를 실행할 수 있게 해주는 Hook</p>
            Hook이란 리액트 useState처럼 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 함수
            <p>useEffect 예시: </p>
            <ul>useEffect(함수, [의존성 배열]);</ul>
            <ol><li>첫 번째 인자(함수)
                <ul><li>Side Effect를 실행하는 함수</li>
                    <li>이 함수는 컴포넌트가 렌더링된 후 실행됨</li>
                    <li>함수 내에서 반환 하는 값은 정리</li>
                    <li>(clean-up) 함수로, 컴포넌트가 언마운트 되거나
                        다음 렌더링 전에 실행됨</li>
                </ul>
            </li>
                <li>두 번째 인자(의존성 배열)
                    <ul><li>이 배열에 포함된 값이 변결될 때만 Effect가 실행됨</li>
                        <li>배열이 비어있으면([]), Effect는
                            컴포넌트가 마운트될 때 한 번만 실행되고,
                            언마운트될 때 정리 함수가 실행됨
                        </li>
                        <li>배열을 생략하면 Effect는 매 렌더링마다 실행됨</li></ul>
                </li></ol>

            <p>useEffect는 언제 실행되나요? (첫 번째 인자(함수)만 있을 경우)</p>
            <ul><li>컴포넌트 생성 후 처음 화면에 렌더링(표시)</li>
                <li>컴포넌트에 새로운 props가 전달되며 렌더링</li>
                <li>컴포넌트에 상태가 바뀌며 렌더링 </li></ul>
            즉 매번 새롭게 컴포넌트가 렌더링 될 때 Effect Hook이 실행됨

            <p>Hook을 쓸 때 주의할 점</p>
            <ul><li>최상위에서만 Hook을 호출한다</li>
                <li>React 함수 내에서 Hook을 호출한다</li></ul>
            <p>참고 자료: <a href="https://ko.legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level">Hook의 규칙 공식 문서</a>
            </p>


            <h4>Effect Hook 조건부 실행</h4>
            조건부 effect 발생 (dependency array)
            <ul>useEffect(함수, [의존성 배열]);</ul>
            <ul><li>useEffect의 두 번째 인자는 배열이고, 이 배열은 조건을 담고 있다</li>
                <li>여기서 조건은 어떤 값의 변경이 일어날 때를 의미함</li>
                <li>따라서 해당 배열엔 어떤 값의 목록이 들어간다. 이 배열을 특별히 종속성 배열이로 부른다</li></ul>

            <p>예시: 명언 찾는 웹사이트 </p>
            세 상태 존재:
            <ul><li>명언 목록(proverbs)</li>
                <li>필터링할 문자열(effect)</li>
                <li>카운트(count)›</li></ul>

            이 예제어서 filter(사용자가 입력하는 문자열) 값이 변경될 때마다
            useEffect 훅이 실행됨. 즉 filter 값이 바뀌면 명언 목록을 해당 filter에 맞게 보여줄 수 있게 됨.

            <p>단 한 번만 실행되는 Effect 함수</p>
            만약 종속성 목록에 아무 종속성도 없다면 어떻게 될까?
            <ol><li>useEffect(함수, []) - 빈 배열 넣기
                <ul><li>컴포넌트가 처음 생성될 때만 effect 함수가 실행될 것.
                    예를 들어 처음 단 한 번, 외부 API를 통해 리소스를 받아오고
                    더 이상 API 호출이 필요하지 않을 때 사용할 수 있음
                </li></ul>
            </li>
                <li>useEffect(함수) - 아무것도 넣지 않기 (기본 형태)
                    <ul><li>useEffect는 컴포넌트가 처음 생성되거나 props가 업데이트 되거나
                        상태가 업데이트 될 때 effect 함수가 실행됨
                    </li></ul>
                </li></ol>

            <h4>컴포넌트 내에서의 Ajax 요청</h4>
            <p>목록 내 필링을 구현하기 위한 두 가 접근은?</p>
            <ol><li>컴포넌트 내에서 필터링
                <ul><li>전체 목록 데이터를 불러오고 목록을 검색어로 필터링</li>
                    <li>예: 처음 단 한 번 외부 API로부터 명언 목록을 받아와 필터 함수 이용</li></ul>
            </li>
                <li>컴포넌트 외부에서 필터링
                    <ul><li>컴포넌트 외부로 API 요청할 때 필터링한 결과를 받아오는 방법 (보통, 서버에 매번 검색어와 함께 요청하는 경우)
                    </li>
                        <li>검색어가 바뀔 때마다 외부 API 호출</li></ul>
                </li></ol>
            <br />

            <p>AJAX 요청이 매우 느릴 경우에는?</p>
            <ul><li>외부 API 접속이 느릴 경우를 고려해 로딩 화면(loading indicator)의 구현은 필수</li></ul>

        </div>
    )
}

export default TIL0306;
