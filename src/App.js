import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import ToolBar from "./components/ToolBar/ToolBar";
import TabBar from "./components/TabBar/TabBar";
import Explore from "./pages/Explore/Explore";
import NearBy from "./pages/NearBy/Nearby";
import Societies from "./pages/Societies/Societies";
import Error from "./pages/Error/Error";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <ToolBar />
      <TabBar />
      <Drawer />
      <Switch>
        <Route path="/" component={Explore} exact />
        <Route path="/nearby" component={NearBy} />
        <Route path="/societies" component={Societies} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
export default App;
