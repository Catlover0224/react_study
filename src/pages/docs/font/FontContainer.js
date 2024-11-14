import React from "react";
import FontButtonComponent from "./FontButtonComponent";
import FontInputComponent from "./FontInputComponent";
import { useSelector } from "react-redux";

const FontContainer = () => {
  const fontSize = useSelector((state) => state.font.fontSize);
  console.log("🚀 ~ FontContainer ~ fontSize:", fontSize);

  return (
    <div>
      <p style={{ fontSize: fontSize }}>"재미있는 리덕스 수업!"</p>
      <FontButtonComponent />
      <FontInputComponent />
    </div>
  );
};

export default FontContainer;
