import mongoose from "mongoose";

//creating schema
const bookSchema= mongoose.Schema({
    name:String,
    price:Number,
    category: String,
    image:String,
    title:String,
})
const Book = mongoose.model("Book", bookSchema);

export default Book;