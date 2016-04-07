var Goods = React.createClass({
    render: function() {
        return <div className="col goods-wrap">
            <div className="goods-group"><img src="../../static/img/banner01.jpg" /></div>
            <div>
                <h6>测试商品</h6>
                <h5>dfdf</h5>
                <h5>dfdf</h5><span>ddf2222</span>
            </div>
        </div>;
    }
});

ReactDOM.render(<Goods />, document.getElementById('example'));