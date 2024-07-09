const { default: mongoose } = require("mongoose");

const dbConnection = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected successfully")
    }
    catch(err){
        console.log("Error :", err)
    }
}

module.exports = dbConnection