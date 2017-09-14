/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('has the expected schema definition', () => {
    expect(User.attributes.email).to.be.an('object');
    expect(User.attributes.password).to.be.an('object');
    expect(User.attributes.salt).to.be.an('object');
    expect(User.attributes.googleId).to.be.an('object');
    expect(User.attributes.isAdmin).to.be.an('object');
  });

  describe('validations', () => {
    it('requires email', () => {
      const user = User.build();
      return user.validate()
        .then(() => { throw new Error('Promise should have rejected')})
        .catch(err => {
          expect(err).to.exist;
          expect(err).to.be.an('error');
        })
    })
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')

  describe('Admin User', () => {
    describe('Admin user has isAdmin flag', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          isAdmin: true
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if user is an admin', () => {
        expect(cody.isAdmin).to.be.equal(true)
      })
    }) 

    describe('Users should by default not be admins', () => {
      let jane

      beforeEach(() => {
        return User.create({
          email: 'jane@puppybook.com',
          password: 'bones',
        })
          .then(user => {
            jane = user
          })
      })

      it('returns false if jane is not an admin', () => {
        expect(jane.isAdmin).to.be.equal(false)
      })
    }) 
  }) 
}) // end describe('User model')
