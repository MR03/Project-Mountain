import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {ADD_TODO, CHANGE_TODO, addTodo, changeTodo} from './action'
import Todo from './app.todo'
import TodoList from './app.todolist'


class App extends Component {
    render() {
        let { stats ,dispatch } = this.props
        return (
            <div>
                <Todo singChange={change => dispatch(changeTodo(change))} />
                <TodoList stats={stats} />
            </div>
        )
    }
}

function select(state) {
    console.log(state.todos)
    return {
        stats: state.todos
    }
}

export default connect(select)(App)