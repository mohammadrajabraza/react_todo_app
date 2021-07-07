import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {configureStore} from '@reduxjs/toolkit'

const initialState = [
      {id: "12345", todo: "Task 2", isCompleted: false},
      {id: "23456", todo: "Task 3", isCompleted: false},
      {id: "45678", todo: "Task 4", isCompleted: false}
  ]
const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

