const jwt = require('jsonwebtoken')
const tokenData = {
    id: 1,
    name: 'user1'
}

const token = jwt.sign(tokenData, 'jwt@123')
console.log(token) //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InVzZXIxIiwiaWF0IjoxNTU5MjQxOTU5fQ.
//4dql-omYWsBqZmHGMQds000CFcbUo3rwI7l0QP98EcI







