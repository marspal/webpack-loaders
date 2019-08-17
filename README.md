# webpack-loaders
webpack + loaders

### loaders

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
