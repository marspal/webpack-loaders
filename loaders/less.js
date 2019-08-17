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