class DonePlugin{
  apply(compiler){
    console.log('2');
    compiler.hooks.done.tap('donePlugin', (stats) => {
      console.log('编译完成~~~');
    })
  }
}

module.exports = DonePlugin;