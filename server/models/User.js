const mongoose = require('mongoose');
const { Schema } = mongoose; // Short version of: const Schema = mongoose.Schema;

const userSchema = new Schema({
    'googleId': String,
});

mongoose.model('users', userSchema);
