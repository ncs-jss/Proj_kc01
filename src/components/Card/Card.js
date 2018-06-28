import React from 'react';
import { Card, CardMedia, CardAction, CardActions, CardActionIcons} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';

import './Card.css';

const Component = props => {
  return <Card style={{width:'320px'}}>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage:
                  'url(https://material-components-web.appspot.com/images/16-9.jpg)'
              }}
            />
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography use="headline6" tag="h2">
                {props.title}<CardActions>
            <CardActionIcons>
              <CardAction icon use="keyboard_arrow_right" />
            </CardActionIcons>
          </CardActions>
              </Typography>
              
              <Typography
                use="subtitle2"
                tag="h3"
                theme="text-secondary-on-background"
                style={{ marginTop: '-1rem' }}
              >
                by Kurt Wagner
              </Typography>
              <Typography use="body1" tag="div" theme="text-secondary-on-background">
                {props.description}
              </Typography>
            </div>
        </Card>
}
export default Component;