function loader(source){
  console.log(`loader1~~~`);
  return source;
}
loader.pitch = function(){
  console.log("1111")
  // return 'asd'
}
module.exports = loader;