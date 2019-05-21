import React from "react";
import { TabBar, Tab } from "@rmwc/tabs";
import "@material/tab/dist/mdc.tab.min.css";
import { NavLink } from "react-router-dom";
import "./Tabs.css";

const Tabs = () => (
  <TabBar>
    <NavLink to="/">
      <Tab stacked icon="explore" label="explore" />
      {/* <TabIcon>explore</TabIcon>
        <TabIconText>Explore</TabIconText> */}
    </NavLink>
    <NavLink to="/nearby">
      <Tab stacked icon="near_me" label="nearby" />
      {/* <TabIcon>near_me</TabIcon>
        <TabIconText>NearBy</TabIconText> */}
    </NavLink>
    <NavLink to="/societies">
      <Tab stacked icon="people" label="societies" />
      {/* <TabIcon>people</TabIcon>
        <TabIconText>Societies</TabIconText> */}
    </NavLink>
  </TabBar>
);
export default Tabs;
