//our landing page for the portfolio
//not sure how important the async is now bc we're not using mongodb
//w/e just keep in for good practice later

const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
    // this goes to views/index (? p sure)
})

module.exports = router