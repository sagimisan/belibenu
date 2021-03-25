import React from "react";
import Avatar from "./Avatar";
import List from "./List";

import "../styles.scss";
function HomePage() {
  return (
    <div className="homePage">
      <Avatar />
      <List />
    </div>
  );
}

export default HomePage;
