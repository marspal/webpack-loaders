var babel = require("@babel/core");
var loaderUtils = require("loader-utils");
function loader(source){
  const options = loaderUtils.getOptions(this);
  let cb = this.async();
  babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.resourcePath.split('\\').pop() // 文件名
  },function(err, result){
    cb(err, result.code, result.map);
  })
}
module.exports = loader;