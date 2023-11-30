const User = require('../models/user') 
const _ = require('lodash') 
const userCon = {} 

userCon.register = async (req , res) => {
    const body = _.pick(req.body, ['username' , 'email' , 'password','role']) 
    try { 
        const user = new User(body) 
        await user.save() 
        res.json(user)

    } catch (e) {
        res.status(500).json({error : 'internal server error'})
    }
} 

module.exports = userCon