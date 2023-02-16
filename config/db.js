const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        
        useUnifiedTopology: true

    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold)

}


module.exports = connectDB;

