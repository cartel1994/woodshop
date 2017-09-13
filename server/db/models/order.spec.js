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
      expect(Order.attributes.quantity).to.be.an('object');
    });

    it('has expected price definition', () => {
      expect(Order.attributes.quantity).to.be.an('object');
    });

  })

  describe('validations', () => {
    it('requires')
  })

})
