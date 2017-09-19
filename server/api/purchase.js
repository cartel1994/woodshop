const router = require('express').Router()
const {Purchase, Order} = require('../db/models')
module.exports = router


router.post('/', (req, res, next) => {
  console.log("====== POST ========")
  console.log(req.body)
  // kills the cart
  // req.session.cart = []

  Purchase.create(req.body.purchase)
  .then(purchase => res.json(purchase))
  .catch(next)

  // res.sendStatus(200)

  //sends worthless status (FOR NOW DANIEL GOSH)
})
