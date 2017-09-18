import React from 'react';
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';

const CategoryList = ({categories}) => (
  <List>
  {
    categories.map(category =>
      <ListItem key={category.id} primaryText={category.name} />
    )
  }
  </List>
);

const mapState = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapState)(CategoryList);
