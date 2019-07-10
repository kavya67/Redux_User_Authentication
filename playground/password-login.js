const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$KSuVDgaYUjrDOCtTNSFUB.3vYDdMrvE084SOoXQtwW8/2isjZc5S6'
const password = 'secret@123'

bcryptjs.compare(password,encrypted)
.then(result=>{
    console.log(result)
})