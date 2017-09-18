import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Redux methods
import { toggleCart } from '../store'

// Material-UI components
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import Drawer from 'material-ui/Drawer'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const CartItem = (props) => {
  const { cartItem } = props

  return (
            <Card key={cartItem.id}>
              <CardTitle
                title={cartItem.name}
              />
              <CardText>
                <TextField
                  floatingLabelText="Quantity"
                  id="quantity"
                  defaultValue={cartItem.quantity} />
              </CardText>
              <CardActions>
                <RaisedButton secondary={true} label="Remove" />
              </CardActions>
            </Card>
  )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  return {
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    // toggleCart() {
    //   dispatch(toggleCart())
    // }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(mapState, mapDispatch)(CartItem)

/**
 * PROP TYPES
 */
CartItem.propTypes = {
  // toggleCart: PropTypes.func.isRequired,
  // showCart: PropTypes.bool.isRequired
}
