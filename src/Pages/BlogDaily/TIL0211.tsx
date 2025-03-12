import React from 'react'

const TIL0211 = () => {
    return (
        <div className='BlogDaily'>
            <h3>Git</h3>
            <p>2025년 2월 11일</p>
            <h4>깃 워크플로우</h4>
            깃은 파일 상태 관리를 위해 다음 세 가지 영역을 사용:
            <ol>
                <li>Working Directory: 로컬에서 작업중인 파일들이 위치하는 공간. 파일이 수정되면 Git이 추적하지만 아직 저장소에 반영되지 않은 상태</li>
                <li>Staging Area: 커밋하기 위해 준비된 파일들이 임시로 저장된 공간. git add 명령으로 스테이징 영역에 추가</li>
                <li>Repository: Git 이 관리하는 데이터베이스. git commit 명령으로 스테이징 영역의 파일이 저장소에 반영되고 변경 이력이 기록됨.</li>
            </ol>
            파일을 로컬에서 원결으로 깃허브에 올릴 때 쓰는 명령어는?
            <ol>
                <li>git add (파일이름) 혹은 git add . : 마치 노드 멤풀에 트랜잭션이 모여있는 것과 같은 상태</li>
                <ul>파일 상태는 Untracked(Git에서 관리하지 않는 파일) 또는 Modified(수정된 파일)로 표시됨</ul>
                <ul>스테이징 영역에 추가</ul>
                <li>git commit -m '메세지': 동료들이 내 메세지를 보고 어떤 작업을 했는지 파악할 수 있도록 메세지 작명</li>
                <ul>변경사항을 로컬 저장소에 기록</ul>
                <li>git push origin main: 여기서 origin은 이 코드가 원래 있어야 할 곳 (마스터 브랜치, 여기선 원격저장소); main은 브랜치</li>
                <ul>원격 저장소에 업로드</ul>
            </ol>

            <h4>브랜치</h4>
            핵심 개념
            <ul>
                <li>독립적인 작업 공간: 기존 코드에 영향을 주지 않고 새 작업 수행 가능</li>
                <li>경량화된 포인터: Git에서 브랜치는 특정 커밋을 가리키는 포인터(참조); 새로운 커밋이 추가되면 브랜치는 자동으로 해당 커밋을 가리키도록 이동함</li>
                <li>기본 브랜치와 병렬 브랜치: main과 master; feature와 fix</li>
            </ul>

            <p>브랜치끼리 충돌할 때 덮어쓰지 말기</p>
            다음 명령어 쓰기:<br />
            git pull origin main --no-rebase
            <ul>
                <li>rebase: 우리 코드가 먼저다, 덮어 써라는 뜻</li>
                <li>덮어쓰지 않도록 no rebase</li>
            </ul>
            <p>
                브랜치 만들고 그 브랜치로 이동할 때 쓰는 명령어:<br />
                git checkout -b 브랜치 이름
            </p>
            충돌 방지 위해 아래 습관화 하기 (출근 하자 마자 할 것):
            <ul>
                <li>git fetch --all: 모든 원격 저장소 최신호</li>
                <li>git pull origin main: 원격 저장소 origin의 main 브랜ㅇ치 코드 가져옴</li>
            </ul>


        </div>
    )
}

export default TIL0211