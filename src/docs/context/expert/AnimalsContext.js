import React, { useState } from 'react';

// 컨텍스트 생성 및 초기화
const AnimalsContext = React.createContext({
    state: { animalList: [] },
    action: { animalsRemove: () => {}, animalInsert: () => {} }
});

const AnimalsProvider = ({ children }) => {
    // animals 리스트 초기값 ["누렁이", "야옹이", "점박이"]
    const [animalList, setAnimalList] = useState(["누렁이", "야옹이", "점박이"]);

    // 버튼을 눌렀을 때 삭제하는 remove라는 메서드 생성
    const animalsRemove = (animal) => {
        const removeData = animalList.filter(item => item !== animal);
        setAnimalList(removeData);
    };

    // 화면에서 동물을 입력 받았을 때 추가하는 insert라는 메서드 생성
    const animalInsert = (animal) => {
        setAnimalList([...animalList, animal]);
    };

    // 컨텍스트 값 설정
    const value = {
        state: { animalList },
        action: { animalsRemove, animalInsert }
    };

    return <AnimalsContext.Provider value={value}>{children}</AnimalsContext.Provider>
};

export { AnimalsContext, AnimalsProvider };
