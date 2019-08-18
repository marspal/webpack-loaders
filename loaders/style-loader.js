let loaderUtils = require("loader-utils");
function loader(source){
  let style = `
    let style = document.createElement('style');
    style.innerHTML=${JSON.stringify(source)}
    document.head.appendChild(style)
  `;
  return style;
}
// 在style-loader上 pitch
// style less css loader
loader.pitch = function(remainingRequest){ // remainingRequest: 剩余的请求
  // console.log(remainingRequest)
  // 让style-loader 去处理less-loader!css-loader!/.index.less

  // !!css-loader!less-loader!index.less
  let str = `
    let style = document.createElement('style');
    style.innerHTML=require(${loaderUtils.stringifyRequest(this, "!!"+remainingRequest)})
    document.head.appendChild(style)
  `;
  return str;
}
module.exports = loader;