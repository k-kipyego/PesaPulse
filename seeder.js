const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const itemModel = require('./models/itemModels');
const items = require('./utils/data');
require('colors');

// dotenv Config
dotenv.config();

// DB Config
connectDb();

const importData = async() =>{
    try {
        await itemModel.deleteMany()
        const itemData = await itemModel.insertMany(items);
        console.log('All Item Added'.bgGreen);
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgRed.inverse)
        process.exit(1);
    }
}

importData();