import React, { useState } from 'react';

const Count = () => {

    const [nubmer, setNumber] = useState(10);

    const decrease = () => {
        setNumber(nubmer - 1);
    }

    const increase = () => {
        setNumber(nubmer + 1);
    }

    return (
        <div>
            <button onClick={decrease}>- 감소</button>
            {nubmer}
            <button onClick={increase}>+ 증가</button>
        </div>
    );
};

export default Count;