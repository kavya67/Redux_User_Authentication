const bcryptjs = require('bcryptjs')

const password = 'kavz@1223'

bcryptjs.genSalt(10)
 .then(salt=>{
     console.log(salt)
     bcryptjs.hash(password,salt)
     .then(encryptedpassword=>{
         console.log(encryptedpassword)
     })
 })