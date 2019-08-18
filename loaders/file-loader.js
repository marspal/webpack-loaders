/**
 * 根据图片生成一个md5戳, 发射到dist目录, 返回当前的图片路径
 * @param {*} source 
 */
let loaderUtils = require("loader-utils");
function loader(source){
  let filename = loaderUtils.interpolateName(this, '[hash].[ext]', {content: source}); // 生成路径
  this.emitFile(filename, source);
  return `module.exports="${filename}"`;
}
loader.raw = true; // 二进制文件 
module.exports = loader;