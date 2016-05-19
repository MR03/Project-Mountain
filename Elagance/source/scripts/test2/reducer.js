import { combineReducers } from 'redux'
import {ADD_TODO, CHANGE_TODO, addTodo, changeTodo} from './action'

const initialState = [
    {
        sign: 'signin',
    }
];


function todos(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    sign: action.sign,
                }
            ]
        case CHANGE_TODO:
            // 复杂UI切换需要保存状态,有限的用各什么函数来处理一下
            return [
                ...state,
                {
                    sign: action.sign,
                }
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp