import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  avatar: {
    width: "30%",
    height: "40%",
    maxWidth: "160px",
    maxHeight: "160px"
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt="אליהו מיזן"
        src="/img/elioAvatar.jpg"
      />
      <div className="avatarTXT">
        <label className="labelAvatarTXT">אליהו מיזן</label>
        <span>09/09/1939-15/02/2013</span>
      </div>
    </div>
  );
}
