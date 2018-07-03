import React from 'react';
import {Drawer,DrawerContent,DrawerHeader} from 'rmwc/Drawer';
import {ListItem,ListItemText} from 'rmwc/List';
import { Icon } from 'rmwc/Icon';
import NavLink from '../NavLink/NavLink';
import './Drawer.css';
const Component = (props) => {
  return  <Drawer permanent>
            <DrawerHeader><Icon strategy="ligature">notes</Icon></DrawerHeader>
            <DrawerContent>
              <NavLink to="/">
                <ListItem>
                  <ListItemText><Icon strategy="ligature" use="explore_outline"/></ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/nearby">
                <ListItem>
                  <ListItemText><Icon strategy="ligature" use="near_me_outline"/>
                  </ListItemText>
                </ListItem>
              </NavLink>
              <NavLink to="/societies">
                <ListItem>
                  <ListItemText><Icon strategy="ligature" use="people"/>
                  </ListItemText>
                </ListItem>
              </NavLink>
            </DrawerContent> 
          </Drawer>
}
export default Component;