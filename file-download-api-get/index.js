var express = require('express');
var app = express();

app.get('/', function(req, res){

    res.download('Hello.txt');

});

/* app.post("/fileDownload", function (request, respond) {

    respond.download("./Hello.txt");

 });   */

app.listen(3000,function () {
    console.log("Server Run Success");
});


