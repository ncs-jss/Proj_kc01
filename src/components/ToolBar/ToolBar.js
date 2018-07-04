import React from 'react';
import {Toolbar,ToolbarRow,ToolbarTitle} from 'rmwc/Toolbar';
import './ToolBar.css';
const Component = (props) => {
  return<React.Fragment> 
        <Toolbar>
          <ToolbarRow>
            <ToolbarTitle>Know Your College</ToolbarTitle>
          </ToolbarRow>
        </Toolbar>
        </React.Fragment>
      }
export default Component;