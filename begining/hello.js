// module.exports = function(){
//     var name;
//     this.setName = function(a){
//         name = a;
//     };
//     this.say = fanction(){
//         console.log('hi! '+name);
//     };
// }
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;