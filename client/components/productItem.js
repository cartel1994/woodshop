import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Redux Stores
import { addCartItem } from '../store'

// Material UI 
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProductItem = ({ product, addCartItem }) => {
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
        <FlatButton label="Add to Cart" onClick={addCartItem}/>
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
    addCartItem: () => {
      dispatch(addCartItem(ownProps.product))
    }
  }
}

export default connect(mapState, mapDispatch)(ProductItem)

ProductItem.propTypes = {
  product: PropTypes.object
}
