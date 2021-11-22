const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    userId: {type: Schema.Types.ObjectId},
    postId: {type: Schema.Types.ObjectId},
    createdAt: Date.now
})

module.exports = mongoose.model('follow', FollowSchema);