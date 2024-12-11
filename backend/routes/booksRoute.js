import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      /*bookfields2*/
      !request.body.authorB ||
      !request.body.keyw1 ||
      !request.body.kw1Pos ||
      !request.body.keyw2 ||
      !request.body.kw2Pos ||
      !request.body.keyw3 ||
      !request.body.kw3Pos ||
      !request.body.publisherB ||
      !request.body.pagesB ||
      !request.body.reslt ||
      !request.body.topTt  ||
       !request.body.entDat ||
      !request.body.markBk
    ) {
      return response.status(400).send({
      /*bookfields3*/
        message: 'Send all required fields: author, keyword, kwPos, publisher, pages',
      });
    }
    const newBook = {
      /*bookfields4*/
      authorB: request.body.authorB,
      keyw1: request.body.keyw1,
      kw1Pos: request.body.kw1Pos,
      keyw2: request.body.keyw2,
      kw2Pos: request.body.kw2Pos,
      keyw3: request.body.keyw3,
      kw3Pos: request.body.kw3Pos,
      publisherB: request.body.publisherB,
      pagesB: request.body.pagesB,
      reslt: request.body.reslt,
      topTt: request.body.topTt,
      entDat: request.body.entDat,
      markBk: request.body.markBk,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const books = await Book.find().sort('-entDat');
/*find({}, {sort: {datefield: 1}}).toArray(function(err, docs) {...});*/
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
     /*bookfields5*/
    !request.body.authorB ||
          !request.body.keyw1 ||
          !request.body.kw1Pos ||
          !request.body.keyw2 ||
          !request.body.kw2Pos ||
          !request.body.keyw3 ||
          !request.body.kw3Pos ||
          !request.body.publisherB ||
          !request.body.pagesB ||
            !request.body.reslt ||
          !request.body.topTt  ||
          !request.body.entDat  ||
        !request.body.markBk
    ) {
      return response.status(400).send({

       /*bookfields6*/ message: 'Send all required fields: author, keyword, kwPos,  publisher, pages',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// Route for searching books
router.get('/', async (request, response) => {
  try {
    const books = await Book.find(searchTerm).sort('-entDat').limit(10);
/*find({}, {sort: {datefield: 1}}).toArray(function(err, docs) {...});*/
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
export default router;
