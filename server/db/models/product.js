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
  stock: {
    type: Sequelize.INTEGER,
    default: 0,
    validate: {min: 0}
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
    },
    available: function () {
      return this.stock > 0
    }
  },
  setterMethods: {
    price: function (dollars) {
      this.setDataValue('price', dollars * 100)
    }
  }
})

module.exports = Product
