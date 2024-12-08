import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
 /*bookfields1*/
    author: {
          type: String,
          required: true,
        },
    title: {
      type: String,
      required: true,
    },
    kwPosition: {
          type: Number,
          required: true,
        },
    publisherB: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
