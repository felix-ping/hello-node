'use strict';

let fs = require('fs');

// // 打开一个流:
// let rs = fs.createReadStream('sample.txt', 'utf-8');
//
// rs.on('data', function (e) {
//   console.log('DATA:')
//   console.log(e);
// });
//
// rs.on('end', function () {
//   console.log('END');
// });
//
// rs.on('error', function (err) {
//   console.log('ERROR: ' + err);
// });

// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();
//
// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end()


var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);