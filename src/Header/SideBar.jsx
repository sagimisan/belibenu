import React from "react";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import {
  useTheme,
  makeStyles,
  IconButton,
  Divider,
  ListItemText,
  ListItemIcon,
  List,
  ListItem,
  Drawer
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Edut from "../Story/Edut";
const drawerWidth = 240;

function SideBar(props) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { history } = props;
  const Azcara = () => {
    history.push("/Azcara");
    handleDrawerClose();
  };
  const Kadish = () => {
    history.push("/Kadish");
    handleDrawerClose();
  };
  const Tehilim = () => {
    history.push("/Tehilim");
    handleDrawerClose();
  };
  const itemsList = [
    {
      text: "דף הבית",
      icon: <HomeIcon />,
      onClick: () => {
        history.push("/");
        handleDrawerClose();
      }
    },
    {
      text: "גלריה",
      icon: <PhotoLibraryIcon />,
      onClick: () => {
        history.push("/Gallery");
        handleDrawerClose();
      }
    },
    {
      text: "סיפור חייו",
      icon: <MenuBookIcon />,
      onClick: () => {
        history.push("/StoryHebrow");
        handleDrawerClose();
      }
    },
    {
      text: "עדות",
      icon: <MenuBookIcon />,
      onClick: () => {
        history.push("/Edut");
        handleDrawerClose();
      }
    },
  ];

  return (
    <div className={classes.root} >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={clsx(open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {itemsList.map((item) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.DrawerUl}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}

          <details>
            <summary className={classes.azcaraLabel}>
              <ListItem
                button
                style={{
                  display: "inline-block",
                  width: "200px"
                }}
              >
                <ListItemText
                  primary="טקס אזכרה"
                  style={{
                    textAlign: "right"
                  }}
                />
              </ListItem>
            </summary>
            <ListItem button>
              <ListItemText
                primary="אזכרה"
                onClick={Azcara}
                className={classes.tfilot}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="קדיש"
                onClick={Kadish}
                className={classes.tfilot}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="תהילים"
                onClick={Tehilim}
                className={classes.tfilot}
              />
            </ListItem>
          </details>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}
export default withRouter(SideBar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  DrawerUl: {
    direction: "ltr",
    textAlign: "right"
  },
  azcaraLabel: {
    width: "240px",
    cursor: "pointer",
    textAlign: "right"
  },
  azcaraSpan: {
    float: "right",
    margin: "0 15px 0 95px"
  },
  tfilot: { textAlign: "right" }
}));