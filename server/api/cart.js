const router = require('express').Router();

router.post('/', (req, res, next) => {
  console.log("==============")
  req.session.cart = req.body;
  res.status(201)
})



module.exports = router