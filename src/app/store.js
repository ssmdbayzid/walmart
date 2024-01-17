import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './features/cartSlice'
import {apiSlice} from './features/apiSlice'


const  store =  configureStore({
    reducer: {
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;
/*

import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { apiSlice } from "./features/apiSlice";



const store = configureStore({
    reducer: {
        cart: cartReducer,        
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;

*/