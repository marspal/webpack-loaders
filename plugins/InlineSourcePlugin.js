// 把外联标签变成内联标签
const HtmlWebpackPlugin = require('html-webpack-plugin');
class InlineSourcePlugin{
  constructor({match}){
    this.reg = match; // 正则
  }
  apply(complier){
    // 要通过htmlwebpackPlugin实现这个功能
    console.log('----');
    complier.hooks.compilation.tap('InlineSourcePlugin', (compilation)=>{
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups .tapAsync('alterPlugin', (data,cb)=>{
        console.log(data)
        // data = this.processTags(data, compilation)
        
        cb(null, data);
      });
    })
  }
  processTag(tag, compilation){
    let newTag, url;
    if(tag.tagName === 'link' && this.reg.test(tag.attributes.href)){
      newTag = {
        tagName: 'style',
        attributes: {type:'text/css'}
      }
      url = tag.attributes.href;
    }
    if(tag.tagName === 'js' && this.reg.test(tag.attributes.src)){
      newTag = {
        tagName: 'script',
        attributes: {type:'application/javascript'}
      }
      url = tag.attributes.src;
    }
    if(url){
      newTag.innerHTML = compilation.assets[url].source(); // 文件内容放到innerHTML属性上
      delete compilation.assets[url]
      return newTag;
    }
    return tag
  }
  processTags(data, compilation){
    let headTags = [];
    let bodyTags = [];
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag,compilation))
    });
    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag,compilation))
    });
  }
}
module.exports = InlineSourcePlugin;