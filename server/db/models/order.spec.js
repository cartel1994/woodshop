/* gloabal describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {

  beforeEach('Syncronize and clear database', () => {
    return db.sync({force: true})
  })

  describe('definitions', () => {

    it('has expected quantity definition', () => {
      expect(Order.attributes.quantity).to.be.an('object')
    });

    it('has expected price definition', () => {
      expect(Order.attributes.quantity).to.be.an('object')
    });

  })

  describe('validations', () => {
    const order1 = Order.build({quantity: 0,price: 2})
    const order2 = Order.build({quantity: 9, price: -5})
    const order3 = Order.build({quantity: 213813, price: 2939})

    describe ('requires quantity to be greater than 0', () => {
      it('fails when quantity is less than 1', () => {
        return order1.validate()
          .then(() => {
            throw Error(`can't set quantity to less than 1`)
          },
          (err) => {
            expect(err.message).to.contain('Validation min on quantity failed')
          })
        })
      it('passes when quantity is greater than 0', () => {
        return order3.validate()
      })
    })

    describe('requires price to be greater than 0', () => {
      it('fails when price is less than 1', () => {
        return order2.validate()
          .then(() => {
            throw Error(`can't set price to less than 1`)
          },
          (err) => {
            expect(err.message).to.contain('Validation min on price failed')
          })
        })
      it('passes when priceis greater than 0', () => {
        return order3.validate()
      })
    })

  })

  describe('Getter Methods', () => {

    const order1 = Order.build({quantity: 5, price: 999})

    describe('total price', () => {

      it('returns the price and total product divided by 100', () => {
        expect(order1.totalPrice)
      })
    })

  })

})
