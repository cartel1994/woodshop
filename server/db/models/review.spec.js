const { expect } = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review Model', () => {

  beforeEach('Synchronize and clear database', () => db.sync({force: true}));

  after('Synchronize and clear database', () => db.sync({force: true}));

  describe('definition', () => {

    const review = Review.build({
      rating: 5,
      summary: "Good"
    })

    it('has rating and summary', () => {
      expect(review.rating).to.equal(5);
      expect(review.summary).to.equal("Good");
    });

  });

  describe('validations', () => {

    it('requires a rating', () => {
      const review = Review.build();
      return review.validate()
        .then(() => { throw new Error('Promise should have rejected'); })
        .catch(err => {
          expect(err.name).to.equal('SequelizeValidationError')
        });
    });

    it('requires a rating that is more than 0', () => {
      const review = Review.build({
        rating: -1,
        summary: "test"
      });
      return review.validate()
        .then(() => { throw new Error('Promise should have rejected'); })
        .catch(err => {
          expect(err.name).to.equal('SequelizeValidationError')
        });
    });

    it('requires a rating that is less than 5', () => {
      const review = Review.build({
        rating: 6,
        summary: "test"
      });
      return review.validate()
        .then(() => { throw new Error('Promise should have rejected'); })
        .catch(err => {
          expect(err.name).to.equal('SequelizeValidationError')
        });
    });

    it('does not require a summary', () => {
      const review = Review.build({
        rating: 3
      });
      return review.validate()
        .then(() => { return true })
        .catch(err => {
          throw new Error('Promise for validate should not have errored');
        });
    });

  });
})
