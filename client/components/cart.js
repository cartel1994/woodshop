import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Redux methods
import { toggleCart } from '../store'

// React components
import CartItem from './cartItem'
import CheckoutContainer from './checkoutContainer'

// Material-UI components
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import Drawer from 'material-ui/Drawer'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const Cart = (props) => {
  const { showCart, toggleCart, cartItems } = props

  return (
    <Drawer
      docked={false}
      width={400}
      open={showCart}
      openSecondary={true}
      zDepth={2}
      onRequestChange={(change) => toggleCart()}
    >
      <CheckoutContainer />
      <h1>Cart</h1>
      { cartItems &&
        cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) }
    </Drawer>
  )
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
  return {
    showCart: state.toggleCart,
    cartItems: state.cart
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    toggleCart() {
      dispatch(toggleCart())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Cart))

/**
 * PROP TYPES
 */
Cart.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired
}
