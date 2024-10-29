import React, { useEffect, useState } from 'react';

const SideEffect = () => {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("");

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
      }

      const onClickToIncrease = () =>{
        setNumber(number+1)
      }

      const onClickToChangeColor = () => {
        setColor(getRandomColor());
      }

    useEffect(()=>{
        console.log("🚀 ~ useEffect ~ useEffect:")
    },[number]);

    console.log("🚀color:", color)

    return (
        <div>
            <h1 color={{color}}>{number}</h1>
            <button onClick={onClickToIncrease}>+1 증가</button>
            <button onClick={onClickToChangeColor}>색</button>
        </div>
    );
          
};

export default SideEffect;