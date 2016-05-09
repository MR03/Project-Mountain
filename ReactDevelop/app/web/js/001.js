var HeaderBar = React.createClass({
    render: function() {
        return <div className="bar bar-header bar-assertive">
            <h1 className="title">{this.props.name}</h1>
        </div>;
    }
});

ReactDOM.render(
    <HeaderBar name='!!!!!!!dfsdfsdfsdfsdf'/>,
    document.getElementById('headerBar')
)

var DemoList = React.createClass({
    render: function() {
        return <h1>I'm an H1!</h1>;
    }
})

ReactDOM.render(
    <div className="content has-header padding">
        <DemoList />
    </div>,
    document.getElementById('contentContainer')
)
