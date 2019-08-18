const loaderUtils = require("loader-utils");
const validateOptions =  require('schema-utils');
const fs = require("fs");
function loader(source){
  this.cacheable && this.cacheable(); // false 不要缓存
  let options = loaderUtils.getOptions(this);
  let cb = this.async();
  // 骨架校验
  let schema = {
    type: 'object',
    properties: {
      text: {
        type: "string"
      },
      filename: {
        type: "string"
      }
    }
  }
  validateOptions(schema, options, 'banner-loader') // banner-loader: 错误位置
  if(options.filename){
    this.addDependency(options.filename) // 自动添加文件依赖
    fs.readFile(options.filename, 'utf8', function(err, data){
      cb(err,`/**${data}**/${source}`);
    })
  }else {
      cb(err,`/**${options.text}**/${source}`);
  }
}
module.exports = loader;