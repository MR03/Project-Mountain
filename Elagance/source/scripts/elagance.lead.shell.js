let core = require('./elagance.core.js');
let React = require('react');
let ReactDOM = require('react-dom');
let ReactRouter = require('react-router');
let [AppView, ViewLead] = require('./elagance.lead.Class.js');

let configMap = {

}

let sizzleMap = {

}

// 登录
let signIn = function(el) {
    let $signIn = core.$(el);
    core.on($signIn, 'click', function(){
        window.location = '/signin.html';
    })
};

// 注册
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

    ReactDOM.render(
        (<AppView />),
        document.getElementById('spa')
    );
}

// 模块出口
module.exports = initModule;



