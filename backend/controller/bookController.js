import books from "../model/bookModel.js";

const getBook = async (req, res) => {
    try {
        const book = await books.find({})
        res.status(200).json(book)
    } catch (error) {
        console.log("err", error);
        res.status(500).json(error)
    }
}

export default getBook