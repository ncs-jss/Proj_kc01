import React from "react";
import { Drawer, DrawerContent, DrawerHeader } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";
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
          <ListItemText>
            <Icon strategy="ligature" use="explore" />
          </ListItemText>
        </ListItem>
      </NavLink>
      <NavLink to="/nearby" exact>
        <ListItem>
          <ListItemText>
            <Icon strategy="ligature" use="near_me" />
          </ListItemText>
        </ListItem>
      </NavLink>
      <NavLink to="/societies" exact>
        <ListItem>
          <ListItemText>
            <Icon strategy="ligature" use="people" />
          </ListItemText>
        </ListItem>
      </NavLink>
    </DrawerContent>
  </Drawer>
);
export default SideDrawer;