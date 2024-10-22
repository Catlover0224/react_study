import React, { useEffect, useState } from 'react';

const User = ({ user }) => {
    console.log("🚀 ~ User ~ user:", user)
    const {id, age, name, phone, address} = user;
    const [newPhone, setNewPhone] = useState(phone);
    const [newAddress, setNewAddress] = useState(address);
    //Users의 Props를 받아서 아래 내용들을 실습
    // 1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 출력
    // 2) 유저의 데이터 중 나이가 20 보다 큰 사람의 정보를 화면에 태그로 출력
    // 3) 강남구의 사는 사람의 이름을 태그로 출력
    // 4) 모든 핸드폰 번호를 010-1234-5678 로 변경하기
    // 5) 장보고의 주소를 서울시 중량구로 변경해서 태그로 출력

    // 1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 출력
    const isInGyeonggi = address.includes("경기도");
    // 2) 유저의 데이터 중 나이가 20 보다 큰 사람의 정보를 화면에 태그로 출력
    const isOlderThanTwenty = age > 20;
    // 3) 강남구의 사는 사람의 이름을 태그로 출력
    const isInGangnam = address.includes("강남구");
    useEffect(()=>{
            // 4) 모든 핸드폰 번호를 010-1234-5678 로 변경하기
        setNewPhone("010-1234-5678");
            // 5) 장보고의 주소를 서울시 중량구로 변경해서 태그로 출력
        if(name === "장보고"){
            setNewAddress("서울시 중량구")
        }
    })



    return (
        <div>
            <h2>{name}</h2>
            {name === "장보고" && (
                <>
                    <p>주소 : {newAddress}</p>
                </>
            )}

            {isInGyeonggi && (
                <>
                    <p>주소 : {newAddress}</p>
                </>
            )}

            {isOlderThanTwenty && (
                <>
                    <p>나이 : {age}</p>
                </>
            )}

            {isInGangnam && (
                <>
                    <p>주소 : {newAddress}</p>
                </>
            )}

            <p>전화 번호 : {newPhone}</p>

            <p> --------------- </p>
        </div>
    );
};

export default User;