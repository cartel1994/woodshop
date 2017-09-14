const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {notEmpty: true}
  },
  details: {
    type: Sequelize.TEXT
  },
  available: {
    type: Sequelize.BOOLEAN,
    default: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {min: 1}
  }
}, {
  getterMethods: {
    price: function() {
      return this.getDataValue('price') / 100
    }
  },
  setterMethods: {
    price: function (dollars) {
      this.setDataValue('price', dollars * 100)
    }
  }
})

module.exports = Product
