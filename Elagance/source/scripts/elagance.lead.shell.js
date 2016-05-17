let core = require('./elagance.core.js');
let React = require('react');
let ReactDOM = require('react-dom');
let ReactRouter = require('react-router');
let [AppView, ViewLead] = require('./elagance.lead.Class.js');

// 初始化
let initModule = function(){

    ReactDOM.render(
        (<AppView />),
        document.getElementById('spa')
    );
}

// 模块出口
module.exports = initModule;



