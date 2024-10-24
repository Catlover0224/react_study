import React, { useState } from 'react';

const Checkbox = () => {
    const [message, setMessage] = useState([]);

    const onClickToCheck = (e) => {
        let value = e.target.value;
        if (e.target.checked) {
            console.log("🚀 ~ onClickToCheck ~ e:", e.target.value);
            //setMessage(message.concat(e.target.value));
            setMessage(...message, value);
        } else {
            setMessage(message.filter((m) => m !== value));
        }
    }

    return (
        <div>
            <div>
                <span>프론트</span>
                <input type="checkbox" value="front-end" onClick={onClickToCheck} />
            </div>
            <div>
                <span>백앤드</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck} />
            </div>
            <div>
                <span>ai</span>
                <input type="checkbox" value="AI" onClick={onClickToCheck} />
            </div>
            <div>
                <h1>{message.map((m, i) => <p key={i}>{m}</p>)}</h1>
            </div>
        </div>
    );
};

export default Checkbox;