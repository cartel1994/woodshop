const User = require('./user')
const Purchase = require('./purchase')
const Order = require('./order')
const Category = require('./category')
const Product = require('./product')
const Review = require('./review')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Purchase.belongsTo(User);

// Reviews -> User
Review.belongsTo(User)
User.hasMany(Review)

// Product -> Reviews
Review.belongsTo(Product)
Product.hasMany(Review)

// Order -> Product
Order.belongsTo(Product);

// Purchase <-> Orders
Purchase.hasMany(Order);
Order.belongsTo(Purchase);

// Product -> Category
Product.belongsToMany(Category, { through: 'ProductCategory'});
Category.belongsToMany(Product, { through: 'ProductCategory'});

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Purchase,
  Product,
  Order,
  Category,
  Review
}
