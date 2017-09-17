const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log("==============")
  console.log(req.body)
  req.session.cart = req.body;
  res.status(201)
})

router.get('/', (req, res, next) => {
  let cart = req.session.cart
  console.log(req.body)
  res.json(cart)
  
})



module.exports = router