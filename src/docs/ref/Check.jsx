import React, { useRef, useState } from 'react';

const Check = () => {
    const inputRefs = useRef([]);
    const [isId, setIsId] = useState(false);
    const [isPass, setIsPass] = useState(false);

    const onClickToCheck = () => {
        console.log("🚀 ~ Check ~ inputRefs[0]:", inputRefs.current[0].value);
        console.log("🚀 ~ Check ~ inputRefs[1]:", inputRefs.current[1].value);
        setIsId(!inputRefs.current[0].value);
        setIsPass(!inputRefs.current[1].value);
    }

    return (
        <div>
            <form>
                <div>
                    {isId && (<p style={{color:"red"}}>아이디를 입력해주세요!!!</p>)}
                    <span>아이디</span>
                    <input ref={(e) => inputRefs.current[0] = e} type="text" name='id' />
                </div>
                <div>
                    {isPass && (<p style={{color:"red"}}>비밀번호를 입력해주세요!!!</p>)}
                    <span>비번</span>
                    <input ref={(e) => inputRefs.current[1] = e} type="text" name='password' />
                </div>
                <button type='button' onClick={onClickToCheck}>전송</button>
            </form>
        </div>
    );
};

export default Check;