const mongoose = require('mongoose');
const dtb = require('../dtb');

async function Connection() {
    try {
        await mongoose.connect(dtb)
            .then(() => { console.log('Database connection established!') })
            .catch(err => { console.log(err) })
    } catch (error) {
        return error;
    }
}

module.exports = Connection;