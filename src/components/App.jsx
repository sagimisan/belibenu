import React from "react";
import "../styles.scss";
import Main from "./Main";
import Header from "../Header/Header";
const wheel = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('top').style.display = "block";
  } else {
    document.getElementById('top').style.display = "none";
  }
};
const up=()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
export default function App() {
  return (
    <div className="App" onWheel={wheel}>
      <Header />
      <Main />
      <div style={{display:"none"}} onClick={up} id="top">חזרה למעלה</div>
    </div>
  );
}
