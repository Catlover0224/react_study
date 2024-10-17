import React from 'react';

const Component2 = (props) => {
    props.printName('김김애옹')

    return (
        <div>
            {props.children}
        </div>
    );
};

export default Component2;