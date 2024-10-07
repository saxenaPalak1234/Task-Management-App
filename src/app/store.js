import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from '../feature/Todo/TodoSlice';
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

// Set up persistConfig
const persistConfig = {
    key : "My Todo",
    storage
}

const persistedReducer = persistReducer(persistConfig,TodoSlice);

export const store = configureStore({
    reducer : persistedReducer
});

export const persistor = persistStore(store);



