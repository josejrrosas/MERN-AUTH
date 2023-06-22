import {configureStore} from '@reduxjs/toolkit'
//in order to use any slice you must bring it into the store 
import authReducer from './slices/authSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware(),
    devtools:true
})

export default store;