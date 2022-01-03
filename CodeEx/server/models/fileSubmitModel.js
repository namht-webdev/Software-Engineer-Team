const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSubmitSchema = new Schema({ 
    userId: {type: Schema.Types.ObjectId, required: true},
    postId: {type: Schema.Types.ObjectId, required: true},
    file : {type: String},
    daySubmit: {type: Date}
})

module.exports = mongoose.model('submitFile', fileSubmitSchema);