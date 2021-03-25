import React from "react";
import "../styles.scss";

const useStyles = () => ({

  logoBarWidth: {
    width: "28vw",
    maxWidth: "100px",
    minWidth: "70px",
    position: "absolute",
    left: "0"
  }
  
});

function Img(props) {

  const classes = useStyles();

  return <img style={classes.logoBarWidth} src={props.src} alt="" />;

}

export default Img;
