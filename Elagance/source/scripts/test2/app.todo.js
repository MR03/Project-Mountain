import React, { Component, PropTypes } from 'react'


class Todo extends Component {
    render() {
        return (
            <h1 onClick={(e) => this.handleClick(e)}>登录注册状态切换</h1>
        )
    }
    handleClick() {
        this.props.singChange("signup")
    }
}

export default Todo