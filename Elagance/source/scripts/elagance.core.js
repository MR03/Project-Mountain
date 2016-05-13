let sizzle = require('./elagance.core.sizzle.js');

// 数据区
// ----------------------------------

let core = {}; // 核心对象
let doc = window.document; // 文档对象

// 方法声明区
// ----------------------------------

let log; // 打印语句

// 方法实现区
// ----------------------------------

core.log = log = function(msg) {
    console.log(msg)
};

// 用id选择Dom元素,快
core.$ = function(el) {
    let result = document.getElementById(el) || sizzle();
    return result;
}

// 事件监听器,不兼容IE8了
core.on = function(node, type, listener) {
    if(node.addEventListener) {
        node.addEventListener(type, listener, false);
    }
    return false;
}

// 使用sizzle选择器
core.sizzle = sizzle;


// 模块出口
module.exports = core;


