const mongoose = require('mongoose');
require('colors');

const connectDb = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MogoDB Connected ${conn.connection.host}`.bgYellow)
    } catch (error){
        console.log(`Error : ${error.message}`.bgRed);
        process.exit(1);
    }
}

module.exports = connectDb;