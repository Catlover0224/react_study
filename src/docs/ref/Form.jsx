import React from 'react';

const Form = () => {
    // checkInput 에서 프롭으로 전달받은 함수와 스타일을 적용하여 화면 값 유효성 체크
    return (
        <form>
            <input type="text" name="email"/>
            <input type="text" name="password"/>
            <input type="text" name="name"/>
            <input type="text" name="age"/>
            <button>입력 완료</button>
        </form>
    );
};

export default Form;