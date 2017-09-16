import SearchBar from 'material-ui-search-bar'
import React from 'react'
import {connect} from 'react-redux'

export const SearchBarComp = (props) => {
  return (
    <SearchBar
      onChange={() => console.log('onChange')}
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

  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(SearchBarComp)
