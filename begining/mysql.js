var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '192.168.199.130',       
  user     : 'root',              
  password : 'zaqwsxcde',       
  port: '3306',                   
  database: 'test', 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM websites WHERE websites.id="7"';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
// var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// var  addSqlParams = ['0处增加', 'https://XXX.com','12344', 'HELL'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });
connection.end();