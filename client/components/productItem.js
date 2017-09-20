import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// Redux Stores
import { postCartItem, putCartItem, toggleCart, destroyProduct } from '../store'

// Material UI
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const ProductItem = ({ product, postCartItem, isAdmin, destroyProduct, putCartItem, addToCart, productInCart }) => {
  return (
    <Card>
      <CardHeader
        title={product.name}
        subtitle={`$${product.price}`}
        avatar={product.photoUrl}
      />
      <CardActions>
        <RaisedButton label="Details" secondary={true} containerElement={<Link to={`/products/${product.id}`} />} />
        {
          productInCart
          ? <RaisedButton label="Added to Cart" disabled={true} />
          : <RaisedButton label="Add to Cart" primary={true} onClick={postCartItem}/>
        }
        {
          isAdmin && (
            <RaisedButton label="DELETE" onClick={() => destroyProduct(product.id)} />
          )
        }
      </CardActions>
    </Card>
  )
}

/**
 * CONTAINER
 */

const mapState = (state, ownProps) => {
  return {
    isAdmin: state.user.isAdmin,
    product: ownProps.product,
    productInCart: state.cart && state.cart.find((cartItem) => cartItem.id == ownProps.product.id)
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
    destroyProduct: (id) => {
      dispatch(destroyProduct(id))
    }
  }
}

export default connect(mapState, mapDispatch)(ProductItem)

ProductItem.propTypes = {
  product: PropTypes.object,
  postCartItem: PropTypes.func,
  isAdmin: PropTypes.bool,

}
