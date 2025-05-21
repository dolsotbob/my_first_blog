import React from 'react'

const TIL0221 = () => {
    return (
        <div className='BlogDaily'>
            <h3>DOM</h3>
            <ul><li>Document Object Model</li>
                <li>HTML 요소를 Object처럼 조작할 수 있는 모델</li></ul>

            <h4>HTML에 Javascript 적용하기</h4>
            <ul><li>HTML에 JavaScript를 적용하기 위해서는 script 태그를 이용한다.</li>
                <li> 아래의 경우 HTML 파일과 같은 디렉토리에 존재하는 myScriptFile.js을 불러온다.</li>
                <pre><code>{`
        <script src="myScriptFile.js"></script>        
        `}</code></pre>
                <li>script 요소는 등장과 함께 실행된다.</li>
            </ul>

            <p>script 요소를 head가 아닌 body에 넣길 권하는 이유</p>
            <ul><li>HTML 요소를 JavaScript 코드에서 조작하려면, DOM이 완전히 로드된 후에 실행되어야 한다.</li>
                <li>따라서 script 태그를 body 맨 끝에 넣어 모든 요소가 로딩된 후 실행되도록 하는 것이 적합하다.</li>
                <li>이러면 	document.getElementById(...)가 정상 작동고 </li>
                <li>DOM 조작 시 에러 날 확률이 낮다.</li>
            </ul>

            <p>DOM 구조 조회할 때</p>
            <ul><li>console.dir이 유용함: DOM을 객체의 모습으로 출력함</li></ul>

            <p><span style={{ fontStyle: "italic" }}>CREATE, APPEND, READ를 통해 새로운 DOM 객체를 만들고, 기존의 DOM 객체에 붙이고, DOM 객체를 선택해서 조회할 수 있음.</span></p>

            <h4>READ</h4>
            <ul><li>“DOM에서 변수 값을 조회한다”는 건, HTML 요소를 JavaScript로 불러온다는 말임</li>
                <li>웹 페이지에 있는 HTML 요소(DOM)는 querySelector를 이용해서 찾아야 한다.</li>
                <li>querySeelctor는 선택자를 조회한다는 의미를 가지고 있음</li>
                <li>선택자(selector)로는 다음 세 가지가 가장 많이 사용된다.
                    <ul><li>HTML 요소("div")</li>
                        <li>id("#tweetList")</li>
                        <li>class(.tweet)</li></ul>
                </li>
            </ul>

            <p>querySelector</p>
            <ul><li>querySelector에 '.tweet'을 첫 번째 인자로 넣으면,</li>
                <li>클래스 이름이 tweet 인 HTML 엘리먼트 중 첫 번째 엘리먼트를 조회할 수 있습니다.</li>
                <pre><code>{`
    const oneTweet = document.querySelector('.tweet')
    `}</code></pre>
            </ul>

            <ul><li>여러 개의 요소를 한 번에 가져오기 위해서는, querySelectorAll을 사용</li>
                <li>이렇게 조회한 HTML 요소들은 배열처럼 for문을 사용하실 수 있다.</li>
                <li>주의!: 앞서 조회한 HTML 요소들은 배열이 아니다! Array-like Object이다.</li>
                <pre><code>{`
    const Tweets = document.querySelectorAll('.tweet')
    `}</code></pre>
            </ul>

            <ul><li>get으로 시작하는 DOM 조회 메서드도 있음</li>
                <li>querySelector와 비슷한 역할을 하는 오래된 방식</li>
                <pre><code>{`
    // getElementById와 querySelector로 각각 받아 온 container 요소는 하나의 요소입니다.
    const getOneTweet = document.getElementById('container')
    const queryOneTweet = document.querySelector('#container')
    console.log(getOneTweet === queryOneTweet) // true
    `}</code></pre>
            </ul>

            <ul><li>CREATE에서 생성한 div 요소를 container에 넣을 준비 마침</li>
                <li>다음 코드를 입력하면 container의 맨 마지막 자식 요소로 tweetDiv를 추가함</li>
                <pre><code>{`
    const container = document.querySelector('#container')
    const tweetDiv = document.createElement('div')
    container.append(tweetDiv)
    `}</code></pre>
            </ul>

            <p>READ, UPDATE, DELETE</p>

            <h4>여러 개의 자식 요소 지우기</h4>
            <p>innerHTML로 모든 자식 요소 지울 수 있지만, 보안 문제가 있음.<br />
                removeChild는 자식 요소를 지정해 삭제하는 메서드. for, while 반복문을 활용해 자식 요소가 남아있지 않을 때까지 모든 자식 요소 삭제할 수 있음.</p>

            <h3> 2025 최신 탈중앙화 애플리케이션(DApp) 동향</h3>
            <p>다음 보고서는 전 세계에서 가장 성과가 뛰어난 탈중앙화 애플리케이션(DApp)을 추적하는 DappRadar의 최신 순위를 기반으로,
                OpenAI의 ChatGPT 인사이트를 활용하여 작성되었습니다.</p>

            <h4>소개</h4>
            <p>탈중앙화 애플리케이션(DApp)은 금융, 게임, 메타버스, 소셜 플랫폼 등 다양한 분야에서 블록체인 생태계를 변화시키고 있습니다. DappRadar의 최신 순위를 바탕으로, 현재
                DeFi(탈중앙화 금융), 크로스체인 상호운용성, 메타버스, NFT, 탈중앙화 소셜 플랫폼이 강세를 보이고 있습니다. 아래는 전 세계 상위 10대 DApp을 분석한 최신
                트렌드입니다.</p>

            <h4>DApp 생태계 주요 트렌드</h4>
            <ol>
                <li>차세대 DeFi 플랫폼의 부상</li>
                <ul>
                    <li>KAI-CHING, Jupiter Exchange, Radium과 같은 상위 DApp들은 탈중앙화 금융 서비스에 대한 지속적인 높은 수요를 보여줍니다.</li>
                    <li> 이유? 사용자들은 전통적인 은행 시스템의 대안으로 스테이킹, 대출, 차입, 크로스체인 거래를 제공하는 DeFi 플랫폼을 선호합니다.</li>
                    <li>향후 전망: 실물 자산(RWA)과의 통합, AI 기반 거래, 기관 투자자들의 DeFi 솔루션 도입이 가속화될 것입니다.</li>
                </ul>
                <li>크로스체인 상호운용성의 확산</li>
                <ul>
                    <li>HOT Protocol과 Particle Network는 블록체인 간의 원활한 상호작용을 가능하게 하는 크로스체인 솔루션의 성장세를 보여줍니다.</li>
                    <li>이유? 더 많은 사용자와 개발자가 낮은 가스비와 높은 효율성을 제공하는 멀티체인 거래를 원하고 있습니다.</li>
                    <li>향후 전망: 크로스체인 브릿지, 레이어 2 확장 솔루션, 멀티체인 DeFi 플랫폼이 시장을 주도할 것입니다.</li>
                </ul>

                <li>메타버스 및 블록체인 게임의 지속적인 성장</li>
                <ul>
                    <li>World of Dypians, Age of Dino, Pixels는 메타버스 게임과 NFT 기반 경제에 대한 지속적인 관심을 반영합니다.</li>
                    <li>사용자들은 디지털 자산의 소유권, 플레이투언(P2E) 인센티브, 몰입형 경험을 원합니다.</li>
                    <li>향후 전망: P2E에서 ‘플레이 앤 언(Play-and-Earn)’ 모델로 전환하여 게임성이 수익만큼 중요해질 것입니다. 또한 AI 및 AR/VR과의 통합이 더욱
                        심화될 것입니다.</li>
                </ul>

                <li>탈중앙화 소셜 미디어와 콘텐츠 수익화의 부상</li>
                <ul>
                    <li>LOL과 UXUY는 Web3 소셜 플랫폼의 성장세를 보여줍니다.</li>
                    <li>이유: 사용자들은 자신의 콘텐츠에 대한 더 많은 통제권, 데이터 프라이버시 보호, 수익 창출 기회를 요구하고 있습니다.</li>
                    <li>향후 전망: 토큰화된 참여 모델, 탈중앙화 신원(DID), AI 기반 콘텐츠 큐레이션이 사용자 경험을 향상시킬 것입니다.</li>
                </ul>
            </ol>

            <h4>상위 10대 DApp 개요</h4>
            <ol>
                <li>KAI-CHING (DeFi)</li>
                <ul>
                    <li>스테이킹, 대출, 차입 서비스를 제공하는 저수수료·고보안 DeFi 플랫폼</li>
                </ul>
                <li>HOT Protocol (크로스체인)</li>
                <ul>
                    <li>멀티체인 거래를 효율적으로 지원하는 크로스체인 유동성 프로토콜</li>
                </ul>
                <li>World of Dypians (메타버스)</li>
                <ul>
                    <li>NFT와 탈중앙화 금융을 결합한 메타버스 게임 플랫폼</li>
                </ul>
                <li>Radium (탈중앙화 거래소)</li>
                <ul>
                    <li>빠르고 안전하며 저수수료의 암호화폐 거래를 제공하는 DEX</li>
                </ul>
                <li>Particle Network (탈중앙화 클라우드)</li>
                <ul>
                    <li>유휴 컴퓨팅 파워를 활용하는 탈중앙화 클라우드 컴퓨팅 네트워크</li>
                </ul>
                <li>LOL (탈중앙화 소셜 미디어)</li>
                <ul>
                    <li>콘텐츠 제작과 큐레이션을 통해 사용자에게 보상을 제공하는 Web3 소셜 플랫폼</li>
                </ul>
                <li>UXUY (블록체인 UX 개선)</li>
                <ul>
                    <li>블록체인 애플리케이션의 UX를 개선하는 도구 세트</li>
                </ul>
                <li>Jupiter Exchange (DeFi)</li>
                <ul>
                    <li>높은 유동성을 갖춘 경쟁력 있는 DeFi 거래 플랫폼</li>
                </ul>
                <li> Age of Dino (NFT 게임)</li>
                <ul>
                    <li>공룡 테마의 NFT 기반 게임으로 번식 및 배틀 기능 포함</li>
                </ul>
                <li>Pixels (탈중앙화 아트 플랫폼)</li>
                <ul>
                    <li>예술가들이 디지털 창작물을 수익화할 수 있는 블록체인 기반 아트 플랫폼</li>
                </ul>
            </ol>

            <h4>결론: DApp의 미래 전망</h4>
            <p>차세대 DApp은 다음에 초점을 맞출 것입니다:</p>
            <ul>
                <li>확장성: 레이어 2 및 크로스체인 솔루션을 통한 빠른 거래</li>
                <li> 사용자 경험(UX): 주류 사용자 유입을 위한 온보딩 및 접근성 개선</li>
                <li>AI 및 자동화: AI 기반 스마트 컨트랙트, 트레이딩 봇, 자동화된 DeFi 전략</li>
                <li>실제 활용 사례: 금융, 신원 인증, 게임 등 실생활과 연결된 DApp 증가</li>
            </ul>
            DApp은 투기적 요소를 넘어 실생활에 적용되는 단계로 진화하고 있습니다. 금융, 게임, 메타버스, 소셜 미디어 등 다양한 분야에서 효율성, 사용성, 금융적 자유를 중시하는 Web3
            애플리케이션이 더욱 발전할 것입니다.
            <p>DApp의 미래는 이미 시작되었습니다. 더 탈중앙화되고, 효율적이며, 사용자 중심적인 방식으로!</p>
        </div>
    );
};

export default TIL0221 