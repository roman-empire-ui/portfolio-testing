require('dotenv').config()
const express = require('express')
const userCon = require('./app/controllers/userControll') 
const app = express()
const cors = require ('cors') 

 

const port = 4050



const configureDB = require('./config/db') 
configureDB()
app.use(express.json()) 
app.use (cors())
app.post('/api/user/register' , userCon.register) 


app.listen( port , () => {
  console.log('server is running on port' , port)
})