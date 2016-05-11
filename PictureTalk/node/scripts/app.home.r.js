let React = require('react');
let ReactDOM = require('react-dom');

let [Header, Avatar, Nav, Show] = require('./app.home.c.js');


ReactDOM.render(
    (<Header />),
    document.getElementById('R-seader')
);

ReactDOM.render(
    (<Avatar />),
    document.getElementById('R-avatar')
);

ReactDOM.render(
    (<Nav />),
    document.getElementById('R-nav')
);

ReactDOM.render(
    (<Show />),
    document.getElementById('R-show')
);

