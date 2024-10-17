import React, { useState } from 'react';

const Sound = () => {
    const [dog, cat] = ["멍멍", "냐옹"];
    const [sound, setSound] = useState('동물소리를 내어보자');

    return (
        <div>
            <p>{sound}</p>
            <button onClick={() => setSound(dog)}>강아지 버튼</button>
            <button onClick={() => setSound(cat)}>고양이 버튼</button>
        </div>
    );
};

export default Sound;
