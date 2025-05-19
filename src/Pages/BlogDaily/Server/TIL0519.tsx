import React from 'react'

const TIL0519 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 19일</p>
            <h3>NestJS - 컨트랙트 요청 API 3</h3>

            <p>@Query - 쿼리스트링 데이터를 받을 때</p>
            <ul><li>URL 뒤에 ?key=value 형태로 전달되는 데이터를 처리함</li>
                <li>검색 조건, 페이지네이션 등 선택적 데이터를 받을 때 자주 사용됨</li>
                <li>예시:</li></ul>
            <pre><code>{`
    // GET /users?page=2&limit=10
    @Get('users')
    getUsers(@Query('page') page: number, @Query('limit') limit: number) {
        return ₩페이지: S{page}, 제한: S{limit}₩;
    }        
    `}</code></pre>

            <p>@Param - URL 경로 변수 받기</p>
            <ul><li>URL 경로에 포함된 값을 변수처럼 추출할 때 사용됨</li>
                <li>특정 리소스 식별자(id 등)를 받을 때 자주 사용됨</li>
                <li>예시:</li></ul>
            <pre><code>{`
    // GET /users/42
    @Get('users/:id')
    getUserById(@Param('id') id: string) {
        return ₩사용자 ID: S{id}₩;
    }        
    `}</code></pre>

            <p>@Body - POST/PUT 요청의 본문 데이터 받기</p>
            <ul><li>클라이언트가 보내는 JSON 형식의 데이터를 받을 때 사용됨</li>
                <li>주로 POST, PUT 등의 요청에서 사용됨</li>
                <li>예시:</li></ul>
            <pre><code>{`
    // POST /users
    @Post('users')
    createUser(@Body() createUserDto: CreateUserDto) {
        return createUserDto;
    }
    `}</code></pre>

        </div>
    )
}

export default TIL0519