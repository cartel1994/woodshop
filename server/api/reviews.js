const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/:productId', (req, res, next) => {
  Review.findAll({where: {productId: req.params.productId }})
    .then(reviews => res.json(reviews))
    .catch(next)
})
