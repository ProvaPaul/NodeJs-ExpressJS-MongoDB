// for learning external module(website name: https://www.npmjs.com/package/movies-names)

// 1.Now install a package for fruit-name
//package.json file will be automatically added after running the command npm init into the terminal
// package install er pore require korte hobe

// const randomFruitsName=require("random-fruits-name");
// // console.log(randomFruitsName())

// console.log(randomFruitsName("en"))


// 2.Now install a package for movie-name
var moviesNames = require('movies-names');
console.log(moviesNames.random()) 