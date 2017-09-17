import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Redux Stores
import { postCartItem, putCartItem, toggleCart } from '../store'

// Material UI
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProductItem = ({ product, postCartItem, putCartItem, addToCart }) => {
  return (
    <Card>
      <CardHeader
        title={product.name}
        subtitle={`$${product.price}`}
        avatar={product.photoUrl}
      />
      <CardText>
        {product.details}
      </CardText>
      <CardActions>
        <FlatButton label="Details" />
        <FlatButton label="Add to Cart" onClick={addToCart}/>
      </CardActions>
    </Card>
  )
}

/**
 * CONTAINER
 */

const mapState = (state, ownProps) => {
  return {
    product: ownProps.product,
    cart: state.cart
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postCartItem: () => {
      dispatch(postCartItem({
        ...ownProps.product,
        quantity: 1
      }))
      dispatch(toggleCart()) // Opens the cart to show the item added
    },
    putCartItem: () => {
      dispatch(putCartItem({
        ...ownProps.product,
        quantity: 2
      }))
      dispatch(toggleCart())
    }
  }
}

const mergeProps = (propsFromState, propsFromDispatch) => {
  return {
    ...propsFromDispatch,
    ...propsFromState,
    addToCart: () => {
      let product = propsFromState.product
      let cart = propsFromState.cart
      let productInCart;
      if (cart) productInCart = cart.find((cartItem) => cartItem.id == product.id)
      if (productInCart) {
        return propsFromDispatch.putCartItem();
      } else {
        return propsFromDispatch.postCartItem();
      }
    }
  }
}

export default connect(mapState, mapDispatch, mergeProps)(ProductItem)

ProductItem.propTypes = {
  product: PropTypes.object,
  postCartItem: PropTypes.func
}
