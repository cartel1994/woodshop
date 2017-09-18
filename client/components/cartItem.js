import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Redux methods
import { toggleCart, deleteCartItemFromBackend, updateCartItemInBackend } from '../store'

// Material-UI components
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const CartItem = (props) => {
  const { cartItem, deleteCartItemFromBackend, updateCartItemInBackend } = props

  return (
    <Card key={cartItem.id}>
      <CardTitle
        title={cartItem.name}
      />
      <CardText>
        <TextField
          floatingLabelText="Quantity"
          id="quantity"
          defaultValue={cartItem.quantity} 
          onChange={updateCartItemInBackend}
        />
      </CardText>
      <CardActions>
        <RaisedButton secondary={true} label="Remove" onClick={deleteCartItemFromBackend}/>
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
    deleteCartItemFromBackend: () => {
      dispatch(deleteCartItemFromBackend(ownProps.cartItem))
    },
    updateCartItemInBackend: (event) => {
      console.log(event.target.value)
      dispatch(updateCartItemInBackend(event.target.value, ownProps.cartItem))
    }
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
