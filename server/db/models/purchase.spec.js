const {expect} = require('chai')
const db = require('../index')
const Purchase = db.model('purchase')

describe('Purchase model', () => {
  before(() => {
    return db.sync({force: true})
  })

  describe('getterMethods', () => {
    describe('totalPrice', () => {
      const orders = [
        {
          quantity: 3,
          price: 999
        },
        {
          quantity: 1,
          price: 1299
        }
      ]



    })

  })

})
