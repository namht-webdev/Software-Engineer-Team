const mongoose = require('mongoose');

async function Connection() {
    try {
        await mongoose.connect(process.env.DB_URL)
            .then(() => { console.log('Database connection established!') })
            .catch(err => { console.log(err) })
    } catch (error) {
        return error;
    }
}

module.exports = Connection;