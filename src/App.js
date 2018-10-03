import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import ToolBar from "./components/ToolBar/ToolBar";
import Tabs from "./components/Tabs/Tabs";
import Explore from "./pages/Explore/Explore";
import NearBy from "./pages/NearBy/Nearby";
import Societies from "./pages/Societies/Societies";
import Error from "./pages/Error/Error";
import "./App.css";

const URL = process.env.REACT_APP_URL;

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
    console.log(URL);
    fetch(`${URL}/mapdata`)
      .then(res => res.json())
      .then(mapdata => this.setState({ mapdata }));
    fetch(`${URL}/nearby`)
      .then(res => res.json())
      .then(nearby => this.setState({ nearby }));
    fetch(`${URL}/society`)
      .then(res => res.json())
      .then(society => this.setState({ societies: society.society }));
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
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
