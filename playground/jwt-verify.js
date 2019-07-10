const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2YxMzVkYWZiYWYzNDFlNjA1ZTVkNzYiLCJ1c2VybmFtZSI6InVzZXI2IiwiY3JlYXRlZEF0IjoxNTU5MzExODUyMjUxLCJpYXQiOjE1NTkzMTE4NTJ9.n-zTx8Iy6fieZwBoOfVr_IoTlNGjQIapUk5RDBnmjvc'

const check = jwt.verify(token, 'jwt@123')
console.log(check)

