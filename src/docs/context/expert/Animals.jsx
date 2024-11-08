import React, { useState } from 'react';
import Animal from './Animal';
import { useContext } from "react";
import { AnimalsContext } from './AnimalsContext';
// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터 : 동물 버튼 추가 (context 메서드 insert 사용)
// 동물 버튼을 클릭하면 해당 버튼을 삭제 (context 메서드를 remove 사용)

const Animals = () => {
    const { state, action } = useContext(AnimalsContext);
    const [ newAnimal, setNewAnimal ] = useState('');

    const handleInputChange = (e) => {
        setNewAnimal(e.target.value);
    };

    return (
        <div>
            <div>
                <input 
                    type='text' 
                    value={newAnimal}
                    placeholder='추가할 동물을 입력해주세요'
                    onChange={handleInputChange}  
                />
                <button onClick={() => action.animalInsert(newAnimal)}> 추가 </button>
            </div>

            {state.animalList.map((animal, i) => (
                <Animal animal={animal} key={i} animalsRemove={action.animalsRemove}/>
            ))}
        </div>
    );
};

export default Animals;