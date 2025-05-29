export const TIL0523TableSchema = `
CREATE TABLE users (
  id INT PRIMARY KEY,  
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age > 0)
);
`

export const TIL0523ForeignKey = `
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
`

export const TIL0523UniqueKey = `
CREATE TABLE employees (
  id INT PRIMARY KEY,
  email VARCHAR(100) UNIQUE
);
`

export const TIL0523NotNull = `
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
`

export const TIL0526SELECT = `
SELECT name, age FROM users; 
or 
SELECT * FROM users;  -- 전체 조회 
`

export const TIL0526INSERT = `
INSERT INTO users (name, age) VALUES ('Alice', 25);
`

export const TIL0526UPDATE = `
UPDATE users SET age = 26 WHERE name = 'Alice'; 
`

export const TIL0526DELETE = `
DELETE FROM users WHERE age < 20;
`

export const TIL0526OrderBy = `
SELECT * FROM 테이블명
ORDER BY 컬럼명 [ASC|DESC];

// 예시
SELECT * FROM users ORDER BY age;
-- 나이 오름차순 정렬

SELECT * FROM users ORDER BY name DESC;
-- 이름 내림차순 정렬
`

export const TIL0526LIMIT = `
SELECT * FROM 테이블명
LIMIT 숫자;

// 예시
SELECT * FROM users LIMIT 5;
-- 최대 5명만 보여줘
`

export const TIL0526OrderByLIMIT = `
// 예시: 나이 많은 순서로 3명만 보여줘
SELECT * FROM users 
ORDER BY age DESC
LIMIT 3 
`

export const TIL0526GROUPBY =
  `
// 예시1: 각 도시 별 인원수 
SELECT city, COUNT(*)
FROM users 
GROUP BY city; 

// 예시2: 도시별 평균 나이 
SELECT city, AVG(age)
FROM users
GROUP BY city; 
`

export const TIL0528typeORMentity = `
// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
`

export const TIL0529repositoryExample = `
//  NestJS에서 TypeORM 기반의 Repository 패턴을 사용해 UserService를 구성한 예
// User 테이블에 대해 CRUD 중 R과 C 기능 제공  
@Injectable()   
export class UserService { 
  constructor(
    @InjectRepository(User)  // User 엔터티에 대한 TypeORM Repository 주입 
    // userRepository는 DB와 연결된 리포지토리 객체로, find(), save() 등의 메서드를 사용할 수 있게 해줌
    private userRepository: Repository<User>,
  ) {}

  // 모든 사용자(User)를 배열 형태로 조회한다 
  // SELECT * FROM user에 해당하는 동작 
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // 특정 id 값을 가진 사용자 1명만 조회한다 
  // 조건 검색할 땐 where 옵션 사용 
  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  // CreateUserDto 형식의 데이터를 받아 새로운 User를 저장
  // save()는 새 레코드를 만들거나, 이미 존재하는 id가 있으면 수정도 할 수 있다
  create(data: CreateUserDto): Promise<User> {
    return this.userRepository.save(data);
  }
}
`

export const TIL0529repositoryFind = `
// SELECT * FROM user;
async findAllUsers(): Promise<User[]> {
  return this.userRepository.find();
}
`

export const TIL0529repositoryFindone = `
// SELECT * FROM user WHERE email = 'test@example.com' LIMIT 1;
async findUserByEmail(email: string): Promise<User | null> {
  return this.userRepository.findOne({ where: { email } });
}
`

export const TIL0529repositoryFindOneBy = `
// SELECT * FROM user WHERE userId = 'abc123' LIMIT 1;
async findUserById(userId: string): Promise<User | null> {
  return this.userRepository.findOneBy({ userId });
}
`

export const TIL0529repositoryFindBy = `
// SELECT * FROM user WHERE email = 'test@example.com';
async findUsersByEmail(email: string): Promise<User[]> {
  return this.userRepository.findBy({ email });
}
`

export const TIL0529repositoryfindOneOrFail = `
/*
	SELECT * FROM user WHERE id = 1 LIMIT 1;
	결과가 없으면 예외가 발생한다는 점 외에는 findOne과 SQL 동일
*/
async mustFindUser(id: number): Promise<User> {
  return this.userRepository.findOneOrFail({ where: { id } });
}
`

export const TIL0529repositorySave = `
/*
	-- id가 없는 경우 (INSERT)
	INSERT INTO user (name, email) VALUES ('Alice', 'alice@example.com');

	-- id가 있는 경우 (UPDATE)
	UPDATE user SET name = 'Alice', email = 'alice@example.com' WHERE id = 1;
*/
async saveUser(user: Partial<User>): Promise<User> {
  return this.userRepository.save(user); // id가 있으면 update, 없으면 insert
}
`

export const TIL0529repositoryInsert = `
// INSERT INTO user (name, email) VALUES ('Alice', 'alice@example.com');
async insertUser(user: Partial<User>): Promise<void> {
  await this.userRepository.insert(user); // 반환값은 InsertResult
}
`

export const TIL0529repositoryUpdate = `
// UPDATE user SET email = 'new@example.com' WHERE userId = 'abc123';
async updateUserEmail(userId: string, newEmail: string): Promise<void> {
  await this.userRepository.update({ userId }, { email: newEmail });
}
`

export const TIL0529repositoryRemoveDelete = `
/*
	DELETE FROM user WHERE id = 1;
	먼저 SELECT로 엔티티를 로딩한 뒤 삭제
*/
async removeUserById(id: number): Promise<void> {
  const user = await this.userRepository.findOneBy({ id });
  if (user) await this.userRepository.remove(user);
}

or
​
/*
	DELETE FROM user WHERE userId = 'abc123';
	바로 삭제, 엔티티 로딩 없이 실행됨
*/
async deleteUserByUserId(userId: string): Promise<void> {
  await this.userRepository.delete({ userId });
}
`

export const TIL0529repositoryCount = `
// SELECT COUNT(*) FROM user;
async countAllUsers(): Promise<number> {
  return this.userRepository.count();
}
`

export const TIL0529repositoryExist = `
/*
	SELECT 1 FROM user WHERE email = 'test@example.com' LIMIT 1;
	exist()는 결과가 존재하면 true, 없으면 false
*/
async isEmailTaken(email: string): Promise<boolean> {
  return this.userRepository.exist({ where: { email } });
}
`

export const TIL0529repositoryCreateQueryBuilder = `
// SELECT * FROM user WHERE email LIKE '%keyword%';
async searchUsersByEmailPattern(keyword: string): Promise<User[]> {
  return this.userRepository
    .createQueryBuilder('user')
    .where('user.email LIKE :email', { email: ₩%S{keyword}%₩ })
    .getMany();
}
`

export const TIL0529repositorySoftDelete1 = `
@DeleteDateColumn()
deletedAt?: Date;
`

export const TIL0529repositorySoftDelete2 = `
/*
	UPDATE "user"
	SET "deletedAt" = CURRENT_TIMESTAMP
	WHERE "id" = 1;
*/ 
async softDeleteUser(id: number): Promise<void> {
  await this.userRepository.softDelete({ id });
}
`


