const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userPost: {type: String, required: true},
    title: {type: String, required: true},
    dayStart: {type: Date, default: Date.now()},
    dayEnd: {type: Date},
    type: {type: String, required: true},
    description: {type: String, default:''},
    numberVote: {type: Number},
    numberTakeIn: {type: Number},
}, {
    timestamps: true,
})

PostSchema.plugin(mongoose_delete, {overrideMethods: 'all'});
module.exports = mongoose.model('Post', PostSchema);