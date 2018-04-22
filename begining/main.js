//引入模块
var http = require('https');
var querystring = require('querystring');
var fs = require("fs");
var eve = require('events');

// var data = fs.readFile('123.txt',function(err,data){
//     console.log("err:"+err);
//     console.log("data:"+data);
// });
// console.log(data);
// console.log('program end');


// var eventEmitter = new eve.EventEmitter();

// var findxiaoming = function goFind(){
//     console.log('xiaoming is found!');    
//     eventEmitter.emit('kill');
// };

// eventEmitter.on('find',findxiaoming);

// eventEmitter.on('kill',function(){
//     console.log('xiaoming is dead!');  
// });
// eventEmitter.emit('find');

// console.log('program end');



// // 异步打开文件
// console.log("准备打开文件！");
// fs.open('123.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//   console.log("文件打开成功！");     
// });


//简单实例
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//     console.log( chunk.toString());
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据
//         console.log(body);
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);
// console.log('started');

//Web crawler
var url = 'https://www.imooc.com/';
http.get(url,function(res){
  var html = '';
  res.on('data',function(data){
    html += data;
  });
  res.on('end',function(){
    console.log(html);
  });
}).on('erro',function(info){
  console.log(info);
});