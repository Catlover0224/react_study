import React, { useState } from 'react';

const Colors = () => {
    const [result, setResult] = useState("");
    const [color, setColor] = useState("")
    const [red, blue, pink] = ["red", "blue", ""];

    const onChangeInputValue = (e) => {
        if(e.target.value === "핑크색"){
            setColor(pink);
        }
        setResult(e.target.value);
    }
    return (
        <div>
            <p style={{color}}>{result}</p>
            <input type="text" onChange={onChangeInputValue} />
            <button onClick={()=> setColor(red)}>빨간색</button>
            <button onClick={()=> setColor(blue)}>파란색</button>
        </div>
    );
};

export default Colors;