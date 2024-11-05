import React, { useState } from 'react';
import {FontContext} from "./FontContext";
import { useContext } from 'react';

// p태그의 폰트사이즈를 context의 기본 폰트사이즈로 지정하고
// 버튼을 누르면 0.5rem으로 작아지게 만든다.
const FontSizeComponent = () => {
    const fontSizes = useContext(FontContext);
    const [fontSize, setFontSize] = useState(fontSizes.normal);

    const handleFontSizeSmall = () => {
        setFontSize(fontSizes.small);
    };

    return (
        <>
            <p style={{fontSize : fontSize}}>중간 ChildContainer입니다!🤔</p>
            <button onClick={handleFontSizeSmall}>작아져라!😁</button>
        </>
    );
};

export default FontSizeComponent;