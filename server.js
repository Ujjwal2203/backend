// // // // function add(a,b){
// // // //   return a+b;
// // // // }
// // // // var result = add(4,5);
// // // // console.log(result) // node server.js
// // // // // console.log("hellow this is ujjwal")


// // // (function(){
// // //   console.log("hello")
// // // })();

// // // const add = (a,b) =>{
// // //   console.log("answer is "+ (a+b) )
// // // }
// // // add(2,7)



// // // callback function
 
// // // function callback(){
// // //   console.log("uj is calling a callback function")
// // // }

// // // const add = (a,b,callback)=>{
// // //   const result = a+b;
// // //   console.log("result is : "+result)
// // //   callback()
// // // }

// // // add(56,89,callback)

// // const add = (a,b,callback)=>{
// //   const result = a+b;
// //   console.log("result is : "+result)
// //   callback()
// // }

// // add(89,28, function(){
// //   console.log("addition is successfull")
// // })



// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username)

// fs.appendFile("greeting.txt","Hemloo konichiwa "+user.username +'"\n', ()=>{console.log("file is created and ready")})




// importing other pages basically server is only page and like in react we import components its same in node 


// const notes = require("./notes")  // this will load notes.js file or we can say it will import it.

// const age = notes.age;
// console.log(age)
// const result = notes.addnum(age,18)
// console.log(result)

var _ = require('lodash')

var data = ["person","person",'name',1,2,33,1,'name']
var filter = _.uniq(data)
console.log(filter)

console.log(_.isString("UJ"))










