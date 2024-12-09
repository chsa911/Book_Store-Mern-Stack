import mongoose from 'mongoose';

const bookSchema = mongoose.Schema (
  {
 /*bookfields1*/
    author: {
          type: String,
          required: true,
        },
    keyw1: {
      type: String,
      required: true,
    },
    kw1Pos: {
          type: Number,
          required: true,
        },
     keyw2: {
      type: String,
      required: true,
    },
    kw2Pos: {
          type: Number,
          required: true,
        },
        keyw3: {
      type: String,
      required: true,
    },
    kw3Pos: {
          type: Number,
          required: true,
        },
    publisherB: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    reslt: {
          type: String,
          required: true,
        },
topTt: {
          type: String,
          required: false,
        },
/*entDat: {
          type: Number,
          required: false,
        },
voewrd: {
          type: String,
          required: false,
        },
voedatum: {
          type: Number,
          required: false,
        },*/
mark: {
          type: String,
          required: false,
        },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
