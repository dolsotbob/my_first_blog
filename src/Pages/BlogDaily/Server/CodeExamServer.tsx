export const TIL0514ControllerExample = `
// user.controller.ts
import { Controller, Get, Post } from '@nestjs/common'; 
import { UserService } from './user.service'; 

// 이 컨트롤러는 /user 경로에 대한 요청을 처리한다 
@Controller('user')
// UserService를 주입 받아 내부에서 사용한다 -> NestJS는 의존성 주입을 자동으로 처리해준다 
export class UserController { 
    constructor(private readonly userService: UserService) {}

    // Get() 메서드가 /user 요청을 처리한다 
    // 내부적으로 userService.getUser() 호출 결과를 반환한다 
    @Get()
    getUser() { 
        return this.userService.getUser();
    }
    
    // Post() 메서드가 /user 요청을 처리한다 
    // userService.createUser()의 실행 결과를 반환한다 
    @Post()
    createUser() { 
        return this.userService.createUser();
    }
}
`

export const TIL0514ServiceExample = `
// user.service.ts
// @Injectable() 데코레이터는 이 클래스가 다른 곳에서 의존성 주입(DI)될 수 있는 서비스임을 의미
// 이 서비스는 UserController에서 constructor(private readonly userService: UserService) 형태로 주입돼 사용됨
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    // GET /user 요청이 들어왔을 때 UserController에서 호출되는 메서드
	// 간단히 사용자 정보를 하드코딩된 JSON 객체로 반환
    // 사용자 정보를 가져오는 메서드 
    getUser() { 
        return { name: 'Alice', age: 25 };
    }

    // POST /user 요청이 들어왔을 때 UserController에서 호출된다
	// 실제로 DB 저장이나 유효성 검사를 하지는 않고, 단순 메시지를 반환한다
    // 사용자 생성을 처리하는 메서드
    createUser() {
        return { message: 'User created' };
    }
}
`

export const TIL0514ModuleExample = `
// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
`

export const TIL0514BuiltinPipe = `
// 클라이언트가 GET /some-id 형식의 URL로 요청했을 때 실행된다. 예: /user/5
@Get(':id')
// @Param('id')는 URL의 :id 값을 추출한다  
// ParseIntPipe는 이 값을 문자열 -> 숫자로 자동 변환한다 
findOne(@Param('id), ParseIntPipe) id: number) { 
    // id는 number 타입으로 자동 변환됨 
}
`

export const TIL0514CustomPipe = `
@Injectable()
// implements PipeTransform은 PipeTransform 인터페이스를 구현한다는 뜻 
// transform(value: any) 메서드를 반드시 정의해야 함 
// .trim은 앞뒤 공백을 제거 
export class TrimPipe implements PipeTransform { 
    transform(value: string) { 
        return value.trim();
    }
}

// 사용 예
// GET /search?keywords= hello 처럼 요청하면: 
// keyword는 " hello " -> TrimPipe가 적용되어 "hello"로 변환됨
this.service.search(keyword)는 깨끗하게 다듬어진 문자열로 실행됨
@Get()
search(@Query('keyword', TrimPipe) keyword: string) { 
    return this.service.search(keyword);
}
`

export const TIL0514MiddleExam1 = `
export function logger(req: Request, res: Response, next: Function) {
    console.log(₩[S{req.method}] S{req.url}₩);
    next();
}
`

export const TIL0514MiddleExam2 = `
// app.module.ts
// @Module – NestJS 모듈 데코레이터
// NestModule – configure() 메서드를 구현하기 위해 필요한 인터페이스
// MiddlewareConsumer – 미들웨어를 특정 경로에 연결할 수 있게 도와주는 NestJS 클래스
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module ({ /* ... */ })
// AppModule은 NestModule 인터페이스를 구현하고 있으며 
// configure() 메서드를 통해 미들웨어를 등록할 수 있다 
export class AppModule implements NestModule { 
    configure(consumer: MiddlewareConsumer) { 
        // consumer.apply(logger) → logger라는 미들웨어를 등록하겠다는 뜻 (예: function logger(req, res, next))
        // .forRoutes('*') → 모든 경로에 대해 이 미들웨어를 적용하겠다는 의미입니다. ('*'은 모든 요청 경로를 의미)
        consumer.apply(loger).forRoutes('*');
    }
}
`

export const TIL0514AuthModuleSetting = `
// auth.module.ts
@Module({ 
// imports: [JwtModule.register(...)]: NestJS에 JWT 관련 기능 등록
// JwtModule은 @nestjs/jwt에서 제공하는 모듈로, JWT 생성 및 검증을 수행한다
imports: [
    JwtModule.register({
      // JWT의 서명/검증 키를 .env에서 가져온다 
      secret: process.env.JWT_SECRET,  
      signOptions: { expiresIn: '15m' },
    }),
  ],
  // AuthService: 로그인 처리 및 사용자 검증 로직 담당
  // JwtStrategy: JWT 토큰을 해석하고 req.user로 사용자 정보를 설정하는 Passport 전략
  providers: [AuthService, JwtStrategy],
  // AuthController: /auth/login, /auth/me 등의 API 라우트를 처리합니다
  controllers: [AuthController],
})
export class AuthModule {}
`

