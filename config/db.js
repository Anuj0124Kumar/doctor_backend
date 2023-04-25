const mongoose = require('mongoose')
const colors = require('colors')


const connectDB = async () =>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log(`database connected ${mongoose.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`MONGO db server issue ${error}`.bg.white);
    }
}


module.exports = connectDB;