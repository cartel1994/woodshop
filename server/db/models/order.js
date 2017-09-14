const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order',{
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 1}
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 1}
  }
}, {
  getterMethods: {
    price: function () {
      return this.getDataValue('price') / 100
    },
    totalCost: function () {
      return this.price * this.quantity
    }
  },
  setterMethods: {
    price: function (dollars) {
      this.setDataValue('price', dollars * 100)
    }
  }
})

module.exports = Order
