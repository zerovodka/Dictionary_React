import { Navigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addWord } from "./store";
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useRef } from "react";

function Add() {
  //   let inputRef = useRef("");
  let navigate = useNavigate();
  let [inputValue, setInputValue] = useState("");
  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  console.log(inputValue);
  //   let state = useSelector((state) => {
  //     return state;
  //   });
  //store.js로 요청을 보내는 함수
  let dispatch = useDispatch();
  //   let [word, setWord] = useState("");
  //   let [desc, setDesc] = useState("");
  //   let [ex, setEx] = useState("");

  return (
    <div className="card-wrap">
      <h4>단어 추가하기</h4>
      <form
        onSubmit={() => {
          dispatch(
            addWord({
              word: inputValue,
              desc: inputValue1,
              ex: inputValue2,
            })
          );
          alert("등록완료!");
          navigate("/");
        }}
      >
        <div className="card">
          <p>단어</p>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <p>설명</p>
          <input
            type="text"
            onChange={(e) => setInputValue1(e.target.value)}
          ></input>
          <p>예시</p>
          <input
            type="text"
            onChange={(e) => setInputValue2(e.target.value)}
          ></input>
        </div>
        <AddBtn type="submit">추가하기</AddBtn>
      </form>
    </div>
  );
}

let AddBtn = styled.button`
  background: purple;
  width: 350px;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export default Add;
