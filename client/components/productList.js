import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ProductItem from './productItem'
import SearchBar from './searchBar'

export const ProductList = ({products, searchInput, activeCategory}) => {

  // filters by search bar input
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  })

  if (filteredProducts.length || searchInput) products = filteredProducts

  // filters by category
  if (activeCategory > -1) products = products.filter(product => {
    let returnValue = false
    for (let i = 0; i < product.categories.length; i++) {
      if (product.categories[i].id === activeCategory) {
        returnValue = true
      }
    }
    return returnValue
  })

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
    searchInput: state.searchInput,
    activeCategory: state.activeCategory
  }
}

export default connect(mapState)(ProductList)

ProductList.propTypes = {
  products: PropTypes.array,
  searchInput: PropTypes.string
}
