import React, { Component } from 'react';
import Drawer from '../src/components/Drawer/Drawer';
import ToolBar from '../src/components/ToolBar/ToolBar';
import TabBar from '../src/components/TabBar/TabBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Explore from '../src/pages/Explore/Explore';
import NearBy from '../src/pages/NearBy/Nearby';
import Societies from '../src/pages/Societies/Societies';
import Error from '../src/pages/Error/Error';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<React.Fragment>
	      <ToolBar/>
	      <TabBar/>
	      <Drawer/>
	      <Switch>
	      	<Route path='/' component={Explore} exact></Route>
	      	<Route path='/nearby' component={NearBy}></Route>
	      	<Route path='/societies' component={Societies}></Route>
	      	<Route component={Error}></Route>
	      </Switch>
	    </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;