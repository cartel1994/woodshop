const Sequelize = require('sequelize')
const db = require('../db')

const Purchase = db.define('purchase', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shippingInfo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  paymentInfo: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM,
    values: ['Prep', 'Shipped', 'Delivered'],
    defaultValue: 'Prep'
  }
}, {
  getterMethods: {
    // totalPrice: function () {
    //   return this.getOrders().reduce((acc, curr) => {
    //         return acc + curr.totalCost // an Order instance method
    //       }, 0) / 100
    // }
  }
})

module.exports = Purchase
