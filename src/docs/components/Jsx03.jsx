//실습
//name과 message 넣어서 랜더링하기
//name : 이름, message : 환영합니다.

const Jsx03 = () => {
    const name = "이은우";
    const message = "환영합니다.";

    return (
        <>
            <p>이름 : {name}</p>
            <p style={{color : "red"}}>메시지 : {message}</p>
        </>
    );
}

export default Jsx03;
