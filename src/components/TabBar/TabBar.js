import React from 'react';
import { TabBar, Tab,TabIcon , TabIconText} from 'rmwc/Tabs';
import { Icon } from 'rmwc/Icon';
import {NavLink} from 'react-router-dom';
import './TabBar.css';
const Component = (props) => {
	return 	<React.Fragment> 
		        <TabBar>
				  <NavLink to="/"><Tab><TabIcon>explore</TabIcon><TabIconText>Explore</TabIconText></Tab></NavLink>
				  <NavLink to="/nearby"><Tab><TabIcon>near_me</TabIcon><TabIconText>NearBy</TabIconText></Tab></NavLink>
				  <NavLink to="/societies"><Tab><TabIcon>people</TabIcon><TabIconText>Societies</TabIconText></Tab></NavLink>
				</TabBar>
	        </React.Fragment>
      }
export default Component;
