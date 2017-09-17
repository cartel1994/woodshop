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

const Cart = (props) => {
  const { showCart, toggleCart } = props

  return (
        <Drawer
          docked={false}
          width={400}
          open={showCart}
          openSecondary={true}
          zDepth={2}
          onRequestChange={(change) => toggleCart()} 
        >
        <h1>Cart</h1>
        <Card>
          <CardHeader 
            title="Sample Item"
          />
          <CardActions>
            <TextField 
              floatingLabelText="Quantity"
              id="quantity" 
              defaultValue="1" />
            <FlatButton label="Remove" />
          </CardActions>
        </Card>
        
        </Drawer>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    showCart: state.toggleCart
  }
}

const mapDispatch = (dispatch) => {
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
