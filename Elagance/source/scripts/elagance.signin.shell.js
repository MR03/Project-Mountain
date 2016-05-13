let core = require('./elagance.core.js');

let configMap = {

}

let sizzleMap = {

}

let signIn = function(el) {
    let $signIn = core.$(el);
    core.on($signIn, 'click', function(){
        core.log('跳转至登录界面')
    })
};

let signUp = function(el) {
    let  $signUp = core.$(el);
    core.on($signUp, 'click', function(){
        core.log('跳转至注册界面')
    })
}

// 初始化
let initModule = function(){
    // 具体绑定的元素统一在这里确定
    signIn('signIn');
    signUp('signUp');
}

// 模块出口
module.exports = initModule;



