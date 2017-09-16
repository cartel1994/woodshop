const db = require('../server/db')

// Models
const Product = require('../server/db/models/product')
const Purchase = require('../server/db/models/purchase')
const Order = require('../server/db/models/order')
const Category = require('../server/db/models/category')
const Review = require('../server/db/models/review')
const User = require('../server/db/models/user')

// Mockaroo seed data
const products = require('./productData')
const purchases = require('./purchaseData')
const users = require('./userData')
const reviews = require('./reviewData')

// Non-mockaroo seed data
const categories = [
  { name: 'Furniture' },
  { name: 'Shipbuilding' },
  { name: 'Fencing' },
  { name: 'Plywood' },
  { name: 'Clearance' }
]

// Assigns ids for the Mockaroo sample data
// -- Todo: Orders: Create orders that have productId and purchaseId
// .map(review => review.setProduct( Math.round(Math.random() * (products.length - 1)) + 1 ))

const seed = () => 
  Promise.all(products.map(product => Product.create(product)))
  .then(() => Promise.all(categories.map(category => Category.create(category))))
  .then(() => Promise.all(purchases.map(purchase => Purchase.create(purchase))))
  .then(() => Promise.all(users.map(user => User.create(user))))
  .then(() => Promise.all(reviews.map(review => Review.create(review))))

const makeAssociations = () => {

  return Purchase.findAll()
    .then(purchases => {
      return Promise.all(purchases.map(purchase => purchase.setUser( Math.round(Math.random() * (users.length - 1)) + 1 )))
      })
    .then(() => Review.findAll())
      .then(reviews => {
        return Promise.all(reviews.map(review => review.setUser( Math.round(Math.random() * (users.length - 1)) + 1 )))
      })
    .then(() => Review.findAll())
      .then(reviews => {
        return Promise.all(reviews.map(review => review.setProduct( Math.round(Math.random() * (products.length - 1)) + 1 )))
      })
}

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then( () => {
      console.log('Seeding database');
      return seed();
    })
    .then(() => {
      return makeAssociations();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack)
      console.log(err)
    })
    .then(() => {
      db.close();
      return null;
    })
}

main();