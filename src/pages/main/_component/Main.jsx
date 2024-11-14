import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div>냐옹</div>
            <Link to = {"/intro"}>소개페이지로 이동</Link>
            {/* <a href='/intro'>소개페이지로 이동</a> */}
        </>
        
    );
};

export default Main;