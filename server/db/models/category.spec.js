const { expect } = require('chai')
const db = require('../index')
const Category = db.model('category')

describe('Category Model', () => {

  beforeEach('Synchronize and clear database', () => db.sync({force: true}));

  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('definition', () => {

    const category = Category.build({ name: 'wood' })

    it('has expected name', () => {
      expect(category.name).to.equal('wood');
    });

  });

  describe('validations', () => {

    it('requires a name', () => {
      const category = Category.build();
      return category.validate()
        .then(() => { throw new Error('Promise should have rejected'); })
        .catch(err => {
          expect(err.name).to.equal('SequelizeValidationError')
        });
    });

  });
})
