import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoty: String,
    image: String,
    title: String
})

const books = mongoose.model("Book", bookSchema)

export default books