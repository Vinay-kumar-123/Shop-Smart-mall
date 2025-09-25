import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToMongo = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDb!")
}

export default connectToMongo;