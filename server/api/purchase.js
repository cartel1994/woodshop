const router = require('express').Router()
const {Purchase, Order} = require('../db/models')
const nodemailer = require('nodemailer')

module.exports = router

// set up
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: 'woodshop.graceshopper@gmail.com',
      pass: 'heluvagooddip'
  }
});

router.post('/', (req, res, next) => {
  console.log("====== POST ========")
  console.log(req.body)

  // kills the cart
  req.session.cart = []

  Purchase.create(req.body, { include: [Order] } )
  .then(purchase => {
    // makes email data
    const {email, orders} = req.body
    const mailOptions = {
      from: 'woodshop.graceshopper@gmail.com', // sender address
      to: req.body.email, // list of receivers
      subject: 'Woodshop - Purchase Confirmation', // Subject line
      html: JSON.stringify(orders) // plain text body
    };

    // sends email
    transporter.sendMail(mailOptions, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info);
    });

    // responds with purchase data
    res.json(purchase)
  })
  .catch(next)
})
