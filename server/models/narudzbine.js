const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: false
    },
    telefon: {
        type: String,
        required: true
    },
    grad: {
        type: String,
        required: false
    },
    mesto: {
        type: String,
        required: true
    },
    ulica: {
        type: String,
        required: false
    },
    klima: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('narudzbine', PostSchema); 