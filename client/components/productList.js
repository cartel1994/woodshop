import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ProductItem from './productItem'
import SearchBarComp from './searchBarComp'

export const ProductList = ({products, searchInput}) => {
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  })

  if (filteredProducts.length) products = filteredProducts

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
    products: state.products,
    searchInput: state.searchInput
  }
}

export default connect(mapState)(ProductList)

ProductList.propTypes = {
  products: PropTypes.array,
  searchInput: PropTypes.string
}
