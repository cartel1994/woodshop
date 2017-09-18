import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import {Card} from 'material-ui/Card'
import {applyCategory} from '../store'

const CategoryList = ({categories, filterByCategory}) => {
  // sorts categories by id
  categories = categories.sort((a, b) => a.id - b.id)
  return (
  <Card>
    <List>
    {
      categories.map(category =>
        <div key={category.id}>
          <ListItem primaryText={category.name} onClick={() => filterByCategory(category.id)} />
          <Divider />
        </div>
      )
    }
    </List>
  </Card>
)};

const mapState = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    filterByCategory (categoryId) {
      dispatch(applyCategory(categoryId))
    }
  }
}

export default connect(mapState, mapDispatch)(CategoryList);
