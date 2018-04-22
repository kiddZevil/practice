var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    name:sendComm()
    token:mimiko
    quoteId:0
    text:玩进化，感觉当怪兽好孤单，
    cooldown:10000
    source:pc
    contentId:4125726
});
var options = {
    'Accept':'*/*'
    ,'Accept-Encoding':'gzip, deflate'
    ,'Accept-Language':'zh-CN,zh;q=0.8'
    ,'Connection':'keep-alive'
    ,'Content-Length':postData.length
    ,'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    ,'Cookie':'uuid=9f65df41d61fdab20ac64afe0eaa0bd4; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2215e98b851e2a97-0249ea70893c4e-1781c36-1fa400-15e98b851e3b18%22%7D; analytics=GA1.2.963550508.1512894766; analytics_gid=GA1.2.1781967628.1512894766; ac_username=FE8CEC6D3146490DB48E9B1F5EA0EC2E; auth_key=7989048; auth_key_ac_sha1=-1554587777; auth_key_ac_sha1_=mkwxt8Gb8bMQDrou6jK1nut/xg4=; checkReal=0; XSRF-TOKEN=eyJpdiI6ImR2ZVZxTXBQZUVxN1E3dXZteWJJQ1E9PSIsInZhbHVlIjoiQTJOZVVVT0RRWFZUMnE2ZFN6VjlsanA4ZGsxcDJSSEsyZFVuQUh0cWpaTUNEYXVHeUNacVJ3ZkVnN2VBWmdqQWxxQk1HZkNKQWduNElzUkFGSUc4RlE9PSIsIm1hYyI6IjI3YjI0ZmViYzZkYzFiZGMxMzcyNDEyZjE4ZWI2OGQxZDFjNmMxZDIyYTEyMjk1Yjk0MmY3NjE5YTQ0NmU1YWEifQ%3D%3D; ap_session=eyJpdiI6IkNnckJ6SHEweFR6UDlKYXRUcytRdlE9PSIsInZhbHVlIjoiaDNRbUNkRTBqb0VNUzJ3bHVxOE9sQVwvaUtCaStEQVF0MXFkaTlJRDZjdDBHVU9CNUIzdGZrVnNRdzFnSjMzMnNCSHgrdTdtKzU2XC9Sa2YxdVNIRnNDQT09IiwibWFjIjoiYWJmY2VlMWQwMmFkZWEzOTRmYjdhNmQ0YTg3YTNhOGU4ODAzMzRlNmQ3N2I1ZDNhNmYxZTM0YzFmMzJlNjlkMSJ9; ac_userimg=http%3A%2F%2Fcdn.aixifan.com%2Fdotnet%2F20120923%2Fstyle%2Fimage%2Favatar.jpg; supernova=1; Hm_lvt_bc75b9260fe72ee13356c664daa5568c=1510838975,1510838981,1512302010,1512893072; Hm_lpvt_bc75b9260fe72ee13356c664daa5568c=1512895064; clientlanguage=zh_CN; online_status=309; userLevel=3'
    ,'Host':'www.acfun.cn'
    ,'Origin':'http://www.acfun.cn'
    ,'Referer':'http://www.acfun.cn/a/ac4125726'
    ,'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36'
    ,'X-Requested-With':'XMLHttpRequest'
}
var req = http.request(options,function(res){
    console.log('Status:' + res.statusCode)
    console.log('headers:'+JSON.stringify(res.headers))
    res.on('dat',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end',function(){
        console.log('pinglunwanbi')
    })
    
})
req.on('error',function(e){
    console.log(e.message)
})
req.write(postData)
req.end()