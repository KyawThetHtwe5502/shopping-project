import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartDrawer : false,
    products : [],
    carts : [],
    cartBtnInfo : {}
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        toggleDrawer : (state) => {
            state.cartDrawer = !state.cartDrawer;
        },
        manageProducts : (state,action) => {
            state.products = action.payload;
        },
        updateQuantity : (state,action) => {
            const {id,quantity} = action.payload;
            const existingCartIndex = state.carts.findIndex((item) => item.id === id);

            if (existingCartIndex >= 0) {
              // Update the quantity of the existing item
              state.carts[existingCartIndex].quantity = quantity;
            }
        },
        addCart : (state,action) => {
            state.carts = [...state.carts,action.payload]
        },
        deleteCart: (state,action) => {
            const id = action.payload;
            

            state.carts = state.carts.filter((item) => item.id != id  )
        },
        addedCart: (state,action) => {
            state.carts = state.carts.map((cart) => ({...cart,quantity:action.payload}))
        },
        setCartBtnInfo : (state,action) => {
            state.cartBtnInfo = action.payload;
        }
    }
});

export const { toggleDrawer, updateQuantity, manageProducts, addCart, deleteCart, addedCart, setCartBtnInfo } = cartSlice.actions;
export default cartSlice.reducer;