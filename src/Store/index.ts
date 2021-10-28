import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import {
  persistStore,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import theme from './Theme'
import {loginReducer} from '../Reducer/loginReducer'

const reducers = combineReducers({
  theme,
  loginReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

// const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: reducers,
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
