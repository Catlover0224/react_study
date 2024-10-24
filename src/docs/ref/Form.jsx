import React from 'react';

const Form = ({ style, formRef, inputRef, validateForm }) => {
    // checkInput 에서 프롭으로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 체크

    return (
        <form style={style} ref={formRef}>
            <div>
                <span>이메일</span>
                <input
                    type="text"
                    name="email"
                    ref={(e) => (inputRef.current.email = e)}
                />
            </div>
            <div>
                <span>비밀번호</span>
                <input
                    type="password"
                    name="password"
                    ref={(e) => (inputRef.current.password = e)}
                />
            </div>
            <div>
                <span>이름</span>
                <input
                    type="text"
                    name="name"
                    ref={(e) => (inputRef.current.name = e)}
                />
            </div>
            <div>
                <span>나이</span>
                <input
                    type="text"
                    name="age"
                    ref={(e) => (inputRef.current.age = e)}
                />
                <button type='button' onClick={validateForm}>입력 완료</button>
            </div>
        </form>
    );
};

export default Form;