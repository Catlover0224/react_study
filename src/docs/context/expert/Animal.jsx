import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animal = ({animal, animalsRemove}) => {
    return (
        <button style={{margin: "5px"}} onClick={() => animalsRemove(animal)}>
            {animal}
        </button>
    );
};

export default Animal;