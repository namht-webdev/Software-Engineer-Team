const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, required: true},
    username: {type: String, required: true},
    title: {type: String, required: true},
    dayStart: {type: Date, default: Date.now()},
    dayEnd: {type: Date},
    type: {type: String, required: true},
    description: {type: String, default:''},
    result: {type: Number, required: true},
    numberVote: {type: Number, default: 0},
    numberTakeIn: {type: Number, default: 0},
    status: {type: Boolean, default: false}
}, {
    timestamps: true,
})

PostSchema.plugin(mongoose_delete, {overrideMethods: 'all'});
module.exports = mongoose.model('Post', PostSchema);