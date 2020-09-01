const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.set('views',__dirname + '/views') //all of the different views for our server, will go here
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

//landing page 
const indexRouter = require('./routes/index')
const contactMeRouter = require('./routes/contactMe')
const resumeRouter = require('./routes/resumeRoute')
const projectsRouter = require('./routes/projectsRoute')




app.use('/',indexRouter)
app.use('/contact',contactMeRouter)
app.use('/resume',resumeRouter)
app.use('/projects',projectsRouter)



app.listen(process.env.PORT || 3000)

