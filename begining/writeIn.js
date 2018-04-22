var fs = require('fs');
var data = "";
var readerStream = fs.createReadStream('123.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk) {
    data += chunk;
 });
 readerStream.on('end',function(){
    console.log("读取到："+data);
    var crudeStream = fs.createWriteStream('output.txt');
    crudeStream.write(data,'utf8');
    crudeStream.end();
    
    // 处理流事件 --> data, end, and error
    crudeStream.on('finish', function() {
        console.log("写入完成。");
    });
    
    crudeStream.on('error', function(err){
       console.log(err.stack);
    });
 });
 
 readerStream.on('error', function(err){
    console.log(err.stack);
 });



//type output.txt 在cmd中查看文件