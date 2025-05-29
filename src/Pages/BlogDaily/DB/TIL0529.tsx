import React from 'react'
import CodeBlock from '../../../components/CodeBlock'
import { TIL0529repositoryExample } from './CodeExamDB'

const TIL0529 = () => {
    return (
        <div className='BlogDaily'>
            <p>2025년 5월 29일</p>
            <h3>Server & DB</h3>
            <h4>Repository</h4>
            <ul><li>NestJS에서 Repository는 데이터베이스에 접근하여 데이터를 CRUD하는 전담 객체다.</li>
                <li>NestJS는 TypeORM과 함께 사용할 때, 이 Repository 패턴을 적극 활용한다.</li>
                <li>Repository는 데이터베이스에 질문하거나 저장하는 창구 역할</li></ul>

            <p>주요 역할</p>
            <ul><li>읽기: 특정 조건에 맞는 데이터를 조회 (e.g., find, findOne)</li>
                <li>쓰기: 새로운 데이터를 추가 (e.g., save, insert)</li>
                <li>수정: 기존 데이터를 업데이트 (e.g., update)</li>
                <li>삭제: 데이터를 삭제 (e.g., delete)</li></ul>

            <p>예시 코드</p>
            <CodeBlock code={TIL0529repositoryExample}></CodeBlock>

            <p>왜 Repository가 중요할까?</p>
            <ul><li>비즈니스 로직과 DB 로직을 분리할 수 있다.</li>
                <li>테스트 코드 작성이 용이해진다.</li>
                <li>ORM이 제공하는 기능을 추상화해서 깔끔한 코드로 만들 수 있다</li></ul>

            <h4>Repository Methods</h4>
            <ul><li>실무에서 자주 쓰이는, TypeORM의 Repository에서 제공하는 주요 메서드별 설명과 예시 코드</li></ul>

            <p>find()</p>
            <ul><li>모든 레코드 조회</li></ul>
            <pre><code>{`
            async findAllUsers(): Promise<User[]> { 
                return this.userRepository.find();
            }
            `}</code></pre>

            <p>findOne()</p>
            <ul><li>단일 레코드 조회 (복합 조건 포함 가능)</li>
                <li>TypeORM 0.3 이후에는 findOneBy 또는 아래 예제와 같이 where을 넣은 형태로 사용</li></ul>
            <pre><code>{`
            async findUserByEmail(email: string): Promise<User | null>{ 
                return this.userRepository.findOne({ where: { email } });
            }
            `}</code></pre>

            <p>findOneBy()</p>
            <ul><li>단일 조건만 받을 때 사용</li>
                <li>findOne보다 간결함</li></ul>
            <pre><code>{`
            async findUserById(userId: string): Promise<User | null> {
                return this.userRepository.findOneBy({ userId });
            }
            `}</code></pre>

            <p>findBy()</p>
            <ul><li>여러 조건으로 여러 개의 레코드 조회</li></ul>
            <pre><code>{`
            async findUsersByEmail(email: string): Promise<User[]> {
                return this.userRepository.findBy({ email });
            }
            `}</code></pre>

            <p>findOneOrFail()</p>
            <ul><li>결과가 없으면 예외(EntityNotFoundError) 발생</li></ul>
            <pre><code>{`
            async mustFindUser(id: number): Promise<User> {
                return this.userRepository.findOneOrFail({ where: { id } });
            }
            `}</code></pre>

            <p>save()</p>
            <ul><li>데이터 저장</li>
                <li>id가 있으면 업데이트, 없으면 생성 (Upsert)</li></ul>
            <pre><code>{`
            async saveUser(user: Partial<User>): Promise<User> {
                return this.userRepository.save(user); // id가 있으면 update, 없으면 insert
            }
            `}</code></pre>

            <p>insert()</p>
            <ul><li>항상 새 데이터 삽입 (업데이트 안 됨)</li>
                <li>반환값: InsertResult</li></ul>
            <pre><code>{`
            async insertUser(user: Partial<User>): Promise<void> {
                await this.userRepository.insert(user); // 반환값은 InsertResult
            }
            `}</code></pre>

            <p>update()</p>
            <ul><li>기존 데이터 업데이트</li>
                <li>조건으로 선택, 전체 또는 부분 업데이트</li></ul>
            <pre><code>{`
            async updateUserEmail(userId: string, newEmail: string): Promise<void> {
                await this.userRepository.update({ userId }, { email: newEmail });
            }
            `}</code></pre>

            <p>remove() / delete()</p>
            <ul><li>remove()는 엔티티 객체를 넣고, delete()는 조건을 넣음</li></ul>
            <pre><code>{`
            async removeUserById(id: number): Promise<void> {
                const user = await this.userRepository.findOneBy({ id });
                if (user) await this.userRepository.remove(user);
            }

            or
                ​
            async deleteUserByUserId(userId: string): Promise<void> {
                await this.userRepository.delete({ userId });
            }
            `}</code></pre>

            <p>count()</p>
            <ul><li>조건에 맞는 레코드 개수 반환</li></ul>
            <pre><code>{`
            async countAllUsers(): Promise<number> {
                return this.userRepository.count();
            }
            `}</code></pre>

            <p>exist()</p>
            <ul><li>조건에 맞는 데이터가 존재하는지 boolean 반환 (v0.3+)</li></ul>
            <pre><code>{`
            async isEmailTaken(email: string): Promise<boolean> {
                return this.userRepository.exist({ where: { email } });
            }
            `}</code></pre>

            <p>createQueryBuilder()</p>
            <ul><li>복잡한 쿼리를 직접 작성할 때 사용</li></ul>
            <pre><code>{`
            async searchUsersByEmailPattern(keyword: string): Promise<User[]> {
                return this.userRepository
                    .createQueryBuilder('user')
                    .where('user.email LIKE :email', { email: ₩%S{keyword}%₩ })
                    .getMany();
            }
            `}</code></pre>


        </div>
    )
}

export default TIL0529