import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './action'
import AddTodo from './app.addtodo'
import TodoList from './app.todolist'
import Footer from './app.footer'

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo onAddClick={ text => text } />
                <TodoList todos={visibleTodos} />
                <Footer />
            </div>
        )
    }
}


// 验证
//App.propTypes = {
//    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//        text: PropTypes.string.isRequired,
//        completed: PropTypes.bool.isRequired
//    }).isRequired).isRequired,
//    visibilityFilter: PropTypes.oneOf([
//        'SHOW_ALL',
//        'SHOW_COMPLETED',
//        'SHOW_ACTIVE'
//    ]).isRequired
//}

export default App