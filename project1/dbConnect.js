const mongoose = require ('mongoose');
require('dotenv').config();

async function dbConnect(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() =>{
        console.log('Successful connected to MongoDb Atlas.');
    }).catch((error) =>{
        console.log('Unable to connect to MongoDb.');
        console.error(error);
    });
}

module.exports = dbConnect;