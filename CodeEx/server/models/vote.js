const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId},
    postId: {type: Schema.Types.ObjectId},
})

module.exports = mongoose.model('vote', VoteSchema);