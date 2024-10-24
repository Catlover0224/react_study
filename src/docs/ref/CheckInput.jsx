import React, { useRef } from 'react';
import Form from './Form';

const CheckInput = () => {

    const style = {
        display : 'flex',
        flexDirection : 'column',
        width : '200px',
    }
    //inputRef를 전달
    const inputRef = useRef({
        email: null,
        password: null,
        name: null,
        age: null,
    });

    //formRef를 전달
    const formRef = useRef();
    
    // 버튼을 클릭하면 input의 값을 유효성을 검사 할 수 있는 함수를 제작 후 전달
    const validateForm = () => {
        const email = inputRef.current.email.value;
        const password = inputRef.current.password.value;
        const name = inputRef.current.name.value;
        const age = inputRef.current.age.value;

        // Basic validation logic
        if (!email.includes('@')) {
            alert('이메일 형식이 다릅니다');
            return false;
        }
        if (password.length < 6) {
            alert('비밀번호는 6자리 이상이여야 합니다');
            return false;
        }
        if (name.trim() === '') {
            alert('이름을 입력해주세요');
            return false;
        }
        if (isNaN(age) || age < 18) {
            alert('18세 이상 콘텐츠 입니다.');
            return false;
        }

        alert('응애!');
        formRef.current.submit();
        return true;
    };

    return (
       <Form style={style} inputRef={inputRef} formRef={formRef} validateForm={validateForm}/>
    );
};

export default CheckInput;