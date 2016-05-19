import React, { Component, PropTypes } from 'react'


class TodoList extends Component {
    render() {
        let last_stats = this.props.stats[this.props.stats.length - 1];

        return (
            <div>
                <h1>{last_stats.sign == 'signin' ? '登录' : '注册'}</h1>
            </div>
        )
    }
}

export default TodoList