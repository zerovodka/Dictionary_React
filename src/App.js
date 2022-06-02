import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import data from "./Data";
import Add from "./Add";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // let [words] = useState(data);
  let navigate = useNavigate();
  // Redux Store 가져오기
  // 소괄호에는 전체 state / 중괄호에는 특정 state 선별 가능
  let state = useSelector((state) => {
    return state;
  });
  // console.log(state.words);
  //store.js로 요청을 보내는 함수
  // let dispatch = useDispatch();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="card-wrap">
                <h4>MY DICTIONARY</h4>
                <button
                  onClick={() => {
                    navigate("/add");
                  }}
                >
                  단어 추가하기
                </button>
                {state.words.map((a, i) => {
                  return <Card words={state.words[i]} i={i} />;
                })}
              </div>
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
              <Add />
            </>
          }
        />
      </Routes>
    </div>
  );
}

function Card(props) {
  // console.log(props.words);
  return (
    <div className="card">
      <div className="card-contents">
        <p>단어</p>
        <h4>{props.words.word}</h4>
        <p>설명</p>
        <h4>{props.words.desc}</h4>
        <p>예시</p>
        <h4 className="card-contents-ex">{props.words.ex}</h4>
      </div>
    </div>
  );
}

export default App;
