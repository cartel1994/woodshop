const Sequelize = require('sequelize')
const db = require('../db')

const Purchase = db.define('purchase', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shippingInfo: {
    type: Sequelize.TEXT,
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
    totalPrice: () => {
      return this.getOrders()
        .then(orders => {
          const sum = orders.reduce((acc, curr) => {
            return acc + curr.totalCost() // an Order instance method
          })
          return sum / 100
        })
    }
  }
})

module.exports = Purchase