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
    }
  },
  setterMethods: {
    // removed to allow totalCost to work
    // price: function (dollars) {
    //   this.setDataValue('price', dollars * 100)
    // }
  }
})

module.exports = Order


// instance method
Order.prototype.totalCost = function () {
  return this.price * this.quantity
}
