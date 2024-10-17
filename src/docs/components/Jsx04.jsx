import React from 'react';

const Jsx04 = () => {

    const name = undefined || "이은우";
    const login = true;
    const guest = true;

    return (
        <div>
            {login && guest && <div>비회원 로그인 입니다.</div>}
            {login ? (
                <>
                    <p>{name} 로그인스</p>
                </>
            ) : (
                <>
                    <p>로그인 실패</p>
                </>
            )}
        </div>
    );
};

export default Jsx04;