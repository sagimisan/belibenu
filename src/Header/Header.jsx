import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SideBar from "./SideBar";
import Logo from "./Logo";

const myStyle = () => ({
  bar: {
    background: "#1D6982",
    opacity: 0.9,
    marginBottom: "10px"
  }
});

export default function Header() {
  const classes = myStyle();
  return (
    <div className="header" id="header">
      <AppBar position="static" style={classes.bar}>
        <Toolbar>
          <Logo src="/img/logo.png" />
          <SideBar />
          <label>לזכרו של אליהו מיזן</label>
        </Toolbar>
      </AppBar>
    </div>
  );
}
