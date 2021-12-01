const express = require('express');
const app = express();
const router = require('./routes/indexRoute');
const Connection = require('./models/indexModel');
const cookieParser = require('cookie-parser');
require('dotenv').config();
 
const PORT = 5000;
app.use(express.json());
Connection();
app.use(cookieParser());
router(app);
app.listen(PORT, (req, res) => {
    console.log(`App is listening at PORT ${PORT}`);
})