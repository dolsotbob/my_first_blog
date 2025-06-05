import React from 'react'

const ResearchNotes = () => {
    return (
        <div>
            <h3>기타 노트</h3>
            <h4>알고리즘 공부 방법</h4>
            <p>공부 순서</p>
            <ol><li>1단계. 자료형과 반복, 조건 (자바스크립트 기본 문법 숙달)</li>
                <li>2단계. 배열 & 문자열 다루기</li>
                <li>3단계. 함수와 재귀</li>
                <li>4단계. 완전탐색 + 백트래킹</li>
                <li>5단계. 정렬, 이분탐색</li>
                <li>6단계. 스택, 큐</li>
                <li>7단계. DFS/BFS</li></ol>

            <p>입문자에게 추천 문제 사이트 조합</p>
            <ol><li>1단계: CodeUp 1000번대 (입출력 & 조건문 연습)</li>
                <li>2단계: Programmers 레벨1 (실전형 쉬운 문제)</li>
                <li>3단계: Baekjoon "단계로 풀기" (알고리즘 개념 순서대로 정리)</li>
                <li>4단계: LeetCode Easy (전 세계 사람들이 푸는 실전 알고리즘)</li></ol>

            <p>팁</p>
            <ul><li>너무 어려운 문제는 피하고, “조금 고민하면 풀 수 있는” 문제를 반복하세요</li></ul>


        </div>
    )
}

export default ResearchNotes