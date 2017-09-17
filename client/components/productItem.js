import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProductItem = ({product}) => {
  return (
    <Card>
      <CardHeader
        title={product.name}
        subtitle={`$${product.price}`}
        avatar={product.photoUrl}
      />
      <CardActions>
        <FlatButton label="Details" containerElement={<Link to={`/products/${product.id}`} />} />
        <FlatButton label="Add to Cart" />
      </CardActions>
    </Card>
  )
}

export default ProductItem

ProductItem.propTypes = {
  product: PropTypes.object,
}
