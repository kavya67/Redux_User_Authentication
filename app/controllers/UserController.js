const express = require('express')
const router = express.Router()

const {User} = require('../models/User')
const {authenticateUser} = require('../middlewares/authentication')

//localhost:3000/user/register
router.post('/register',(req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.send(err)
    })
    
})

// localhost:3000/user/login

router.post('/login',(req,res)=>{
    const body = req.body

    User.findByCredentials(body.email, body.password) //static method
        .then(function(user){
            return user.generateToken() //create own instance method  /asynchronous returns a promise //therfore return promise object, which is resolved

        })
            .then(function(token){
                res.send({token})
            })
        .catch(function(err){
            res.send(err)
        })

    
})

//localhost:3000/user/account

router.get('/account', authenticateUser, (req,res)=>{
    const {user} = req
    res.send(user)
    
})

//localhost:3000/user/logout

router.delete('/logout',authenticateUser, function(req, res){
    const {user, token} = req
    User.findByIdAndUpdate(user._id, {$pull: {tokens:{token: token}}})
        .then(function(){
            res.send('notice: successfully logged out')
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    usersRouter: router
}