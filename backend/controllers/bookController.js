import { Book } from '../models/bookModel.js';

export const getBook = async (req, res) => {
  try {
    //pagination details
    const { page = 1, limit = 10 } = req.query;
    const totalPages = await.Post.countDocuments ({});
    const bookList = await Book.find()
      .sort({entDat:'descending'})
      .lean()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // all count
    const allBookCount = await Book.countDocuments();

    res.json({
      bookList, // list
      totalPages: Math.ceil(allBookCount / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export default getBook;
