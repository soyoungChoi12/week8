import "./App.css";
import { useState } from "react";

const Homework = () => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([
    "안녕하세요",
    "교육세션 끝",
    "리액트 재밌으신가요?",
  ]);

  const handleNewComment = () => {
    ///이 부분을 작성해주세요
    //아무 입력도 없을 때에는 댓글이 작성되어선 안됩니다!
    if (inputText.trim() !== "") {
      setComments([...comments, inputText]);
      setInputText(""); // 입력값 초기화
    }

  };

  const handleDeleteComment = (index) => {
    ///이 부분을 작성해주세요 
    const newComments = comments.filter((_, idx) => idx !== index);
    setComments(newComments);
  };

  return (
    <>
      <header>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/74/%EB%A9%8B%EC%9F%81%EC%9D%B4%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC_%EB%A1%9C%EA%B3%A0.png"
          height="64"
        />
        <p className="title">멋쟁이 사자처럼 교육세션</p>
      </header>
      <div className="body">
        <div className="publish">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleNewComment}>등록</button>
        </div>
        {comments.map((item, idx) => (
          <div key={idx} className="comments">
            <p>{item}</p>
            <button onClick={() => handleDeleteComment(idx)}>삭제</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homework;
