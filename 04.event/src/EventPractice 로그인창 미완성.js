import React, { useState } from "react";

const EventPractice = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // username의 state값을 바꾼다
  const onChangeId = (e) => setId(e.target.value);
  // message의 state값을 바꾼다
  const onChangepassword = (e) => setPassword(e.target.value);

  const onClick = (e) => {
    if (e.target.value === "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else {
      alert("로그인하였습니다.");
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={onChangeId}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={onChangepassword}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
