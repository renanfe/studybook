const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { 
        type: String , 
        required: true,
        index: "text"
    },
    email: { 
        type: String , 
        required: true,
        unique: true
    },
    username: { 
        type: String , 
        required: true,
        unique: true,
        index: "text"
    },
    password: { 
        type: String , 
        required: true,
        select: false
    },
    homes : [{
         type: String,
         ref: 'Homes' 
    }]
}, { versionKey: false, timestamps: true  })

const User = mongoose.model('Users', userSchema)

module.exports =  User;