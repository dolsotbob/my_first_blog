import React from 'react'

const TIL0207 = () => {
  return (
    <div className='BlogDaily'>
      <h3>이더리움</h3>
      <p>2025년 2월 7일</p>
      <h4>튜링 기계계</h4>
      앨런 튜링(Alan Turing)이 제안한 가상의 계산 모델<br />
      모든 계산 가능한 문제를 모델링할 수 있는 이론적 컴퓨터.

      <h4>튜링 완전성에 대해 설명하세요.</h4>
      <ul>
        <li>토스트기 밖에 없는 주방에서는 빵 굽기 밖에 못함 (튜링 불완전함)</li>
        <li>모든 도구와 리소스가 있는 주방에서는 어떤 요리도 가능함 (튜링 완전함)</li>
        <li>계산기 vs. 컴퓨터</li>
        <li>반복문과 조건문이 가능해야 튜링 완전함.</li>
        <li>즉, 튜링 완전성은 튜링 기계와 같은 계산 능력을 가졌음을 의미한다. 어떤한 계산 가능한 문제도, 적절한 알고리즘과 충분한 리소스(시간과 메모리)가 주어진다면 해결할 수
          있다.</li>
        <li>블록체인에서 튜링 완전성을 가진 플랫폼은 더 많은 유연성을 제공하지만 동시에 더 많은 책임과 위험 관리가 필요함.</li>
      </ul>

      <h4>이더리움은 튜링 완전한가?</h4>
      네, 이더리움의 EVM은 튜링 완전성을 지원해 복잡한 스마트 계약 생성을 가능하게 함.<br />
      튜링 완전해서 생길 수 있는 문제: (1) 무한 루프 문제(이를 막기 위해 가스 제한을 둠), (2) 보안 취약점 발생 가능

      <h4>비탈릭 부테린은 왜 이더리움을 만들었나요?</h4>
      프로그래밍 가능한 블록체인을 만들겠다는 목표로 (비트토인 op 코드 몇 개로는 그러기 어려움)

      <h4>이더리움 핵심 목표는 무엇인가요?</h4>
      <ul>
        <li>스마트 계약</li>
        <li>DApps</li>
        <li>프로그래밍 가능성 : 튜링 완전한 언어(Solidity)를 통해 블록체인 상에서 복잡한 프로그램 구현 가능</li>
      </ul>

      <h4>이더리움은 왜 프로그래밍이 가능한 블록체인일까?</h4>
      <ul>
        <li>스마트 계약: Solidity와 같은 프로그래밍 언어로 작성되며, 특정 규칙을 코딩하고 이를 블록체인에 배포하여 실행할 수 있음. -- 다양한 DApps을 실행할 수 있는
          플랫폼이 됨.</li>
        <li>EVM: 이더리움 네트워크에서 스마트 계약을 실행하는 환경.</li>
        <li>튜링 완전성: 스마트 계약이 튜링 완전한 언어로 작성됨. 계약이 매우 유연하고 강력한 기능을 제공할 수 있음.</li>
      </ul>

      <h4>비트코인과 이더리움은 설계 목적이 어떻게 다른가?</h4>
      비트코인: 디지털 통화(가치 저장 및 거래)가 목적. 단순하고 안정적인 네트워크 설계<br />
      이더리움: 스마트 계약 및 DApp 실행이 목적. 유연하고 확장 가능한 네트워크 설계.

      <h4>ECDSA가 뭔가요?</h4>
      <li>타원 곡선 암호학을 기반으로한 디지털 서명 알고리즘.</li>
      <li>기존 RSA보타 짧은 키 길이로도 높은 보안성을 제곰하며, 개인키로 서명을 생성하고 공개키로 이를 검증하는 방식으로 동작함.</li>
      <li>장점: 속도와 보안성을 동시에 확보할 수 있음.</li>
      <li>비트코인, 이더리움에서 거래 서명과 인증에 쓰임.</li>

      <h4>이더리움의 블록체인 모델은 비트코인과 어떻게 다른가요?</h4>
      비트코인은 UTXO 기반 모델, 이더리움은 계정 기반 모델<br />
      비트코인 모델에서는 UTXO 합이 잔액임, 이더리움에서는 계정 잔액.

      <h4>이더리움 계정의 종류 2가지는 무엇인가요?</h4>
      <ul>
        <li>외부 소유 계정(EOA): 사람이 씀. 프라이빗 키가 있어 디지털 서명 할 수 있고 트랜젝션 생성 할 수 있음.</li>
        <li>스마트 계약 계정(CA): 특정 코드가 배포된 계정. 프라이빗 키가 없어서 트잭 생성 못함 (출금 못함). 스스로 트잭 생성은 못하지만 EOA가 요청한 트랜젝션 만들 수는
          있음 (인터널 트랜잭션).</li>
      </ul>

      <h4>이더리움의 논스와 비트코인의 논스는 어떻게 다른가요?</h4>
      <ul>
        <li>해당 계정에서 보낸 트랜잭션의 횟수/순서 (비트코인에서는 시도 횟수로 PoW 채굴 과정에서 유효한 해시를 찾기 위해 사용)</li>
        <li>이중지불을 비트코인에서는 UTXO로 방지 - 사용된 UTXO 값은 더하지 않음. 미사용된거 합치면 잔액. 이미 소모된 UTXO를 다시 사용하는 트잭은 유효하지 않고
          네트워크에서 거부됨.</li>
        <li>이중지불을 이더에서는 논스로 막음. 즉 재생 공격(replay attack)을 방지함.</li>
        <li>이더리움의 논스는 계정별 트랜잭션의 고유 식별자 역할을 함.</li>
      </ul>

      <h4>이더리움에서 재생 공격 방지 방법은?</h4>
      <ul>
        <li>논스 사용</li>
        <li>체인 ID: 포크된 체인에서 체인 ID를 도입해 각 체인을 구분함. 예: 이더리움과 이더리움 클래식은 서로 다른 체인 ID 사용</li>
      </ul>

      <h4>EVM이란?</h4>
      <ul>
        <li>Ethereum Virtual Machine. 우리가 작성한 코드와 이더리움 블록체인 사이에 존재하는 가상 머신.</li>
        <li>여행갈 때 가져가는 어댑터</li>
        <li>이더리움에서 스마트 계약 기반의 dApp은 Solidity로 작성됨. Solidity 코드를 Solidity 컴파일러(solc)를 사용해 EVM이 이해할 수 있는
          Bytecode로 변환. -- 바이트코드를 이더리움 네트워크로 배포. -- EVM이 바이트코드를 해석하고 실행함.</li>
      </ul>

      <h4>EVM에서 바이트코드는 스택 기반 아키텍처로 실행됩니다. 바이트코드가 실행되는 과정을 설명해보세요.</h4>
      EVM은 명령어를 Opcode로 해석하며 모든 연산은 스택을 이용해 처리됨.<br />
      스택, 즉 프링글즈 과자처럼 먼저 들어온 대로 쌓아 올리고, 맨 마지막에 올린 것 부터 꺼냄.

      <h4>EVM에는 보안을 위한 어떤 장치가 있나요?</h4>
      <li>보안 격리(Sandboxing): 스마트 계약 간 충돌을 방지하며, 잘못된 코드가 네트워크나 다른 계약에 영향을 미치지 않도록 격리된 실행 환경을 제공함.</li>
      <li>가스(Gas): 바이코드 실행에는 가스 비용이 소모됨. 각 Opcode는 실행 비용에 따라 특정 가스 양이 할당됨.</li>

      <h4>스마트 컨트랜트란?</h4>
      <ul>
        <li>블록체인 네트워크에서 호스팅되고 실행되는 프로그램으로, 특정 조건을 설정하고 해당 조건이 충족되면 자동으로 계약을 이행하도록 설계된 자동화된 계약 실행 프로토콜임.</li>
        <ul>
          <li>프로토콜: 컴퓨터나 네트워크 시스템이 데이터를 주고받을 때 따르는 규칙과 절차. 데이터 전송 방식, 오류 처리, 인증 절차 등을 표준화하여 다른 시스템간 원활한
            통신을 가능하게 함. 디지털 세계에서 ‘언어’와도 같은 역할을 함.</li>
        </ul>
        <li>블록체인의 분산 구조와 암호화 기술로 인해 계약 조건이나 이행 내용을 변조하기 어렵고, 계약을 신뢰하기 위한 제3자가 필요하지 않음.</li>
        <li>닉 재보의 정의: 계약 조건을 실행하는 전산화된 트랜잭션 프로토콜은 일반적인 계약 조건을 만족하고, 악의적이거나 우발적인 예외를 최소화하며, 신뢰할 만한 중개자의 필요성을
          최소화 하는 것을 목표로 한다. 마치 자판기와 같다.</li>
      </ul>

      <h4>스마트 컨트랙트가의 장점이 뭔가요? 일반적인 중앙집권화된 디지털 계약과 비교해 설명하세요.</h4>
      <ul>
        <li>보안: 분산형 블록체인에서 실행되어 Single point of failure 위험이 없음.</li>
        <li>신뢰성: 모드 노드에 의해 검증되어 계약 위변조가 매우 어려움.</li>
        <li>공평함: 수수료 없고, 특정 용의적 목적의 제3자가 필요 없음.</li>
        <li>효율성</li>
      </ul>

      <h4>스마트 컨트랙트의 한계점은?</h4>
      <ul>
        <li>배포 후 작동 수정이 불가능함: 보안 허점이 발견될 경우 해킹에 취약해 질 수 있음. 프록시 패턴과 같은 컨트랙트 업그레이드 방법이 개발되었으나 완벽한 해결책은 아님.
        </li>
        <li>블록체인 외 정보를 스스로 얻지 못함. 오라클을 사용하지만, 그 데이터가 신뢰할 수 있는지, 전달 과정에서 오류가 발생하지 않는지 확인해야 함. 악의적인 데이터 입력 시
          계약이 의도하지 않은 방식으로 실행될 위험도 있음.</li>
      </ul>

      <h4>지갑에 EVM 계열 블록체인 노드를 어떻게 연결하나요?</h4>
      지갑은 특정 노드의 RPC URL(노드 주소)을 이용해 블록체인에 저장된 온체인 데이터를 요청할 수 있음. 이러한 노드와의 통신 방식은 RPC(Remote Procedure
      Call)이라고 하며 RPC URL을 통해 연결함.

      <h4>메타마스크에서 다른 지갑 주소로 KAIA 보내며 컨펌을 누르면 어떤 일이 벌어지나요?</h4>
      <ol>
        <li>트랜젝션 세부 정보가 명확히 표시됨. 유저는 승인 진행</li>
        <li>개인키로 트랜잭션에 디지털 서명</li>
        <li>서명된 트랜잭션은 네트워크로 브로드캐스트 되어 처리됨</li>
        <li>네트워크가 트랜잭션 처리하고 블록에 포함한 뒤 상태 업그레이드</li>
      </ol>
    </div>
  )
}

export default TIL0207