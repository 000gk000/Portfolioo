const mongoose = require('mongoose')

//mongoose.connect(URI)

const URI = "mongodb://127.0.0.1:27017/trial_db";

 //const URI = process.env.MONGODB_URI


const connectDb = async() =>{
    try {
        await mongoose.connect(URI)
        console.log("database connection successfull")
    } catch (error) {
        console.log("database connection failed")
    }
    // process.exit(0);
}

module.exports = connectDb;
