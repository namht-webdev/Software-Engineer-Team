const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true, trim: true },
    name: { type: String},
    role: { type: Number, default: 0 },
    avatar: { type: String, default: 'https://res.cloudinary.com/dxo2m1hlx/image/upload/v1637922613/icon/user-32_lg945e.png' },
    email: { type: String, required: true},
    country: { type: String, default: '' },
    gender: { type: String, default: 'Male' },
    isBlock: { type: Boolean, default: false}
},
    {
        timestamps: true
    });

UserSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('user', UserSchema);