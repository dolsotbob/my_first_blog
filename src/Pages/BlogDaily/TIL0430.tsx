import React from 'react'

const TIL0430 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 4월 30일</p>
            <h3>Uniswap</h3>
            <h4>DEX</h4>
            <ul><li>Decentralized Exchange, 탈중앙화 거래소</li>
                <li>중앙 관리자 없이 스마트 컨트랙트를 이용해 자동으로 토큰을 교환할 수 있도록 만든 플랫폼</li>
                <li>대표적인 DEX: Uniswap, SushiSwap, PancakeSwap (BNB Chain), Curve, Balancer</li>
                <li>CEX와의 차이? 누가 관리 하는가임</li>
                <li>CeFi에서는 은행이나 중안 기관을 통해 거래하고, DeFi에서는 블록체인 네트워크 상에서 스마트 컨트랙트 기반으로 운영</li>
            </ul>

            <p>DeFi의 차별점</p>
            <ul><li>스테이킹</li>
                <li>유동성 공급</li></ul>

            <p>DeFi 장단점</p>
            <ul><li>장점:
                <ul><li>탈중앙화와 투명성</li>
                    <li>P2P 거래, 글로벌 접근성, 낮음 수수료</li>
                    <li>즉, 누구나 참여하고, 자산을 운용하며, 글로벌 시장에서 자유롭게 거래할 수 있는 가능성을 제시함</li></ul>
            </li>
                <li>단점:
                    <ul><li>사용성의 어려움 (지갑, 키 관리 등)</li>
                        <li>책임의 개인화, 변동성 리스크</li></ul>
                </li>
            </ul>

            <h4>유니스왑의 등장 배경</h4>
            <p>초기 DEX의 등장: EtherDelta</p>
            <ul><li>CEX처럼 오더북 기반의 시스템을 블록체인 위에 구현하려 했음</li>
                <li>오더북이란? 무든 매수, 매도 주문을 기록한 리스트
                    <ul><li>사용자가 어떤 가격에 얼마만큼 사고팔고 싶은지를 등록해 놓고, 조건이 맞으면 자동으로 거래가 체결되는 방식</li>
                        <li>거래소 호가창과 같은 개념</li></ul>
                </li>
            </ul>

            <p>EtherDelta의 한계</p>
            <ol><li>높은 가스비
                <ul><li>거래 등록, 수정, 취소 등 모든 행위가 블록체인에서 이루어졌기에, 가스비가 과도하게 들었다</li></ul>
            </li>
                <li>확장성 문제
                    <ul><li>거래 처리 속도가 느리고, 사용자 경험이 떨어졌다</li></ul>
                </li>
                <li>유동성 부족
                    <ul><li>사용자 수가 적다 보니 거래가 원활하지 않았다</li></ul>
                </li>
            </ol>

            <p>판도를 바꾼 유니스왑의 등장</p>
            <ul><li>핵심 특징:
                <ul><li>오더북 없음 → 매수·매도 주문 없이도 거래가 가능해짐</li>
                    <li>AMM(Aumtomated Market Maker) 도입 → 누구나 유동성 제공할 수 있고, 이 유동성을 기반으로 자동화된 수학 알고리즘이 가격 결정과 거래 체결 처리
                        <ul><li>현재는 DEX의 표준이 곧 AMM 방식이 되었다</li></ul>
                    </li>
                </ul>
            </li>
            </ul>

            <h4>유동성</h4>
            <ul><li>유동성이란? 자산을 원하는 때에 원하는 방식으로 바꿀 수 있는 능력</li>
                <li>CEX에서는 현금 기반의 유동성을 제공</li>
                <li>DEX는 탈중앙화 자산으로만 유동성을 유지해야 해서 사용자 참여를 통한 유동성 확보가 필수적임</li>
                <li>유니스왑은 이러한 유동성을 AMM 구조로 혁신적으로 해결해낸 대표적인 DEX임</li>
            </ul>

            <h4>유동성 풀</h4>
            <ul><li>스마트 컨트랙트에 예치된 자산의 저장소</li></ul>

            <p>유동성 풀의 구조와 원리</p>
            <ul><li>DEX에서는 토큰 쌍(예: ETH-DAI) 하나마다 별도의 유동성 풀이 존재함</li>
                <li>사용자가 풀에 자산을 예치하면, 풀 안에 있는 비율을 기준으로 교환 비율이 결정됨</li>
            </ul>

            <p>유동성 공급자의 역할</p>
            <ul><li>유동성 풀은 누군가의 자산이 예치되어 있어야 작동하는데 이 자산을 예치하는 사람을 LP라고 부른다</li>
                <li>두 토큰을 비율에 맞춰 쌍으로 예치해야 함</li>
                <li>예치의 대가로 LP Token을 받고, 이 토큰을 통해 풀에서 발생한 거래 수수료를 나눠 갖게 된다</li></ul>

            <p>AMM, 유동성 풀을 움직이는 핵심 기술</p>
            <ul><li>기존 중앙화 거래는 오더북(호가창) 기반으로 거래가 매칭됨 &rarr; Peer-to-peer 구조</li>
                <li>AMM 기반 거래는 Peer-to-contract 구조로, 사용자가 풀(스마트 컨트랙트)과 직접 거래함</li>
                <li>AMM의 핵심 역할:
                    <ul><li>유동성 풀 안의 자산 비율을 기반으로 가격 결정</li>
                        <li>수요와 공급에 따라 가격 자동 조정</li></ul>
                </li>
                <li>CPMM(Constant Production Market Maker): 유니스왑의 대표 AMM 모델(x * y = k) </li>
            </ul>

            <h4>비영구적 손실(Impermanent Loss)</h4>
            <ul><li>유동성 풀에 예치한 자산의 가격이 변동하면서, 예치하지 않고 보유만 했을 때보다 손해를 보는 상황</li>
                <li>이 손실은 자산을 출금할 때 현실화되며, 일시적인 손실이기 때문에 ‘비영구적’이라는 이름이 붙었음</li>
                <li>그래서 거래 수수료만 보고 공급을 결정하면 안 됨</li>
            </ul>

            <p>비영구적 손실은 왜 발생할까?</p>
            <ul><li>유동성 풀은 두 개의 자산을 ‘페어’로 묶어 공급하며 AMM은 이 두 자산의 가격 균형을 자동으로 조절함</li>
                <li>이 때문에 한쪽 자산의 가격만 오르거나 내려가도, 풀에서는 자동 조정이 발생하며, 출금 시에는 예치 당시보다 손해를 볼 수 있게 됨
                    <ul><li>이 손실을 예치 시점부터 가격이 변할 때마다 실시간으로 누적됨</li></ul>
                </li>
            </ul>

            <p>손실이 생기는 구조</p>
            <ul><li>AMM은 x * y = k 공식을 기반으로, 두 자산의 양을 자동 조정한다</li>
                <li>ETH 가격이 상승하면, 풀에서는 ETH가 빠져나가고 USDT가 쌓인다</li>
                <li>이로 인해 출금 시 ETH의 개수는 줄어 있고, 실제 수익은 줄어든 상태가 된다</li>
                <li>결국, 풀에 있는 자산의 수량은 줄어들고, 가치의 균형을 맞추기 위해 비영구적 손실이 발생한다</li></ul>


            <p>그럼에도 유동성 풀에 자산을 넣는 이유? 거래 수수료 때문</p>
            <ul><li>거래가 많을수록 수수료 수익이 커짐</li>
                <li>이 수수료가 비영구적 손실을 상쇄하거나 초과할 수 있음</li></ul>

            <h4>v1 - AMM & CPMM</h4>
            <ul><li>AMM은 중앙화된 거래소처럼 매수자와 매도자를 직접 연결하지 않고, 스마트 컨트랙트를 통해 가격을 자동 계산하고 거래를 체결한다</li>
                <li>AMM의 구성 요소:
                    <ul><li>알고리즘(가격 결정 공식)</li>
                        <li>유동성 공급자(Liquidity Provider, LP)</li>
                        <li>토큰 페어(Token Pair)</li>
                        <li>트레이더(사용자)
                        </li></ul>
                </li>
            </ul>

            <p>CPMM이란?</p>
            <ul><li>Constant Product Market Maker</li>
                <li>AMM의 가격 결정 알고리즘 중 하나로, 유니스왑에서 사용하는 모델임</li>
                <li>공식: x * y = k
                    <ul><li>x, y: 유동성 풀 내 두 토큰의 보유량</li>
                        <li>k: 항상 일정한 상수 (초기 유동성 곱)</li></ul>
                </li>
                <li>두 토큰의 곱이 항상 일정해야 한다</li>
                <li>이 공식은 수요와 공급 변화에 따라 교환 비율을 자동으로 조정할 수 있게 해준다</li>
            </ul>

            <p>수요와 공급에 따른 가격 변화</p>
            <ul><li>수요가 높으면 가격이 상승하고, 공급이 많으면 가격이 하락한다.</li>
                <li>CPMM은 이를 자동 반영하여 가격을 조정한다.</li>
                <li>(X + X') * (Y - Y') = K</li>
            </ul>

            <p>시장 균형과 차익거래(Arbitrage)</p>
            <ul><li>VEN 가격이 올라가면, 다른 거래소에서 VEN을 싸게 사와서 ETH로 교환하고 차익을 얻음</li>
                <li>이런 행동들이 이어지면서 유니스왑 풀의 가격은 외부 시장 가격과 거의 같아지게 됩니다
                </li></ul>

            <h4>v1 - Slippage</h4>
            <ul><li>슬리피지란? 거래를 하려고 예상한 가격과 실제 거래가 체결된 가격의 차이</li>
                <li>주로 오더북 기반 거래 시스템(예: 주식 시장)에서 사용</li>
                <li>예시: AMM에서의 슬리피지
                    <ul><li>Alice는 1ETH = 5VEN이라고 생각하고 ETH를 VEN으로 스왑</li>
                        <li>실제로는 4.5VEN밖에 받지 못함</li>
                        <li>이유: AMM의 x * y = k 공식에 따라 가격이 자동 조정되었기 때문
                        </li></ul>
                </li>
                <li>유동성 풀의 규모가 클수록 슬리피지 발생이 적다</li>
            </ul>

            <p>TVL</p>
            <ul><li>Total Value Locked</li>
                <li>TVL은 DEX의 신뢰도를 나타내는 지표</li>
                <li><a href='https://defillama.com/chains'>DefiLlama</a></li>
                <li>TVL이 높을수록:
                    <ul><li>슬리피지가 적음</li>
                        <li>거래 체결이 빠름</li>
                        <li>트레이더와 LP가 모두 만족
                        </li></ul>
                </li>
            </ul>

            <h4>v1 - 동작 방식: Uniswap의 거래 구조</h4>
            <ul><li>P2C(Peer-to-Contract) 거래 방식
                <ul><li>기존 방식(P2P)
                    <ul><li>매수자와 매도자가 직접 연결되어 거래</li>
                        <li>블록체인에서 이 방식은 가스비가 많이 들고 비효율적임
                        </li></ul>
                </li>
                    <li>Uniswap 방식(P2C)
                        <ul><li>매수자가 스마트 컨트랙트와 직접 거래</li>
                            <li>유동성 풀(Liquidity Pool)을 이용해 항상 거래 가능
                            </li></ul>
                    </li>
                    <li>유니스왑의 구성
                        <ul><li>ETH - ERC-20 토큰 페어로 구성된 유동성 풀</li>
                            <li>각 페어마다 Token Exchange Contract가 생성됨</li>
                            <li>이 컨트랙트들은 Factory Contract를 통해 만들어짐
                                <ul><li>사용자는 이 컨트랙트를 통해 자동으로 교환 거래</li></ul>
                            </li></ul>
                    </li></ul>
            </li>
            </ul>

            <h4>v2 - Uniswap V2</h4>
            <ul><li>Uniswap V2는 V1의 기본 구조를 유지하면서도, 실질적인 사용성과 기능 측면에서 다양한 개선이 이루어짐</li></ul>
            <ol><li>ERC-20-ERC20 페어 지원: 직접 ERC20 간 직접 교환이 가능해짐. 이를 통해:
                <ul><li>더 낮은 수수료</li>
                    <li>더 적은 슬리피지</li>
                    <li>간편한 거래 구조 를 실현할 수 있게 됨
                    </li></ul>
            </li>
                <li>TWAP 기반의 가격 오라클(Time-Weighted Average Price)
                    <ul><li>V2는 외부 컨트랙트가 가격 정보를 읽을 수 있도록 가격 오라클 기능을 추가</li>
                        <li>하지만 실시간 가격은 쉽게 조작당할 수 있으므로 TWAP 방식 사용
                            <ul><li>일정 시간 동안의 평균 가격을 기준으로 가격 제공</li>
                                <li>가격 조작 방지 및 신뢰성 향상</li>
                                <li>DeFi 생태계에서의 안정적인 가격 참조 가능
                                </li></ul>
                        </li></ul>
                </li>
                <li>플래시 스왑(Flash Swap)
                    <ul><li>한 트랜잭션 내에서 유동성 풀의 토큰을 즉시 대출받을 수 있는 기능</li>
                        <li>사용자는 선불 없이 토큰을 가져올 수 있음</li>
                        <li>트랜잭션이 끝날 때까지 다음 중 하나를 수행해야 함:
                            <ol><li>가져간 만큼의 토큰을 다시 반환</li>
                                <li>가져간 토큰에 상응하는 다른 자산을 풀에 예치</li>
                                <li>둘 다 일부 수행</li></ol>
                        </li>
                        <li>이를 통해:
                            <ul><li>무담보 대출 기반의 아비트리지, 리밸런싱, 레버리지 전략이 가능</li>
                                <li>복잡한 금융 전략을 한 트랜잭션 안에서 구현할 수 있음</li></ul>
                        </li>
                    </ul>
                </li>
                <li>Core/Periphery 아키텍처 분리
                    <ul><li>Core Contract: 유동성 풀과 직접 관련된 로직(스왑, 유동성 공급 등)을 담당</li>
                        <li>Periphery Contract: 사용자 인터페이스, 라우팅, 기타 부가 기능을 처리</li>
                        <li>이렇게 분리함으로써:
                            <ul><li>안정성과 보안성 강화</li>
                                <li>업그레이드와 유지보수 용이성 향상</li></ul>
                        </li>
                    </ul>

                </li>
            </ol>

            <h4>v2 - Uniswap V1 vs V2: ERC20-ERC20 스왑의 변화</h4>
            <p>Uniswap V2의 개선: ERC20-ERC20 풀 도입</p>
            <ul><li>Uniswap V2는 위 문제를 해결하기 위해 ERC20 간 직접 유동성 풀을 지원합니다.</li>
                <li>ERC20-ERC20 유동성 풀
                    <ul><li>DAI-USDC, UNI-LINK 등 ERC20 간 직접 풀 생성 가능</li>
                        <li>ETH Bridging 필요 없음</li>
                        <li>단일 수수료 (0.3%)로 스왑 비용 절감</li>
                        <li>슬리피지 감소 및 거래 효율성 증가 </li></ul>
                </li>
            </ul>

            <p>Uniswap V2의 세 가지 스왑 방식</p>
            <ol><li>다이렉트 스왑: ERC20-ERC20 유동성 풀이 있는 경우, 직접 스왑</li>
                <li>ETH 사용 스왑: 유동성 풀이 없을 경우, V1과 유사한 ETH 중개 스왑</li>
                <li>커스텀 스왑: 사용자가 경로를 직접 지정하여 중간 경유지(토큰)를 선택 가능
                    <ul><li>예: DAI → OMG → USDC (중간에 OMG 경유)</li>
                        <li>이를 가능하게 하는 것이 Router 컨트랙트</li>
                        <li>라우터는 가장 효율적인 경로를 계산하여 다이렉트 또는 다단계 스왑을 자동 실행</li></ul>
                </li>
            </ol>

            <p>wETH의 도입으로 구조 개선</p>
            <ul><li>wETH란?
                <ul><li>ETH를 ERC20 표준에 맞게 래핑(wrap)한 토큰</li>
                <li>ETH처럼 사용할 수 있지만 ERC20 토큰처럼 작동</li></ul>
            </li>
            <li>효과
                <ul><li>ETH도 ERC20처럼 처리 가능 → 더 많은 조합의 스왑 가능</li>
                <li>ETH-ERC20, wETH-ERC20 모두 지원됨</li>
                <li>코드 복잡성 감소, 통일된 로직 적용 가능</li></ul>
            </li>
            </ul>

            <h4>v2 - Flash Swap & Flash Loan: 유니스왑 V2에서의 대출 메커니즘</h4>
            <ul><li>유니스왑은 본래 토큰을 교환(스왑)하는 프로토콜이지만, V2부터는 대출 개념인 플래시 스왑(Flash Swap) 기능이 추가됨</li>
            </ul>

            <p>일반적인 대출과 플래시론(Flash Loan)의 차이</p>
            <ul><li>일반적인 대출
                <ul><li>대출 후 일정 기간 내에 상환</li>
                    <li>담보 또는 신용을 기반으로 승인</li>
                    <li>미상환 시 채권자에게 손실 발생</li></ul>
            </li>
                <li>플래시론
                    <ul><li>한 트랜잭션 내에서 대출 → 사용 → 상환 완료</li>
                    <li>상환 실패 시 트랜잭션 자체가 취소됨 → 대출자 자산 보호</li>
            <pre><code>{`
            function doFlashLoan(uint256 amount){
                uint256 loanAmount = flashLoan(amount);      // 1. 대출금 수령
                uint256 profit = doSomething(loanAmount);    // 2. 대출금 사용
                repay(amount + fee);                         // 3. 대출금 상환
                transfer(profit - amount - fee);             // 이익 수령
            }
            `}</code></pre>
                    <li>핵심 특징:
                        <ul><li>초단기 무담보 대출</li>
                            <li>프로그램 가능한 돈(Ethereum)을 활용</li>
                            <li>트랜잭션 도중 실패 시 → 전체 취소 → 자금 유출 없음</li></ul>
                    </li>
                    </ul>
                </li>
            </ul>

            <p>플래시론의 활용 예: 차인 거래(arbitrage)</p>
            <ul><li>예: 유니스왑에서 1 DAI = 10 USDC, 스시스왑에서는 1 DAI = 10.5 USDC</li></ul>
            <ol><li>플래시론으로 100 USDC 대출</li>
                <li>유니스왑에서 100 USDC로 10 DAI 구매</li>
                <li>스시스왑에서 10 DAI를 105 USDC에 판매</li>
                <li>대출 상환 후 5 USDC 이익 확보</li>
            </ol>

            <p>유니스왑의 Flash Swap</p>
            <ul><li>동성 풀의 토큰 리저브 일부(또는 전체)를 꺼내서 사용하고, 같은 트랜잭션 내에서 상환할 수 있도록 하는 기능
                <ul><li>리저브란? 유동성 풀에 예치된 토큰 수량</li></ul>
            </li>
            <li>Flash Swap의 순서
                <ol><li>풀에서 ERC20 토큰을 꺼냄</li>
                    <li>꺼낸 토큰을 활용해 수익을 창출 (예: 다른 DEX에서 판매)</li>
                    <li>같은 트랜잭션 내에서 토큰을 전액 상환하거나, 다른 자산으로 교환 후 상환</li></ol>
            </li>
            </ul>

            <p>플래시 스왑 활용 (초기 자본 없음)</p>
            <ol><li>ETH-DAI 풀에서 필요한 만큼의 DAI를 꺼냄</li>
                <li>DAI로 수익 창출 코드 실행</li>
                <li>DAI 혹은 ETH로 상환 후 남은 수익은 본인에게</li>
            </ol>
            <ul><li>➡ 초기 자본 없이 투자 전략 실행이 가능해짐</li></ul>

            <h4>v2 - Uniswap V2와 Price Oracle: 가격 조작을 막는 방법</h4>
            <p>Price Oracle이란?</p>
            <ul><li>외부에서 자산 가격 정보를 스마트 컨트랙트에 제공하는 장치</li>
            <li>: DAI의 현재 시세를 알고 싶을 때, 오라클을 통해 가져와야 함</li></ul>

            <p>바람직한 Price Oracle의 조건</p>
            <ul><li>탈중앙화 금융 서비스(DeFi)에서는 조작 불가능하고 신뢰할 수 있는 가격 정보가 중요</li>
            <li>예시: Alice의 DAI 베팅 dApp</li></ul>

            <p>온체인 Price Oracle로서의 Uniswap</p>
            <ul><li>Uniswap은 온체인 AMM이기 때문에 언제든지 유동성 풀의 리저브를 통해 실시간 가격을 구할 수 있다</li>
                <li>DAI가격 = DAI리저브 / ETH리저브</li>
                <li>Uniswap V1은 이런 방식으로 토큰 가격을 제공하고 이를 Spot Price라고 한다</li>
                <li>그러나 V1에는 치명적인 문제가 있었다: 가격 조작이 쉬움
                    <ul><li>공격자는 대량 스왑으로 가격을 올리거나 내림</li>
                        <li>단기간 동안 유동성 풀의 리저브를 인위적으로 변경 가능</li>
                        <li>외부 dApp이 이 잘못된 가격에 의존할 경우, 부당한 수익을 얻는 공격이 가능</li>
                        <li>예:  Bob의 DAI dApp 공격 시나리오
                            <ol><li>Bob은 DAI가 오를 것에 베팅</li>
                                <li>ETH-DAI 풀에 ETH를 스왑 → DAI 수요 증가 → 가격 상승</li>
                                <li>베팅에서 이기고 보상 획득</li>
                                <li>DAI 다시 매도해 초기 가격으로 복구</li></ol>
                            <ul><li>➡ 이 모든 과정은 한 명의 공격자가 주도할 수 있음</li>
                                <li>➡ 특히, 공격자가 채굴자라면 트랜잭션 순서를 조작하여 쉽게 공격 가능</li></ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h5>해결책: Uniswap V2의 TWAP 오라클</h5>
            <ul><li>Uniswap V2는 TWAP(Time-Weighted Average Price) 방식을 도입하여 가격 조작 위험을 낮춤</li>
                <li>TWAP이란?
                    <ul><li>특정 시간 동안의 평균 가격</li>
                    <li>순간적인 조작이 아닌, 시간을 기준으로 가격을 계산</li>
                    <li>장기적인 가격 안정성과 신뢰성 확보</li></ul>
                </li>
                <li>TWAP의 효과
                    <ul><li>짧은 시간에 가격을 조작해도 오라클에 미치는 영향 적음</li>
                    <li>외부 dApp들이 더 안전한 가격 정보에 접근 가능</li>
                    <li>유니스왑을 보다 신뢰할 수 있는 Price Oracle로 개선</li></ul>
                </li>
            </ul>

            <ul><li>Uniswap V2의 TWAP은 조작에 강한 온체인 Price Oracle로, 다양한 DeFi 서비스에 필수적인 도구로 자리잡고 있다.</li></ul>

            <h4>v2 - Uniswap V2의 TWAP 오라클클</h4>







        </div>
    )
}

export default TIL0430