import React from "react";
import { Drawer, DrawerContent, DrawerHeader } from "rmwc/Drawer";
import { ListItem } from "rmwc/List";
import { Icon } from "rmwc/Icon";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = () => (
  <Drawer permanent>
    <DrawerHeader>
      <Icon strategy="ligature" use="notes" />
    </DrawerHeader>
    <DrawerContent>
      <NavLink to="/" exact>
        <ListItem>
          <Icon strategy="ligature" use="explore" />
        </ListItem>
      </NavLink>
      <NavLink to="/nearby" exact>
        <ListItem>
          <Icon strategy="ligature" use="near_me" />
        </ListItem>
      </NavLink>
      <NavLink to="/societies" exact>
        <ListItem>
          <Icon strategy="ligature" use="people" />
        </ListItem>
      </NavLink>
    </DrawerContent>
  </Drawer>
);
export default SideDrawer;
