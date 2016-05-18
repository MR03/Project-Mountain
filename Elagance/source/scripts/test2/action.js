const ADD_TODO = 'ADD_TODO';
const CHANGE_TODO = 'CHANGE_TODO';

function addTodo(sign) {
    return {
        type: ADD_TODO,
        sign
    }
}

function changeTodo(sign){
    return {
        type: CHANGE_TODO,
        sign
    }
}

export {ADD_TODO, CHANGE_TODO, addTodo, changeTodo}

