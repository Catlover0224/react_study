import React, { useState } from 'react';

// EnterStatus 컴포넌트
const EnterStatus = ({ isAdult }) => {
    const [pass, notPass] = ["입장가능", "입장불가"];
    return <div>{isAdult ? pass : notPass}</div>;
};

// WinStatus 컴포넌트
const WinStatus = ({ isEven }) => {
    const [lucky, unlucky] = ["당첨", "꽝"];
    return <div>{isEven ? lucky : unlucky}</div>;
};


const Jsx05 = () => {
    const [age, setAge] = useState(0);

    const isAdult = age >= 19;
    const isEven = age % 2 === 0;

    return (
        <div>
            <input
                type="number"
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <EnterStatus isAdult={isAdult} />
            <WinStatus isEven={isEven} />
        </div>
    );
};

export default Jsx05;
