import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:0,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItem = action.payload

        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer