import React from "react";

export default function Jsx02(props) {
    const name = "애옹";
    return(
        <div>
            제 이름은 {name}입니다.
            제 다른이름은 {props.aName} 입니다.
        </div>
    )
}