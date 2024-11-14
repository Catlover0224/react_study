import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div>
                개발새발
            </div>
            <Link to = {"/"}>매인페이지로 이동</Link>
            <div>
                <Link to = {"/job/dev"}>개발자</Link>
            </div>
            <div>
                <Link to = {"/job/pla"}>기획자</Link>
            </div>
        </>
    );
};

export default Intro;