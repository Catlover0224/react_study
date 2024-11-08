import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertinput } from '../../../modules/font';

const FontInputComponent = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [errorText, setErrorText] = useState("");
    const [isGood, setIsGood] = useState(false);

    const onChangeValue = (e) => {
        const value = e.target.value;

        const isValid = /^\d+(px|rem)$/.test(value);

        if (!isValid) {
            setErrorText("불가능");
            setIsGood(false)
        } else {
            setErrorText("가능");
            setIsGood(!isGood);
        }
        setInputValue(value);

    }

    return (
        <div>
            <p style={{ color: isGood ? 'green' : 'red', fontWeight: '700' }}>{errorText}</p>
            <input onChange={onChangeValue} type="text" />
            <button onClick={() => { dispatch(insertinput(inputValue)) }}>적용</button>
        </div>
    );
};

export default FontInputComponent;