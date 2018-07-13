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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nearby: [],
      societies: []
    };
  }

  componentDidMount() {
    fetch("/nearby")
      .then(res => res.json())
      .then(nearby => this.setState({ nearby: nearby.nearby }));
    fetch("/society")
      .then(res => res.json())
      .then(society => this.setState({ societies: society.society }));
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ToolBar />
          <Tabs />
          <SideDrawer />
          <Switch>
            <Route path="/" component={Explore} exact />
            <Route
              path="/nearby"
              render={() => <NearBy data={this.state.nearby} />}
            />
            <Route
              path="/societies"
              render={() => <Societies data={this.state.societies} />}
            />
            <Route component={Error} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
