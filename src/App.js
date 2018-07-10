import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ToolBar from "./components/ToolBar/ToolBar";
import Tabs from "./components/Tabs/Tabs";
import Explore from "./pages/Explore/Explore";
import NearBy from "./pages/NearBy/Nearby";
import Societies from "./pages/Societies/Societies";
import Error from "./pages/Error/Error";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <ToolBar />
      <Tabs />
      <SideDrawer />
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
