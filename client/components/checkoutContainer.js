import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Redux methods
import {} from '../store'

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
        <RaisedButton label="Checkout" onClick={() => handlePurchase(totalCost)}/>
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

const mapDispatch = (dispatch, ownProps) => {
  return {
    handlePurchase: (totalCost) => {
      console.log("===EMAIL===")
      console.log(document.getElementById('emailAddress').value)
      console.log("===POST===")
      console.log(document.getElementById('mailingAddress').value)
      console.log("===VALUE===")
      console.log(totalCost)
    }
  }
}

export default connect(mapState, mapDispatch)(CheckoutContainer)
