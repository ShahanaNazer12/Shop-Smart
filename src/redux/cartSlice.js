import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push(action.payload)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))


        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer