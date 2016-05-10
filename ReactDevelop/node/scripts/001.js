// 头部组件
var HeaderBar = React.createClass({
    render: function() {
        return <div className="bar bar-header bar-assertive">
            <h1 className="title">{this.props.name}</h1>
        </div>;
    }
});

// 内容组件
var DemoList = React.createClass({
    render: function() {
        return <h1>I'm an H1!</h1>;
    }
})

ReactDOM.render(
    <HeaderBar name='233点餐'/>,
    document.getElementById('headerBar')
)

ReactDOM.render(
    <div className="content has-header padding">
        <DemoList />
    </div>,
    document.getElementById('contentContainer')
)

ReactDOM.render(
    <div className="tabs">
        <a className="tab-item">
            菜单
        </a>
        <a className="tab-item">
            新品
        </a>
        <a className="tab-item">
            今日特价
        </a>
    </div>,
    document.getElementById('tabs')
)

