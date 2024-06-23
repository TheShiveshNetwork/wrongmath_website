import mongoose from "mongoose";

const ConnectToDB = async () => {
    if (mongoose.connections[o].readyState) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to mongodb");
    } catch (error) {
        throw new Error("[Error] Connecting to MongoDB");        
    }
}