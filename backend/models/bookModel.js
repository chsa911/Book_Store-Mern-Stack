import mongoose from 'mongoose';

const bookSchema = mongoose.Schema (
    {
 /*bookfields1*/
    authorB: {type: String,},
    keyw1: {type: String,},
    kw1Pos: {type: Number,},
    keyw2: {type: String,},
    kw2Pos: {type: Number,},
    keyw3: {type: String,},
    kw3Pos: {type: Number,},
    publisherB: {type: String,},
    pagesB: {type: Number,},
    reslt: {type: String,},
    topTt: {type: String,},
    markBk: {type: String,},
  },
  {
    timestamps: true,
  }

);


export const Book = mongoose.model('Book', bookSchema);
