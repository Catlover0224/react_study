import React, { useState } from 'react';

const Name = () => {
    const [result, setResult] = useState("");

    const onChangeInputValue = (e) => {
        setResult(e.target.value);
    }

    return (
        <div>
            <p>{result}</p>
            <input type='text'onChange={onChangeInputValue}/>
        </div>
    );
};

export default Name;