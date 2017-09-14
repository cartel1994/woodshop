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
      return this.getOrders({attributes: ['quantity', 'price']})
        .then(orders => {
          const sum = orders.reduce((acc, curr) => {
            return acc + curr
          })
          return sum / 100
        })
    }
  }
})
