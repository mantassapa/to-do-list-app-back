const mongoose = require("mongoose")

const connectToDb = async()=>{
    try{
        const connecting = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`connected to ${connecting.connection.host}`);
    }catch(error){
        console.log(`failed to connect ${error}`);
    }
    
}

module.exports = connectToDb