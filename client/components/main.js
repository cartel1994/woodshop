import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

// Redux Stores
import { logout, toggleCart } from '../store'

// React Components
import ProductList from './productList'
import Cart from './cart'

// Material UI
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { green100, green500, green700 } from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import Drawer from 'material-ui/Drawer'

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
  const { children, handleClick, isLoggedIn, showCart, toggleCart, numCartItems } = props

  const style = {
    margin: 10,
  }

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          title={"Wood Shop"}
          iconElementRight={
            <div>
              <RaisedButton 
                label="Home"
                containerElement={<Link to="/" />} 
                style={style}
              />
              {
                isLoggedIn
                  ? (<span>
                      <RaisedButton 
                        label="Logout" 
                        containerElement={<Link to="/logout" />}
                        style={style}
                      />
                    </span>)
                  : (
                    <span>
                      <RaisedButton 
                        label="Sign Up"
                        containerElement={<Link to="/signup" />} 
                        style={style}
                      /> 
                      <RaisedButton 
                        label="Login"
                        containerElement={<Link to="/login" />} 
                        style={style}
                      />
                    </span>
                  )
              }
              { /* Shopping Cart */}
              <Badge badgeContent={numCartItems} secondary={true} badgeStyle={{ top: 14, right: 14, fontSize: 14 }}>
                <IconButton onClick={toggleCart}>
                  <ShoppingCart />
                </IconButton>
              </Badge>
            </div>
          }
        />
        {children}
        <Cart />
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
    showCart: state.toggleCart,
    numCartItems: state.cart.length
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
    toggleCart() {
      dispatch(toggleCart())
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
