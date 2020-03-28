var mongoose = require("mongoose")
var db = require("../models")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks") 
var bookSeed = [
    {
        title: "To Kill a Mockingbird",
        authors: "Harper Lee",
        description:"",
        image:"",
        link:""
    }
]

db.Book.remove({}).then(function(){
    return db.Book.collection.insertMany(bookSeed)
}).then(function(data){
    console.log(data.result.n + " records")
    process.exit(0)
}).catch(function(error){
    console.log(error)
})

