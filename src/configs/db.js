const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://krunal:krunal28@cluster0.q7ahv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}