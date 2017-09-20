const router = require('express').Router()
const {Product, Category} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Product.findAll({include: {model: Category, as: 'categories'}})
    .then(products => res.json(products))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next)
})

router.delete('/:productId', function (req, res, next) {
  const id = req.params.productId;
  //backend condtional for admin
  if (req.user.isAdmin) {
    return Product.destroy({ where: { id } })
      .then(() => res.status(204).end())
      .catch(next);
  }
  res.sendStatus(400)
});

router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})
