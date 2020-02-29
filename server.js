var express = require("express")
var mongoose = require("mongoose")

var app = express()
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

var apiroutes = require("./routes/apiroutes")
apiroutes(app)
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"

mongoose.connect(MONGODB_URI)

app.listen(PORT,function(){
    console.log("app is listening on http://localhost:"+ PORT)
})
