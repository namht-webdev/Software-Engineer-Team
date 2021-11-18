const express = require('express');
const app = express();
const router = require('./routes/index');

const PORT = 5000;
app.use(express.json());

router(app);

app.listen(PORT, (req, res) => {
    console.log(`App is listening at PORT ${PORT}`);
})