export const TIL0514JwtStrategy = `
// jwt.strategy.ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
`

export const TIL0514GuardExample = `
// jwt-auth.guard.ts
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
`

export const TIL0514loginExample = `
// auth.service.ts
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
`

export const TIL0514login2Example = `
// auth.controller.ts
@Post('login')
login(@Body() userDto: LoginDto) {
  const user = this.userService.validateUser(userDto);
  return this.authService.login(user);
}
`

export const TIL0515NestJSClassConstructor = `
@Injectable()
export class DatatypeService { 
  constructor(private readonly ethersService: EthersService) {}

  async positive() { 
    // EthersService 안에 있는 함수 호출 
    return await this.ethersService.positiveNumber();
  }
}
`

export const TIL0516SetBalanceDto = `
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SetBalanceDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
`
export const TIL0516SetUserDto = `
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SetUserDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;
}
`

export const TIL0516DTOinController = `
@Patch('balance')
  async setBalance(@Body() setBalanceDto: SetBalanceDto) {
    return await this.datatype2Service.balance(
      setBalanceDto.address,
      setBalanceDto.value
    );
  }
`

export const TIL0516DTOinService = `
setBalance(address: string, value: number) {
  // 실제 DB 저장 or 스마트 컨트랙트 호출 등
}
`
export const TIL0516exceptionClass = `
import { NotFoundException } from '@nestjs/common';

throw new NotFoundException('사용자를 찾을 수 없습니다');
`

export const TIL0516exceptionClass2 = `
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "statusCode": 404,
  "message": "사용자를 찾을 수 없습니다",
  "error": "Not Found"
}
`

export const TIL0516CustomException = `
// exception.config.ts
import { HttpException } from '@nestjs/common';

function createException(
  message: string,
  statusCode: number,
  description?: string
): HttpException {
  return new HttpException(message, statusCode, { description });
}

export const exceptions = {
  NOT_FOUND: createException('Not Found', 404),
  INDEX_OUT_OF_BOUNDS: createException('Index out of bounds', 400),
  NAME_CANNOT_BE_EMPTY: createException('Name cannot be empty', 400),
  USER_NOT_FOUND: createException('User not found', 400),

  // 동적으로 BadRequest 생성
  createBadRequestException: (message: string) =>
    createException(message, 400),
};
`
export const TIL0516CustomExceptionExample = `
import { exceptions } from '../exceptions/exception.config';

if (name === '') {
  throw exceptions.NAME_CANNOT_BE_EMPTY;
}

try {
  const user = await contract.getUser(addr);
} catch (error) {
  if (error.reason === 'User not found') {
    throw exceptions.USER_NOT_FOUND;
  }

  throw exceptions.createBadRequestException(error.message);
}
`

export const TIL0520AOPExample = `
import {
  Injectable,  // NestJS에서 의존성 주입이 가능한 클래스라는 뜻
  NestInterceptor,
  ExecutionContext,  // 요청 정보 포함 
  CallHandler,  // 다음 처리 단계; next() 처럼 
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
// 이 클래스는 NestInterceptor 인터페이스를 구현함. 즉, Nest의 요청/응답 사이 개입 가능
export class SuccessInterceptor implements NestInterceptor {
  //  intercept(context, next) 메서드. 이 메서드로 인터셉트가 동작함 
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 핵심 로직 
    // next.handle() → 실제 컨트롤러 메서드를 실행해서 응답 스트림(Observable) 을 가져옵니다.
	  // pipe(map(...)) → 응답 데이터를 가공합니다.
    return next.handle().pipe(
      map((data) => ({
        status: 'SUCCESS',
        errorCode: {},
        data: data || {},
      }))
    );
  }
}
`

export const TIL0522scheduleModule = `
// app.module.ts
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [ScheduleModule.forRoot()],  // CRON 등 예약 작업 기능 활성화
  providers: [SchedulerService],  // 예약 작업을 정의한 서비스
})
export class AppModule {}
`

export const TIL0522schedulerLogger = `
// NestJS의 예약 작업 기능(@nestjs/schedule)을 사용해서 30초마다 자동으로 실행되는 작업을 정의한 예시
// scheduler.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  // 매 30초마다 실행
  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCron() {
    this.logger.log('30초마다 실행되는 작업');
  }
}
`

export const TIL0522LoggerExample = `
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyService {
  private readonly logger = new Logger(MyService.name); // 클래스명 자동 로깅 prefix

  example() {
    this.logger.log('기본 로그입니다.');
    this.logger.warn('경고 로그입니다.');
    this.logger.error('에러 로그입니다.');
  }
}
`
