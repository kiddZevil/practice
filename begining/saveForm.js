var http = require('http');
var querystring = require('querystring');
var mysql  = require('mysql');  
var sub = function(_name,_url){
  if(!_name || !_url){return;}
  var connection = mysql.createConnection({     
    host     : '192.168.199.129',       
    user     : 'root',              
    password : 'zaqwsxcde',       
    port: '3306',                   
    database: 'test', 
  }); 
   
  connection.connect();
  
  var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
  var  addSqlParams = [_name, _url,'add by form', 'HELL'];
  //增
  connection.query(addSql,addSqlParams,function (err, result) {
          if(err){
           console.log('[INSERT ERROR] - ',err.message);
           return;
          }        
   
         console.log('--------------------------INSERT----------------------------');
         //console.log('INSERT ID:',result.insertId);        
         console.log('INSERT ID:',result);        
         console.log('-----------------------------------------------------------------\n\n');  
  });
  connection.end();
};


var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据

        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
        sub(body.name,body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);