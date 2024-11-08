import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../../modules/count';

const Counter = () => {

    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h1>{number}</h1>
            <input onChange={onChangeValue} type="text" />
            <div>
                <button onClick={() => {dispatch(increase(inputValue))}}>증가</button>
                <button onClick={() => {dispatch(decrease(inputValue))}}>감소</button>
            </div>
        </div>
    );
};

export default Counter;