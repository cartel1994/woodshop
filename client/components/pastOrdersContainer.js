import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// Redux Stores
import { fetchPurchases } from '../store'

// Material UI

// Dumb Components
import PurchaseItem from './purchaseitem'

class pastOrdersContainer extends Component {

  componentDidMount() {
    this.props.fetchPurchases(this.props.user.id)
  }

  render() {
    const purchases = this.props.purchases
    // console.log("===PURCHASES===")
    // console.log(purchases)

    return (
      <div>
      {
        purchases && purchases.map((purchase) => {
          return (
          <div key={purchase.id}>
            <PurchaseItem purchase={purchase}/>
            <br/>
          </div>
          )}
        )
      }
      </div>
    )
  }

}

/**
 * CONTAINER
 */

const mapState = (state, ownProps) => {
  return {
    user: state.user,
    purchases: state.purchases
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchPurchases: (userId) => {
      dispatch(fetchPurchases(userId))
    },
  }
}

export default connect(mapState, mapDispatch)(pastOrdersContainer)

pastOrdersContainer.propTypes = {
  orders: PropTypes.array,
  purchases: PropTypes.array

}
