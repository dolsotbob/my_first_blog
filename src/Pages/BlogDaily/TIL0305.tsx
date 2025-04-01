import React from 'react';

const TIL0305 = () => {
  return (
    <div className='BlogDaily'>TIL0305
      <p>2025년 3월 5일</p>

      <h3>HTTP/네트워크</h3>

      <h4>2 티어 아키텍처</h4>
      <ul><li>클라이언트 - 서버 아키텍처; 리소스가 존재하는 곳(서버)과 리소스를 사용하는 앱을 분리시킨 것</li>
        <li>커피숍 손님(Client)은 리소스를 가지고 있는 점원(Server)에게 물품을 "요청"해야 함. 요청에 따라 점원(Server)은 리소스를 담아 응답함</li></ul>

      <p>3-Tier 아키텍처: 보통 서버는 리소스를 전달해줄 뿐 저장하는 공간은 '데이터베이스' 라는 창고에 둠</p>
      <ul>
        <li>Java의 스프링 프레임워크</li>
      </ul>

      <h4>HTTP</h4>
      <ul>
        <li>HyperText Transfer Protocol</li>
        <li>웹에서 클라이언트(브라우저 등)와 서버 간에 데이터를 주고받기 위한 프로토콜</li>
        <li>HTTPS: HTTP에 보안이 추가된 버전. 데이터가 암호화됨</li>
      </ul>

      <h4>HTTP Messages</h4>
      <ul>
        <li>클라이언트와 서버 간의 소통을 정의하는 기본 단위; 요청과 응답 메시지로 구성됨</li>
        <li>요청(Requests)과 응답(Responses)은 다음과 같은 유사한 구조를 가짐:
          <ul>
            <li>start line: 요청이나 응답의 상태</li>
            <li>HTTP headers</li>
            <li>empty line</li>
            <li>body: payload</li>
          </ul>
        </li>
        <li>Stateless: HTTP는 통신규약일 뿐 상태를 저장하지 않음. 햄버거 가게에서 내가 전 날 주문한 것을 기억 못하는 것처럼</li>
      </ul>

      <h4>HTTP Requests</h4>
      <p>가져다 쓸 줄 알아야 하지만 암기할 필요 없고, 내용에 매몰되지 말기</p>
      <p>Start line</p>
      <ol>
        <li>수행할 작업이나 방식을 설명하는 HTTP method를 나타냄.
          <ul>
            <li>예: GET method는 리소스를 받아야 하고, POST method는 데이터를 서버로 전송함</li>
          </ul>
        </li>
        <li>요청 대상 또는 프로토콜, 포트, 도메인의 절대 경로는 요청 컨텍스트에 작성됨. 이 요청 형식은 HTTP method마다 다름.
          <ul>
            <li>origin 형식, absolute 형식, authority 형식, asterisk 형식</li>
          </ul>
        </li>
        <li>HTTP 버전</li>
      </ol>

      <p>Headers</p>
      <ul>
        <li>Request headers: fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보 포함</li>
        <li>General headers: 메시지 전체에 적용됨; body를 통해 전송되는 데이터와 관련 없음</li>
        <li>Representation headers: body에 담긴 리소스의 정보를 포함</li>
      </ul>

      <p>Body</p>
      <ul>
        <li>단일-리소스 본문(Single-resource bodies)
          <ul>
            <li>헤더 두 개(Content-Type과 Content-Length)로 정의된 단일 파일로 구성됨</li>
          </ul>
        </li>
        <li>다중-리소스 본문(Multiple-resource bodies)
          <ul>
            <li>여러 파트로 구성된 본문에서는 각 파트마다 다른 정보를 지님</li>
          </ul>
        </li>
      </ul>

      <h4>HTTP Responses</h4>
      <p>Status line</p>
      <p>다음 정보 포함:</p>
      <ol>
        <li>현재 프로토콜의 버전</li>
        <li>상태 코드 - 요청의 결과를 나타냄</li>
        <li>상태 텍스트 - 상태 코드에 대한 설명</li>
      </ol>
      <ul>
        <li>예: HTTP/1.1 404 Not Found</li>
      </ul>

      <p>Headers</p>
      <p>요청 헤더와 동일한 구조</p>

      <p>Body</p>
      <ul>
        <li>단일-리소스 본문
          <ul>
            <li>길이가 알려진 단일-리소스 본문의 두 개의 헤더로 정의함</li>
            <li>길이를 모르는 단일 파일로 구성된 단일-리소스 본문은 Transfer-Encoding이 chunked로 설정되어 있으며, 파일은 chunk로 나뉘어 인코딩됨</li>
          </ul>
        </li>
        <li>다중-리소스 본문(Multiple-resource bodies)
          <ul>
            <li>서로 다른 정보를 담고 있는 body</li>
          </ul>
        </li>
      </ul>

      <h4>URL과 URI</h4>
      <p>URL: 서버가 제공되는 환경에 존재하는 파일의 위치</p>

      <ul>
        <li><span style={{ color: 'green' }}>:scheme:</span></li>
        <li><span>:hosts</span></li>
        <li><span style={{ color: 'blue' }}>:url-path:</span></li>
        <li><span style={{ color: 'red' }}>:query:</span></li>
      </ul>

      <ul>
        <li><span style={{ color: 'green' }}>file://</span></li>
        <li><span>127.0.0.1</span></li>
        <li><span style={{ color: 'blue' }}>/Users/username/Desktop/</span></li>
      </ul>

      <ul>
        <li><span style={{ color: 'green' }}>http://</span></li>
        <li><span>www.google.com:80</span></li>
        <li><span style={{ color: 'blue' }}>/search</span></li>
        <li><span style={{ color: 'red' }}>?q=JavaScript</span></li>
      </ul>

      <ul>
        <li>scheme: 통신 방식(프로토콜)을 결정함</li>
        <li>hosts: 웹 서버의 이름이나 도메인, IP를 사용해 주소를 나타냄</li>
        <li>port: 웹 서버에 접속하기 위한 통로. 예: :80</li>
        <li>url-path: 웹 서버에서 지정한 루트 디렉토리로부터 시작해 웹 페이지, 이미지, 동영상 등이 위치한 경로와 파일명을 나타냄</li>
        <li>query: 웹 서버에 전달하는 추가 질문</li>
      </ul>

      <p>URL: Uniform Resource Locator; 집주소나 연락처처럼 내가 있는 곳을 나타냄</p>
      <p>URI: Uniform Resource Identifier
        <ul>
          <li>URI는 scheme, hosts, url-path에 더해 query, fragment를 포함함</li>
        </ul>
      </p>

      <h4>IP와 포트</h4>
      <p>IP address(Internet Protocol address, IP 주소): 네트워크에 연결된 특정 PC의 주소를 나타내는 체계</p>
      <p>PORT: 그 주소에 진입할 수 있는 정해진 통로; 이미 사용 중인 포트는 중복해서 사용할 수 없음</p>
      <p>IPv4: 닷(.)으로 구분된 네 덩이의 숫자로 구분된 IP 주소 체계</p>

      <h4>도메인과 DNS</h4>
      <ul>
        <li>IP 주소가 지번 또는 도로명 주소라면, 도메인 이름은 해당 주소에 위치한 상호</li>
        <li>nslookup: 터미널에서 도메인 이름을 통해 IP 주소를 확인하는 명령어</li>
      </ul>

      <p>DNS: 대여한 도메인 이름과 매칭된 IP 주소를 확인하는 작업을 하는 서버</p>

      <h4>크롬 브라우저 에러 읽기</h4>
      <p>chrome://network-errors/에서 에러 메시지를 검색할 수 있음</p>

      <h4>SPA를 만드는 기술: AJAX</h4>
      <p>웹페이지 컴포넌트에서 필요한 데이터가 있으면 서버로부터 비동기적으로 가져올 수 있는 방법. "방법론"</p>
      <ul>
        <li>예: 검색창에 한 글자를 입력할 때마다 해당 글자로 시작하는 단어들을 서버로부터 받아와 아래 추천 검색어로 보여주는데, 여기에 AJAX가 사용됨. 검색창에서는 필요한 데이터만 비동기적으로 받아와 렌더링 됨</li>
        <li>예: 원티드 채용 공고 목록에서 무한 스크롤이 발생할 때마다 Fetch를 통해 데이터를 가져와 업데이트하고 렌더링함</li>
      </ul>

      <p>AJAX의 두 가지 핵심 기술</p>
      <ul>
        <li>Fetch: 사용자가 현재 페이지에서 작업을 하는 동안 비동기적인 방식으로 필요한 데이터를 서버로부터 받을 수 있게 해줌</li>
        <li>JavaScript와 DOM: Fetch를 통해 필요한 데이터만 가져와 DOM에 적용시켜 필요한 부분만 변경</li>
      </ul>

      <p>AJAX의 장점</p>
      <ul>
        <li>서버에서 HTML을 완성하여 보내주지 않아도 웹페이지 만들 수 있음</li>
        <li>유저 중심 애플리케이션 개발 AJAX를 사용하면 필요한 일부분만 렌더링 하기 때문에 빠르고 더 많은 상호작용이 가능한 애플리케이션을 만들 수 있음</li>
        <li>더 작은 대역폭: 필요한 데이터를 텍스트 형태(JSON, XML 등)로 보내면 되서 비교적 데이터 크기가 작음</li>
      </ul>

      <p>AJAX의 단점</p>
      <ul>
        <li>SEO에 불리함. AJAX 방식의 웹 애플리케이션의 HTML 파이은 뼈대만 있고 데이터는 없기 때문에 사이트의 정보를 긁어가기 어려움</li>
        <li>뒤로가기 버튼 문제. AJAX에서는 이전 상태를 기억하지 않기 때문에 사용자가 의도한 대로 동작하지 않음. 별도로 History API를 사용해야 함.</li>
      </ul>

      <h4>SSR과 CSR</h4>
      <p><strong>Server Side Rendering:</strong> 웹 페이지를 서버에서 렌더링함</p>
      <ol>
        <li>브라우저가 서버의 URI로 GET 요청을 보내면,</li>
        <li>서버는 정해진 웹 페이지 파일을 브라우저로 전송</li>
        <li>서버의 웹 페이지가 브라우저에 도착하면 완전히 렌더링 됨</li>
      </ol>

      <p><strong>Client Side Rendering:</strong> 웹페이지를 클라이언트에서 렌더링함</p>
      <ol>
        <li>브라우저의 요청을 서버로 보내면 서버는 웹 페이지의 골격이 될 단일 페이지를 보냄 (이 때 서버는 웹 페이지와 함께 JavaScript 파일을 보냄)</li>
        <li>클라이언트에서 웹 페이지와 함께 전달된 JavaScript 파일은 브라우저의 웹 페이지를 완전히 렌더링 된 페이지로 바꿈</li>
        <li>데이터베이스에 저장된 데이터가 필요하면, 브라우저는 Fetch와 API를 사용해 브라우저가 요청한 경로에 따라 페이지를 다시 렌더링함</li>
      </ol>

      <p style={{ color: '#ff4d94' }}>SSR, SCR 차이점</p>
      <ul>
        <li>주요 차이점은 페이지가 렌더링 되는 위치. SSR은 서버에서, CSR은 클라이언트에서</li>
        <li>CSR은 사용자가 다른 경로를 요청할 때마다 페이지를 새로고침 하지 않고 동적으로 라우팅을 관리</li>
        <li>SSR 사용: SEO가 우선 순위인 경우, 웹 페이지의 첫 화면 렌더링이 빠르게 필요한 경우 (SSR이 단일 파일 용량이 적음), 웹 페이지가 사용자와 상호작용이 적은 경우; 예: 네이버 블로그</li>
        <li>CSR 사용: 사이트에 풍부한 상호작용이 있는 경우(빠른 라우팅으로 강력한 사용자 경험 제공), 웹 애플리케이션을 제작하는 경우(빠른 동적 렌더링 등 더 나은 사용자 경험 제공); 예: 아고다</li>
      </ul>

      <h4>REST API</h4>
      <ul>
        <li>Representational State Transfer</li>
        <li>웹(http)의 장점을 최대한 활용할 수 있는 아키텍처로써 처음 소개됨</li>
        <li>웹에서 사용되는 데이터나 자원을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청과 응답을 정의하는 방식</li>
        <li>HTTP 프로토콜을 기반으로 요청과 응답에 따라 리소스를 주고받기 위해서는 알아보기 쉽고 잘 작성된 메뉴판이 필요</li>
      </ul>

      <h4>리처드슨의 REST 성숙도 모델</h4>
      <ul>
        <li>0단계: HTTP 사용</li>
        <li>1단계: 개별 리소스와의 통신 준수</li>
        <li>2단계: HTTP 메소드 원칙 준수</li>
        <li>3단계: HATEOAS 원칙 준수</li>
      </ul>
      2단계까지만 적용해도 좋은 API 디자인이라 볼 수 있고, 이런 경우를 HTTP API라고 부른다.

      <h4>REST 성숙도 모델 - 0단계</h4>
      <p>HTTP 프로토콜 사용하면 됨<br />REST API를 작성하기 위한 기본 단계</p>

      <h4>REST 성숙도 모델 - 1단계</h4>
      <p>개별 리소스와의 통신 준수<br />즉 모든 자원은 개별 리소스에 맞는 엔드포인트를 사용해야 하며 요청하고 받는 자원에 대한 정보를 응답으로 전달해야 한다.</p>

      <h4>REST 성숙도 모델 - 2단계</h4>
      <p>CRUD(Create, Read, Update, Delete)에 맞게 적절한 HTTP 메서드를 사용하는 것에 중점.</p>
      <ul>
        <li>예: 예약 가능한 시간 확인: 예약 가능한 시간을 조회(READ) ... 특정 시간에 예약 생성(CREATE)</li>
        <li>조회(READ) 하기 위해 GET 메서드를 사용해 요청을 보내고, 이 때 GET 메서드는 body를 가지지 않기 때문에 query parameter를 사용해 필요한 리소스 전달
          <ul>
            <li>예약 가능한 시간 확인 요청: GET /doctors/허준/slots?date=2022-8-10 HTTP/1.1</li>
          </ul>
        </li>
        <li>예약을 생성(CREATE) 하기 위해 POST 메서드를 사용해 요청을 보내고, POST 요청에 대한 응답이 어떻게 반환되는지가 중요함.
          <ul>
            <li>특정 시간에 예약 요청: POST / slots/123 HTTP/1.1 ...환자는 김코딩</li>
            <li>요청에 대한 응답: HTTP/1.1 201 Created
              <ul>Location: slots/123/appointment</ul>
            </li>
          </ul>
        </li>
      </ul>

      <p>HTTP 메서드를 사용할 때 유의할 규칙:</p>
      <ul>
        <li>GET 메서드는 데이터를 변화시키지 않는 요청에 사용</li>
        <li>POST 메서드는 요청마다 새로운 리소스 생성</li>
        <li>PUT 메서드는 요청마다 같은 리소스 반환. (이를 멱등(idempotent)하다고 함)</li>
        <li>PUT은 교체, PATCH는 수정의 용도로 사용</li>
      </ul>

      <h4>REST 성숙도 모델 - 3단계</h4>
      <p>HATEOAS 원칙 준수; 하이퍼미디어 컨트롤 적용; 응답에 리소스의 URL을 포함한 링크 요소를 삽입해 작성해야 함</p>

      <p>Rest 성숙도에 대해 읽을 거리: <a href="https://blog.dreamfactory.com/odata-vs-rest-what-you-need-to-know">OData vs Rest</a></p>

      <h4>Open API와 API Key</h4>
      <p>정부에서 Open API 형태로 공공 데이터 제공</p>
      <ul><li>Open API 검색할 수 있는 곳: <a href="https://www.data.go.kr/">공공데이터 포털</a></li>
        <li>Open API 경험할 수 있는 사이트: <a href="https://openweathermap.org/">Open Weather Map</a></li></ul>

      <p>API Key: 서버의 문을 여는 열쇠</p>
      <ul>
        <li>API Key가 필요한 경우에 데이터를 요청할 때 API key를 같이 전달해야 원하는 응답을 받을 수 있음</li>
        <li>예: <a href="https://www.alchemy.com/">Alchemy(블록체인을 더 빠르게 쓰고 싶을 때)</a></li>
      </ul>


      <h4>Postman</h4>
      <p><a href="https://www.postman.com/downloads/">Postman:</a> API 테스팅 무료로 할 수 있는 곳</p>
      <ul>
        <li>테스트를 위해 매번 코드를 작성하는 대신 HTTP 요청을 테스트 할 수 있는 API 테스트 도구</li>
      </ul>


    </div>
  )
}

export default TIL0305


