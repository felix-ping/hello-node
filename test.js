function xx(e){
  return function(){
    console.log(e);
  }

}

process.nextTick(xx(1))
let a=xx(2)
a()
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});
console.log(global);