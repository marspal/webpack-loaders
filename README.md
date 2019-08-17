# webpack-loaders
webpack + loaders

### loaders

webpack 只能处理js模块, 如果需要处理其它文件，需要使用loader进行转化, loader是webpack中的一个重要概念, 它是指将
一段代码转换成另一段代码加载器

#### 配置loader

1. 安装webpack webpack-cli -D, 配置webpack.config.js

2. 配置:

```js
 // 1.绝对路径: path.resolve() 2. resolveLoader: alias:{} 、modules: ['node_modules', path.resolve(__dirname, 'loaders')]
```

3. 配置多个loader

  ``执行顺序:`` 从右向左、从下到上、 pre+normal+inline+post
  ``分类:`` pre post inline normal
  ``组成``: 由pitchLoader normalLoader组成 pitch和normal的执行顺序正好相反,
  当pitch没有定义或没有返回值时, 会先依次执行pitch 在获取资源后执行loader, 如果
  定义的某个pitch有返回值则会跳过读取资源和自己的loader

```
  // use["loader3", "loader2", "loader1"] pitch loader 无返回值

  pitch: loader3 -> loader2 -> loader1 -> resource资源 -> loader1 -> loader2 -> loader3 

```

```js
// inline-loader
require("inline-loader!./a.js");
require("-!inline-loader!./a.js"); // -!不执行 pre + normal loader  !没有normal的 !! 只要inline-loader

[{
  test: /\.js$/,
  use: ['loader3','loader2','loader1']
}]

// or
[{
  test: /\.js$/,
  use: 'loader1',
  enforce: 'pre'
},{
  test: /\.js$/,
  use: 'loader2'
},{
  test: /\.js$/,
  use: 'loader3',
  enforce: 'post'
}]
```


#### 常用loader

> less-loader

```js
let less = require("less");
function  loader(source) {
  let css = '';
  less.render(source, function(err,c){
    if(err) console.log(err)
    css = c.css;
  })
  return css.replace(/\n/g, "\\n");
}
module.exports = loader;
```

> style-loader

```js
function  loader(source) {
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style) 
  `;
  return style;
}
module.exports = loader;
```

> babel-loader

  ``安装``: [@babel/core](https://babeljs.io/docs/en/babel-core#docsNav) @babel/preset-env