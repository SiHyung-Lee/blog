import React, { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let array = [...title].sort();
          setTitle(array);
        }}
      >
        가나다라순 정렬
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      {title.map((txt) => {
        return (
          <div className="list">
            <h4>
              {txt} <span onClick={() => setLike(like + 1)}>👍</span> {like}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
