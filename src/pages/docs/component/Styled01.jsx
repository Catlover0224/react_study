import React from 'react';
import s from '../style';

const Styled01 = () => {

    return (
        <s.StyledDiv>
            스타일 된 컴포넌트
            <s.Input color={"red"} />
            <s.StyledButton fontStyle={""} backGroundColor={"blue"}>냐옹냐옹냐옹냐옹</s.StyledButton>
        </s.StyledDiv>
    );
};

export default Styled01;