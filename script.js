// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.addEventListener('click', () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('nav-toggle');
// });

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('nav-toggle');
// }

// const http = require('http');
// const fs = require('fs');
// const filecontent = fs.readFileSync("index.html");

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(filecontent);
// })

// server.listen(80,'127.0.0.1',()=>{
//     console.log("Listening on port 80");
// })

const mod = require('./mod.js');
console.log(mod.name);