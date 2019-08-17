(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./src\index.js");
})({
  
    "./src\index.js":
    (function(module, exports, __webpack_require__) {
      eval(`__webpack_require__("./src\\index.less");`);
    }),
  
    "./src\index.less":
    (function(module, exports, __webpack_require__) {
      eval(`let style = document.createElement('style');
style.innerHTML = "body {\\n  background: red;\\n}\\n";
document.head.appendChild(style);`);
    }),
  
});