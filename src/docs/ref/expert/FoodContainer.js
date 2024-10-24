import React, { useRef, useState } from "react";

// FoodLi 컴포넌트: 각 음식에 대한 체크 상태를 관리
const FoodLi = ({ food, checked, onChange }) => {
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {food}
    </li>
  );
};

const FoodContainer = () => {
  const [foodList, setFoodList] = useState([]);  // 음식 리스트
  const [checkedItems, setCheckedItems] = useState([]);  // 체크된 항목들

  const inputRef = useRef({
    kor: null,
    eng: null,
  });

  //음식 추가
  const foodPlus = () => {
    const kor = inputRef.current.kor.value;
    console.log("🚀 ~ foodPlus ~ kor:", kor)
    const eng = inputRef.current.eng.value;
    console.log("🚀 ~ foodPlus ~ eng:", eng)
    const food = `${kor}(${eng})`;

    setFoodList([...foodList, food]);
    setCheckedItems([...checkedItems, false]); // 새 음식 추가 시 체크 상태를 false로 초기화
  };

  // 삭제할 음식 선텍
  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index]; // 체크 상태 토글
    setCheckedItems(updatedCheckedItems);
    console.log("🚀 ~ handleCheckboxChange ~ checkedItems:", checkedItems)
  };
  

  // 음식 삭제
  const foodDel = () => {
    const filteredFoodList = foodList.filter((_, index) => !checkedItems[index]);  // 체크되지 않은 항목만 남김
    const filteredCheckedItems = checkedItems.filter((checked) => !checked);  // 체크되지 않은 상태만 남김
    setFoodList(filteredFoodList);
    console.log("🚀 ~ handleCheckboxChange ~ checkedItems:", filteredFoodList)
    setCheckedItems(filteredCheckedItems);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="한글 음식 이름"
          ref={(e) => (inputRef.current.kor = e)}
        />
        <input
          type="text"
          placeholder="영어 음식 이름"
          ref={(e) => (inputRef.current.eng = e)}
        />
      </div>
      <div>
        <button onClick={foodPlus}>추가</button>
        <button onClick={foodDel}>삭제</button>
      </div>
      <div>
        <ul>
          {foodList.map((food, i) => (
            <FoodLi
              key={i}
              food={food}
              checked={checkedItems[i]}  // 체크 상태를 전달
              onChange={() => handleCheckboxChange(i)}  // 체크 상태 변경 핸들러 전달
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodContainer;
