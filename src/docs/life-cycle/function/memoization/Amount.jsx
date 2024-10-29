import React from 'react';

const Amount = ({
    divStyle,
    pStyle,
    buttonStyle,
    props,
    onClickToAddAmount,
    onClickToSubAmount,
    onClickToAddCoupon,
    onClickToSubCoupon,
}) => {
    console.log("자식() 렌더링");
    const { amount, coupon } = props;

    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
            <p style={pStyle}>수량 : {amount}</p>
            <button style={buttonStyle} onClick={onClickToSubAmount}>-</button>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
            <p style={pStyle}>티켓 : {coupon}</p>
            <button style={buttonStyle} onClick={onClickToSubCoupon}>-</button>
        </div>
    );
};

export default Amount;