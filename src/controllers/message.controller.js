const { addNewMessage } = require('../services/message.service');

const postMessage = async (req, res) => {
  const { contactName, contactEmail, subject, body } = req.body;

  const result = await addNewMessage(contactName, contactEmail, subject, body);

  if (result) {
    res.status(200);
    res.json({ success: true });
  } else {
    res.status(500);
    res.json({ success: false });
  }
};

module.exports = { postMessage };
