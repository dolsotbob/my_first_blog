import React from 'react'

const TIL0206 = () => {
  return (
    <div className='BlogDaily'>

<h3>블록체인의 작동원리</h3>
                <p>2025년 2월 6일</p>

                <h4>사토시 나카모토는 중앙 집중형 원장의 어떠한 특징을 해결하고 싶어했나요?</h4>
                <ul>
                    <li>중앙화된 신뢰: 데이터의 신뢰가 국가와 같은 중앙 기관의 신뢰성과 권위를 기반으로 형성되는 점</li>
                    <li>단일 장애점: 중앙 서버가 해킹, 손상, 장애를 겪으면 데이터가 유실되거나 손상될 위험이 있음.</li>
                    <li>투명성 부족</li>
                </ul>

                <h4>중앙 집중형 원장의 특징 중 어떤 것이 사타시 나카모토의 최우선 과제가 아니었나요?</h4>
                <li>율성: 중앙 기관이 직접 데이터를 관리해서 처리 속도가 빠를 수 있음</li>

                <h4>분산원장이란 무엇인가요?</h4>
                <li>데이터를 중앙 서버가 아닌 네트워크의 여러 노드에 걸쳐 분산 저장하는 데이터베이스의 일종. 중앙기관 없이 데이터의 무결성과 보안이 유지됨.</li>

                <h4>분산원장의 종류로 어떤 것이 있나요?</h4>
                <ul>
                    <li>퍼블릭. 예: 비트코인, 이더리움</li>
                    <li>프라이빗: 제한된 참여자만 접근 가능. 기업 내부에서 사용됨. 예: 하이퍼레저, 리플</li>
                    <li>컨소시엄: 특정 그룹, 기업 연합 등 내에서 공유되며, 참여 노드가 제한됨.</li>
                </ul>

                <h4>중앙 집중형 원장과 분산원장의 대표적 차이점 몇 가지를 얘기해보세요.</h4>
                <ul>
                    <li>데이터 추가/수정 가능 여부: 중앙 집중형 원장에서는 가능, 비트코인에서는 불가능</li>
                    <li>신뢰 형성 방법: 중앙 집중형에서는 중앙 기관의 권위 사용, 비트코인에서는 합의 알고리즘과 암호화 기술 사용</li>
                    <li>확장성: 중앙 집중형에서는 높음 - 중앙화된 처리, 비트코인에서는 낮음 - 분산 처리로 인한 제한</li>
                </ul>

                <h4>합의 알고리즘이란?</h4>
                <li>무엇이 우선시 되어야 하는가를 정의하는 것. 예를들어 블록이 포크 되었을 때 무엇을 우선시 해야 할까? 비트코인의 경우 작업을 많이 한 체인이 우선시 됨.</li>

                <h4>분산 원장 기술의 작동 방식을 설명하세요.</h4>
                <ol>
                    <li>트랜잭션 생성</li>
                    <li>트랜잭션이 모든 노드에 전파됨</li>
                    <li>협의 과정: 노드들이 합의 알고리즘을 통해 해당 트랜젝션의 유효성 검증</li>
                    <li>데이터 저장: 검증된 트랜잭션 원장에 기록; 노드 동기화</li>
                </ol>

                <h4>노드란?</h4>
                블록체인 네트워크에 연결된 장치.PC.

                <h4>노드는 어떤 역할을 하나요?</h4>
                데이터 저장, 데이터 검증 - 블록의 유효성 검증, 네트워크 연결 및 데이터 전파, 합의 참여

                <h4>노드 유형으로 어떤 것이 있나요?</h4>
                <ul>
                    <li>풀노드. 예: 비트코인 코어 노드</li>
                    <li>라이트 노드, SPV 노드: 머클 루트를 포함한 블록 헤더만 저장하여 작동함; 트랜젝션 검증을 위해 다른 풀 노드 필요; 예: 모바일 지갑 앱</li>
                    <li>마이닝 노드: 작업 증명을 수행해 새 블록 생성. 예: 지난 실습에서 풀노드에서는 비트코인 데몬을 켜 놓고, 마이닝 노드는 비트코인 블록을 생성 했었음</li>
                </ul>

                <h4>알트코인에서 볼 수 있는 노드로 어떤 것이 있나요?</h4>
                <ul>
                    <li>검증 노드: 지분 증명 네트워크에서 블록 생성 및 검증. 예: 이더리움 2.0, 폴카닷, 솔라나</li>
                    <li>아카이브 노드: 블록체인의 모든 기록과 상태 데이터 자장. 주로 스마트 컨트랙트가 실행되는 블록체인(예: 이더리움, 폴카닷, 솔라나) 에서 사용됨.</li>
                </ul>

                <h4>비잔틴 장군 문제에 대해 얘기해보세요.</h4>
                <ul>
                    <li>4개 군대가 힘을 합쳐 포위하고 있는 적군의 성을 함락해야 함.</li>
                    <li>4개 군대고 동시에 공격해야만 성을 함락할 수 있음. 만약 한 군대가 배신해서 동시에 공격 못 하면 작전 실패.</li>
                    <li>해결: 각 국대가 모든 군대에게 메세지를 전파한다. 다수결로 공격 성공</li>
                    <li>레슬리 램포트의 해법: 네트워크의 노드가 3n+1 이상이어야 최대 n명의 배신자기 있어도 합의 가능하다</li>
                </ul>

                <h4>분산된 네트워크 환경에서 악의적인 노드, 배신자가 존재할 때 이를 어떻게 극복하고, 정직한 참여자들이 올바르게 합의에 도달할 수 있을까?</h4>
                <ul>
                    <li>비잔틴 장애 허용 - BFT: 네트워크 내 일부 노드가 악의적이거나 오류를 발생시켜도 나머지 정직한 노드가 올바른 합의에 도달하여 시스템이 정상적으로 작동하도록 보장하는
                        메커니즘.</li>
                    <li>한마디로 악의적 노드가 있어도 돌아가는 시스템을 돌아가게 하자는 것.</li>
                </ul>

                <h4>블록이 생성되는 과정을 설명해보세요.</h4>
                <ol>
                    <li>트랜잭션 생성 -- 모든 노드트랜잭션 수집: 마이닝 노드가 전파된 트랜잭션을 수집해 메모리 풀에 저장</li>
                    <li> 블록 템플릿 - 임시 블록 생성: 피라미드 쌓기</li>
                    <li>작업 증명: 블록 헤더의 해시값이 네트워크에서 요구하는 난이도 목표 이하의 값이 되도록 논스 값을 변경하며 반복적으로 해시 계산</li>
                    <li>블록 검증 및 전파: 유효한 해시값을 찾으면 블록이 채굴/생성됨 --  브로드캐스트 -- 다른 노드들이 새 블록의 유효성 검증</li>
                    <li>블록체인에 추가</li>
                    <li>보상 지급: 코인베이스 트랜잭션</li>
                    <li>새 블록 이후 체인 확장에 전파/브로드캐스트</li>
                </ol>

                <h4>작업증명이 뭔가요?</h4>
                네트워크 참여자, 즉 마이너가 퍼즐 게임에 참여해 먼저 퍼즐을 푸는 사람이 보상을 받는 경쟁적 구조.

                <h4>PoW 작동 방식을 설명하세요.</h4>
                <ol>
                    <li>트랜잭션 모으기</li>
                    <li>퍼즐 문제 해결</li>
                    <li>블록 검증</li>
                    <li>보상 지급급</li>
                </ol>

                <h4>Hash Puzzle에 사용되는 값은? 마이너는 아래 값들을 하나의 값으로 모아서 SHA-256 해시 함수를 실행함.</h4>
                <ul>
                    <li>이전 블록의 해시</li>
                    <li>머클 루트</li>
                    <li>타임 스탬프 : 이전 블록의 타임스탬프보다 크고 네트워크 현재 시간보다 2시간 이내여야 함.</li>
                    <li>난이도: 네트워크에서 설정. 예: 비트코인 목표는 10분마다 1개 블록 생성; 블록 해시 값 앞 부분에 0이 몇 개인지가 중요</li>
                    <li>논스 : 유효한 해시를 찾기 위해 반복적으로 변경되는 값; 유일한 변수</li>
                </ul>

                <h4>체인 분기, Fork는 왜 발생하나요?</h4>
                <li>두 명의 채굴자가 동시에 블록 생성 및 브로드캐스트</li>
                <li>네트워크 지연으로 일부 노드가 특정 블록을 먼저 수신하고 다른 블록을 뒤늦게 수신했을 경우</li>

                <h4>분기 상태에 대해 설명하세요.</h4>
                <li>두 체인의 길이가 동일하며 각각 다른 노드 그룹에서 다른 체인을 유효한 체인으로 인식하는 일시적인 상태.</li>
                <li>네트워크는 가장 긴 체인(또는 가장 많은 작업량을 포함한 체인)을 신뢰하며 새 블록이 추가됨에 따라 다음 블록을 채굴하기 위한 작업이 반복됨.</li>

                <h4>체인 리오르그, Chain Reorganization이란?</h4>
                분기 체인 중 가장 긴 체인 선택하는 과정. 가장 긴 체인이 메인 체인으로 선택되면, 기존의 짧은 체인의 블록들은 무효화되고 버려진 블록, 즉 고아 블록이 됨. 이 고아 블록들은 다시
                멤풀로 반환되어 다른 블록에 포함될 기회를 얻게 됨.

                <h4>PoW의 장단점에 대해 말하시오.</h4>
                <ul>
                    <li>장점1: 높은 보안성</li>
                    <li>장점2: 검증 용이성 - 블로 헤더의 해시 값을 계산해 블록이 타켓 값 조건을 만족하는지 확인</li>
                    <li>단점1: 에너지 소모가 큼</li>
                    <li>단점2: 확장성 문제 - 비트코인은 초당 약 7건의 트랜잭션 처리 할 수 있어 대규모 사용자 지원 어려움</li>
                    <li>단점3: 높은 진입 장벽 - 고성능 하드웨어와 막대한 전력 비용</li>
                    <li>단점4: 중앙화 위험</li>
                </ul>

                <h4>만약 공격자가 PoW 네트워크의 해시 파워의 51% 이상을 장악하면 어떤 일이 벌어지나요?</h4>
                <li>블록 생성 독점</li>
                <li>이중 지불: 이전 트랜잭션 취소하고 새 체인을 생성해 코인을 다시 사용</li>
                <li>네트워크 방해 : 다른 채굴자들이 유효한 블록을 생성하지 못하도록 방해.</li>

                <h4>PoS에 대해 설명하세요.</h4>
                지분증명. 네트워크 참여자의 지분을 기준으로 블록을 생성하고 합의를 이루는 방식.<br/>
                PoW와는 달리 에너지 효율성과 확장성이 높음.

                <h4>PoS 네트워크에서 블록이 생성되는 과정은?</h4>
                <ol>
                    <li>지분 기반 참여: 스테이킹</li>
                    <li>검증자 선택: 네트워크는 무작위 알고리즘으로 블록 생성자 선택. 선택 기준은 스테이킹된 코인의 양과 코인을 스테이킹한 기간.</li>
                    <li>블록 검증 및 추가: 선택된 검증자가 블록 생성하면 나머지 검증자가 이를 검증하여 블록체인에 추가</li>
                </ol>

                <h4>PoS의 장단점에 대해 말하시오.</h4>
                장점: 에너지 효율, 확장성 - 블록 생성 속도 빠름, 보안성 - 경제적 페널티<br/>
                단점: 지분 집중화 문제 - 초기 지분 많으면 유리, 복잡성 - 구현 및 운영 복잡

                <h4>PoS의 보안성에 대해 설명하세요. 다음 두 보안 장치가 있음.</h4>
                <ul>
                    <li>Slashing: 악의적 검증자는 스테이킹된 자산을 잃을 위험이 있음. 예: 이더리움 2.0</li>
                    <li>51% 공격 방지: PoW에서는 해시 파워 과반수를 장악해야 하지만, PoS에서는 네트워크의 과반수 지분을 확보해야 함.</li>
                </ul>

                <h4>Nothing at Stake 문제란?</h4>
                <ul>
                    <li>PoS 블록체인에서 검증자가 여러 체인에 동시에 서명해 네트워크의 신뢰성/일관성을 저하시킬 위험.</li>
                    <li>문제 원인: PoW와 달리 경제적 비용 없이 여러 체인에서 작업할 수 있는 구조.</li>
                    <li>문제의 결과: 합의 실패 - 혼란, 체인 분기로 인한 보안 위협 - 이중지불, 정당한 거래가 무효화될 가능성, 네트워크 신뢰 손상</li>
                </ul>

                <h4>PoS에서 Nothing at Stake 문제 해결 방안</h4>
                <ul>
                    <li>경제적 패널티,Slashing</li>
                    <li>체인 선택 규칙 : Longest Chain Rule - 가장 긴 체인(또는 가능 많은 작업 증명을 포함한 체인)이 유효한 체인.</li>
                    <li>경제적 인센티브 설계</li>
                    <li>검증자 서명 공개</li>
                </ul>

                <h4>DPoS,위임 지분 증명이 무엇인가요?</h4>
                PoS에서 고래만 계속 블록생성할 위험 (중앙화 위험)을 해결하기 위해 만들어진 것.<br/>
                대표자를 선출해 블록 생성과 검증을 맡기고 이 대표자가 네트워크 블록 생성과 검증을 담당하는 합의 알고리즘.<br/>
                PoS 효율성 개선과 PoW 탈중앙화 유지를 목표로 설계됨.

                <h4>DPoS 작동방식 설명하세요.</h4>
                <ul>
                    <li>대표자 선출.: 사용자가 지분을 위임하여 투표로 내 코인으로 대표자 선출. 예: EOS</li>
                    <li>블록 생성과 검증: 대표자들이 번갈아 가며 블록 생성; PoS처럼 복잡한 해시 계산이 필요 없어 블록 생성 속도가 매우 빠름</li>
                    <li>보상 분배: 대표자는 블록 생성으로 받은 보상을 자신에게 투표한 사용자와 공유함</li>
                    <li>대표자 교체: 사용자는 언제든 자신의 투표를 변경해 대표자 교체 가능</li>

                </ul>

                <h4>DPoS의 장단점에 대해 설명하세요.</h4>
                장점: 소수의 대표자가 블록을 생성해 블록 생성과 검증 속도가 빠름; 에너지 효율; 미국 대통령 선출 방식처럼 민주적 구조; 실시간 부정직한 대표자 빠르게 교체 가능
                <br/>단점: 대표자 담합 등 중앙화 가능성; 낮은 투표 참여율; 대표자 신뢰 문제

                <h4>DPoS 블록체인 사용하는 곳은?</h4> EOS, Tron, Steem

                <h4>DPoS의 보안 장치는?</h4>
                대표자 교체 가능; 경제적 인센티브 - 부정행위시 신뢰 잃고 보상 못 받음, Slashing; 투명성

                <h4>채굴이란?</h4>
                블록체인 네트워크에서 노드로 새로운 불록을 생성하여 체인에 연결하고 보상을 받는 것

                <h4>반감기의 역할은?</h4>
                채굴 보상이 주기적으로 절반으로 줄어들게 함으로써 암호화폐의 공급량을 조절하고 희소성을 유지하며, 궁극적으로 암호화폐의 가치를 보호함.

                <h4>거래수수료는 누구에게 주나요?</h4>
                채굴자와 검증자에게 보상을 지급
                <br/>PoW에서는 채굴자에게만, PoS에서는 검증자에게만

                <h4>거래 수수료는 어디에 쓰여요?</h4>
                네트워크상의 스팸 공격 줄이기; 거래 수수료로 트랜잭션을 확인하고 유효성을 검증하는 사용자에게 인센티브를 제공함


                <h4>비트코인의 채굴자를 이더리움에서 뭐라고 부를까요?</h4> 블록 제안자,proposer


                <h4>채굴풀이란?</h4>
                채굴을 위해 만들어진 조합<br/>
                채굴 풀의 위험성 - 51% 공격 을 극복한 좋은 사례: GHash.IO - 탈중앙화를 지키기위해 스스로 51% 이하로 해시 파워를 줄인 사례


    </div>
  )
}

export default TIL0206