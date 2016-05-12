let React = require('react');
let ReactDOM = require('react-dom');

// 头部
let header = React.createClass({
    render: function () {
        return (
            <div className="header-container">
                <div className="row bar">
                    <i className="col fa fa-bars fa-2x"></i>
                    <h1 className="col bar-title text-center">他的图客</h1>
                    <i className="col fa fa-envelope-o fa-2x"></i>
                </div>
            </div>
        );
    }
});

// 头像
let avatar = React.createClass({
    render: function() {
        return (
            <div className="row avatar">
                <div className="row avatar-image">
                    <div className="col avatar-image-wrap">
                        <img src="/img/userprofile.png" />
                    </div>
                    <div className="btn-avatar" onClick={this.handleClick}>
                        <i className="fa fa-plus"></i>
                    </div>
                </div>
                <div className="row avatar-text">
                    <h3 className="avatar-title-big text-center">大师设计</h3>
                    <h4 className="avatar-title-small text-center">www.masterdesign.com</h4>
                </div>
            </div>
        );
    },
    handleClick: function() {
        alert("点击")
    }
});


// 导航栏
let nav = React.createClass({
    render: function() {
        return (
            <div className="row nav">
                <div className="col nav-group"><i className="fa fa-image"></i><span className="nav-title">20</span></div>
                <div className="col nav-group"><i className="fa fa-briefcase"></i><span className="nav-title">2</span></div>
                <div className="col nav-group"><i className="fa fa-heart"></i><span className="nav-title">257</span></div>
                <div className="col nav-group"><i className="fa fa-tag"></i><span className="nav-title">20</span></div>
            </div>
        );
    }
})

// show
let show = React.createClass({
    render: function() {
        return (
            <div className="row show">
                <div className="col show-group">
                    <div className="show-image-wrap"><img src="/img/media1.jpg" /></div>
                </div>
                <div className="col show-group">
                    <div className="show-image-wrap"><img src="/img/media3.png" /></div>
                </div>
                <div className="col show-group">
                    <div className="show-image-wrap"><img src="/img/media4.png" /></div>
                </div>
                <div className="col show-group">
                    <div className="show-image-wrap"><img src="/img/media7.png" /></div>
                </div>
            </div>
        );
    }
})

// 输出
module.exports = [header, avatar, nav, show];