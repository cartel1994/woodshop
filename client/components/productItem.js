import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Redux Stores
import { postCartItem } from '../store'

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
      <CardText>
        {product.details}
      </CardText>
      <CardActions>
        <FlatButton label="Details" />
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
    product: ownProps.product
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postCartItem: () => {
      dispatch(postCartItem({
        ...ownProps.product,
        quantity: 1
      }))
    }
  }
}

export default connect(mapState, mapDispatch)(ProductItem)

ProductItem.propTypes = {
  product: PropTypes.object,
  postCartItem: PropTypes.func
}
