import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// Redux Stores
import { fetchOrderByPurchaseId } from '../store'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const PurchaseItem = ({purchase}) => {

    let totalValue = purchase.orders.reduce((acc, curr) => {
      return acc + curr.totalCost
    }, 0)

    return (
      <div key={purchase.id}>
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn colSpan="4" tooltip="Purchase Info" style={{textAlign: 'center'}}>
                Purchase #{purchase.id}
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Shipping Info</TableHeaderColumn>
              <TableHeaderColumn>Shipping Status</TableHeaderColumn>
              <TableHeaderColumn>Total Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{purchase.email}</TableRowColumn>
              <TableRowColumn>{purchase.shippingInfo}</TableRowColumn>
              <TableRowColumn>{purchase.status}</TableRowColumn>
              <TableRowColumn>{`$${totalValue}`}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
          <TableRow>
          </TableRow>
              <TableRow>
              <TableHeaderColumn>Order No.</TableHeaderColumn>
              <TableHeaderColumn>Item Name</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              purchase.orders && purchase.orders.map(order => {
              return (
              <TableRow key={order.id}>
                <TableRowColumn>{order.id}</TableRowColumn>
                <TableRowColumn>{order.product.name}</TableRowColumn>
                <TableRowColumn>{`$${order.totalCost}`}</TableRowColumn>
                <TableRowColumn>{order.quantity}</TableRowColumn>
              </TableRow>
              )
            })
          }
          </TableBody>
        </Table>
      </div>
    )
}



const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchPurchases: (userId) => {
      dispatch(fetchOrderByPurchaseId(userId))
    },
  }
}

export default connect(mapDispatch)(PurchaseItem)

PurchaseItem.propTypes = {
  orders: PropTypes.array,
}
