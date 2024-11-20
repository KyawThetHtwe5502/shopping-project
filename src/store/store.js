import { configureStore } from "@reduxjs/toolkit";
import {ApiService} from "./service/apiService"
import cartReducer from "./slice/cartSlice"

const store = configureStore({
    reducer : {
        [ApiService.reducerPath] : ApiService.reducer,
        cart : cartReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware)
})

export default store;