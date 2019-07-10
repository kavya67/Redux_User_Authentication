const express= require('express')
const mongoose = require('./config/database')

const {usersRouter} = require('./app/controllers/UserController')


const app = express()
const port = 3003
app.use(express.json())



app.use('/user',usersRouter)


app.listen(port, function(){
    console.log('connecting to port',port)
})

