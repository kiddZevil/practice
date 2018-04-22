var http = require('http');
var opt = {
    host:'localhost'
    ,port:'8081'
    ,path:'/index.html'
};
var callback = function(response){
    var body = '';
    console.log(response);
    response.on('data',function(data){
        body+=data
    });

    response.on('end',function(){
        console.log(body);
    });
}
http.request(opt,callback).end();
