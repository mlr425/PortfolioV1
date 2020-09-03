const express = require('express')
const router = express.Router()
const Message = require('../models/contactMe')
router.get('/', (req,res) => {
    //res.send('contact me page')
    res.render('contactMeView/new', {message: new Message() })
})

//send msg
router.post('/', (req,res) => {
    const userMsg = new Message({
        name: req.body.name,
        email: req.body.email,
        msg: req.body.givenMsg
    })
    userMsg.save((err, userMsg) => {
        if(err){
            res.render('/contact', {
                name: req.body.name,
                email: req.body.email,
                msg: "error sending message"
            })
        }else{
            
            res.redirect('/contact')
        }
    })

   
    
})

module.exports = router