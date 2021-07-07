import rootReducer from '../reducers'
import {configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    todos: [
        {id: "12345", todo: "Task 2", isCompleted: false},
        {id: "23456", todo: "Task 3", isCompleted: false},
        {id: "45678", todo: "Task 4", isCompleted: false}
    ]
}

const persistConfig = {
key: 'root',
storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState

})

let persistor = persistStore(store)

export {
    store,
    persistor
}