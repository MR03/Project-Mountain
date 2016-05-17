/*
 * action
 */


// 也可以写字符串,不过这样复用容易
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';



const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

function addTodo(text) {
    return { type: ADD_TODO, text }
}

function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}



export {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    addTodo,
    completeTodo,
    setVisibilityFilter
    }
