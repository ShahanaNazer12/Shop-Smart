import { configureStore } from "@reduxjs/toolkit"

import cartReducer  from "./cartSlice"
import productReducer from "./productSlice"
import authReducer from "./authSlice"

const store = configureStore( {
    reducer:{
        cartItems: cartReducer,
        products: productReducer,
        auth:authReducer
        
      
          

    }
});

export default store