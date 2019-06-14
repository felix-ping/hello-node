'use strict';
let fs = require('fs')
fs.readFile('sample.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(1, err);
  } else {
    console.log(2, data);
  }
})