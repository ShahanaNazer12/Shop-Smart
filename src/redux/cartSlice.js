import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    },
    reducers:{
        addToCart:(state,action)=>{

            // state.cartItems.push(action.payload)

            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if (itemIndex === -1){
                state.cartItems.push({...action.payload , quantity :1})
            }else{
                state.cartItems[itemIndex].quantity++;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))


        },
        removeCartItem:(state,action)=>{
            state.cartItems.splice(action.payload,1)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },

        incrementQuantity:(state,action)=>{
            state.cartItems[action.payload].quantity++
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
         decrementQuantity:(state,action)=>{
            state.cartItems[action.payload].quantity--
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }
    }
})

export const {addToCart,removeCartItem,incrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice.reducer