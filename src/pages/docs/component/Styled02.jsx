import React from 'react';
import s from '../style';

const Styled02 = () => {
  // strong, p
  // strong : 컴포넌트를 정의할 때 props로 글자 크기를 30px로 지정
  // p : 컴포넌트를 정의할 때 props로 폰트 굵기는 blod로, 컬러를 orange로 지정
    return (
        <div>
            <s.strong fontSize={30}>s.strong</s.strong>
            <s.p color='orange' fontWeight={"bold"}>s.p</s.p>
        </div>
    );
};

export default Styled02;