import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (
        <CharContext.Consumer>
            {(context) => {
               return <p style={{color: context.color, fontSize: context.fontSize}}> 냐옹 </p>
            }}
        </CharContext.Consumer>
    );
};

export default C;