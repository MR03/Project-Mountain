let React = require('react');
let ReactDOM = require('react-dom');
let hammer = require('./lib/hammer.min.js');

let Text = React.createClass({
    render: function () {
        return (
            <div className="container" id="tt">
                <div className="lead-body">
                    <div className="lead-body-logo animated fadeInDown"></div>
                    <div className="lead-body-title"></div>
                    <div className="lead-body-text">
                        <h3 className="word">现在，找到自己的节奏</h3>
                    </div>
                    <div className="lead-body-sign">
                        <button id="signIn" className="lead-body-sign-btn mt-02r animated fadeIn"><span>登录</span></button>
                        <button id="signUp" className="lead-body-sign-btn mt-05r animated fadeIn"><span>注册</span></button>
                    </div>
                </div>
            </div>
        );
    },
    componentDidMount: function() {

    }
});



// 模块出口
module.exports = Text;



