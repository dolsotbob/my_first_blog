import React from 'react'

const About = () => {
    const showMessage = () => {
        alert("감사합니다!");
    };

    return (
        <div className='About'>
            <div>
                안녕하세요, 이 곳은 블록체인 꿈나무 윤정아의 블로그입니다. 반갑습니다.
                <br />
                저는 블록체인 엔지니어 부트캠프에 참여하고 있고, 부트캠프에서의 일지를 시작으로 블록체인에 대한 다양한 이야기를 나누려 합니다.
            </div>

            <div className='about_email'>
                블록체인에 대해 함께 공부하거나 이야기하고 싶으신 분은 이메일 주소를 남겨주세요.
                <form>
                    <input type="email" placeholder="이메일을 입력하세요" required />
                    <button
                        type="submit"
                        onClick={showMessage}
                        className="formBtn">
                        제출
                    </button>
                </form>
            </div>
        </div>
    );
};

export default About;

