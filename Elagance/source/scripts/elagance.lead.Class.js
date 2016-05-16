let React = require('react');
let ReactDOM = require('react-dom');
let hammer = require('./lib/hammer.min.js');
let core = require('./elagance.core.js');
let addons = require('react-addons');

let AppView = React.createClass({
    render: function() {
        return (
            <div className="view view-black">
                <div className="cut-container" id='cut'>
                    <div className="view-container view-lead">
                        <ViewLead />
                    </div>
                    <div className="view-container view-signin">
                        <ViewSign />
                    </div>
                </div>
            </div>
        );
    }
})

let ViewLead = React.createClass({
    render: function() {
        return (
            <div className="lead-body">
                <div className="lead-body-logo animated fadeInDown"></div>
                <div className="lead-body-title"></div>
                <div className="lead-body-text">
                    <h3 className="word">现在，找到自己的节奏</h3>
                </div>
                <div className="lead-body-sign">
                    <button id="signIn" className="lead-body-sign-btn sign-active-1 mt-02r animated fadeIn" onClick={this.handleSignIn}><span>登录</span></button>
                    <button id="signUp" className="lead-body-sign-btn sign-active-1 mt-05r animated fadeIn" onClick={this.handleSignUp}><span>注册</span></button>
                </div>
            </div>
        );
    },
    handleSignIn: function() {
        // 真的能完全避免dom操作?,也太理想化了
        core.$('cut').setAttribute("class","cut-container cutto");
        //core.$('viewSignIn').setAttribute("class","lead-signin-title now");
    },
    handleSignUp: function() {
        // 真的能完全避免dom操作?,也太理想化了
        core.$('cut').setAttribute("class","cut-container cutto");
        //core.$('viewSignUp').setAttribute("class","lead-signin-title now");
    }
});

let ViewSign = React.createClass({
    getInitialState: function() {
      return {
          inup: true // true是登录界面,false是注册界面
      };
    },
    render: function() {
        var cx = addons.classSet;
        var signIn_class = cx({
            'lead-signin-title': true,
            'now': this.state.inup == true
        });
        var SignUp_class = cx({
            'lead-signin-title': true,
            'now': this.state.inup == false
        });
        var cy = addons.classSet;
        var forgot_class = cx({
            'forgot': true,
            'hide': this.state.inup == true
        });
        return (
            <div className="signin-body">
                <div className="lead-body-logo lead-signin-logo animated fadeInDown"></div>
                <h1 className={signIn_class} id="viewSignIn" onClick={this.handleChange}>登录</h1>
                <h2 className={SignUp_class} id="viewSignUp" onClick={this.handleChange}>注册</h2>
                <div className="sign-form">
                    <div className="input-form mb-05r">
                        <input type="text" placeholder="E-Mail" className="input-control" />
                    </div>
                    <div className="input-form">
                        <input type="text" placeholder="Password" className="input-control" />
                    </div>
                    <h6 className="forgot">忘记密码?</h6>
                </div>
                <div className="lead-body-sign">
                    <button id="signIn" className="lead-body-sign-btn mt-02r animated fadeIn sign-active-2"><span>{this.state.inup ? '登录' : '注册'}</span></button>
                    <button id="signUp" className="lead-body-sign-btn mt-05r animated fadeIn sign-active-2"><span>随便逛逛</span></button>
                </div>
            </div>
        );
    },
    handleChange: function() {
        if(this.state.inup) {
            this.state.inup = false;
            this.setState({
               inup: false
            });
        } else {
            this.setState({
                inup: true
            });
        }
    }
});

// 模块出口
module.exports = [AppView, ViewLead, ViewSign];



