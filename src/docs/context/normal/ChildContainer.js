import React, { useState } from "react";
import FontSizeComponent from "./FontSizeComponent";
import {FontContext} from "./FontContext";
import { useContext } from "react";

const ChildContainer = () => {
  const fontSizes = useContext(FontContext);
  const [fontSize, setFontSize] = useState(fontSizes.normal);

  const handleFontSizeIncrease = () => {
    setFontSize(fontSizes.big);
  };

  return (
    <div>
      <FontSizeComponent />
      {/* 밑에 p태그를 context의 기본 크기로 지정하고, 버튼을 누르면 5rem으로 크기를 키우게 한다. */}

      <p style={{ fontSize: fontSize }}>중간 ChildContainer입니다!🤔</p>

      <button onClick={handleFontSizeIncrease}>커져라!😆</button>
    </div>
  );
};

export default ChildContainer;
