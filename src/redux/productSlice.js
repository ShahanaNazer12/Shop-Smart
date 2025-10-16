import { createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice(
    {
        initialState:{
            // products:JSON.parse(localStorage.getItem("products")) || [],
            products: JSON.parse(localStorage.getItem("products") || "[]"),

        },
        name: "productSlice",
        reducers:{
            setProduct:(state,action)=>{
              
                state.products = action.payload;
                localStorage.setItem("products", JSON.stringify(state.products))     

            },
            addProduct:(state,action)=>{
                state.products.push(action.payload)
                localStorage.setItem("products", JSON.stringify(state.products))
            }

        }
    }
)

export const {setProduct,addProduct} = productSlice.actions


export default productSlice.reducer
