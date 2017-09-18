import React from 'react';
import {List, ListItem} from 'material-ui/List';

const ListExampleSimple = () => (
  <List>
    <ListItem primaryText="Inbox" />
    <ListItem primaryText="Starred" />
    <ListItem primaryText="Sent mail" />
    <ListItem primaryText="Drafts" />
    <ListItem primaryText="Inbox" />
  </List>
);

export default ListExampleSimple;
