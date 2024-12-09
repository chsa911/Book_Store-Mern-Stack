import mongoose from 'mongoose';

const bookSchema = mongoose.Schema (
  {
 /*bookfields1*/
    authorB: {
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
      required: false,
    },
    kw2Pos: {
          type: Number,
          required: false,
        },
        keyw3: {
      type: String,
      required: false,
    },
    kw3Pos: {
          type: Number,
          required: false,
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
          required: false,
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
markBk: {
          type: String,
          required: false,
        },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
