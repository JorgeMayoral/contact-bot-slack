const { Router } = require('express');
const { postMessage } = require('../controllers/message.controller');

const router = Router();

router.route('/').post(postMessage);

module.exports = router;
