import React from 'react';
import { TabBar, Tab} from 'rmwc/Tabs';
import { Icon } from 'rmwc/Icon';
import {NavLink} from 'react-router-dom';
import './TabBar.css';
const Component = (props) => {
	return 	<React.Fragment> 
		        <TabBar>
				  <NavLink to="/"><Tab><Icon strategy="ligature">explore</Icon></Tab></NavLink>
				  <NavLink to="/nearby"><Tab><Icon strategy="ligature">near_me</Icon></Tab></NavLink>
				  <NavLink to="/societies"><Tab><Icon strategy="ligature">people</Icon></Tab></NavLink>
				</TabBar>
	        </React.Fragment>
      }
export default Component;