// 切换登录和注册界面

import React from 'react'
import { render } from 'react-dom'
import App from './app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducer'
import {ADD_TODO, addTodo} from './action'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('spa')
)






