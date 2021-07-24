const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    contactName: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    isSpam: {
      type: Boolean,
      default: false,
    },
    read: {
      type: Boolean,
      default: false,
    },
    answered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Message = model('Message', messageSchema);

module.exports = { Message };
