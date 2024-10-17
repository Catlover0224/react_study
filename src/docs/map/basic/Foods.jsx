import React from 'react';
import Food from './Food';

const Foods = ({foods, style}) => {
    return (
        <div>
            {foods.map((food, index) => <Food key={index} food={food} style={style}/>)}
        </div>
    );
};

export default Foods;