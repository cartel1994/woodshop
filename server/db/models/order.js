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
    priceTotal: function () {
      return this.getDataValue('quantity') * this.getDataValue('price') / 100;
    }
  }
})

module.exports = Order
