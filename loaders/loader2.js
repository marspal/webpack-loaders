function loader(source){
  console.log(this)
  console.log(`loader2~~~`);
  return source;
}
module.exports = loader;