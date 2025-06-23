import React from 'react'

const springMgmt = [
    {
        category: "목표 (What, 무엇을)",
        detail: "이번 Sprint에서 달성하고자 하는 기능/문제 해결",
        example: "사용자가 회원가입을 마칠 수 있도록 전체 흐름 구현"
    },
    {
        category: "목적 (Why, 왜)",
        detail: "이 목표가 왜 중요한지 설명",
        example: "유저 초기 진입 경험 개선"
    },
    {
        category: "세부작업(How)",
        detail: "목표 달성을 위해 수행해야 하는 세부 작업(Task)",
        example: "[  ] Task 1: ex. 화면 와이어프레임 제작, [  ] Task 2: ex. 입력 폼 UI 컴포넌트 개발, ...",
    },
    {
        category: "완료 기준",
        detail: "무엇이 완료된 것으로 간주할지 구체적으로 서술",
        example: "입력값이 올바르지 않으면 오류 메시지 출력"
    },
    {
        category: "다음 Sprint와의 연결",
        detail: "다음 단계에서 어떤 기능 또는 흐름으로 연결되는지 서술",
        example: "로그인 기능과 연동 예정"
    }
]

const TIL0623 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 6월 23일</p>
            <h3>프로젝트 기획</h3>
            <p>Sprint</p>
            <span>Agile 중 Scrum이라는 프레임워크 안에서 정의된, 짧고 반복적인 개발 주기</span>
            <ul><li>"이번에 어떤 핵심 결과물을 낼 것인지"의 실행 단위</li>
                <li>3~4일 단위</li>
                <li>총 3~4번의 Sprint</li></ul>

            <span>Sprint 범위 설정</span>
            <ul><li>목표: 이번 Sprint에서 어떤 기능(문제 해결)을 구현할 것인가?</li>
                <li>구성: 이 기능을 구현하기 위해 필요한 세부 작업은 무엇인가?</li>
                <li>연속성: 이번 Sprint의 결과는 다음 Sprint에 어떻게 이어지는가?</li></ul>

            <p>프로젝트 관리</p>
            <div className="ml-4">
                {springMgmt.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.category}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.detail}</li>
                            <li><strong>예시: </strong> {type.example}</li>
                        </ul>
                    </details>
                ))}
            </div>

        </div>
    )
}

export default TIL0623