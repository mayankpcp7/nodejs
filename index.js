// for getting data to another file use variable name equal to require(./name of file)
const app = require("./app");
console.log(app);

// for getting a specific value from array we use filter
// filter only use on array
const arr = [1, 2, 3, 4, 5, 6, 6];
// filter use always arrow function

arr.filter((item) => {
  console.log(item);
});
let result = arr.filter((item) => {
  return item === 3;
});
console.log(result);

// use fs "fs is a core module which is not global"
// we can make external file from fs like index.html i have made and what wil put in the file is also can declares there
const fs = require("fs");
fs.writeFileSync("index.html", "<document></document>");

// for checking our dectory name we will use _dirname  with file name we use _filename
console.log("->>", __dirname);

// how to use function as a parameter
// firstly use core module http
// http handle the server request and reaponse in node js
const http = require("http");

// createserver make fuction as a perameter
// 1. make a arrow fuction in createServer take two perameter names req for request res for response
// what is request (req) done ?
// if we make a form and submit then it send request to access in node ja then we send response to client
http
  .createServer((req, resp) => {
    // we will send response to client like this
    resp.write("<h1 style= color:red;>your form is submit successfully</h1>");
    resp.end();
  })
  .listen(4500);
// we can make function diffrent then define it in createServer like this
function dataControl(req, resp) {
  // we will send response to client like this
  resp.write("<h1 style= color:blue;>your form is submit successfully</h1>");
  resp.end();
}
// and now can put name of function in  createServer like this

http.createServer(dataControl).listen(4500);

// what is package.json
// package json  have our project detail related to coding like project - versio , name , git repisitory , package files we use

// what is npm
// node package manager