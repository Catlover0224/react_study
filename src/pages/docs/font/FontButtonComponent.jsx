import React from 'react';
import { useDispatch } from 'react-redux';
import { clickbutton } from '../../../modules/font';

const FontButtonComponent = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(clickbutton("2rem")) }}>"2rem"</button>
            <button onClick={() => { dispatch(clickbutton("5rem")) }}>"5rem"</button>
            <button onClick={() => { dispatch(clickbutton("1rem")) }}>"초기화"</button>
        </div>
    );
};

export default FontButtonComponent;