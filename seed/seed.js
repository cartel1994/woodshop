const db = require('../server/db')

// Models
const Product = require('../server/db/models/product')
const Purchase = require('../server/db/models/purchase')
const Order = require('../server/db/models/order')
const Category = require('../server/db/models/category')
const Review = require('../server/db/models/review')

const products = require('./productData')

const seed = () => 
  Promise.all(products.map(product => Product.create(product)))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then( () => {
      console.log('Seeding database');
      return seed();
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