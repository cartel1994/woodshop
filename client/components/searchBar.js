import SearchBarComp from 'material-ui-search-bar'
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {writeSearch} from '../store'

export const SearchBar = ({searchInput, handleChange}) => {
  return (
    <SearchBarComp
      value={searchInput}
      onChange={handleChange}
      onRequestSearch={() => console.log('onRequestSearch')}
      hintText="Search for Some Wood"
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
  )
}

const mapState = (state) => {
  return {
    searchInput: state.searchInput
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange (evt) {
      dispatch(writeSearch(evt))
    }
  }
}

export default connect(mapState, mapDispatch)(SearchBar)

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  handleChange: PropTypes.func
}
