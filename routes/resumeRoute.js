const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    //res.send('resume route page')
    res.render('resumeView/index')
})

module.exports = router