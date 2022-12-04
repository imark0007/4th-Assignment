var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.json());

//json body

app.post('/',function(request,respond){

   let jsonData=request.body;
   let jsonString=JSON.stringify(jsonData);

   respond.send(jsonString);

});

/*  specific Name

     let name1=jsonData.name1; or
     let name2=jsonData['name2'];
     let city=jsonData['city'];

    respond.send(name2+ " "+ city); */

app.listen(9000,function(){

    console.log("Server run success");
});