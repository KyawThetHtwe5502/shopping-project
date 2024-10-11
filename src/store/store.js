import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService";
import cartReducer from "./slice/cartSlice"

const store = configureStore({
    reducer : {
        [ApiService.reducerPath] : ApiService.reducer,
        cart : cartReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware)
})

export default store;