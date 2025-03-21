const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZamazonSchema = new Schema({
    phoneNumber: {
        type: String,
        maxlength: 15,
        required: false,
      },
      email: {
        type: String,
        maxlength: 255,
        required: false,
      },
      linkedId: {
        type: Types.ObjectId, // references another Contact document
        ref: 'Contact',
        default: null,
      },
      linkPrecedence: {
        type: String,
        enum: ['primary', 'secondary'],
        required: true,
        default: 'primary',
      },
      deletedAt: {
        type: Date,
        default: null,
      },
    },
    {
      timestamps: true
})