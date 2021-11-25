const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TakingSchema = new Schema({
    userId: {type: Schema.Types.ObjectId},
    postId: {type: Schema.Types.ObjectId},
    isSubmit: {type: Boolean, default: false},
    isFollow: {type: Boolean, default: false},
    isVote: {type: Boolean, default: false},
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('taking', TakingSchema);