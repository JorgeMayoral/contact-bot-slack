const { newMessage } = require('../config/bot');
const { Message } = require('../models/Message.model');

const addNewMessage = async (contactName, contactEmail, subject, body) => {
  const message = await Message.create({
    contactName,
    contactEmail,
    subject,
    body,
  });

  const result = await newMessage(message);

  return result;
};

module.exports = { addNewMessage };
