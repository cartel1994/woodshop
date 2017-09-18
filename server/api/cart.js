const router = require('express').Router();
module.exports = router

router.get('/', (req, res, next) => {
  let cart = req.session.cart
  console.log("==============")
  console.log(req.session)
  res.json(cart)
})

router.post('/', (req, res, next) => {
  console.log("==============")
  console.log(req.body)
  if (!req.session.cart) req.session.cart = []
  req.session.cart = [...req.session.cart, req.body];
  res.status(201).json(req.session.cart[req.session.cart.length - 1])
})

router.delete('/', (req, res, next) => {
  console.log("=============")
  console.log(req.body)
  
})

router.put('/', (req, res, next) => {
  console.log("==============")
  console.log(req.body)
  

  // if (!req.session.cart) req.session.cart = []
  // req.session.cart = [...req.session.cart, req.body];
  // res.status(201).json(req.session.cart[req.session.cart.length - 1])
})