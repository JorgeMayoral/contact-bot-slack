const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const messageRouter = require('./routes/message.routes');

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(cors());

connectDB(MONGODB_URI);

app.use('/bot/message', messageRouter);

app.listen(PORT, () => {
  console.log(`Bot listening on port ${PORT}...`);
});
