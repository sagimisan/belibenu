import React from "react";
import "../styles.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Gallery from "../Gallery/GalleryPage";
import Azcara from "../tfilot/Azcara";
import Kadish from "../tfilot/Kadish";
import Tehilim from "../tfilot/Tehilim";
import StoryHebrow from "../Story/StoryHebrow";
import StoryItaly from "../Story/StoryItaly";
import Edut from "../Story/Edut";

export default function Main() {
  return (
    <div className="Main" >
      <Switch>
        <Route exact from="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/Gallery"
          render={(props) => <Gallery {...props} />}
        />
        <Route exact path="/Azcara" render={(props) => <Azcara {...props} />} />
        <Route exact path="/Kadish" render={(props) => <Kadish {...props} />} />
        <Route
          exact
          path="/Tehilim"
          render={(props) => <Tehilim {...props} />}
        />
        <Route
          exact
          path="/StoryHebrow"
          render={(props) => <StoryHebrow {...props} />}
        />
        <Route
          exact
          path="/StoryItaly"
          render={(props) => <StoryItaly {...props} />}
        />
        <Route
          exact
          path="/Edut"
          render={(props) => <Edut {...props} />}
        />
      </Switch>
    </div>
  );
}
