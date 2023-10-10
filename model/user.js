const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// convert password to hash
UserSchema.pre(
    'save',
    async function (next){
        const user = this;
        const hash = await bcrypt.hash(this.password,10);

        this.password = hash;
        next();
    }
);

//this method is to check if password is valid
UserSchema.methods.isValidPassword = async function (password){
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;