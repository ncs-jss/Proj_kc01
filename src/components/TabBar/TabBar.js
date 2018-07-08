import React from 'react';
import {
  TabBar, Tab, TabIcon, TabIconText,
} from 'rmwc/Tabs';
import { NavLink } from 'react-router-dom';
import './TabBar.css';

const Component = () => (
  <React.Fragment>
    <TabBar>
      <NavLink to="/">
        <Tab>
          <TabIcon>
explore
          </TabIcon>
          <TabIconText>
Explore
          </TabIconText>
        </Tab>
      </NavLink>
      <NavLink to="/nearby">
        <Tab>
          <TabIcon>
near_me
          </TabIcon>
          <TabIconText>
NearBy
          </TabIconText>
        </Tab>
      </NavLink>
      <NavLink to="/societies">
        <Tab>
          <TabIcon>
people
          </TabIcon>
          <TabIconText>
Societies
          </TabIconText>
        </Tab>
      </NavLink>
    </TabBar>
  </React.Fragment>
);
export default Component;
