const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { 
      min: 0, 
      max:5 
    }
  },
  summary: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Review

/**
 * instanceMethods
 */


/**
 * classMethods
 */


/**
 * hooks
 */
