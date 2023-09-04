require('dotenv').config();
const { BASIC_AUTH_PWD, BASIC_AUTH_USER } = process.env;
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: { [BASIC_AUTH_USER]: BASIC_AUTH_PWD },
    challenge: true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})