import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ProductItem from './productItem'
import SearchBarComp from './searchBarComp'

export const ProductList = ({products}) => {
  return (
    <div>
      <h1>Product List</h1>
      <SearchBarComp />
      <br />
      <div>
        {
          products.map(product => product.available && <ProductItem key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapState)(ProductList)

ProductList.propTypes = {
  products: PropTypes.array
}
