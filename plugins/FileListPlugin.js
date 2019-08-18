class FileListPlugin{
  constructor({filename}) {
    this.filename = filename;
  }
  apply(complier){
    // 文件准备好了, 要发射 emit
    complier.hooks.emit.tap('FileListPlugin', (complication) =>{
      // complication.assets 在加一个文件
      console.log(complication.assets);
      let content = `##  文件名    资源大小\r\n`;
      Object.entries(complication.assets).forEach(([filename, statObj]) => {
        content += `-  ${filename}    ${statObj.size()}\r\n`
      })
      complication.assets[this.filename] = {
        source(){
          return content
        },
        size(){
          return content.length
        }
      };
    })
  }
}
module.exports=FileListPlugin;