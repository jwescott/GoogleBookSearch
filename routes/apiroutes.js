var axios = require("axios")

function apiroutes(app) {
    app.get("/api/googlebooksearch/:books",function(req, res){
        var searchTerm = req.params.books
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchTerm).then(function(response){
            console.log(response.data)
            res.json(response.data)
        })
    })   
} 

module.exports = apiroutes