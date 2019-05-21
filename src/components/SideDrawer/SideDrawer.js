import React from "react";
import { Drawer, DrawerContent, DrawerHeader } from "@rmwc/drawer";
import "@material/drawer/dist/mdc.drawer.min.css";
import { ListItem, ListItemText } from "@rmwc/list";
import "@material/list/dist/mdc.list.min.css";
import { Icon } from "@rmwc/icon";
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
