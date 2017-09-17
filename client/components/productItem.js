import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// Redux Stores
import { postCartItem, toggleCart } from '../store'

// Material UI
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProductItem = ({ product, postCartItem }) => {
  return (
    <Card>
      <CardHeader
        title={product.name}
        subtitle={`$${product.price}`}
        avatar={product.photoUrl}
      />
      <CardActions>
        <FlatButton label="Details" containerElement={<Link to={`/products/${product.id}`} />} />
        <FlatButton label="Add to Cart" onClick={postCartItem}/>
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
    cart: ownProps.cart
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postCartItem: () => {
      console.log(ownProps.cart)

      dispatch(postCartItem({
        ...ownProps.product,
        quantity: 1
      }))
      dispatch(toggleCart())

    }
  }
}

export default connect(mapState, mapDispatch)(ProductItem)

ProductItem.propTypes = {
  product: PropTypes.object,
  postCartItem: PropTypes.func

}
