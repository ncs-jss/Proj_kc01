import React from 'react';
import { Card, CardAction, CardActions, CardActionIcons} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import {Icon} from 'rmwc/Icon';
import {ListDivider} from 'rmwc/List';
import './Card.css';
const Component = props => {
  return <Card style={{width:'320px',margin:'0 auto 32px auto'}}>
            <div style={{ padding: '1rem' }}>
            <div className="icon"></div>
              <Typography use="headline6" tag="h2">
               {props.name}
              <CardActions>
                <CardActionIcons>
                  <CardAction icon use="keyboard_arrow_right" />
                </CardActionIcons>
              </CardActions>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="text-secondary-on-background"
                style={{ marginTop: '-1rem' }}
              >
                {props.dist} &#183; {props.type}
              </Typography></Typography>
              <ListDivider/>
              <Typography use="body1" tag="div" theme="text-secondary-on-background">
                {props.desc}
              </Typography>
            </div>
        </Card>
}
export default Component;