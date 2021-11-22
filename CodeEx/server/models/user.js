const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type:String, required: true},
    avatar: {type: String, default: ''},
    email: {type: String, default: ''},
    country:{type: String, default: ''},
    gender: {type: String, default: ''}
},
{
    timestamps: true
});

UserSchema.plugin(mongoose_delete, {overrideMethods: 'all'});

module.exports = mongoose.model('User', UserSchema);