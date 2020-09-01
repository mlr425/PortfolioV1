const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    //res.send('contact me page')
    res.render('contactMeView/index')
})

module.exports = router