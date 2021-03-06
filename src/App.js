import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import dotenv from "dotenv";
import Loader from "./components/Loader/Loader";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ToolBar from "./components/ToolBar/ToolBar";
import Tabs from "./components/Tabs/Tabs";
import Explore from "./pages/Explore/Explore";
import NearBy from "./pages/NearBy/Nearby";
import Societies from "./pages/Societies/Societies";
import Error from "./pages/Error/Error";
import "./App.css";

dotenv.config();
const URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nearby: [],
      societies: [],
      mapdata: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getMapData();
    this.getNearbyData();
    this.getSocietyData();
    this.loadApp().then(() => {
      this.setState({ loading: false });
    });
  }

  getMapData() {
    return fetch(`${URL}/mapdata`)
      .then(res => res.json())
      .then(mapdata => this.setState({ mapdata }));
  }

  getSocietyData() {
    return fetch(`${URL}/society`)
      .then(res => res.json())
      .then(society => this.setState({ societies: society.society }));
  }

  getNearbyData() {
    return fetch(`${URL}/nearby`)
      .then(res => res.json())
      .then(nearby => this.setState({ nearby }));
  }

  loadApp() {
    return Promise.all([
      this.getMapData(),
      this.getSocietyData(),
      this.getNearbyData()
    ]);
  }

  render() {
    let content;
    if (this.state.loading) {
      content = <Loader />;
    } else
      content = (
        <BrowserRouter>
          <React.Fragment>
            <ToolBar />
            <Tabs />
            <SideDrawer />
            <Switch>
              <Route
                path="/"
                render={() => <Explore data={this.state.mapdata} />}
                exact
              />
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
    return <React.Fragment>{content}</React.Fragment>;
  }
}
export default App;
