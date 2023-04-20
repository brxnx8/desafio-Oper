import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const url = `mongodb+srv://operBlog:${process.env.DB_PASSWORD}@cluster0.bhroxzf.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority`;

const connect = async () => {
    return await mongoose.connect(url);
};

// mongoose.connect(url);
// let db = mongoose.connection;

const db = {
    connect
};

export default db;
