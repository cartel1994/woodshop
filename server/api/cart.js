const router = require('express').Router();
module.exports = router

router.get('/', (req, res, next) => {
  let cart = req.session.cart
  console.log("====== GET =========")
  console.log(req.session)
  res.json(cart)
})

router.post('/', (req, res, next) => {
  console.log("====== POST ========")
  console.log(req.body)
  if (!req.session.cart) req.session.cart = []
  req.session.cart = [...req.session.cart, req.body];
  res.status(201).json(req.session.cart[req.session.cart.length - 1])
})

router.put('/', (req, res, next) => {
  console.log("====== PUT ========")
  let { newQuantity, itemToUpdate } = req.body.params
  let updatedItem = itemToUpdate
  updatedItem.quantity = newQuantity
  req.session.cart = req.session.cart.map(cartItem => {
    if (cartItem.id == itemToUpdate.id) { return updatedItem }
    return cartItem
  })
  res.status(200).json(updatedItem)
})

router.delete('/', (req, res, next) => {
  console.log("====== DELETE ======")
  console.log(req.query)
  const itemToDelete = req.session.cart.find((cartItem) => cartItem.id == req.query.idToDelete)
  req.session.cart = req.session.cart.filter((cartItem) => cartItem.id != req.query.idToDelete)
  res.json({ deletedId: req.query.idToDelete}).status(204)
})

// router.put('/', (req, res, next) => {
//   console.log("==============")
//   console.log(req.body)
  

//   // if (!req.session.cart) req.session.cart = []
//   // req.session.cart = [...req.session.cart, req.body];
//   // res.status(201).json(req.session.cart[req.session.cart.length - 1])
// })