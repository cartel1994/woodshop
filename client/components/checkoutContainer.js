import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Redux methods
import { createNewPurchaseOnTheBackend } from '../store'

// Material-UI components
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const CheckoutContainer = (props) => {
  const {cart, handlePurchase} = props

  //totalCost function
  let totalCost = 0;
  cart.forEach((item) => {
    totalCost+= item.price * item.quantity
  })
  totalCost = totalCost.toFixed(2)


  return (
    <Card>
      <CardText>
      <TextField
      id="emailAddress"
      floatingLabelText="Email Address"
    /><br />
    <TextField
      id="mailingAddress"
      floatingLabelText="Mailing Address"
    /><br />
      </CardText>
      <CardActions>
        <RaisedButton label="Checkout" disabled={cart.length < 1} onClick={() => handlePurchase(totalCost, cart)}/>
        <p>Total Value: {totalCost}</p>
      </CardActions>
    </Card>
  )
}

const mapState = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handlePurchase: (totalCost, cart) => {
      // makes quantity a number
      cart.forEach(item => item.quantity = parseInt(item.quantity))

      const email = document.getElementById('emailAddress').value
      const shippingInfo = document.getElementById('mailingAddress').value

      dispatch(createNewPurchaseOnTheBackend({ email: email, shippingInfo: shippingInfo }, cart))

      // console.log("===EMAIL===")
      // console.log(document.getElementById('emailAddress').value)
      // console.log("===POST===")
      // console.log(document.getElementById('mailingAddress').value)
      // console.log("===VALUE===")
      // console.log(totalCost)
      // console.log("===CART===")
      // console.log(cart)
    }
  }
}

export default connect(mapState, mapDispatch)(CheckoutContainer)
