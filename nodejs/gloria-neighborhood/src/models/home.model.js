const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: 'text'
    },
    state: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    zipcode: {
        type: String,
        required: true,
        trim: true
    },
    residents: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Homes' 
    }]
}, { versionKey: false, timestamps: true }) 

homeSchema.index({ zipcode: 1, number: 1 }, { unique: true });

const Home = mongoose.model('Homes', homeSchema)

module.exports = Home;