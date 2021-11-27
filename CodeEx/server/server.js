const express = require('express');
const app = express();
const router = require('./routes/index');
const Connection = require('./models/index');
require('dotenv').config();

const PORT = 5000;
app.use(express.json());
Connection();
router(app);
app.listen(PORT, (req, res) => {
    console.log(`App is listening at PORT ${PORT}`);
})