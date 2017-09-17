const router = require('express').Router();
module.exports = router

router.post('/', (req, res, next) => {
  console.log("==============")
  console.log(req.body)
  req.session.cart = req.body;
  res.status(201)
})

router.get('/', (req, res, next) => {
  let cart = req.session.cart
  console.log("==============")
  console.log(req.session.cart)
  res.json(cart)
})
