import React from 'react';
import ChildContainer from './ChildContainer';
import {FontContext} from './FontContext';

const ParentContainer = () => {
    return (
        <FontContext.Provider value={{normal: '1rem', big: '5rem', small: '0.5rem'}}>
            <ChildContainer/>
        </FontContext.Provider>
    );
};

export default ParentContainer;