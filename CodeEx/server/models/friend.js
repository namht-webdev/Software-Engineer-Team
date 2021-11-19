
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    firstUser: {type: String, default: ''},
    secondUser: {type: String, default: ''},
    nameFirstUser: {type: String, default: ''},
    nameSecondUser: {type: String, default: ''},
    isFriend: {type: Boolean, required: false}
});

module.exports = mongoose.model('friend', FriendSchema);