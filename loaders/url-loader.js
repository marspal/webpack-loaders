let loaderUtils = require("loader-utils");
const mime = require('mime');
function loader(source){
  let {limit} = loaderUtils.getOptions(this)
  let type = mime.getType(this.resourcePath)
  if(limit && limit > source.length){
    return `module.exports="data:${type};base64,${source.toString("base64")}"`;
  } else {
    let fileLoader = require("./file-loader")
    return fileLoader.call(this,source);
  }
}
loader.raw = true
module.exports = loader;