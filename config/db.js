const mongoose = require('mongoose') 
const configureDB = async () => { 

    const url = 'mongodb+srv://ysrinivas4901:Roman1256@cluster0.qrtw9ll.mongodb.net/'
    try { 
        await mongoose.connect(`${url}`)
        console.log('connected to db')

    } catch (e) {
        console.log('something went wrong', e.message)
    }
} 

module.exports = configureDB