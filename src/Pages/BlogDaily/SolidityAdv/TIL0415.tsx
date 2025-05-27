import { platform } from 'os'
import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0415UploadHanler } from './CodeExamSolAdv'
import { TIL0415UploadUI } from './CodeExamSolAdv'

const WebMintingPlatforms = [
    {
        platform: 'OpenSea',
        details: '→ 이더리움, 폴리곤, 솔라나, 아발란체 등의 블록체인을 지원하며, 메타데이터와 이미지 파일을 업로드하면 스마트 컨트랙트를 직접 배포하지 않아도 NFT를 쉽게 민팅할 수 있다.',
    },
    {
        platform: 'Magic Eden',
        details: '→ 솔라나(Solana)와 비트코인 오디널스(Ordinals)를 지원하는 NFT 마켓플레이스로, 크리에이터가 자체적으로 민팅 페이지를 생성하고 판매할 수 있도록 지원한다.',
    },
    {
        platform: 'Manifold',
        details: '→ No-Code 방식으로 스마트 컨트랙트를 직접 배포하고, 원하는 방식으로 NFT를 민팅할 수 있도록 지원하는 플랫폼이다',
    },
    {
        platform: 'Zora',
        details: '→ 크리에이터가 자체적인 민팅 시스템을 구축할 수 있도록 지원하는 오픈 소스 NFT 플랫폼이다.',
    }
]

const TIL0415 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 15일</p>
            <h3>웹 기반 민팅(Web-based Minting)</h3>\
            <ul><li>NFT 민팅은 개발자나 프로젝트 관리자가 직접 NFT를 발행하는 방식뿐만 아니라, 웹 기반의 민팅 시스템을 통해 사용자가 직접 민팅할 수도 있다.</li>
                <li>이러한 방식은 웹 기반 민팅(Web-based Minting) 혹은 셀프 민팅(Self-Minting)이라고 한다.</li><br />
                <li>일반적으로 스마트 컨트랙트를 배포한 후, 민팅 가능한 총 수량을 설정해 사용자들이 직접 NFT를 생성할 수 있도록 설계된다.</li><br />
                <li>또한, 일부 프로젝트에서는 자체 웹사이트를 구축하고, 사용자가 직접 지갑을 연결하여 NFT를 발행할 수 있도록 한다.</li>
                <li>이 과정에서 스마트 컨트랙트와 상호작용하며, 특정 암호화폐(ETH, MATIC, SOL 등)나 네이티브 토큰을 지불하고 NFT를 민팅하는 방식을 사용한다.</li></ul>

            <p>웹 기반 민팅 플랫폼(Web Minting Platforms)</p>
            <div className="ml-4">
                {WebMintingPlatforms.map((type, index) => (
                    <details key={index} className="mb-2">
                        <summary className="cursor-pointer font-medium">{type.platform}</summary>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong></strong> {type.details}</li>
                        </ul>
                    </details>
                ))}
            </div>

            <h4>과제</h4>
            <ul><li>웹 기반 민팅 기능이 있는 NFT 플랫폼 개발하기</li></ul>

            <h4>업로드 기능 구현하기</h4>
            <p>파일 업로드 단계</p>
            <ol><li>사용자가 파일을 선택한다.</li>
                <li>선택된 파일을 FormData를 이용해 서버(IPFS)로 업로드한다.</li>
                <li>업로드 성공 시, 반환된 URL을 저장하여 미리보기(preview)로 활용할 수 있도록 한다.</li></ol>

            <p>파일 업로드 기능 구현하기</p>
            <p>1. 파일 업로드 핸들러 작성</p>
            <CodeBlock code={TIL0415UploadHanler}></CodeBlock>

            <p>2. 설명</p>
            <ul><li>file 변수가 선택된 파일을 나타냅니다. 파일이 없으면 업로드를 진행하지 않습니다.</li>
                <li>FormData 객체를 생성하여 file, name, network 정보를 추가합니다.</li>
                <li>uploadFileToIPFS(formData) 함수를 호출하여 IPFS에 파일을 업로드합니다.</li>
                <li>업로드가 완료되면, handleImageUpload() 함수를 호출하여 업로드된 파일의 URL과 미리보기(preview)를 처리합니다.</li>
                <li>오류 발생 시 에러 메시지를 출력하고, 사용자에게 알림을 표시합니다.</li>
                <li>업로드 진행 상태를 setUploading 상태 변수로 관리합니다.
                </li></ul>
            <br />

            <p>UI에서 업로드 기능 연동하기</p>
            <ul><li>사용자가 파일을 업로드할 수 있도록 파일 입력 필드와 업로드 버튼을 UI에 추가해야 한다.</li>
                <CodeBlock code={TIL0415UploadUI}></CodeBlock>
                <li>설명:
                    <ul><li>"input type="file" "요소를 통해 사용자가 파일을 선택합니다.</li>
                        <li>선택된 파일을 setFile()을 이용해 상태로 저장합니다.</li>
                        <li>버튼을 클릭하면 handleUpload()가 실행되며, 파일이 업로드됩니다.</li>
                        <li>업로드 중일 때 버튼을 비활성화하여 중복 요청을 방지합니다.
                        </li></ul>
                </li>
            </ul>

            <p>업로드된 파일 미리보기 기능 추가</p>
            <ul><li>업로드 후 파일을 미리 볼 수 있도록 이미지 미리보기 기능을 추가할 수 있다.</li>
                <pre><code>{`
{preview && <img src={preview} alt="미리보기" style={{ width: '200px' }} />}
`}</code></pre>
                <li>설명:
                    <ul><li>업로드가 완료되면 preview 상태에 URL이 저장됩니다.</li>
                        <li>preview가 존재하면 업로드된 이미지를 화면에 표시합니다.</li></ul>
                </li>
            </ul>


        </div>
    )
}

export default TIL0415