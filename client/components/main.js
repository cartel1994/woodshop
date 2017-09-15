import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {green100, green500, green700} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

//* MUI THEME */
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
})

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title = "Wood Shop"
            iconElementRight = {
              <div>
              <FlatButton label="Home"
              containerElement={<Link to="/home"/>}/>
              <FlatButton label="Sign Up"
              containerElement={<Link to="/signup"/>}/>
              <FlatButton label="Login"
              containerElement={<Link to="/login"/>}/>
              </div>
            }
          />
          <ProductList products={props.products} />
          <hr />
          {children}
        </div>
      </MuiThemeProvider>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// PRODUCT LIST
function ProductList ({products}) {
  return (
    <div>
      <h1>Product List</h1>
      <div>
      {products.map(product => product.available && <ProductItem product={product}/>)}
      </div>
    </div>
  )
}


// PRODUCT ITEM
function ProductItem ({product}) {
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
      <FlatButton label="Add to Cart" />
    </CardActions>
  </Card>
  )
}
