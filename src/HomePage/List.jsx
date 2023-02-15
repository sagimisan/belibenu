import React from "react";
import "../styles.scss";
import { withRouter } from "react-router-dom";
function List(props) {
  const { history } = props;
  const Gallery = () => {
    history.push("/Gallery");
  };
  const Azcara = () => {
    history.push("/Azcara");
  };
  const StoryHebrow = () => {
    history.push("/StoryHebrow");
  };
  const Edut = () => {
    history.push("/Edut");
  };
  return (
    <div className="homePage">
      <ul className="homePageUL">
        <label>באתר ההנצחה תוכלו למצוא:</label>
        <li onClick={StoryHebrow}>סיפור חייו</li>
        <li onClick={Edut}>עדות</li>
        <li onClick={Gallery}>גלריית תמונות</li>
        <li>
          <a href="https://www.google.com/maps/place/31%C2%B056'49.4%22N+34%C2%B049'13.1%22E/@31.9469105,34.8214001,731m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d31.9470625!4d34.8203125?hl=iw">
            ניווט אל הקבר
          </a>
        </li>
        <li onClick={Azcara}>טקס אזכרה</li>
      </ul>
    </div>
  );
}
export default withRouter(List);
