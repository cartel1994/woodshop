import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ProductItem from './productItem'
import SearchBar from './searchBar'

export const ProductList = ({products, searchInput}) => {
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  })

  if (filteredProducts.length || searchInput) products = filteredProducts

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar />
      <br />
      <div>
        {
          products.length
          ? products.map(product => product.available && <ProductItem key={product.id} product={product}/>)
          : <p>There are no products matching that name</p>
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
