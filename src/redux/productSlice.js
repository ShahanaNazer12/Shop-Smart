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
            },
             editProduct:(state,action)=>{
                const productIndex = state.products.findIndex((pr)=>pr.id === action.payload.id)
                if(productIndex !== -1){
                    state.products[productIndex]= action.payload
                     localStorage.setItem("products", JSON.stringify(state.products))

                }
               
            },
            deleteProduct:(state,action)=>{
                state.products.splice(action.payload,1)
               localStorage.setItem("products",JSON.stringify(state.products))

            }

        }
    }
)

export const {setProduct,addProduct,editProduct,deleteProduct} = productSlice.actions


export default productSlice.reducer
