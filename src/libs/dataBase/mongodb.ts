import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const dbName = "operDb";
const url = `mongodb+srv://operBlog:${process.env.DB_PASSWORD}@cluster0.bhroxzf.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connect = async () => {
    return await mongoose.connect(url);
};


const dataBase = {
    connect
};

export { dataBase };
