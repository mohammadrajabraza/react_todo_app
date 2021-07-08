import {textSlice, todoSlice, filterSlice} from '../reducers'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    todos: [
        {id: "12345", todo: "Task 2", isCompleted: false},
        {id: "23456", todo: "Task 3", isCompleted: false},
        {id: "45678", todo: "Task 4", isCompleted: false}
    ],
    text: 'test',
    filters: {
        status : "all"
    }
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['text']
}

const alwaysReturnHelloMiddleware = storeAPI => next => action => {
    next(action);
    // Ignore the original result, return something else
}

const rootReducer = combineReducers({
    todos: todoSlice,
    text: textSlice,
    filters: filterSlice
})

// const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [alwaysReturnHelloMiddleware],
  preloadedState: initialState

})

let persistor = persistStore(store)

export {
    store,
    persistor
}