import styled from "styled-components";
import { flexCenterColumn, isBox } from "../../global/common";
import { fadeIn } from "../../styles/keyframes";

const S = {};

S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
`;

S.StyledButton = styled.button`
  background-color: ${(props) => props.backGroundColor};
  border: none;
`;

S.Input = styled.input`
  width: 200px;
  height: 200px;
  border: solid 1px green;
  color: ${(props) => props.color};
`;

S.strong = styled.strong`
  font-size: ${(props) => props.fontSize}px;
`;

S.p = styled.p`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

S.Wrap =styled.div`
    ${flexCenterColumn}

    span {
        color: green;
    }

    button {
        width: 100%;
        margin-top: 10px;
    }
`

S.Box = styled.div`
  ${isBox}

  p {
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    
    ${flexCenterColumn}
    line-height: 100px;
    animation: ${fadeIn} 1s forwards ease-in;
  }
`

export default S;
